import Image from "next/image";
import React from "react";
import Person1 from "@/public/about-us-page/person1.png";

const EditorialTeamCard = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center border-2 border-[#E8EAEE] rounded-[12px]">
      <div className="overflow-hidden">
        <Image
          src={Person1}
          alt="Editorial Team"
          width={100}
          height={208}
          className="w-full lg:w-[220px] h-[208px] object-cover overflow-hidden"
        />
      </div>
      <div className="px-[20px] sm:px-[32px] py-[12px] capitalize space-y-[16px]">
        <h2 className="text-[#19191B] text-[18px] leading-[28px] font-bold">
          dr. alice ahmad
        </h2>
        <p className="text-[#787A82] text-[14px] font-normal leading-[20px]">
          Department of Computer Science, MIT
        </p>
        <p className="text-[#787A82] text-[14px] leading-[20px] font-semibold">
          Associate Editor (AE)
        </p>
      </div>
    </div>
  );
};

export default EditorialTeamCard;
