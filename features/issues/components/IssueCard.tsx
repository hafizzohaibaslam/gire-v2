import Image from "next/image";
import React from "react";
import { Download, FileText } from "lucide-react";
import Tags from "@/features/shared/components/Tags";
import EditBtn from "@/features/admin/components/EditBtn";
import { cn } from "@/lib/utils";
import { Issue } from "@/features/admin/lib/types";
import DeleteBtn from "@/features/admin/components/DeleteBtn";
import { areaValues } from "@/lib/areaValues";
import Link from "next/link";
import { splitKeywords } from "@/lib/splitKeywords";
import { handleDownload } from "@/features/shared/utils/downloadFile";

export type IssueCardProps = {
  issue: Issue;
  showEditBtn?: boolean;
  handleEdit?: () => void;
  showDeleteBtn?: boolean;
  handleDelete?: () => void;
  isAdmin?: boolean;
};

const IssueCard = ({
  issue,
  handleEdit = () => {},
  showEditBtn = false,
  showDeleteBtn = false,
  handleDelete = () => {},
  isAdmin = false,
}: IssueCardProps) => {
  const keywords = splitKeywords(issue.keyword);

  const cardContent = (
    <div className="relative">
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-[32px] p-[20px] rounded-[30px] transition-all duration-300 ease-in-out",
          !showEditBtn && "hover:shadow-[0px_0px_10px_4px_rgba(0,0,0,0.1)]"
        )}
      >
        {/* LEFT SIDE */}
        <Image
          src={"/issues-page/card1.svg"}
          alt="card1"
          width={100}
          height={100}
          className="w-full h-full object-cover rounded-[30px]"
        />
        {/* RIGHT SIDE */}
        <div>
          <div className="flex flex-col lg:flex-row gap-[10px] lg:justify-between lg:items-center">
            <p className="font-poppins text-[#3385FF] text-[16px] lg:text-[18px] leading-[20px] tracking-0 font-semibold">
              {issue.name}
            </p>
            <div className="flex items-center gap-[10px]">
              <p className="mr-4 font-poppins text-[#6D6E76] text-[16px] leading-[28px] tracking-0 font-normal">
                {new Date(issue.date || "").toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <div className="flex gap-2">
                {showEditBtn && (
                  <EditBtn handleEdit={handleEdit} className="static" />
                )}
                {showDeleteBtn && <DeleteBtn handleDelete={handleDelete} />}
              </div>
            </div>
          </div>
          <h1 className="font-playfair-display my-[14px] text-[#232536] text-[24px] lg:text-[36px] leading-[32px] lg:leading-[42px] font-semibold tracking-0">
            {issue.title}
          </h1>

          {/* Research Keywords */}
          <div className="flex flex-wrap gap-[10px]">
            <Tags
              tag={areaValues[issue.area as keyof typeof areaValues]}
              className="bg-blue-800"
            />
            {keywords.map((keyword) => (
              <Tags key={keyword} tag={keyword} />
            ))}
          </div>
          {/* Abstract Study */}
          <div className="my-[20px] flex flex-col gap-[4px]">
            <h1 className="font-poppins text-[#232536] text-[24px] leading-[24px] font-semibold tracking-0">
              Abstract
            </h1>
            <p className="font-poppins text-[#6D6E76] text-[16px] font-normal tracking-0">
              {issue.content ||
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cum beatae recusandae suscipit inventore necessitatibus iusto laboriosam voluptatum, molestiae voluptas."}
            </p>
          </div>
          {issue.paperUrl && (
            <div className="my-[20px] gap-4 p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-500" />
                <span className="font-poppins text-[#6D6E76] text-[16px] font-normal tracking-0">
                  PDF uploaded
                </span>
              </div>
              <p className="font-poppins text-[#6D6E76] text-[16px] font-normal tracking-0 underline">
                {issue.paperUrl}
              </p>
            </div>
          )}
          <button
            onClick={(e) => handleDownload(e, issue)}
            className="w-full max-w-lg bg-[#2325360D] py-[15px] font-poppins px-[20px] flex items-center justify-center gap-2 text-[14px] lg:text-[16px] leading-[100%] tracking-0 font-semibold capitalize text-[#232536] rounded-[100px] hover:bg-[#232536] hover:text-white transition-all duration-300 cursor-pointer"
          >
            Download PDF <Download className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );

  return isAdmin ? (
    <div className="relative" key={issue.objId}>
      {cardContent}
    </div>
  ) : (
    <Link href={`/issues/${encodeURIComponent(issue.objId)}`} key={issue.objId}>
      {cardContent}
    </Link>
  );
};

export default IssueCard;
