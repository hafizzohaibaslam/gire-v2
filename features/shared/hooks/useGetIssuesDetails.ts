import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Issue } from "@/features/admin/lib/types";

export const useGetIssuesDetails = (objId: string) => {
  return useQuery({
    queryKey: ["issues", objId],
    queryFn: async () => {
      try {
        const response = await axios.get<Issue>(
          `/api/issues/${encodeURIComponent(objId)}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching issue details:", error);
        throw error;
      }
    },
  });
};
