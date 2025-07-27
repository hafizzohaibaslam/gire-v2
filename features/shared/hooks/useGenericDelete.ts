import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useGenericDelete = ({
  url,
  msgKeyValue,
  handleDeleteFromAllData,
}: {
  url: string;
  msgKeyValue: string;
  handleDeleteFromAllData: (objId: string) => void;
}) => {
  return useMutation({
    onMutate: () => {
      const toastId = toast.loading(`Deleting ${msgKeyValue}...`);
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
    onSuccess: (_, objId, context) => {
      toast.success(`${msgKeyValue} deleted successfully`, {
        id: context?.toastId,
      });
      handleDeleteFromAllData(objId);
    },
    onError: (error, __, context) => {
      toast.error(error.message || `Failed to delete ${msgKeyValue}`, {
        id: context?.toastId,
      });
    },
  });
};
