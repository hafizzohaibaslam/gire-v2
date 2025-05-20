import Header from "@/features/shared/components/Header";
import clsx from "clsx";
import { Download } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className={clsx(
        "pb-[250px] bg-[url('/issues-page/background-img.png')] bg-cover bg-center bg-no-repeat brightness"
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
          Issues
        </h1>
        <p className="text-[16px] lg:text-[18px] leading-[20px] lg:leading-[28px] font-medium max-w-5xl">
          Explore our latest issue featuring a diverse range of topics and
          research from talented high school authors. Each issue highlights the
          creativity and scholarly contributions of our young researchers.
        </p>
        <button className="font-be-vietnam-pro flex items-center gap-2 text-[14px] leading-[100%] font-medium capitalize px-[20px] py-[14px] text-black rounded-[100px] bg-white border-[1px] border-[#F1F1F340]">
          download current issues <Download className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
