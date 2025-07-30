"use client";
import { useEffect, useState, useMemo } from "react";
import { useGenericGet } from "./useGenericGet";

export const useGenericPagination = <T extends { objId: string }>({
  url,
}: {
  url: string;
}) => {
  const [allData, setAllData] = useState<T[]>([]);
  const [offsetObjId, setOffsetObjId] = useState<string>("");
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(true);
  const [isMoreDataAvailable, setIsMoreDataAvailable] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [shouldRefreshServerData, setShouldRefreshServerData] =
    useState<boolean>(false);
  const [hasNoMoreServerData, setHasNoMoreServerData] =
    useState<boolean>(false);
  const [isRefetchingAfterDelete, setIsRefetchingAfterDelete] =
    useState<boolean>(false);
  const SIZE = 6;

  // Calculate paginated data for UI display
  const paginatedData = useMemo(() => {
    const startIndex = 0;
    const endIndex = currentPage * SIZE;
    return allData.slice(startIndex, endIndex);
  }, [allData, currentPage, SIZE]);

  // Check if there are more items available (both from server and locally)
  const hasMoreData = useMemo(() => {
    const totalItems = allData.length;
    const displayedItems = currentPage * SIZE;
    const hasMoreLocalData = totalItems > displayedItems;
    return hasMoreLocalData || isMoreDataAvailable;
  }, [allData.length, currentPage, SIZE, isMoreDataAvailable]);

  const handleLoadMoreBtnClick = (lastItemObjId: string) => {
    // If we have more local data, just increase the page
    if (allData.length > currentPage * SIZE) {
      setCurrentPage((prev) => {
        return prev + 1;
      });
      setIsLoadingMore(false); // Reset loading state for local pagination
    } else {
      // Otherwise, fetch from server
      setOffsetObjId(lastItemObjId);
      setIsLoadingMore(true);

      // Force a small delay to ensure state updates
      setTimeout(() => {}, 100);

      // Add a timeout to reset isLoadingMore if it gets stuck
      setTimeout(() => {
        setIsLoadingMore(false);
      }, 10000); // 10 second timeout
    }
  };

  const handleAddToAllData = (data: T) => {
    setAllData((prev) => {
      const newData = [...prev, data];
      // Update isMoreDataAvailable if we have more items than currently displayed
      const totalItemsAfterAdd = newData.length;
      const displayedItems = currentPage * SIZE;
      if (totalItemsAfterAdd > displayedItems) {
        setIsMoreDataAvailable(true);
      }
      return newData;
    });
  };

  const handleUpdateInAllData = (data: T) => {
    setAllData((prev) =>
      prev.map((item) => (item.objId === data.objId ? data : item))
    );
  };

  const handleDeleteFromAllData = (objId: string) => {
    // Set flag to indicate we're refetching after deletion
    setIsRefetchingAfterDelete(true);

    setAllData((prev) => {
      const newData = prev.filter((item) => item.objId !== objId);

      // If we deleted the last item, reset to page 1
      if (newData.length === 0) {
        setCurrentPage(1);
        setIsMoreDataAvailable(true);
        setHasNoMoreServerData(false);
        return newData;
      }

      // Calculate how many items should be shown on current page
      const itemsForCurrentPage = currentPage * SIZE;

      // If we have fewer items than what should be shown on current page, go back one page
      if (newData.length < itemsForCurrentPage && currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      }

      // Update isMoreDataAvailable - if we have more items than currently displayed
      const displayedItems =
        Math.min(currentPage, Math.ceil(newData.length / SIZE)) * SIZE;
      const hasMoreLocalData = newData.length > displayedItems;
      setIsMoreDataAvailable(hasMoreLocalData || isMoreDataAvailable);

      return newData;
    });
  };

  const { data, isLoading, isError } = useGenericGet<T>({
    url,
    size: SIZE,
    offsetObjId,
  });

  // Refresh server data when needed (after deletion)
  useEffect(() => {
    if (shouldRefreshServerData) {
      setOffsetObjId("");
      setCurrentPage(1);
      setShouldRefreshServerData(false);
    }
  }, [shouldRefreshServerData]);

  useEffect(() => {
    if (data && data?.length > 0) {
      // If we're refetching after deletion, replace the data instead of merging
      if (isRefetchingAfterDelete) {
        setAllData(data);
        setIsRefetchingAfterDelete(false);

        // Update isMoreDataAvailable based on new data
        const displayedItems = currentPage * SIZE;
        setIsMoreDataAvailable(
          data.length > displayedItems || data.length === SIZE
        );

        // Reset pagination state for fresh data
        setCurrentPage(1);
        setHasNoMoreServerData(data.length < SIZE);
        return;
      }

      // Prevent duplicates by checking if items already exist
      setAllData((prev) => {
        const existingIds = new Set(prev.map((item) => item.objId));
        const newItems = data.filter((item) => !existingIds.has(item.objId));
        const updatedData = [...prev, ...newItems];

        // If we added new items from server, increment currentPage to show them
        if (newItems.length > 0 && offsetObjId !== "") {
          setCurrentPage((prevPage) => prevPage + 1);
        }

        // Update isMoreDataAvailable based on total items vs displayed items
        const displayedItems = currentPage * SIZE;
        setIsMoreDataAvailable(
          updatedData.length > displayedItems || data.length === SIZE
        );

        return updatedData;
      });

      // If we received fewer items than requested, there's no more data from server
      if (data.length < SIZE) {
        setHasNoMoreServerData(true);
        const totalItems = allData.length + data.length;
        const displayedItems = currentPage * SIZE;
        setIsMoreDataAvailable(totalItems > displayedItems);
      } else {
        setHasNoMoreServerData(false);
      }
    } else if (data && data.length === 0) {
      // If we received an empty array, there's no more server data
      setHasNoMoreServerData(true);
      const displayedItems = currentPage * SIZE;
      setIsMoreDataAvailable(allData.length > displayedItems);
    }
    setIsLoadingMore(false);
  }, [data, SIZE, currentPage, allData.length]);

  const refreshServerData = () => {
    setOffsetObjId("");
    setCurrentPage(1);
    setAllData([]);
    setIsMoreDataAvailable(true);
    setHasNoMoreServerData(false);
    setIsRefetchingAfterDelete(true);
  };

  // Get the last item ID from all loaded data (not just current page)
  const getLastItemId = () => {
    const lastId = allData.length > 0 ? allData[allData.length - 1].objId : "";
    return lastId;
  };

  return {
    allData: paginatedData, // Return paginated data instead of all data
    handleAddToAllData,
    handleUpdateInAllData,
    handleDeleteFromAllData,
    offsetObjId,
    isMoreDataAvailable: hasMoreData, // Use computed value
    isLoading,
    isError,
    isLoadingMore,
    handleLoadMoreBtnClick,
    currentPage,
    totalItems: allData.length,
    refreshServerData, // Add this function for manual refresh
    hasNoMoreServerData, // Add this to track server data status
    getLastItemId, // Add this to get the correct last item ID
  };
};
