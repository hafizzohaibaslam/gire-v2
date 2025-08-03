import Button from "@/features/issues/components/Button";
import Tags from "@/features/shared/components/Tags";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import PeriodicTable from "@/public/issues-open-page/periodic-table.svg";
import { Issue } from "@/features/admin/lib/types";
import { splitKeywords } from "@/lib/splitKeywords";
import { areaValues } from "@/lib/areaValues";
import { handleDownload } from "@/features/shared/utils/downloadFile";

type IssueDetailsProps = {
  issue: Issue;
};

const IssueDetails = ({ issue }: IssueDetailsProps) => {
  const keywords = splitKeywords(issue.keyword);

  return (
    <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] pt-[100px] max-w-[1440px] mx-auto">
      {/* Introduction */}
      <div>
        <div className="flex flex-col  gap-[10px]">
          <p className="font-playfair-display text-[#3385FF] text-[16px] lg:text-[18px] leading-[20px] tracking-[2px] font-semibold">
            {issue.name}
          </p>
          <div className="flex items-center gap-[10px]">
            <p className="mr-4 font-playfair-display text-[#6D6E76] text-[16px] leading-[28px] font-normal tracking-[2px]">
              {issue.date
                ? new Date(issue.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "N/A"}
            </p>
          </div>
        </div>
        <h1 className="font-playfair-display my-[14px] text-[#232536] text-[24px] lg:text-[36px] leading-[32px] lg:leading-[42px] font-semibold tracking-[2px]">
          {issue.title}
        </h1>
        {/* Tags */}
        <div className="flex flex-wrap gap-[10px]">
          <Tags
            tag={areaValues[issue.area as keyof typeof areaValues]}
            className="bg-blue-800"
          />
          {keywords.map((word) => (
            <Tags key={word} tag={word} />
          ))}
        </div>
        <p className="font-playfair-display my-[20px] text-[#6D6E76] text-[20px] leading-[28px] font-normal tracking-[2px]">
          {issue.paperUrl}
        </p>
        <Button
          className="!max-w-full w-full flex justify-center items-center"
          icon={<Download className="w-[18px] h-[18px]" />}
          onClick={(e) => handleDownload(e, issue)}
        >
          Download PDF
        </Button>
      </div>
      {/* Abstract Study */}
      <div className="rounded-[20px] flex flex-col justify-center items-center gap-[10px] space-y-[70px]">
        <Image
          src={PeriodicTable}
          alt="abstract"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: issue.content }}
      />
    </div>
  );
};

export default IssueDetails;
