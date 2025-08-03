"use client";
import React from "react";
import ReviewersCard from "./ReviewersCard";
import Skeleton from "@/features/shared/components/Skeleton";
import { Reviewer as ReviewerType } from "@/features/admin/lib/types";
import { useClientPagination } from "@/features/shared/hooks/useClientPagination";
import LoadMoreBtn from "@/features/shared/components/LoadMoreBtn";

const EditorialTeam = () => {
  const {
    paginatedItems,
    hasMoreItems,
    handleLoadMoreClick,
    isLoading,
    isError,
  } = useClientPagination<ReviewerType>({ url: "/api/reviewers" });

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

      {isLoading && (
        <div className="mt-[60px]">
          <Skeleton />
        </div>
      )}

      {!isLoading && isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading advisory boards
        </div>
      )}

      {!isLoading &&
        !isError &&
        paginatedItems &&
        paginatedItems.length === 0 && (
          <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
            No advisory board members found
          </div>
        )}

      {/* Editorial Team Members */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] mt-[60px] w-full">
        {paginatedItems &&
          paginatedItems.length > 0 &&
          paginatedItems.map((reviewer, index) => (
            <ReviewersCard key={index} reviewer={reviewer} />
          ))}
      </div>
      {paginatedItems.length > 0 && hasMoreItems && (
        <div className="mt-[40px] text-center">
          {isLoading && (
            <div className="mt-[60px]">
              <Skeleton />
            </div>
          )}
          <LoadMoreBtn
            isLoadingMore={isLoading}
            handleClick={handleLoadMoreClick}
          />
        </div>
      )}
      {paginatedItems.length > 0 && !hasMoreItems && (
        <div className="mt-8 text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal text-center">
          All reviewers have been loaded.
        </div>
      )}
    </div>
  );
};

export default EditorialTeam;
