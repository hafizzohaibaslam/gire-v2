"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import TrendingTopicCard from "./TrendingTopicCard";
import {
  categoriesList,
  trendingTopics,
  yearsList,
} from "../utils/trendingTopics";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const TrendingTopics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTopics = trendingTopics.filter((topic) => {
    if (selectedCategory === "All") {
      return (
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        topic.date.includes(selectedYear)
      );
    }

    return (
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      topic.date.includes(selectedYear) &&
      topic.tags.includes(selectedCategory)
    );
  });

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
        <div className="flex items-center gap-2 mt-[20px]">
          {/* Years */}
          <Select
            value={selectedYear}
            onValueChange={(value) => setSelectedYear(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Years</SelectLabel>
                {yearsList.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Categories */}
          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categoriesList.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col gap-[30px] lg:gap-[60px]">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <Link href={`/issues/${topic.id}`} key={topic.id}>
              <TrendingTopicCard {...topic} />
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
