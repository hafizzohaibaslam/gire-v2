"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { useAuthContext } from "@/lib/AuthProvider";
import { Reviewer } from "../../lib/types";

export const useGetReviewers = ({
  size = 6,
  offsetObjId = "",
}: {
  size?: number;
  offsetObjId?: string;
}) => {
  const { accessToken } = useAuthContext();

  return useQuery({
    queryKey: ["reviewers", size, offsetObjId],
    queryFn: async () => {
      const response = await api.get<{ data: Reviewer[] }>(
        `/api/reviewers?size=${size}&offsetObjId=${encodeURIComponent(
          offsetObjId
        )}`
      );
      return response.data.data;
    },
    enabled: !!accessToken,
  });
};
