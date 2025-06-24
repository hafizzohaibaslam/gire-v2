import Button from "@/features/issues/components/Button";
import Tags from "@/features/shared/components/Tags";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import PeriodicTable from "@/public/issues-open-page/periodic-table.svg";

const IssueDetails = () => {
  return (
    <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] pt-[100px] max-w-[1440px] mx-auto">
      {/* Introduction */}
      <div>
        <div className="flex flex-col capitalize gap-4 mb-[30px] space-y-[16px]">
          <p className="font-figtree text-[#23253699] text-[20px] leading-[100%] font-normal">
            May 12, 2025
          </p>
          <h1 className="font-figtree text-black text-[16px] lg:text-[36px] leading-[20px] lg:leading-[48px] -tracking-[1px] font-semibold">
            Enhancing Student Engagement through Gamified Learning Platforms.
          </h1>
          <p className="lowercase font-figtree text-[#23253699] text-[24px] leading-[100%] font-medium">
            https://doi.org/10.59720/24-029
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <Tags tag="Emily Richards (Newyork Highschool)" />
          </div>
        </div>
        {/* Download Button */}
        <Button icon={<Download className="w-[18px] h-[18px]" />}>
          Download PDF
        </Button>
      </div>
      {/* Abstract Study */}
      <div className="rounded-[20px] flex flex-col justify-center items-center gap-[10px] space-y-[70px]">
        <Image
          src={PeriodicTable}
          alt="abstract"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
        <p className="text-[#52525B] font-inter font-normal text-[16px] leading-[24px] lg:text-[24px] lg:leading-[34px]">
          Coffee is more than just a morning ritual; it is a cultural staple for
          many people around the world. One national report showed that 67% of
          American adults consistently drink coffee daily, a higher percentage
          than all other common beverages such as tap or bottled water.
        </p>
      </div>
    </div>
  );
};

export default IssueDetails;
