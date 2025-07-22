import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Download } from "lucide-react";
import Tags from "@/features/shared/components/Tags";
import EditBtn from "@/features/admin/components/EditBtn";
import { cn } from "@/lib/utils";
import { TrendingTopic } from "@/features/admin/lib/types";

export type TrendingTopicCardProps = {
  topic: TrendingTopic;
  showEditButton?: boolean;
  handleEdit?: () => void;
};

const TrendingTopicCard = ({
  topic,
  showEditButton = false,
  handleEdit = () => {},
}: TrendingTopicCardProps) => {
  return (
    <div className="relative">
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-[32px] p-[20px] rounded-[30px] transition-all duration-300 ease-in-out",
          !showEditButton && "hover:shadow-[0px_0px_10px_4px_rgba(0,0,0,0.1)]"
        )}
      >
        {/* LEFT SIDE */}
        <Image
          src={topic.image}
          alt="card1"
          width={100}
          height={100}
          className="w-full h-full object-cover rounded-[30px]"
        />
        {/* RIGHT SIDE */}
        <div>
          <div className="flex flex-col lg:flex-row gap-[10px] lg:justify-between lg:items-center">
            <p className="font-playfair-display text-[#3385FF] text-[16px] lg:text-[18px] leading-[20px] tracking-[3px] font-semibold">
              {topic.author}
            </p>
            <div className="flex items-center gap-[10px]">
              <p className="mr-4 font-playfair-display text-[#6D6E76] text-[16px] leading-[28px] font-normal">
                {topic.date}
              </p>
              {showEditButton && (
                <EditBtn handleEdit={handleEdit} className="static" />
              )}
            </div>
          </div>
          <h1 className="font-playfair-display my-[14px] text-[#232536] text-[24px] lg:text-[36px] leading-[32px] lg:leading-[42px] font-semibold -tracking-[2px]">
            {topic.title}
          </h1>

          {/* Research Keywords */}
          <div className="flex flex-wrap gap-[10px]">
            <Tags tag={topic.researchField} className="bg-blue-800" />
            {topic.researchKeywords.map((keyword) => (
              <Tags key={keyword} tag={keyword} />
            ))}
          </div>
          <p className="font-playfair-display my-[20px] text-[#6D6E76] text-[20px] leading-[28px] font-normal">
            {topic.doi}
          </p>
          <Button
            className="!max-w-full w-full flex justify-center items-center"
            icon={<Download className="w-[18px] h-[18px]" />}
          >
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicCard;
