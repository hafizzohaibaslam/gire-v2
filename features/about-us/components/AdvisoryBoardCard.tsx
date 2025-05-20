import Image from "next/image";
import React from "react";
import UniversityLogo from "@/public/about-us-page/university.png";

const AdvisoryBoardCard = () => {
  return (
    <div className="bg-[#E8EAEE] space-y-[40px] p-[16px] rounded-md">
      <div className="flex justify-center">
        <Image
          src={UniversityLogo}
          alt="University Logo"
          width={100}
          height={100}
          className="w-[200px] h-[200px]"
        />
      </div>
      <div className="bg-white space-y-[10px] p-[20px] capitalize rounded-[12px]">
        <h2 className="text-[#19191B] text-[18px] font-semibold leading-[28px]">
          harvard university
        </h2>
        <h4 className="text-[#19191B] text-[14px] font-semibold leading-[100%]">
          dr. alice anderson
        </h4>
        <div className="flex flex-col gap-[10px] space-y-[5px]">
          <p className="text-[#787A82] text-[14px] font-normal leading-[25px]">
            <b>position: </b> associate professor
          </p>
          <p className="text-[#787A82] text-[14px] font-normal leading-[25px]">
            <b>affiliation: </b> harvard university
          </p>
          <p className="text-[#787A82] text-[14px] font-normal leading-[25px]">
            <b>field: </b> artificial intelligence
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoardCard;
