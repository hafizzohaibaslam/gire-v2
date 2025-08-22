import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import ManuscriptImage from "@/public/submit-page/manuscript.svg";

type ManuscriptCardProps = {
  id: number;
  title: string;
};

const ManuscriptCard = ({ title }: ManuscriptCardProps) => {
  return (
    <div className="bg-white shadow-xl rounded-[20px] p-[40px] flex flex-col sm:flex-row sm:items-center gap-[32px]">
      {/* Left */}
      <div>
        <Image
          src={ManuscriptImage}
          alt="Manuscript"
          width={100}
          height={100}
          className="w-[75px] h-[75px] object-cover"
        />
      </div>
      {/* Right */}
      <div className="flex-1 space-y-[20px]">
        <h1 className="text-[#061C3D] font-playfair-display font-semibold text-[18px] lg:text-[24px] leading-[24px] lg:leading-[32px]">
          {title}
        </h1>
        <button className="w-full flex justify-center items-center gap-[12px] py-[6px] px-[6px] text-[#3385FF] font-bold text-[16px] leading-[48px] border-[1px] border-[#3385FF] rounded-[8px] cursor-pointer hover:bg-[#3385FF] hover:text-white transition-all duration-300 ease-in-out">
          Download Template
          <Download className="w-[22px] h-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default ManuscriptCard;
