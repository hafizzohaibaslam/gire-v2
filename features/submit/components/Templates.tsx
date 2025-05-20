import Button from "@/features/issues/components/Button";
import { ArrowRight, Download } from "lucide-react";
import React from "react";
import { manuscriptData } from "../utils/manuscriptData";
import ManuscriptCard from "./ManuscriptCard";

const Templates = () => {
  return (
    <div>
      <div className="space-y-[30px]">
        <div className="space-y-[25px]">
          <h1 className="font-playfair-display font-semibold text-[32px] lg:text-[48px] leading-[36px] lg:leading-[46px] -tracking-[1px]">
            Prepare Your Manuscript
          </h1>
          <p className="text-normal text-[#52525B] text-[16px] leading-[24px] lg:text-[22px] lg:leading-[32px] max-w-2xl">
            Download the required file and review the submission guidelines to
            format your manuscript correctly.
          </p>
        </div>
        <Button className="flex items-center gap-[10px]">
          Download Guidelines
          <Download className="w-[20px] h-[20px]" />
        </Button>
      </div>
      {/* Menuscript Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] mt-[30px] mb-[50px]">
        {manuscriptData.map((manuscript) => (
          <ManuscriptCard
            key={manuscript.id}
            id={manuscript.id}
            title={manuscript.title}
          />
        ))}
      </div>
      <div className="space-y-[20px]">
        <p className="text-[#52525B] font-normal text-[18px] leading-[32px] max-w-lg">
          If you have questions about formatting or file types, please refer to
          our Author.
        </p>
        <div className="flex items-start justify-start gap-[20px]">
          <button className="capitalize font-semibold text-[#3385FF] hover:bg-[#3385FF] hover:text-white text-[16px] leading-[100%] gap-[8px] flex items-center px-[36px] py-[18px] border-[2px] border-[#3385FF] bg-white rounded-[38px] cursor-pointer transition-all duration-300 ease-in-out">
            guidelines
            <ArrowRight className="w-[17px] h-[17px]" />
          </button>
          <button className="capitalize text-white border-[2px] bg-[#3385FF] hover:bg-white hover:text-[#3385FF] hover:border-[#3385FF] font-semibold text-[16px] leading-[100%] px-[36px] py-[18px] rounded-[38px] cursor-pointer transition-all duration-300 ease-in-out">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
