import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useGenericUpdate = <T extends { objId: string }>({
  url,
  msgKeyValue,
  handleUpdateInAllData,
}: {
  url: string;
  msgKeyValue: string;
  handleUpdateInAllData: (data: T) => void;
}) => {
  return useMutation({
    onMutate: () => {
      const toastId = toast.loading(`Updating ${msgKeyValue}...`);
      return { toastId };
    },
    mutationFn: async ({ objId, ...rest }: T) => {
      try {
        const response = await api.put(
          `${url}/${encodeURIComponent(objId)}`,
          rest
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : `Failed to update ${msgKeyValue}`
        );
      }
    },
    onSuccess: (_, variables, context) => {
      toast.success(`${msgKeyValue} updated successfully`, {
        id: context?.toastId,
      });
      handleUpdateInAllData(variables);
    },

    onError: (error, _, context) => {
      toast.error(error.message || `Failed to update ${msgKeyValue}`, {
        id: context?.toastId,
      });
    },
  });
};
