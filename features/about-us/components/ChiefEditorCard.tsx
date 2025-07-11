import Image from "next/image";
import React from "react";

type ChiefEditorCardProps = {
  image: string;
  personalInfoIcon: {
    name: string;
    title: string;
    affiliation: string;
  };
  personalInfo: {
    name: string;
    title: string;
    affiliation: string;
  };

  additionalInfo: string;
  signature: string;
};

const ChiefEditorCard = ({
  image,
  personalInfo,
  personalInfoIcon,
  additionalInfo,
  signature,
}: ChiefEditorCardProps) => {
  return (
    <div className="w-full space-y-[40px]">
      {/* Profile Card */}
      <div className="mt-[72px] flex flex-col items-start sm:flex-row sm:items-center gap-[30px]">
        <Image
          src={image}
          alt="Chief Editor"
          width={100}
          height={100}
          className="rounded-full w-[200px] h-[200px]"
        />

        <div className="w-full space-y-[8px]">
          <div className="text-[#5C6168] text-[18px] font-normal leading-[100%] flex items-center gap-2 w-full">
            <Image
              src={personalInfoIcon.name}
              alt="Email"
              width={20}
              height={20}
              className="w-[20px] h-[20px] flex-shrink-0"
            />
            <p className="break-all">{personalInfo.name}</p>
          </div>
          <div className="flex items-center gap-2 text-[#5C6168] text-[18px] font-normal leading-[100%] w-full">
            <Image
              src={personalInfoIcon.title}
              alt="Mobile"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <p className="break-all">{personalInfo.title}</p>
          </div>
          <div className="flex items-center gap-2 text-[#5C6168] text-[18px] font-normal leading-[100%] w-full">
            <Image
              src={personalInfoIcon.affiliation}
              alt="Linkedin"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <p className="break-all">{personalInfo.affiliation}</p>
          </div>
        </div>
      </div>

      {/* Biography */}
      <div className="w-fit space-y-[20px]">
        <h3 className="text-[#5C6168] text-[24px] font-bold leading-[100%] text-center">
          Bio
        </h3>
        <div className="h-[3px] w-[200px] bg-[#5C6168]"></div>
      </div>
      <div className="mx-[40px] mt-[25px] mb-[40px] space-y-[20px] text-[#30353D] text-[18px] font-normal leading-[24px] sm:w-[90%] xl:max-w-lg">
        <p>
          Daniel Caesar brings extensive experience in academic publishing and
          education.
        </p>
        <p>
          As a current professor at a top-tier university, he possesses a deep
          understanding of the academic landscape and the challenges faced by
          young researchers.
        </p>
        <p>
          With a passion for nurturing talent, he leads our editorial team in
          promoting high-quality research.
        </p>
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

      {/* Signature */}
      <div className="mx-[45px]">
        <p className="capitalize text-black text-[18px] lg:text-[22px] leading-[24px] lg:leading-[28px] font-semibold">
          signature
        </p>
        <Image
          src={signature}
          alt="Signature"
          width={100}
          height={100}
          className="w-[250px] h-[100px]"
        />
      </div>
    </div>
  );
};

export default ChiefEditorCard;
