"use client";
import api from "@/lib/api";
import { useAuthContext } from "@/lib/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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

      // Set cookies for middleware access
      document.cookie = `accessToken=${data.accessToken}; path=/; max-age=${
        60 * 60 * 24 * 7
      }`; // 7 days
      document.cookie = `isAdmin=true; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days

      router.push("/admin/chief-editor");
    },
    onError: (_, __, context) => {
      toast.error("Failed to sign in", {
        id: context?.toastId,
      });
    },
  });
};
