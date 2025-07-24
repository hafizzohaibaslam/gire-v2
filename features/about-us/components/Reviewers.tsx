"use client";
import React, { useEffect, useState } from "react";
import ReviewersCard from "./ReviewersCard";
import { useGetReviewers } from "@/features/admin/reviewers/hooks/useGetReviewers";
import Skeleton from "@/features/shared/components/Skeleton";
import { Reviewer as ReviewerType } from "@/features/admin/lib/types";
import Button from "@/features/shared/components/Button";

const EditorialTeam = () => {
  const [allReviewers, setAllReviewers] = useState<ReviewerType[]>([]);
  const [offsetObjId, setOffsetObjId] = useState<string>("");
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(true);
  const [isMoreDataAvailable, setIsMoreDataAvailable] = useState<boolean>(true);
  const SIZE = 6;

  const {
    data: reviewers,
    isLoading,
    isError,
  } = useGetReviewers({
    size: SIZE,
    offsetObjId,
  });

  useEffect(() => {
    if (reviewers && reviewers?.length > 0) {
      setAllReviewers((prev) => [...prev, ...reviewers]);

      // If we received fewer items than requested, there's no more data
      if (reviewers.length < SIZE) {
        setIsMoreDataAvailable(false);
      }
    } else if (reviewers && reviewers.length === 0) {
      // If we received an empty array, there's no more data
      setIsMoreDataAvailable(false);
    }
    setIsLoadingMore(false);
  }, [reviewers]);

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

      {isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading advisory boards
        </div>
      )}

      {/* Editorial Team Members */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] mt-[60px] w-full">
        {allReviewers &&
          allReviewers.length > 0 &&
          allReviewers.map((reviewer, index) => (
            <ReviewersCard key={index} reviewer={reviewer} />
          ))}
      </div>
      {allReviewers && allReviewers.length > 0 && (
        <div className="mt-[40px] text-center">
          {isLoading && (
            <div className="mt-[60px]">
              <Skeleton />
            </div>
          )}
          {isMoreDataAvailable ? (
            <Button
              disabled={isLoadingMore}
              onClick={() => {
                setOffsetObjId(allReviewers[allReviewers.length - 1].objId);
                setIsLoadingMore(true);
              }}
            >
              {isLoadingMore ? "Loading..." : "Load More"}
            </Button>
          ) : (
            <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal">
              All reviewers have been loaded.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default EditorialTeam;
