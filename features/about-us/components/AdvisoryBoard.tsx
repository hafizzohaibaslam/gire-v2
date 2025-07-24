"use client";
import React, { useEffect, useState } from "react";
import AdvisoryBoardCard from "./AdvisoryBoardCard";
import Skeleton from "@/features/shared/components/Skeleton";
import { useGetAdvisoryBoards } from "@/features/admin/advisory-board/hooks/useGetAdvisoryBoards";
import Button from "@/features/shared/components/Button";
import { AdvisoryBoard as AdvisoryBoardType } from "@/features/admin/lib/types";

const AdvisoryBoard = () => {
  const [allAdvisoryBoards, setAllAdvisoryBoards] = useState<
    AdvisoryBoardType[]
  >([]);
  const [offsetObjId, setOffsetObjId] = useState<string>("");
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(true);
  const [isMoreDataAvailable, setIsMoreDataAvailable] = useState<boolean>(true);
  const SIZE = 6;

  const {
    data: advisoryBoards,
    isLoading,
    isError,
  } = useGetAdvisoryBoards({
    size: SIZE,
    offsetObjId,
  });

  useEffect(() => {
    if (advisoryBoards && advisoryBoards?.length > 0) {
      setAllAdvisoryBoards((prev) => [...prev, ...advisoryBoards]);

      // If we received fewer items than requested, there's no more data
      if (advisoryBoards.length < SIZE) {
        setIsMoreDataAvailable(false);
      }
    } else if (advisoryBoards && advisoryBoards.length === 0) {
      // If we received an empty array, there's no more data
      setIsMoreDataAvailable(false);
    }
    setIsLoadingMore(false);
  }, [advisoryBoards]);

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

      {isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading advisory boards
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] mt-[60px] w-full">
        {allAdvisoryBoards && allAdvisoryBoards.length > 0 ? (
          allAdvisoryBoards.map((board, index) => (
            <AdvisoryBoardCard key={index} board={board} />
          ))
        ) : (
          <div className="text-[#858C95] text-[15px] font-normal leading-[22px]">
            No advisory board members found
          </div>
        )}
      </div>
      {allAdvisoryBoards && allAdvisoryBoards.length > 0 && (
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
                setOffsetObjId(
                  allAdvisoryBoards[allAdvisoryBoards.length - 1].objId
                );
                setIsLoadingMore(true);
              }}
            >
              {isLoadingMore ? "Loading..." : "Load More"}
            </Button>
          ) : (
            <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal">
              All advisory board members have been loaded.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvisoryBoard;
