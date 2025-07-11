import React from "react";
import { publishDetails } from "../utils/publishDetails";

const PublishDetails = () => {
  return (
    <div className="px-[40px] py-[40px] lg:px-[100px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[50px] items-start">
        {publishDetails.map((detail) => (
          <div key={detail.id} className="space-y-[16px]">
            <h2 className="font-playfair-display text-black text-[24px] lg:text-[32px] leading-[32px] lg:leading-[40px] font-semibold -tracking-[1px]">
              {detail.title}
            </h2>
            <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal">
              {detail.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublishDetails;
