import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const useUploadToS3 = () => {
  return useMutation({
    onMutate: () => {
      const toastId = toast.loading("Uploading image to AWS S3...");
      return { toastId };
    },
    mutationFn: async ({ file, putUrl }: { file: File; putUrl: string }) => {
      try {
        const response = await axios.put(
          "https://corsproxy.io/?url=" + putUrl,
          file,
          {
            headers: {
              "Content-Type": file.type,
            },
          }
        );
        console.log("Response from useUploadToS3", response);
        return response.data;
      } catch (error) {
        console.log("Error in useUploadToS3", error);
        throw new Error(
          error instanceof AxiosError
            ? error?.response?.data?.detail
            : "Failed to upload image to AWS S3"
        );
      }
    },
    onSuccess: (_, __, context) => {
      toast.success("Image uploaded to AWS S3 successfully", {
        id: context?.toastId,
      });
    },
    onError: (error, _, context) => {
      console.log("Error in useUploadToS3", error);
      toast.error(error.message || "Failed to upload image to AWS S3", {
        id: context?.toastId,
      });
    },
  });
};
