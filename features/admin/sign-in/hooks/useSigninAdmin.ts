"use client";
import api from "@/lib/api";
import { useAuthContext } from "@/lib/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setAuthCookies } from "@/lib/utils";

export const useSigninAdmin = () => {
  const router = useRouter();
  const { setIsAdmin, setAccessToken, setRefreshToken } = useAuthContext();

  return useMutation({
    onMutate: () => {
      const toastId = toast.loading("Signing in...");
      return { toastId };
    },
    mutationFn: async (password: string) => {
      try {
        const response = await api.put<{
          accessToken: string;
          refreshToken: string;
        }>("/api/tokens", { password });

        return response.data;
      } catch (error) {
        throw new Error(
          error instanceof Error ? error.message : "Failed to sign in"
        );
      }
    },
    onSuccess: (data, _, context) => {
      toast.success("Signed in successfully", {
        id: context?.toastId,
      });

      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      setIsAdmin(true);

      // Set cookies using utility function
      setAuthCookies(data.accessToken, data.refreshToken, true);
      router.push("/admin/chief-editor");
    },
    onError: (_, __, context) => {
      toast.error("Failed to sign in", {
        id: context?.toastId,
      });
    },
  });
};
