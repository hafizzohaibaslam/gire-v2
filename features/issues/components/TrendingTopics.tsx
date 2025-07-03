"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import TrendingTopicCard from "./TrendingTopicCard";
import { trendingTopics } from "../utils/trendingTopics";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TrendingTopics = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTopics = trendingTopics.filter((topic) => {
    if (selectedCategory === "All") {
      return topic.date.includes(selectedYear);
    }

    return (
      topic.date.includes(selectedYear) && topic.tags.includes(selectedCategory)
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
            className="ml-[20px] text-[#858C95] text-[15px] font-normal leading-[22px] outline-none"
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
        {filteredTopics.map((topic) => (
          <TrendingTopicCard {...topic} key={topic.id} />
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;

const yearsList = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
];

const categoriesList = [
  "All",
  "Biotechnology & Genetics",
  "Mobile Learning",
  "E-Learning UX",
  "EdTech Usability",
];
