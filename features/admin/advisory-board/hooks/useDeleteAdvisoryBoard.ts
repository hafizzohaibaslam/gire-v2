import api from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AdvisoryBoard } from "../../lib/types";
import { AxiosError } from "axios";

export const useDeleteAdvisoryBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async (objId: string) => {
      const toastId = toast.loading("Deleting advisory board...");
      await queryClient.cancelQueries({ queryKey: ["advisories"] });

      // Save previous data for rollback
      const previousData = queryClient.getQueryData<AdvisoryBoard[]>([
        "advisories",
      ]);

      queryClient.setQueryData<AdvisoryBoard[]>(["advisories"], (old) => {
        return old?.filter((board) => board.objId !== objId);
      });

      return { toastId, previousData };
    },
    mutationFn: async (objId: string) => {
      try {
        const response = await api.delete(
          `/advisories/${encodeURIComponent(objId)}`
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to delete advisory board"
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success("Advisory board deleted successfully", {
        id: context?.toastId,
      });
    },
    onError: (error, __, context) => {
      toast.error(error.message || "Failed to delete advisory board", {
        id: context?.toastId,
      });

      queryClient.setQueryData<AdvisoryBoard[]>(["advisories"], () => {
        return context?.previousData;
      });
    },
  });
};
