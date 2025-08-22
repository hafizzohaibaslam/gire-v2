"use client";
import { Feature, features } from "@/features/why-us/utils/features";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col gap-[20px] lg:gap-[50px] items-center justify-between">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default Features;

type FeatureCardProps = {
  feature: Feature;
};

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-[20px] rounded-[30px]">
        <div
          className={clsx(
            "flex items-center justify-center rounded-full p-[12px] w-fit"
          )}
          style={{ backgroundColor: `${feature.bgColor}` }}
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
        <p className="text-[#52525B] text-[20px] leading-[24px] lg:leading-[28px] font-normal">
          {feature.description}
        </p>
      </div>
    </div>
  );
};
