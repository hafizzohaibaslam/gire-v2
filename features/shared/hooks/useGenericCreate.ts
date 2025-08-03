import api from "@/lib/api";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useGenericCreate = <T>({
  url,
  msgKeyValue,
}: {
  url: string;
  msgKeyValue: string;
}) => {
  const queryClient = useQueryClient();
  const queryKey = url.split("/").pop();

  return useMutation({
    onMutate: () => {
      const toastId = toast.loading(`Creating ${msgKeyValue}...`);
      return { toastId };
    },
    mutationFn: async (data: Omit<T, "objId">) => {
      try {
        const response = await api.post<T>(url, data);
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : `Failed to create ${msgKeyValue}`
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success(`${msgKeyValue} created successfully`, {
        id: context?.toastId,
      });

      queryClient.invalidateQueries({
        queryKey: [queryKey],
        exact: false,
      });
    },

    onError: (error, _, context) => {
      toast.error(error.message || `Failed to create ${msgKeyValue}`, {
        id: context?.toastId,
      });
    },
  });
};
