"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import TrendingTopicCard from "./IssueCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Label from "@/features/admin/components/Label";
import { Issue } from "@/features/admin/lib/types";
import Skeleton from "@/features/shared/components/Skeleton";
import LoadMoreBtn from "@/features/shared/components/LoadMoreBtn";
import { useClientPagination } from "@/features/shared/hooks/useClientPagination";
import { areaValues } from "@/lib/areaValues";
import InputField from "@/features/admin/components/InputField";
import { filterTopics } from "../utils/filterTopics";

const TrendingTopics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedArea, setSelectedArea] = useState("All");
  const [selectedKeywords, setSelectedKeywords] = useState("");

  const [appliedSearchTerm, setAppliedSearchTerm] = useState("");
  const [appliedYear, setAppliedYear] = useState("");
  const [appliedArea, setAppliedArea] = useState("All");
  const [appliedKeywords, setAppliedKeywords] = useState("");

  const {
    paginatedItems,
    hasMoreItems,
    handleLoadMoreClick,
    isLoading,
    isError,
  } = useClientPagination<Issue>({
    url: "/api/issues",
  });

  const filteredTopics = filterTopics(
    paginatedItems,
    appliedSearchTerm,
    appliedYear,
    appliedArea,
    appliedKeywords
  );

  const handleApplyFilters = () => {
    setAppliedSearchTerm(searchTerm);
    setAppliedYear(selectedYear);
    setAppliedArea(selectedArea);
    setAppliedKeywords(selectedKeywords);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedYear("");
    setSelectedArea("All");
    setSelectedKeywords("");
    setAppliedSearchTerm("");
    setAppliedYear("");
    setAppliedArea("All");
    setAppliedKeywords("");
  };

  return (
    <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] lg:pt-[100px] max-w-[1440px] mx-auto">
      {/* Introduction */}
      <div className="">
        <div className="w-full flex items-center gap-2 relative px-[16px] py-[12px] rounded-[100px] border-[1px] border-[#E8EAEE]">
          <Search className="w-[20px] h-[20px] absolute left-[10px] text-[#858C95]" />
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-[20px] text-[#858C95] text-[15px] font-normal leading-[22px] outline-none w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 mt-[20px]">
          {/* Years */}
          <div className="flex flex-col gap-2">
            <Label>Years</Label>
            <InputField
              type="text"
              placeholder="Enter a year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 text-[#858C95] placeholder:text-[#858C95] text-[15px] font-normal leading-[22px] outline-none w-full rounded-[10px] border-[1px] border-[#E8EAEE] hover:border-[#DFEAF2] focus:ring-0"
            />
          </div>
          {/* Keywords */}
          <div className="flex flex-col gap-2">
            <Label>Keywords</Label>
            <InputField
              type="text"
              placeholder="Enter a keyword"
              value={selectedKeywords}
              onChange={(e) => setSelectedKeywords(e.target.value)}
              className="px-3 py-2 text-[#858C95] placeholder:text-[#858C95] text-[15px] font-normal leading-[22px] outline-none w-full rounded-[10px] border-[1px] border-[#E8EAEE] hover:border-[#DFEAF2] focus:ring-0"
            />
          </div>

          {/* Area */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="area">Area</Label>
            <Select
              value={selectedArea}
              onValueChange={(value) => setSelectedArea(value)}
            >
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Select an area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                {Object.keys(areaValues).map((area) => (
                  <SelectItem key={area} value={area}>
                    {areaValues[area as keyof typeof areaValues]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 self-end">
            <button
              className="bg-[#3385FF] text-white px-[20px] py-[10px] rounded-[100px] cursor-pointer self-end"
              onClick={handleApplyFilters}
            >
              Apply Filters
            </button>
            <button
              className="bg-gray-500 text-white px-[20px] py-[10px] rounded-[100px] cursor-pointer self-end"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="mt-[60px]">
          <Skeleton />
        </div>
      )}

      {!isLoading && isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading issues
        </div>
      )}

      {/* Profile Section */}
      <div className="flex flex-col gap-[30px] lg:gap-[60px]">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((issue) => (
            <TrendingTopicCard key={issue.objId} issue={issue} />
          ))
        ) : (
          <div className="text-[#858C95] text-[15px] font-normal leading-[22px]">
            No topics found
          </div>
        )}
      </div>
      {filteredTopics.length > 0 && hasMoreItems && (
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
    </div>
  );
};

export default TrendingTopics;
