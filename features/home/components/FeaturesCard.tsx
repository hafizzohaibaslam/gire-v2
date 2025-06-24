"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Feature } from "../utils/features";
import FeaturesPopUp from "./FeaturesPopUp";

type FeaturesCardProps = {
  feature: Feature;
};

const FeaturesCard = ({ feature }: FeaturesCardProps) => {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div
          className={clsx(
            "flex items-center justify-center rounded-full p-[12px] w-fit"
          )}
          style={{ backgroundColor: `#${feature.bgColor}` }}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            width={100}
            height={100}
            className="w-[24px] h-[24px]"
          />
        </div>
        <h1 className="font-playfair-display capitalize text-black text-[24px] lg:text-[28px] leading-[20px] lg:leading-[28px] font-semibold">
          {feature.title}
        </h1>
        <p className="text-[#52525B] text-[20px] leading-[20px] lg:leading-[28px] font-normal">
          {feature.description}
        </p>
        <button
          onClick={() => setOpenPopUp(true)}
          className="w-fit flex items-center gap-2 text-[16px] leading-[100%] font-medium text-[#3385FF] lg:px-[26px] lg:py-[21px] px-[16px] py-[12px] border-[1px] border-[#3385FF] rounded-[48px] hover:bg-[#3385FF] hover:text-white transition-all duration-300 cursor-pointer"
        >
          view <ArrowRight className="w-[17px] h-[17px]" />
        </button>
      </div>
      {/* Pop uo */}
      <FeaturesPopUp
        feature={feature}
        handleClose={() => setOpenPopUp(false)}
        openPopUp={openPopUp}
      />
    </>
  );
};

export default FeaturesCard;
