"use client";
import { features } from "@/features/home/utils/features";
import React, { useState } from "react";
import FeaturesCard from "@/features/home/components/FeaturesCard";
import { ArrowRight } from "lucide-react";
import FeaturesPopUp from "@/features/home/components/FeaturesPopUp";

const Benefits2 = () => {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);

  return (
    <div className="px-[40px] py-[40px] lg:px-[100px] max-w-[1440px] mx-auto space-y-[80px]">
      {/* Heading */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_auto] items-center justify-between">
        <div className="space-y-[16px]">
          <h1 className="font-playfair-display text-black text-[30px] lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
            Benefits for Authors
          </h1>
          <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal max-w-6xl">
            At JSSE, we are dedicated to providing high school students with a
            unique platform that not only showcases their research but also
            fosters their academic growth. Here are the key benefits of
            publishing with us.
          </p>
        </div>
        <button
          className="w-fit self-end flex items-center gap-2 text-[16px] leading-[100%] font-medium text-[#3385FF] lg:px-[26px] lg:py-[21px] px-[16px] py-[12px] border-[1px] border-[#3385FF] rounded-[48px] hover:bg-[#3385FF] hover:text-white transition-all duration-300 cursor-pointer"
          onClick={() => setOpenPopUp(true)}
        >
          view more about <ArrowRight className="w-[17px] h-[17px]" />
        </button>
      </div>
      {/* Benefits 2 */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[50px] items-center justify-between">
        {features.map((feature) => (
          <FeaturesCard key={feature.id} feature={feature} />
        ))}
      </div>
      <FeaturesPopUp
        title="Benefits For Authors"
        openPopUp={openPopUp}
        handleClose={() => setOpenPopUp(false)}
      />
    </div>
  );
};

export default Benefits2;
