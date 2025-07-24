"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { useAuthContext } from "@/lib/AuthProvider";
import { AdvisoryBoard } from "../../lib/types";

export const useGetAdvisoryBoards = ({
  size = 6,
  offsetObjId = "",
}: {
  size?: number;
  offsetObjId?: string;
}) => {
  const { accessToken } = useAuthContext();

  return useQuery({
    queryKey: ["advisories", size, offsetObjId],
    queryFn: async () => {
      const response = await api.get<{ data: AdvisoryBoard[] }>(
        `/api/advisories?size=${size}&offsetObjId=${encodeURIComponent(
          offsetObjId
        )}`
      );
      return response.data.data;
    },
    enabled: !!accessToken,
  });
};
