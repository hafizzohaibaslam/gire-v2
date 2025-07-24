"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { useAuthContext } from "@/lib/AuthProvider";
import { Editor } from "../../lib/types";

export const useGetEditors = () => {
  const { accessToken } = useAuthContext();

  return useQuery({
    queryKey: ["editors"],
    queryFn: async () => {
      const response = await api.get<{ data: Editor[] }>(
        `/api/editors?size=100`
      );
      return response.data.data;
    },
    enabled: !!accessToken,
  });
};
