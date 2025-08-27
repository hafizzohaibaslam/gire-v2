import Header from "@/features/shared/components/Header";
import React from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className={clsx(
        "bg-[url('/home-page/hero-section.png')] bg-cover bg-black/50 bg-center bg-no-repeat [background-blend-mode:darken] h-[100vh] flex flex-col"
      )}
    >
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div
        className={clsx(
          "flex-1 flex flex-col items-start justify-center px-[20px] lg:px-[149px] text-white space-y-[25px] w-full max-w-[1440px] mx-auto"
        )}
      >
        <h1 className="font-fairplay-display font-bold text-[30px] lg:text-[60px] capitalize leading-[100%] max-w-2xl">
          JSSE <br /> Journal of Student Science Exploration
        </h1>
        <p className="text-[16px] lg:text-[26px] leading-[120%] font-medium">
          JSSE is an international, peer-reviewed journal that dedicated to
          publishing original student research across the sciences. We seek to
          advance curiosity, critical thinking, and scholarly inquiry by
          providing a platform for young researchers worldwide.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
          <button className="cursor-pointer px-[19px] py-[14px] lg:px-[25px] lg:py-[19px] w-fit flex items-center gap-2 text-[16px] lg:text-[20px] leading-[100%] font-semibold bg-[#3385FF] border-[2px] border-[#3385FF] rounded-[38px] hover:bg-white hover:border-transparent hover:text-black transition-all duration-300">
            Submit Now <ArrowRight className="w-[17px] h-[17px]" />
          </button>
          <Link
            href="/jsse-guide"
            className="cursor-pointer px-[19px] py-[14px] lg:px-[25px] lg:py-[19px] w-fit flex items-center gap-2 text-[16px] lg:text-[20px] leading-[100%] font-semibold bg-[#3385FF] border-[2px] border-[#3385FF] rounded-[38px] hover:bg-white hover:border-transparent hover:text-black transition-all duration-300"
          >
            Submission Guidelines <ArrowRight className="w-[17px] h-[17px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
