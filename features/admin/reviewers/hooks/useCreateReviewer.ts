import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Reviewer } from "@/features/admin/lib/types";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useCreateReviewer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async (data: Omit<Reviewer, "objId">) => {
      const toastId = toast.loading("Creating reviewer...");
      await queryClient.cancelQueries({ queryKey: ["reviewers"] });

      // Save previous data for rollback
      const previousData = queryClient.getQueryData<Reviewer[]>(["reviewers"]);

      const optimisticReviewer: Reviewer = {
        ...data,
        objId: `temp-id`,
      };

      queryClient.setQueryData<Reviewer[]>(["reviewers"], (old) => {
        return [...(old || []), optimisticReviewer];
      });
      return { toastId, previousData };
    },
    mutationFn: async (data: Omit<Reviewer, "objId">) => {
      try {
        const response = await api.post<Reviewer>("/api/reviewers", data);
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to create reviewer"
        );
      }
    },
    onSuccess: (data, _, context) => {
      toast.success("Reviewer created successfully", {
        id: context?.toastId,
      });

      // Update the cache with the actual objId after the successful mutation
      queryClient.setQueryData<Reviewer[]>(["reviewers"], (old) => {
        return old?.map((reviewer) =>
          reviewer.objId === `temp-id` ? data : reviewer
        );
      });
    },

    onError: (error, _, context) => {
      // Rollback cache if there was an error
      toast.error(error.message || "Failed to create reviewer", {
        id: context?.toastId,
      });

      queryClient.setQueryData<Reviewer[]>(["reviewers"], () => {
        return context?.previousData;
      });
    },
  });
};
