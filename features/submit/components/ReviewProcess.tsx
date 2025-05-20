import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import ChartImg from "@/public/submit-page/chart.svg";

const ReviewProcess = () => {
  return (
    <div className="space-y-[50px]">
      {/* Submission Process */}
      <div className="flex items-center justify-center py-10">
        <div className="flex rounded-full border border-gray-200 overflow-hidden shadow-sm">
          {/* Step 1 */}
          <div className="flex items-center px-6 py-4 space-x-3">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-blue-500 rounded-full text-blue-500 font-medium">
              01
            </div>
            <span className="text-base font-medium text-gray-900">
              Submission
            </span>
          </div>

          {/* Chevron Separator */}
          <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[16px] border-l-white shadow-md -ml-[1px]"></div>

          {/* Step 2 */}
          <div className="flex items-center px-6 py-4 space-x-3">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-blue-500 rounded-full text-blue-500 font-medium">
              02
            </div>
            <span className="text-base font-medium text-gray-900">Review</span>
          </div>

          {/* Chevron Separator */}
          <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[16px] border-l-white shadow-md -ml-[1px]"></div>

          {/* Step 3 */}
          <div className="flex items-center px-6 py-4 space-x-3">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-blue-500 rounded-full text-blue-500 font-medium">
              03
            </div>
            <span className="text-base font-medium text-gray-900">
              Publication
            </span>
          </div>
        </div>
      </div>
      {/* Progress Steps */}
      <div className="px-[20px] py-[16px] flex flex-row flex-wrap items-center border-[1px] border-[#00000012] rounded-full">
        {ProgressStepsData.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="px-[17px] py-[16px] text-center">
              <h4 className="font-figtree font-semibold text-[14px] leading-[20px] text-[#0D0B26]">
                {step.title}
              </h4>
            </div>
            {index !== ProgressStepsData.length - 1 && (
              <span>
                <ChevronsRight className="w-[24px] h-[24px] text-[#3385FF]" />
              </span>
            )}
          </div>
        ))}
      </div>
      {/* Chart */}
      <div>
        <Image
          src={ChartImg}
          alt="chart"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ReviewProcess;

const ProgressStepsData = [
  {
    id: "1",
    title: "Preparation",
  },
  {
    id: "2",
    title: "Submission",
  },
  {
    id: "3",
    title: "Initial Editorial Screening 1-2 weeks",
  },
  {
    id: "4",
    title: "Peer Review 4-6 weeks",
  },
  {
    id: "5",
    title: "Revision 2-4 weeks",
  },
  {
    id: "6",
    title: "Final Editor Review 1-2 weeks",
  },
  {
    id: "7",
    title: "Publication ",
  },
];
