import React from "react";
import PublishDetails from "./PublishDetails";
import ResearchInHighSchool from "./ResearchInHighSchool";
import ResearchCardsList from "./ResearchCardsList";
import Image from "next/image";
import Lines from "@/public/why-us-page/lines.svg";

const ReadersTabsContent = () => {
  return (
    <div className="space-y-[50px]">
      <div className="flex flex-col items-center justify-center space-y-[16px]">
        <div className="w-fit">
          <h1 className="font-playfair-display text-black text-[30px] lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
            Why read JSSE?
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
          JSSE is a peer-reviewed journal written by high school students,
          showcasing fresh perspectives on STEM fields. Readers can gain unique
          insights into emergin trends, learn from the work of passionate young
          scholars, and be inspired to explore these disciplines more deeply.
        </p>
      </div>
      <PublishDetails />
      <ResearchInHighSchool />
      <ResearchCardsList />
    </div>
  );
};

export default ReadersTabsContent;
