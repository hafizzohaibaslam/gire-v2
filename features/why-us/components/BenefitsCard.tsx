import React from "react";
import Image from "next/image";
import verified from "@/public/why-us-page/verified.svg";
import clsx from "clsx";

type BenefitsCardProps = {
  title: string;
  description: string;
  className?: string;
};

const BenefitsCard = ({ title, description, className }: BenefitsCardProps) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col gap-[20px] lg:flex-row p-[24px] bg-white shadow-xl rounded-[24px]",
        className
      )}
    >
      <div className="self-center rounded-full p-[12px] bg-[#EFF5FF]">
        <Image
          src={verified}
          alt="Verified"
          width={100}
          height={100}
          className="w-[32px] h-[32px]"
        />
      </div>
      <div className="space-y-[8px]">
        <h3 className="font-playfair-display font-medium capitalize text-[#2B2B2B] text-[18px] lg:text-[24px] leading-[100%]">
          {title}
        </h3>
        <p className="text-[#52525B] font-normal text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitsCard;
