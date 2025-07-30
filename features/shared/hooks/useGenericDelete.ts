import api from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export const useGenericDelete = ({
  url,
  msgKeyValue,
  handleDeleteFromAllData,
  refreshServerData,
}: {
  url: string;
  msgKeyValue: string;
  handleDeleteFromAllData: (objId: string) => void;
  refreshServerData?: () => void;
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const queryKey = url.split("/").pop();

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

      // Clear all cached data for this endpoint
      queryClient.removeQueries({
        queryKey: [queryKey],
        exact: false,
      });

      // If refreshServerData is provided, use it to force a server refetch
      if (refreshServerData) {
        refreshServerData();
      } else {
        // Fallback to router refresh
        router.refresh();
      }
    },
    onError: (error, __, context) => {
      toast.error(error.message || `Failed to delete ${msgKeyValue}`, {
        id: context?.toastId,
      });
    },
  });
};
