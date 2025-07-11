import Image from "next/image";
import React from "react";
import Lines from "@/public/why-us-page/lines.svg";
import BenefitsImage from "@/public/why-us-page/benefits.png";
import BenefitsCard from "./BenefitsCard";
import { benefits } from "../utils/benefits";
import clsx from "clsx";

const Benefits = () => {
  return (
    <div className="bg-white -mt-[150px] lg:-mt-[355px] px-[40px] py-[40px] lg:px-[100px] lg:py-[100px] max-w-[1440px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center space-y-[16px]">
        <div className="w-fit">
          <h1 className="font-playfair-display text-black text-[30px] lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
            Why Publish with JSSE?
          </h1>
          <Image
            src={Lines}
            alt="Lines"
            width={100}
            height={100}
            className="w-full h-[50px] mt-[20px]"
          />
        </div>
        <p className="text-center text-[#52525B] text-[16px] lg:text-[22px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl">
          At JSSE, we are dedicated to providing high school students with a
          unique platform to academic growth. We play a vital role in the
          academic world by offering young scholars platform to share their
          ideas and research. Here&apos;s how the journal contributes to the
          area of publishing with us.
        </p>
      </div>
      {/* Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[50px] px-[40px] pt-[40px] lg:px-[100px] lg:pt-[50px] max-w-[1440px] mx-auto">
        {/* Left Side */}
        <div>
          <Image
            src={BenefitsImage}
            alt="Benefits"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Side */}
        <div className="my-[37px] space-y-[20px]">
          {benefits.map((benefit, index) => (
            <BenefitsCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              className={clsx(
                "relative",
                index === 1 ? "lg:left-[50px]" : "",
                index === 2 ? "lg:left-[80px]" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
