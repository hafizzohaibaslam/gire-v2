"use client";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "@/lib/AuthProvider";

type useGenericGetProps = {
  url: string;
};

export const useGenericGet = <T>({ url }: useGenericGetProps) => {
  const { accessToken } = useAuthContext();
  const queryKey = url.split("/").pop();

  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await api.get<{ data: T[] }>(`${url}?size=1000`);
      return response.data.data;
    },
    enabled: !!accessToken,
  });
};
