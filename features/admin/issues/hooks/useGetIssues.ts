"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { useAuthContext } from "@/lib/AuthProvider";
import { Issue } from "../../lib/types";

export const useGetIssues = ({
  size = 6,
  offsetObjId = "",
}: {
  size?: number;
  offsetObjId?: string;
}) => {
  const { accessToken } = useAuthContext();

  return useQuery({
    queryKey: ["issues", size, offsetObjId],
    queryFn: async () => {
      const response = await api.get<{ data: Issue[] }>(
        `/api/issues?size=${size}&offsetObjId=${encodeURIComponent(
          offsetObjId
        )}`
      );
      return response.data.data;
    },
    enabled: !!accessToken,
  });
};
