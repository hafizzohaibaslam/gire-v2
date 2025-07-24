import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Issue } from "@/features/admin/lib/types";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useCreateIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async (data: Omit<Issue, "objId">) => {
      const toastId = toast.loading("Creating issue...");
      await queryClient.cancelQueries({ queryKey: ["issues"] });

      // Save previous data for rollback
      const previousData = queryClient.getQueryData<Issue[]>(["issues"]);

      const optimisticIssue: Issue = {
        ...data,
        objId: `temp-id`,
      };

      queryClient.setQueryData<Issue[]>(["issues"], (old) => {
        return [...(old || []), optimisticIssue];
      });
      return { toastId, previousData };
    },
    mutationFn: async (data: Omit<Issue, "objId">) => {
      try {
        const response = await api.post<Issue>("/api/issues", data);
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to create issue"
        );
      }
    },
    onSuccess: (data, _, context) => {
      toast.success("Issue created successfully", {
        id: context?.toastId,
      });

      // Update the cache with the actual objId after the successful mutation
      queryClient.setQueryData<Issue[]>(["issues"], (old) => {
        return old?.map((issue) => (issue.objId === `temp-id` ? data : issue));
      });
    },

    onError: (error, _, context) => {
      // Rollback cache if there was an error
      toast.error(error.message || "Failed to create issue", {
        id: context?.toastId,
      });

      queryClient.setQueryData<Issue[]>(["issues"], () => {
        return context?.previousData;
      });
    },
  });
};
