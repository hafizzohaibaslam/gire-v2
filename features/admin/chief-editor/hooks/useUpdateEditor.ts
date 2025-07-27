import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { Editor } from "@/features/admin/lib/types";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useUpdateEditor = () => {
  return useMutation({
    onMutate: () => {
      const toastId = toast.loading("Updating editor...");
      return { toastId };
    },
    mutationFn: async ({ objId, ...rest }: Editor) => {
      try {
        const response = await api.put(
          `/api/editors/${encodeURIComponent(objId)}`,
          rest
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to update editor"
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success("Editor updated successfully", {
        id: context?.toastId,
      });
    },

    onError: (error, _, context) => {
      toast.error(error.message || "Failed to update editor", {
        id: context?.toastId,
      });
    },
  });
};
