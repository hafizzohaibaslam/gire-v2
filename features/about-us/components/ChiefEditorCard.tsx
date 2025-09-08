import Image from "next/image";
import React from "react";

type ChiefEditorCardProps = {
  image: string;
  personalInfo: {
    name: string;
    title: string;
    affiliation: string;
  };

  bio: string;
  additionalInfo: string;
};

const ChiefEditorCard = ({
  image,
  personalInfo,
  additionalInfo,

  bio,
}: ChiefEditorCardProps) => {
  return (
    <div className="w-full space-y-[40px]">
      {/* Profile Card */}
      <div className=" flex flex-col items-start sm:flex-row sm:items-center gap-[30px]">
        <Image
          src={image}
          alt="Chief Editor"
          width={100}
          height={100}
          className="rounded-full w-[200px] h-[200px]"
        />

        <div className="w-full space-y-[8px]">
          <p className="break-all text-[#5C6168] text-[22px] font-semibold leading-[100%] w-full font-playfair-display">
            {personalInfo.name}
          </p>
          <p className="break-all text-[#5C6168] text-[20px] font-medium leading-[100%] w-full font-playfair-display">
            {personalInfo.title}
          </p>
          <p className="break-all text-[#5C6168] text-[18px] font-normal leading-[100%] w-full font-playfair-display">
            {personalInfo.affiliation}
          </p>
        </div>
      </div>

      {/* Biography */}
      <div className="w-fit space-y-[20px]">
        <h3 className="text-[#5C6168] text-[24px] font-bold leading-[100%] text-center">
          Bio
        </h3>
        <div className="h-[3px] w-[200px] bg-[#5C6168]"></div>
      </div>
      <div className="mx-[40px] mt-[25px] mb-[40px] space-y-[20px] text-[#30353D] text-[18px] font-normal leading-[24px] sm:w-[90%] xl:max-w-lg min-h-[220px] flex items-start">
        <p>{bio}</p>
      </div>

      {/* Additional Information */}
      <div className="w-fit space-y-[20px]">
        <h3 className="text-[#5C6168] text-[24px] font-bold leading-[100%] text-center">
          Additional Info
        </h3>
        <div className="h-[3px] w-[200px] bg-[#5C6168]"></div>
      </div>
      <div className="mx-[40px] mt-[25px] mb-[40px] space-y-[20px] text-[#30353D] text-[18px] font-normal leading-[24px] sm:w-[90%] xl:max-w-lg">
        <p>{additionalInfo}</p>
      </div>
    </div>
  );
};

export default ChiefEditorCard;
