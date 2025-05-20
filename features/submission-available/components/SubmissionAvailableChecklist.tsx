import { formatNumber } from "@/features/shared/utils/formatNumber";
import { ArrowRight } from "lucide-react";
import React from "react";

const SubmissionAvailableChecklist = () => {
  return (
    <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] pt-[80px] max-w-[1440px] mx-auto">
      {/* Wrapper */}
      <div>
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-playfair-display font-semibold text-[30px] lg:text-[48px] leading-[36px] lg:leading-[46px] -tracking-[1px]">
            Submission Checklist
          </h1>
          <button className="text-[#3385FF] font-semibold text-[16px] leading-[100%] px-[23px] py-[15px] flex items-center gap-[8px] border-[1px] border-[#3385FF] rounded-[38px] hover:bg-[#3385FF] hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            submit manuscript
            <ArrowRight className="w-[17px] h-[17px]" />
          </button>
        </div>
        {/* Listing */}
        <div className="mt-[50px] mb-[70px] space-y-[30px]">
          {checklistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-[12px] px-[22px] py-[20px] bg-white rounded-[24px] shadow-lg"
            >
              <h4 className="font-figtree font-medium text-[#0000001A] text-[40px]">
                {formatNumber(item.id)}
              </h4>
              <p className="font-figtree font-normal text-[16px] leading-[100%]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="space-y-[20px]">
          <p className="text-[#52525B] font-normal text-[18px] leading-[32px] max-w-lg">
            If you have questions about formatting or file types, please refer
            to our Author.
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
    </div>
  );
};

export default SubmissionAvailableChecklist;

const checklistItems = [
  {
    id: 1,
    title: "Manuscript file (.doc/.docx) follows template exactly.",
  },
  {
    id: 2,
    title: "Figures/tables uploaded as separate .jpg/.jpeg files, ≥300 dpi.",
  },
  {
    id: 3,
    title: "All citations formatted in Vancouver style.",
  },
  {
    id: 4,
    title: "Word count between 2,000–3,000 words.",
  },
  {
    id: 5,
    title: "Permission forms (if required) included.",
  },
];
