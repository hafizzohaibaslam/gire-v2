import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Issue } from "@/features/admin/lib/types";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useUpdateIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async ({ objId, ...rest }: Issue) => {
      const toastId = toast.loading("Updating issue...");
      await queryClient.cancelQueries({ queryKey: ["issues"] });
      const previousData = queryClient.getQueryData<Issue[]>(["issues"]);

      queryClient.setQueryData<Issue[]>(["issues"], (old) => {
        return old?.map((issue) =>
          issue.objId === objId ? { ...issue, ...rest } : issue
        );
      });

      return { toastId, previousData };
    },
    mutationFn: async ({ objId, ...rest }: Issue) => {
      try {
        const response = await api.put(
          `/api/issues/${encodeURIComponent(objId)}`,
          rest
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to update issue"
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success("Issue updated successfully", {
        id: context?.toastId,
      });
    },

    onError: (error, _, context) => {
      toast.error(error.message || "Failed to update issue", {
        id: context?.toastId,
      });

      queryClient.setQueryData<Issue[]>(["issues"], context?.previousData);
    },
  });
};
