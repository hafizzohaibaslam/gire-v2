export const splitKeywords = (keywordString: string): string[] => {
  if (!keywordString || typeof keywordString !== "string") {
    return [];
  }

  return keywordString
    .split(/[,;|\-\s]+/)
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword.length > 0);
};
