import Header from "@/features/shared/components/Header";
import clsx from "clsx";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className={clsx(
        "pb-[200px] lg:pb-[400px] bg-[url('/why-us-page/background-img.png')] bg-cover bg-no-repeat brightness"
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
        <h1 className="font-playfair-display font-bold text-[30px] lg:text-[60px] capitalize leading-[100%] max-w-lg">
          Our Mission
        </h1>
        <p className="text-[16px] lg:text-[18px] leading-[20px] lg:leading-[28px] font-medium max-w-5xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
