"use client";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import TrendingTopicCard from "./IssueCard";
import {
  categoriesList,
  numbersList,
  trendingTopics,
  volumesList,
  yearsList,
} from "../utils/trendingTopics";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Label from "@/features/admin/components/Label";
import { Issue } from "@/features/admin/lib/types";
import { useGetIssues } from "@/features/admin/issues/hooks/useGetIssues";
import Skeleton from "@/features/shared/components/Skeleton";
import Button from "@/features/shared/components/Button";

const TrendingTopics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedArea, setSelectedArea] = useState("");
  // const [selectedVolume, setSelectedVolume] = useState("All");
  // const [selectedNumber, setSelectedNumber] = useState("All");
  const [selectedResearchField, setSelectedResearchField] = useState("All");

  const [allIssues, setAllIssues] = useState<Issue[]>([]);
  const [offsetObjId, setOffsetObjId] = useState<string>("");
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(true);
  const [isMoreDataAvailable, setIsMoreDataAvailable] = useState<boolean>(true);
  const SIZE = 1;

  const {
    data: issues,
    isLoading,
    isError,
  } = useGetIssues({
    size: SIZE,
    offsetObjId,
  });

  useEffect(() => {
    if (issues && issues?.length > 0) {
      setAllIssues((prev) => [...prev, ...issues]);

      // If we received fewer items than requested, there's no more data
      if (issues.length < SIZE) {
        setIsMoreDataAvailable(false);
      }
    } else if (issues && issues.length === 0) {
      // If we received an empty array, there's no more data
      setIsMoreDataAvailable(false);
    }
    setIsLoadingMore(false);
  }, [issues]);

  const filterTopics = (topics: Issue[]) => {
    let filteredData = [...topics];

    if (searchTerm && searchTerm !== "") {
      filteredData = filteredData.filter((topic) =>
        topic.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedYear && selectedYear !== "All") {
      filteredData = filteredData.filter((topic) =>
        topic.date.includes(selectedYear)
      );
    }
    if (selectedResearchField && selectedResearchField !== "All") {
      filteredData = filteredData.filter(
        (topic) =>
          topic.researchField.includes(selectedResearchField) ||
          topic.researchKeywords.some((keyword: string) =>
            keyword.toLowerCase().includes(selectedResearchField.toLowerCase())
          )
      );
    }

    return filteredData;
  };

  const handleApplyFilters = () => {};

  return (
    <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] lg:pt-[100px] max-w-[1440px] mx-auto">
      {/* Introduction */}
      <div>
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
            <Select
              value={selectedYear}
              onValueChange={(value) => setSelectedYear(value)}
            >
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Select a year" />
              </SelectTrigger>
              <SelectContent>
                {yearsList.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Categories */}
          <div className="flex flex-col gap-2">
            <Label>Fields</Label>
            <Select
              value={selectedResearchField}
              onValueChange={(value) => setSelectedResearchField(value)}
            >
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categoriesList.map((field) => (
                  <SelectItem key={field} value={field}>
                    {field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Area */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="area">Fields</Label>
            <input
              id="area"
              type="text"
              placeholder="Enter area"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full lg:w-[180px] border-[1px] border-[#E8EAEE] rounded-[10px] px-[10px] py-[10px] outline-none"
            />
          </div>

          {/* Volume */}
          {/* <div className="flex flex-col gap-2">
            <Label>Volume</Label>
            <Select
              value={selectedVolume}
              onValueChange={(value) => setSelectedVolume(value)}
            >
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Select a volume" />
              </SelectTrigger>
              <SelectContent>
                {volumesList.map((volume) => (
                  <SelectItem key={volume} value={volume}>
                    {volume}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
          {/* Number */}
          {/* <div className="flex flex-col gap-2">
            <Label>Number</Label>
            <Select
              value={selectedNumber}
              onValueChange={(value) => setSelectedNumber(value)}
            >
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Select a number" />
              </SelectTrigger>
              <SelectContent>
                {numbersList.map((number) => (
                  <SelectItem key={number} value={number}>
                    {number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
          <button
            className="bg-[#3385FF] text-white px-[20px] py-[10px] rounded-[100px] cursor-pointer self-end"
            onClick={() => {
              handleApplyFilters();
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>

      {isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading advisory boards
        </div>
      )}
      {/* Profile Section */}
      <div className="flex flex-col gap-[30px] lg:gap-[60px]">
        {allIssues.length > 0 ? (
          allIssues.map((topic) => (
            <Link href={`/issues/${topic.objId}`} key={topic.objId}>
              <TrendingTopicCard topic={topic} />
            </Link>
          ))
        ) : (
          <div className="text-[#858C95] text-[15px] font-normal leading-[22px]">
            No topics found
          </div>
        )}
      </div>
      {allIssues && allIssues.length > 0 && (
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
                setOffsetObjId(allIssues[allIssues.length - 1].objId);
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

export default TrendingTopics;
