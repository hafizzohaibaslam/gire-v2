"use client";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "@/lib/AuthProvider";

type useGenericGetProps = {
  url: string;
  size?: number;
  offsetObjId?: string;
};

export const useGenericGet = <T>({
  url,
  size = 6,
  offsetObjId = "",
}: useGenericGetProps) => {
  const { accessToken } = useAuthContext();
  const queryKey = url.split("/").pop();

  return useQuery({
    queryKey: [queryKey, size, offsetObjId],
    queryFn: async () => {
      const response = await api.get<{ data: T[] }>(
        `${url}?size=${size}&offsetObjId=${encodeURIComponent(offsetObjId)}`
      );
      return response.data.data;
    },

    enabled: !!accessToken,
    refetchOnWindowFocus: false,
    staleTime: 0, // Always consider data stale to force refetch
  });
};
