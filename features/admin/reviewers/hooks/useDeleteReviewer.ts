import api from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Reviewer } from "../../lib/types";
import { AxiosError } from "axios";

export const useDeleteReviewer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async (objId: string) => {
      const toastId = toast.loading("Deleting reviewer...");
      await queryClient.cancelQueries({ queryKey: ["reviewers"] });

      // Save previous data for rollback
      const previousData = queryClient.getQueryData<Reviewer[]>(["reviewers"]);

      queryClient.setQueryData<Reviewer[]>(["reviewers"], (old) => {
        return old?.filter((reviewer) => reviewer.objId !== objId);
      });

      return { toastId, previousData };
    },
    mutationFn: async (objId: string) => {
      try {
        const response = await api.delete(
          `/reviewers/${encodeURIComponent(objId)}`
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to delete reviewer"
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success("Reviewer deleted successfully", {
        id: context?.toastId,
      });
    },
    onError: (error, __, context) => {
      toast.error(error.message || "Failed to delete reviewer", {
        id: context?.toastId,
      });

      queryClient.setQueryData<Reviewer[]>(["reviewers"], () => {
        return context?.previousData;
      });
    },
  });
};
