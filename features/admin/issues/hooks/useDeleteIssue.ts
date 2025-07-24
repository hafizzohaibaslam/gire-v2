import api from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Issue } from "../../lib/types";
import { AxiosError } from "axios";

export const useDeleteIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async (objId: string) => {
      const toastId = toast.loading("Deleting issue...");
      await queryClient.cancelQueries({ queryKey: ["issues"] });

      // Save previous data for rollback
      const previousData = queryClient.getQueryData<Issue[]>(["issues"]);

      queryClient.setQueryData<Issue[]>(["issues"], (old) => {
        return old?.filter((issue) => issue.objId !== objId);
      });

      return { toastId, previousData };
    },
    mutationFn: async (objId: string) => {
      try {
        const response = await api.delete(
          `/issues/${encodeURIComponent(objId)}`
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to delete issue"
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success("Issue deleted successfully", {
        id: context?.toastId,
      });
    },
    onError: (error, __, context) => {
      toast.error(error.message || "Failed to delete issue", {
        id: context?.toastId,
      });

      queryClient.setQueryData<Issue[]>(["issues"], () => {
        return context?.previousData;
      });
    },
  });
};
