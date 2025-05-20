import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Download } from "lucide-react";
import Tags from "@/features/shared/components/Tags";

type TrendingTopicCardProps = {
  image: string;
  author: string;
  date: string;
  title: string;
  tags: string[];
  doi: string;
};

const TrendingTopicCard = ({
  image,
  author,
  date,
  title,
  tags,
  doi,
}: TrendingTopicCardProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
      {/* LEFT SIDE */}
      <Image
        src={image}
        alt="card1"
        width={100}
        height={100}
        className="w-full h-full object-cover rounded-[30px]"
      />
      {/* RIGHT SIDE */}
      <div>
        <div className="flex flex-col lg:flex-row gap-[10px] lg:justify-between lg:items-center">
          <p className="font-figtree text-[#3385FF] text-[16px] lg:text-[18px] leading-[20px] tracking-[3px] font-semibold">
            {author}
          </p>
          <p className="font-figtree text-[#6D6E76] text-[16px] leading-[28px] font-normal">
            {date}
          </p>
        </div>
        <h1 className="font-figtree my-[14px] text-[#232536] text-[24px] lg:text-[36px] leading-[32px] lg:leading-[42px] font-semibold -tracking-[2px]">
          {title}
        </h1>
        {/* Tags */}
        <div className="flex flex-wrap gap-[10px]">
          {tags.map((tag) => (
            <Tags key={tag} tag={tag} />
          ))}
        </div>
        <p className="font-figtree my-[20px] text-[#6D6E76] text-[20px] leading-[28px] font-normal">
          {doi}
        </p>
        <Button icon={<Download className="w-[18px] h-[18px]" />}>
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default TrendingTopicCard;
