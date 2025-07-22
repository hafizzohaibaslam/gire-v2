import Button from "@/features/issues/components/Button";
import Tags from "@/features/shared/components/Tags";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import PeriodicTable from "@/public/issues-open-page/periodic-table.svg";

const IssueDetails = () => {
  return (
    <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] pt-[100px] max-w-[1440px] mx-auto">
      {/* Introduction */}
      <div>
        <div className="flex flex-col  gap-[10px]">
          <p className="font-playfair-display text-[#3385FF] text-[16px] lg:text-[18px] leading-[20px] tracking-[2px] font-semibold">
            Dr. Emily Richards
          </p>
          <div className="flex items-center gap-[10px]">
            <p className="mr-4 font-playfair-display text-[#6D6E76] text-[16px] leading-[28px] font-normal tracking-[2px]">
              May 1, 2025
            </p>
          </div>
        </div>
        <h1 className="font-playfair-display my-[14px] text-[#232536] text-[24px] lg:text-[36px] leading-[32px] lg:leading-[42px] font-semibold tracking-[2px]">
          Enhancing Student Engagement through Gamified Learning Platforms.
        </h1>
        {/* Tags */}
        <div className="flex flex-wrap gap-[10px]">
          {researchField.map((field) => (
            <Tags key={field} tag={field} className="bg-blue-800" />
          ))}
          {researchKeWords.map((word) => (
            <Tags key={word} tag={word} />
          ))}
        </div>
        <p className="font-playfair-display my-[20px] text-[#6D6E76] text-[20px] leading-[28px] font-normal tracking-[2px]">
          https://doi.org/10.59720/24-029
        </p>
        <Button
          className="!max-w-full w-full flex justify-center items-center"
          icon={<Download className="w-[18px] h-[18px]" />}
        >
          Download PDF
        </Button>
      </div>
      {/* Abstract Study */}
      <div className="rounded-[20px] flex flex-col justify-center items-center gap-[10px] space-y-[70px]">
        <Image
          src={PeriodicTable}
          alt="abstract"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
        <p className="text-[#52525B] font-inter font-normal text-[16px] leading-[24px] lg:text-[24px] lg:leading-[34px]">
          Coffee is more than just a morning ritual; it is a cultural staple for
          many people around the world. One national report showed that 67% of
          American adults consistently drink coffee daily, a higher percentage
          than all other common beverages such as tap or bottled water.
        </p>
      </div>
    </div>
  );
};

export default IssueDetails;

const researchField = ["Education"];

const researchKeWords = [
  "Technology",
  "Learning",
  "Gamification",
  "Student Engagement",
];
