"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { useAuthContext } from "@/lib/AuthProvider";
import { AdvisoryBoard } from "../../lib/types";

export const useGetAdvisoryBoards = () => {
  const { accessToken } = useAuthContext();

  return useQuery({
    queryKey: ["advisories"],
    queryFn: async () => {
      const response = await api.get<{ data: AdvisoryBoard[] }>(
        `/api/advisories?size=100`
      );
      return response.data.data;
    },
    enabled: !!accessToken,
  });
};
