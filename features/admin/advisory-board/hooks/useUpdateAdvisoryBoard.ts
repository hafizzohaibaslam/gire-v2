import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { AdvisoryBoard } from "@/features/admin/lib/types";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useUpdateAdvisoryBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async ({ objId, ...rest }: AdvisoryBoard) => {
      const toastId = toast.loading("Updating advisory board...");
      await queryClient.cancelQueries({ queryKey: ["advisories"] });
      const previousData = queryClient.getQueryData<AdvisoryBoard[]>([
        "advisories",
      ]);

      queryClient.setQueryData<AdvisoryBoard[]>(["advisories"], (old) => {
        return old?.map((advisory) =>
          advisory.objId === objId ? { ...advisory, ...rest } : advisory
        );
      });

      return { toastId, previousData };
    },
    mutationFn: async ({ objId, ...rest }: AdvisoryBoard) => {
      try {
        const response = await api.put(
          `/api/advisories/${encodeURIComponent(objId)}`,
          rest
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to update advisory board"
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success("Advisory board updated successfully", {
        id: context?.toastId,
      });
      queryClient.invalidateQueries({ queryKey: ["advisories"] });
    },

    onError: (error, _, context) => {
      toast.error(error.message || "Failed to update advisory board", {
        id: context?.toastId,
      });

      queryClient.setQueryData<AdvisoryBoard[]>(
        ["advisories"],
        context?.previousData
      );
    },
  });
};
