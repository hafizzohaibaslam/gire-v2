import { ChevronsRight } from "lucide-react";
import React from "react";
import OurProcess from "./OurProcess";
import Image from "next/image";
import Arrow from "@/public/submit-page/arrow.png";

const ReviewProcess = () => {
  return (
    <div>
      {/* Submission Process */}
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center rounded-[12px] md:rounded-full  border border-gray-200 overflow-hidden shadow-sm w-full lg:w-[70%]">
          {/* Step 1 */}
          <div className="flex items-center px-6 py-4 space-x-3 w-full relative">
            <Image
              src={Arrow}
              alt="step-1"
              width={20}
              height={20}
              className="absolute right-0 hidden md:block"
            />
            <div className="w-10 h-10 flex items-center justify-center border-2 border-[#945B5C] rounded-full text-[#945B5C] font-medium">
              01
            </div>
            <span className="text-base font-medium text-[#945B5C]">
              Submission
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex items-center px-6 py-4 space-x-3 w-full relative">
            <Image
              src={Arrow}
              alt="step-1"
              width={20}
              height={20}
              className="absolute right-0 hidden md:block"
            />
            <div className="w-10 h-10 flex items-center justify-center border-2 border-[#94815B] rounded-full text-[#94815B] font-medium">
              02
            </div>
            <span className="text-base font-medium text-[#94815B]">Review</span>
          </div>

          <div className="flex items-center px-6 py-4 space-x-3 w-full relative">
            <Image
              src={Arrow}
              alt="step-1"
              width={20}
              height={20}
              className="absolute right-0 hidden md:block"
            />
            <div className="w-10 h-10 flex items-center justify-center border-2 border-[#5B9476] rounded-full text-[#5B9476] font-medium">
              03
            </div>
            <span className="text-base font-medium text-[#5B9476]">
              Revision
            </span>
          </div>

          {/* Step 4 */}
          <div className="flex items-center px-6 py-4 space-x-3 w-full relative">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-[#5B8294] rounded-full text-[#5B8294] font-medium">
              04
            </div>
            <span className="text-base font-medium text-[#5B8294]">
              Publication
            </span>
          </div>
        </div>
      </div>
      {/* Progress Steps */}
      <div className="px-[16px] py-[12px] flex flex-row items-center flex-wrap border-[1px] border-[#00000012] rounded-[12px] lg:rounded-full my-[50px] overflow-x-scroll">
        {ProgressStepsData.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="px-[11px] py-[12px] text-center">
              <h4 className="font-figtree font-semibold text-[16px] lg:text-[14px] leading-[18px] text-[#0D0B26]">
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
      {/* Our Process */}
      <div className="space-y-[50px]">
        <h1 className="font-playfair-display font-semibold text-[24px] lg:text-[48px] leading-[24px] lg:leading-[46px] text-black">
          Our Process
        </h1>
        <OurProcess />
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
