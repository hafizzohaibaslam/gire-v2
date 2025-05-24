import TrendingTopics from "@/features/issues/components/TrendingTopics";
import Footer from "@/features/shared/components/Footer";
import HeroSection from "@/features/shared/components/HeroSection";
import { Download } from "lucide-react";
import React from "react";

const IssuesPage = () => {
  return (
    <>
      <HeroSection.Root backgroundImage="issues-page/background-img.png">
        <HeroSection.Title>Issues</HeroSection.Title>
        <HeroSection.Description>
          Explore our latest issue featuring a diverse range of topics and
          research from talented high school authors. Each issue highlights the
          creativity and scholarly contributions of our young researchers.
        </HeroSection.Description>
        <button className="font-be-vietnam-pro flex items-center gap-2 text-[14px] leading-[100%] font-medium capitalize px-[20px] py-[14px] text-black rounded-[100px] cursor-pointer bg-white border-[1px] border-[#F1F1F340] hover:bg-black hover:text-white transition-all duration-300">
          download current issues <Download className="w-[18px] h-[18px]" />
        </button>
      </HeroSection.Root>
      <TrendingTopics />
      <Footer />
    </>
  );
};

export default IssuesPage;
