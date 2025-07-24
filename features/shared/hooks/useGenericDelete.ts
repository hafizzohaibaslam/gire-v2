import api from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { AxiosError } from "axios";

export const useGenericDelete = ({
  url,
  msgKeyValue,
}: {
  url: string;
  msgKeyValue: string;
}) => {
  const queryClient = useQueryClient();
  const queryKey = url.split("/").pop();

  return useMutation({
    onMutate: async () => {
      const toastId = toast.loading(`Deleting ${msgKeyValue}...`);
      await queryClient.cancelQueries({ queryKey: [queryKey] });
      return { toastId };
    },
    mutationFn: async (objId: string) => {
      try {
        const response = await api.delete(
          `${url}/${encodeURIComponent(objId)}`
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : `Failed to delete ${msgKeyValue}`
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success(`${msgKeyValue} deleted successfully`, {
        id: context?.toastId,
      });
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (error, __, context) => {
      toast.error(error.message || `Failed to delete ${msgKeyValue}`, {
        id: context?.toastId,
      });
    },
  });
};
