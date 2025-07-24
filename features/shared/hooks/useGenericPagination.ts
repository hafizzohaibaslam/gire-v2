"use client";
import { useEffect, useState } from "react";
import { useGenericGet } from "./useGenericGet";

export const useGenericPagination = <T>({ url }: { url: string }) => {
  const [allData, setAllData] = useState<T[]>([]);
  const [offsetObjId, setOffsetObjId] = useState<string>("");
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(true);
  const [isMoreDataAvailable, setIsMoreDataAvailable] = useState<boolean>(true);
  const SIZE = 6;

  const handleLoadMoreBtnClick = (lastItemObjId: string) => {
    setOffsetObjId(lastItemObjId);
    setIsLoadingMore(true);
  };

  const { data, isLoading, isError } = useGenericGet<T>({
    url,
    size: SIZE,
    offsetObjId,
  });

  useEffect(() => {
    if (data && data?.length > 0) {
      setAllData((prev) => [...prev, ...data]);

      // If we received fewer items than requested, there's no more data
      if (data.length < SIZE) {
        setIsMoreDataAvailable(false);
      }
    } else if (data && data.length === 0) {
      // If we received an empty array, there's no more data
      setIsMoreDataAvailable(false);
    }
    setIsLoadingMore(false);
  }, [data]);

  return {
    allData,
    offsetObjId,
    isMoreDataAvailable,
    isLoading,
    isError,
    isLoadingMore,
    handleLoadMoreBtnClick,
  };
};
