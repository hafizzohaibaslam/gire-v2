"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { Feature } from "../utils/features";
import FeaturesPopUp from "./FeaturesPopUp";

type FeaturesCardProps = {
  feature: Feature;
};

const FeaturesCard = ({ feature }: FeaturesCardProps) => {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  return (
    <>
      <div
        className="flex flex-col gap-[20px] cursor-pointer hover:shadow-[0px_0px_10px_4px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out rounded-[30px] p-[20px]"
        onClick={() => setOpenPopUp(true)}
      >
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
