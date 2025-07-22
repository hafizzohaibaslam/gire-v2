import React from "react";
import OurProcess from "./OurProcess";
import Image from "next/image";
import Arrow from "@/public/submit-page/arrow.png";
import clsx from "clsx";

const ReviewProcess = () => {
  return (
    <div>
      {/* Submission Process */}
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center rounded-[12px] md:rounded-full border border-gray-200 overflow-hidden shadow-sm w-full lg:w-[80%]">
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
      <div className="w-full lg:w-[80%] md:mx-auto px-[16px] py-[12px] grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr_1fr] gap-[10px] border-[1px] border-[#00000012] rounded-[12px] lg:rounded-full my-[50px]">
        {Object.entries(progressSteps).map(([key, value], index) => {
          return (
            <div
              key={key}
              className="flex flex-row md:flex-col items-center md:items-start gap-[10px] py-4"
            >
              <div className="md:hidden flex flex-row items-center gap-[10px]">
                <div
                  style={{
                    borderColor: value.backgroundColor,
                    color: value.textColor,
                  }}
                  className={clsx(
                    "w-10 h-10 flex items-center justify-center border-2 rounded-full font-medium"
                  )}
                >
                  {`0${index + 1}`}
                </div>
              </div>
              {value.items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-[10px]"
                  >
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: value.textColor,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
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

const progressSteps = {
  Submissions: {
    items: ["Preparation", "Submission"],
    backgroundColor: "#945B5C",
    textColor: "#945B5C",
  },
  Review: {
    items: ["Initial Editorial Screening 1-2 weeks", "Peer Review 4-6 weeks"],
    backgroundColor: "#94815B",
    textColor: "#94815B",
  },
  Revision: {
    items: ["Revision 2-4 weeks", "Final Editor Review 1-2 weeks"],
    backgroundColor: "#5B9476",
    textColor: "#5B9476",
  },
  Publication: {
    items: ["Publication"],
    backgroundColor: "#5B8294",
    textColor: "#5B8294",
  },
};
