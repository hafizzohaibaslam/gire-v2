import Button from "@/features/issues/components/Button";
import Tags from "@/features/shared/components/Tags";
import { Download } from "lucide-react";
import React from "react";

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
            Dr. Emily Richards
          </h1>
          <p className="font-figtree text-[#23253699] text-[24px] leading-[100%] font-medium">
            10.5678/edu.tech.2024.0314
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <Tags tag="Biotechnology & Genetics" />
            <Tags tag="Mobile Learning" />
            <Tags tag="E-Learning UX" />
          </div>
        </div>
        {/* Download Button */}
        <Button icon={<Download className="w-[18px] h-[18px]" />}>
          Download PDF
        </Button>
      </div>
      {/* Abstract Study */}
      <div className="border-[1px] border-black rounded-[20px] flex flex-col justify-center items-center gap-[10px] h-[500px]">
        <h3 className="font-figtree text-[#232536] text-[24px] lg:text-[36px] leading-[100%] lg:leading-[48px] font-semibold">
          Abstract
        </h3>
        <p className="font-figtree font-medium text-[#23253699] text-[16px] lg:text-[24px] leading-[100%] text-center">
          This study explores the targeting efficiency of sialic acid-modified
          lipid nanoparticles...
        </p>
      </div>
    </div>
  );
};

export default IssueDetails;
