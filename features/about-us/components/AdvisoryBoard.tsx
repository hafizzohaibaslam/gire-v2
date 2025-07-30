"use client";
import React from "react";
import AdvisoryBoardCard from "./AdvisoryBoardCard";
import Skeleton from "@/features/shared/components/Skeleton";
import { useGenericPagination } from "@/features/shared/hooks/useGenericPagination";
import { AdvisoryBoard as AdvisoryBoardType } from "@/features/admin/lib/types";
import LoadMoreBtn from "@/features/shared/components/LoadMoreBtn";

const AdvisoryBoard = () => {
  const {
    allData,
    offsetObjId,
    isLoadingMore,
    isMoreDataAvailable,
    isLoading,
    isError,
    handleLoadMoreBtnClick,
    getLastItemId,
  } = useGenericPagination<AdvisoryBoardType>({ url: "/api/advisories" });

  return (
    <div
      id="advisory-board"
      className="max-w-[1440px] mx-auto px-[40px] lg:px-[100px]"
    >
      {/* Heading */}
      <div className="space-y-[16px] capitalize">
        <h1 className="font-playfair-display text-black text-[30px] text-center lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
          Advisory Board
        </h1>
        <p className="text-[#52525B] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {!offsetObjId && isLoading && (
        <div className="mt-[60px]">
          <Skeleton />
        </div>
      )}

      {!isLoading && isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading advisory boards
        </div>
      )}

      {!isLoading && !isError && allData && allData.length === 0 && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          No advisory board members found
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] mt-[60px] w-full">
        {allData &&
          allData.length > 0 &&
          allData.map((board, index) => (
            <AdvisoryBoardCard key={index} board={board} />
          ))}
      </div>
      {allData && allData.length > 0 && (
        <div className="mt-[40px] text-center">
          {isLoading && (
            <div className="mt-[60px]">
              <Skeleton />
            </div>
          )}
          {isMoreDataAvailable ? (
            <LoadMoreBtn
              isLoadingMore={isLoadingMore}
              handleClick={() => handleLoadMoreBtnClick(getLastItemId())}
            />
          ) : (
            <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal disabled:opacity-50">
              All advisory board members have been loaded.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvisoryBoard;
