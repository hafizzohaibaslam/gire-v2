import React from "react";
import AdvisoryBoardCard from "./AdvisoryBoardCard";

const AdvisoryBoard = () => {
  return (
    <div
      id="advisory-board"
      className="max-w-[1440px] mx-auto px-[40px] lg:px-[100px]"
    >
      {/* Introduction */}
      <div className="space-y-[16px] capitalize">
        <h1 className="font-playfair-display text-black text-[30px] text-center lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
          Advisory Board
        </h1>
        <p className="text-[#52525B] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
      </div>
      {/* Advisory Board Members */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] mt-[60px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <AdvisoryBoardCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default AdvisoryBoard;
