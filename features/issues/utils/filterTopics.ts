import { Issue } from "@/features/admin/lib/types";
import { areaValues } from "@/lib/areaValues";
import { splitKeywords } from "@/lib/splitKeywords";

export const filterTopics = (
  topics: Issue[],
  appliedSearchTerm: string,
  appliedYear: string,
  appliedArea: string,
  appliedKeywords: string
) => {
  let filteredData = [...topics];

  // Search term filter - search in title and match with applied search term
  if (appliedSearchTerm && appliedSearchTerm.trim() !== "") {
    filteredData = filteredData.filter((topic) =>
      topic.title.toLowerCase().includes(appliedSearchTerm.toLowerCase().trim())
    );
  }

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
  if (appliedKeywords && appliedKeywords.trim() !== "") {
    const searchTerm = appliedKeywords.toLowerCase().trim();
    filteredData = filteredData.filter((topic) => {
      const keywords = splitKeywords(topic.keyword);
      const keywordMatch = keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm)
      );

      return keywordMatch;
    });
  }

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
