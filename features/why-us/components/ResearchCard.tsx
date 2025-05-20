import clsx from "clsx";
import Image from "next/image";
import React from "react";

type ResearchCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
};

const ResearchCard = ({
  title,
  description,
  imageUrl,
  className,
}: ResearchCardProps) => {
  return (
    <div>
      <Image
        src={imageUrl}
        alt="Research Card 1"
        width={100}
        height={100}
        className="w-[60px] h-[60px]"
      />
      <h1
        className={clsx(
          "font-playfair-display text-[20px] lg:text-[28px] leading-[28px] lg:leading-[32px] font-semibold mt-[30px] mb-[16px]",
          className
        )}
      >
        {title}
      </h1>
      <p className="text-[16px] text-[#52525B] leading-[24px] font-normal">
        {description}
      </p>
    </div>
  );
};

export default ResearchCard;
