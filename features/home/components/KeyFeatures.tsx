import { ArrowRight } from "lucide-react";
import React from "react";
import { features } from "../utils/features";
import FeaturesCard from "./FeaturesCard";

const KeyFeatures = () => {
  return (
    <div className="mt-[140px] w-full max-w-[1440px] mx-auto px-[40px] lg:px-[144px]">
      {/* Heading */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_auto] items-center justify-between">
        <div className="flex flex-col gap-[20px] w-full">
          <h1 className="font-playfair-display text-black text-[24px] lg:text-[48px] leading-[30px] lg:leading-[46px] -tracking-[1px] font-semibold">
            Key Features
          </h1>
          <p className="text-[#5A7184] text-[16px] lg:text-[18px] leading-[32px] font-normal max-w-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>
        </div>
        <button className="w-fit self-end flex items-center gap-2 text-[16px] leading-[100%] font-medium text-[#3385FF] lg:px-[26px] lg:py-[21px] px-[16px] py-[12px] border-[1px] border-[#3385FF] rounded-[48px] hover:bg-[#3385FF] hover:text-white transition-all duration-300 cursor-pointer">
          view more about <ArrowRight className="w-[17px] h-[17px]" />
        </button>
      </div>
      {/* Features Card Section */}
      <div className="mt-[50px] lg:mt-[80px] grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[50px] items-center justify-between">
        {features.map((feature) => (
          <FeaturesCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
