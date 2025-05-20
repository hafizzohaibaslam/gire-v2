import Header from "@/features/shared/components/Header";
import React from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { Issue } from "./Issue";
import { formatNumber } from "@/features/shared/utils/formatNumber";
import { issuesData } from "@/features/home/utils/issuesData";

const HeroSection = () => {
  return (
    <div
      className={clsx(
        "min-h-screen bg-[url('/home-page/hero-section.png')] bg-cover bg-center bg-no-repeat brightness"
      )}
    >
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div
        className={clsx(
          "flex flex-col items-start justify-start mt-[50px] pb-[50px] lg:mt-[94px] px-[20px] lg:px-[149px] text-white space-y-[25px] w-full max-w-[1440px] mx-auto"
        )}
      >
        <h1 className="font-fairplay-display font-bold text-[30px] lg:text-[60px] capitalize leading-[100%] max-w-lg">
          Discover Career Path With Real World Experience
        </h1>
        <p className="text-[16px] lg:text-[18px] leading-[100%] font-medium">
          Our internship programs offer growth, learning, and oppourtunity.
        </p>
        <p className="text-[16px] lg:text-[30px] leading-[100%] font-medium max-w-lg">
          Submit your research & be part of the future of science.
        </p>
        <button className="cursor-pointer px-[19px] py-[14px] lg:px-[25px] lg:py-[19px] flex items-center gap-2 text-[16px] lg:text-[20px] leading-[100%] font-semibold bg-[#3385FF] border-[2px] border-[#3385FF] rounded-[38px] hover:bg-white hover:border-transparent hover:text-black transition-all duration-300">
          Submit Now <ArrowRight className="w-[17px] h-[17px]" />
        </button>
        {/* Issues Section */}
        <div className="mt-[30px] lg:mt-[60px] w-full">
          {/* Empty Div */}
          <div className="border-b-[2px] border-white w-full"></div>
          <div className="mt-[16px] flex flex-col lg:flex-row lg:items-start lg:justify-start gap-8 lg:gap-[88px]">
            {issuesData.map((issue, index) => (
              <Issue
                key={index}
                title={`${formatNumber(issue.title)}`}
                description={issue.description}
                buttonText={issue.buttonText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
