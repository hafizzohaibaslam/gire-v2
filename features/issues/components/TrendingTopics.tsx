import { Download, Search } from "lucide-react";
import React from "react";
import Button from "./Button";
import TrendingTopicCard from "./TrendingTopicCard";
import { trendingTopics } from "../utils/trendingTopics";

const TrendingTopics = () => {
  return (
    <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] lg:pt-[100px] max-w-[1440px] mx-auto">
      {/* Introduction */}
      <div className="space-y-[25px]">
        <div className="flex flex-col sm:flex-row items-center justify-between capitalize gap-4">
          <h1 className="font-figtree text-[#232536] text-[30px] lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
            trending topics
          </h1>
          {/* Search Bar */}
          <div className="w-full max-w-sm flex items-center gap-2 relative px-[16px] py-[12px] rounded-[100px] border-[1px] border-[#E8EAEE]">
            <Search className="w-[20px] h-[20px] absolute left-[10px] text-[#858C95]" />
            <input
              type="search"
              placeholder="Search"
              className="ml-[20px] text-[#858C95] text-[15px] font-normal leading-[22px] outline-none"
            />
          </div>
        </div>
        {/* Download Button */}
        <Button icon={<Download className="w-[18px] h-[18px]" />}>
          Download Current Issues
        </Button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col gap-[30px] lg:gap-[60px]">
        {trendingTopics.map((topic) => (
          <TrendingTopicCard
            key={topic.id}
            image={topic.image}
            author={topic.author}
            date={topic.date}
            title={topic.title}
            tags={topic.tags}
            doi={topic.doi}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
