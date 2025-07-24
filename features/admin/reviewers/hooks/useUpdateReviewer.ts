import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Reviewer } from "@/features/admin/lib/types";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useUpdateReviewer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async ({ objId, ...rest }: Reviewer) => {
      const toastId = toast.loading("Updating reviewer...");
      await queryClient.cancelQueries({ queryKey: ["reviewers"] });
      const previousData = queryClient.getQueryData<Reviewer[]>(["reviewers"]);

      queryClient.setQueryData<Reviewer[]>(["reviewers"], (old) => {
        return old?.map((reviewer) =>
          reviewer.objId === objId ? { ...reviewer, ...rest } : reviewer
        );
      });

      return { toastId, previousData };
    },
    mutationFn: async ({ objId, ...rest }: Reviewer) => {
      try {
        const response = await api.put(
          `/api/reviewers/${encodeURIComponent(objId)}`,
          rest
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to update reviewer"
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success("Reviewer updated successfully", {
        id: context?.toastId,
      });
    },

    onError: (error, _, context) => {
      toast.error(error.message || "Failed to update reviewer", {
        id: context?.toastId,
      });

      queryClient.setQueryData<Reviewer[]>(
        ["reviewers"],
        context?.previousData
      );
    },
  });
};
