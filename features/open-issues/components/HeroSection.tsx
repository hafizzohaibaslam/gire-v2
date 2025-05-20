import Header from "@/features/shared/components/Header";
import clsx from "clsx";

import React from "react";

const HeroSection = () => {
  return (
    <div
      className={clsx(
        "pb-[250px] bg-[url('/issues-open-page/background-img.png')] bg-cover bg-center bg-no-repeat brightness"
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
        <h1 className="font-playfair-display font-semibold text-[30px] lg:text-[60px] capitalize leading-[100%]">
          Enhancing Student Engagement through Gamified Learning Platforms.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
