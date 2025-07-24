"use client";
import React from "react";
import ReviewersCard from "./ReviewersCard";
import Skeleton from "@/features/shared/components/Skeleton";
import { Reviewer as ReviewerType } from "@/features/admin/lib/types";
import { useGenericPagination } from "@/features/shared/hooks/useGenericPagination";
import LoadMoreBtn from "@/features/shared/components/LoadMoreBtn";

const EditorialTeam = () => {
  const {
    allData,
    offsetObjId,
    isLoading,
    isError,
    isLoadingMore,
    isMoreDataAvailable,
    handleLoadMoreBtnClick,
  } = useGenericPagination<ReviewerType>({ url: "/api/reviewers" });

  return (
    <div
      id="reviewers"
      className="w-full max-w-[1440px] mx-auto px-[40px] lg:px-[100px] mt-[100px]"
    >
      {/* Introduction */}
      <div className="space-y-[16px] capitalize">
        <h1 className="font-playfair-display text-black text-[30px] text-center lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
          Reviewers
        </h1>
        <p className="text-[#52525B] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
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

      {/* Editorial Team Members */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] mt-[60px] w-full">
        {allData &&
          allData.length > 0 &&
          allData.map((reviewer, index) => (
            <ReviewersCard key={index} reviewer={reviewer} />
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
              handleClick={() =>
                handleLoadMoreBtnClick(allData[allData.length - 1].objId)
              }
            />
          ) : (
            <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal disabled:opacity-50">
              All reviewers have been loaded.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default EditorialTeam;
