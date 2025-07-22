import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { AdvisoryBoard } from "@/features/admin/lib/types";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useCreateAdvisoryBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async (data: Omit<AdvisoryBoard, "objId">) => {
      const toastId = toast.loading("Creating advisory board...");
      await queryClient.cancelQueries({ queryKey: ["advisories"] });

      // Save previous data for rollback
      const previousData = queryClient.getQueryData<AdvisoryBoard[]>([
        "advisories",
      ]);

      const optimisticBoard: AdvisoryBoard = {
        ...data,
        objId: `temp-id`,
      };

      queryClient.setQueryData<AdvisoryBoard[]>(["advisories"], (old) => {
        return [...(old || []), optimisticBoard];
      });
      return { toastId, previousData };
    },
    mutationFn: async (data: Omit<AdvisoryBoard, "objId">) => {
      try {
        const response = await api.post<AdvisoryBoard>("/api/advisories", data);
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error.response?.data.detail
            : "Failed to create advisory board"
        );
      }
    },
    onSuccess: (data, _, context) => {
      toast.success("Advisory board created successfully", {
        id: context?.toastId,
      });

      // Update the cache with the actual objId after the successful mutation
      queryClient.setQueryData<AdvisoryBoard[]>(["advisories"], (old) => {
        return old?.map((board) => (board.objId === `temp-id` ? data : board));
      });
    },

    onError: (error, _, context) => {
      // Rollback cache if there was an error
      toast.error(
        error instanceof AxiosError
          ? error.response?.data.detail
          : "Failed to create advisory board",
        {
          id: context?.toastId,
        }
      );

      queryClient.setQueryData<AdvisoryBoard[]>(["advisories"], () => {
        return context?.previousData;
      });
    },
  });
};
