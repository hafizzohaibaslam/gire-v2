"use client";
import { useEffect, useState } from "react";
import { useGenericGet } from "./useGenericGet";

export const useClientPagination = <T extends { objId: string }>({
  url,
}: {
  url: string;
}) => {
  const [paginatedItems, setPaginatedItems] = useState<T[]>([]);
  const SIZE = 6;

  const {
    data: allData,
    isLoading,
    isError,
  } = useGenericGet<T>({
    url,
  });

  // Reset pagination state when allData changes
  useEffect(() => {
    if (allData) {
      setPaginatedItems(allData.slice(0, SIZE));
    }
  }, [allData]);

  const hasMoreItems = allData ? paginatedItems.length < allData.length : false;

  const handleLoadMoreClick = () => {
    if (!allData) return;

    const startIndex = paginatedItems.length;
    const endIndex = startIndex + SIZE;
    const newItems = allData.slice(startIndex, endIndex);

    if (newItems.length > 0) {
      setPaginatedItems([...paginatedItems, ...newItems]);
    }
  };

  return {
    paginatedItems,
    hasMoreItems,
    handleLoadMoreClick,
    isLoading,
    isError,
  };
};
