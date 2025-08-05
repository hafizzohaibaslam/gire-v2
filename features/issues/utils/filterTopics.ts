import { Issue } from "@/features/admin/lib/types";
import { areaValues } from "@/lib/areaValues";
// import { splitKeywords } from "@/lib/splitKeywords";

export const filterTopics = (
  topics: Issue[],
  appliedYear: string,
  appliedArea: string
) => {
  let filteredData = [...topics];

  // Year filter - extract year from date string and match with applied year
  if (appliedYear && appliedYear.trim() !== "") {
    filteredData = filteredData.filter((topic) => {
      if (!topic.date) return false;
      try {
        const date = new Date(topic.date);
        const year = date.getFullYear().toString();
        return year === appliedYear.trim();
      } catch {
        return topic.date.includes(appliedYear.trim());
      }
    });
  }

  // Keywords filter - search in area and keywords
  // if (appliedArea && appliedArea !== "All") {
  //   const searchTerm = appliedArea.toLowerCase().trim();
  //   filteredData = filteredData.filter((topic) => {
  //     const keywords = splitKeywords(topic.keyword);
  //     const keywordMatch = keywords.some((keyword) =>
  //       keyword.toLowerCase().includes(searchTerm)
  //     );

  //     return keywordMatch;
  //   });
  // }

  // Area filter - exact match with area values
  if (appliedArea && appliedArea !== "All") {
    filteredData = filteredData.filter((topic) => {
      return (
        topic.area === appliedArea ||
        areaValues[topic.area as keyof typeof areaValues] === appliedArea
      );
    });
  }

  return filteredData;
};
