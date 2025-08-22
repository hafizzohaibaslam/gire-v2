import React from "react";
import { publishDetails } from "../utils/publishDetails";
// import Image from "next/image";

const PublishDetails = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-[50px]">
      {publishDetails.map((detail) => (
        <div
          key={detail.id}
          className="flex flex-col gap-8 lg:gap-[50px] lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="space-y-[16px] flex-1">
            <h2 className="font-playfair-display text-black text-[24px] lg:text-[32px] leading-[32px] lg:leading-[40px] font-semibold -tracking-[1px]">
              {detail.title}
            </h2>
            <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal">
              {detail.details}
            </p>
          </div>
          <div className="flex-1">
            <div className="w-full h-[350px] flex items-center justify-center bg-gray-200">
              <h1 className="text-black text-[24px] lg:text-[32px] leading-[32px] lg:leading-[40px] font-semibold -tracking-[1px]">
                Image
              </h1>
            </div>
            {/* <Image
                src={detail.image}
                alt={detail.title}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublishDetails;
