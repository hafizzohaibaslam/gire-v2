import { features } from "@/features/home/utils/features";
import React from "react";
import FeaturesCard from "@/features/home/components/FeaturesCard";

const Benefits2 = () => {
  return (
    <div className="px-[40px] py-[40px] lg:px-[100px] max-w-[1440px] mx-auto space-y-[80px]">
      {/* Heading */}
      <div className="space-y-[16px]">
        <h1 className="font-playfair-display text-black text-[30px] lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
          Benefits
        </h1>
        <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal max-w-6xl">
          At [Journal Name], we are dedicated to providing high school students
          with a unique platform that not only showcases their research but also
          fosters their academic growth. Here are the key benefits of publishing
          with us.
        </p>
      </div>
      {/* Benefits 2 */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[50px] items-center justify-between">
        {features.map((feature) => (
          <FeaturesCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Benefits2;
