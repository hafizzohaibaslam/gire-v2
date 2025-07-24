import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Editor } from "@/features/admin/lib/types";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useUpdateEditor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async ({ objId, ...rest }: Editor) => {
      const toastId = toast.loading("Updating editor...");
      await queryClient.cancelQueries({ queryKey: ["editors"] });
      const previousData = queryClient.getQueryData<Editor[]>(["editors"]);

      queryClient.setQueryData<Editor[]>(["editors"], (old) => {
        return old?.map((editor) =>
          editor.objId === objId ? { ...editor, ...rest } : editor
        );
      });

      return { toastId, previousData };
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
      // queryClient.invalidateQueries({ queryKey: ["editors"] });
    },

    onError: (error, _, context) => {
      toast.error(error.message || "Failed to update editor", {
        id: context?.toastId,
      });

      queryClient.setQueryData<Editor[]>(["editors"], () => {
        return context?.previousData;
      });
    },
  });
};
