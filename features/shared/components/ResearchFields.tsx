import React from "react";
import { researchFields } from "../utils/researchFields";
import Image from "next/image";

const ResearchFields = () => {
  return (
    <div className="my-[140px] w-full max-w-[1440px] mx-auto px-[40px] lg:px-[144px] space-y-[50px]">
      <div className="space-y-[20px]">
        <h1 className="font-playfair-display font-semibold text-[30px] lg:text-[48px] leaidng-[30px] lg:leading-[46px]">
          Research Fields
        </h1>
        <p className="text-[#5A7184] text-[18px] font-normal leading-[32px]">
          We explore questions in four key areas of STEM fields.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {researchFields.map((field) => (
          <div
            key={field.id}
            className="border-[1px] border-[#E5E7EB] rounded-lg px-[35px] py-[30px] space-y-[8px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-[10px]">
              <Image
                src={field.icon}
                alt={field.fieldName}
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
              <h2 className="text-[#111928] font-playfair-display font-semibold text-[24px] leading-[24px]">
                {field.fieldName}
              </h2>
            </div>
            <div className="flex flex-col">
              {field.subFields.map((subField) => (
                <div
                  key={subField.id}
                  className="flex gap-[10px] items-center justify-start space-y-[10px]"
                >
                  <span className="text-[#6B7280] font-figtree font-bold text-[16px] leading-[24px] uppercase">
                    {subField.shortName}
                  </span>
                  <div className="w-[10px] h-[2px] bg-black rounded-full"></div>
                  <span className="text-[#6B7280] font-figtree font-normal text-[16px] leading-[24px] self-start">
                    {subField.subFieldName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchFields;
