import Header from "@/features/shared/components/Header";
import clsx from "clsx";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className={clsx(
        "pb-[250px] bg-[url('/submit-page/background-img.png')] bg-cover bg-center bg-no-repeat brightness"
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
        <h1 className="font-playfair-display font-bold text-[30px] lg:text-[60px] capitalize leading-[100%]">
          Submit
        </h1>
        <p className="font-medium text-[16px] lg:text-[18px] leading-[20px] lg:leading-[28px] max-w-5xl">
          At JSSE, we are dedicated to making your manuscript submission process
          smooth and straightforward. From the moment you begin, we will guide
          you through each step, offering clear instructions and detailed
          feedback to help you refine your work.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
