"use client";
import { useEffect, useState } from "react";
import { useGenericGet } from "./useGenericGet";

export const useClientPagination = <T extends { objId: string }>({
  url,
}: {
  url: string;
}) => {
  const [paginatedItems, setPaginatedItems] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const SIZE = 6;

  const {
    data: allData,
    isLoading,
    isError,
  } = useGenericGet<T>({
    url,
  });

  const hasMoreItems = allData ? paginatedItems.length < allData.length : false;
  const handleLoadMoreClick = () => {
    const startIndex = currentPage * SIZE;
    const endIndex = startIndex + SIZE;
    const newItems = allData?.slice(startIndex, endIndex) || [];
    setPaginatedItems([...paginatedItems, ...newItems]);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (allData) {
      setPaginatedItems(allData.slice(0, SIZE));
    }
  }, [allData]);

  return {
    paginatedItems,
    hasMoreItems,
    handleLoadMoreClick,
    isLoading,
    isError,
  };
};
