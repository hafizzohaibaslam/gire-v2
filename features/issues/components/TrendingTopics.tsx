"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import TrendingTopicCard from "./TrendingTopicCard";
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
import { TrendingTopic } from "@/features/admin/lib/types";

const TrendingTopics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedVolume, setSelectedVolume] = useState("All");
  const [selectedNumber, setSelectedNumber] = useState("All");
  const [selectedResearchField, setSelectedResearchField] = useState("All");

  const filterTopics = (topics: TrendingTopic[]) => {
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
          topic.researchKeywords.some((keyword) =>
            keyword.toLowerCase().includes(selectedResearchField.toLowerCase())
          )
      );
    }

    return filteredData;
  };
  const filteredTopics = filterTopics(trendingTopics);

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

          {/* Volume */}
          <div className="flex flex-col gap-2">
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
          </div>
          {/* Number */}
          <div className="flex flex-col gap-2">
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
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col gap-[30px] lg:gap-[60px]">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <Link href={`/issues/${topic.id}`} key={topic.id}>
              <TrendingTopicCard topic={topic} />
            </Link>
          ))
        ) : (
          <div className="text-[#858C95] text-[15px] font-normal leading-[22px]">
            No topics found
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingTopics;
