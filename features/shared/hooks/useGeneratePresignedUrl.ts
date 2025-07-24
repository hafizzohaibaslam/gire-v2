import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useGeneratePresignedUrl = () => {
  return useMutation({
    onMutate: () => {
      const toastId = toast.loading("Generating presigned url...");
      return { toastId };
    },
    mutationFn: async ({
      contentType,
      key,
    }: {
      contentType: string;
      key: string;
    }) => {
      try {
        const response = await api.put<{ getUrl: string; putUrl: string }>(
          "/api/media",
          {
            contentType,
            key,
          }
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to generate presigned url"
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success("Presigned url generated successfully", {
        id: context?.toastId,
      });
    },
    onError: (error, _, context) => {
      console.log("Error in useGeneratePresignedUrl", error);
      toast.error(error.message || "Failed to generate presigned url", {
        id: context?.toastId,
      });
    },
  });
};
