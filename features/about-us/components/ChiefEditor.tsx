import Image from "next/image";
import React from "react";
import EmptyDiv from "@/public/about-us-page/empty-div.svg";
import { MapPin } from "lucide-react";
import ChiefEditorImage from "@/public/about-us-page/chief-editor.png";
import Email from "@/public/about-us-page/email.svg";
import Mobile from "@/public/about-us-page/mobile.svg";
import Linkedin from "@/public/about-us-page/linkedin.svg";
import Signature from "@/public/about-us-page/signature.svg";

const ChiefEditor = () => {
  return (
    <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] lg:pt-[100px] max-w-[1440px] mx-auto">
      {/* Introduction */}
      <div className="space-y-[16px] capitalize">
        <h1 className="font-playfair-display text-black text-[30px] text-center lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
          chief editor
        </h1>
        <p className="text-[#52525B] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr]">
        {/* Left Section */}
        <div className="bg-[#E8EAEE] px-[40px] py-[40px] space-y-[40px]">
          <div className="space-y-[21px]">
            <h1 className="capitalize text-[#5C6168] text-[20px] lg:text-[37px] font-bold leading-[100%]">
              daniel <br /> caesar
            </h1>
            <div className="space-y-[8px]">
              <div className="text-[#5C6168] text-[18px] font-normal leading-[100%] flex items-center gap-2">
                <Image src={EmptyDiv} alt="Empty div" width={20} height={20} />
                <p>Professor of Environmental Science</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-[20px] h-[20px]" />
                <p className="capitalize text-[#5C6168] text-[18px] font-normal leading-[100%] flex items-center gap-2">
                  berlin, germany
                </p>
              </div>
            </div>
          </div>
          <div className="text-[#5C6168] text-[18px] font-semibold leading-[100%] space-y-[8px]">
            <p>Professor of Environmental Science</p>
            <div className="space-y-[8px]">
              <p>University</p>
              <p>Stanford University, Env. Science Dept.</p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full space-y-[40px]">
          {/* Profile Card */}
          <div className="flex flex-col lg:flex-row mx-[45px] mt-[72px] lg:items-center gap-[40px]">
            <Image
              src={ChiefEditorImage}
              alt="Chief Editor"
              width={100}
              height={100}
              className="rounded-full w-[200px] h-[200px]"
            />

            <div className="space-y-[8px]">
              <div className="text-[#5C6168] text-[18px] font-normal leading-[100%] flex items-center gap-2">
                <Image
                  src={Email}
                  alt="Email"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
                <p>hi.robyn.kingsley@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 text-[#5C6168] text-[18px] font-normal leading-[100%]">
                <Image src={Mobile} alt="Mobile" width={20} height={20} />
                <p>+1 234 567 890</p>
              </div>
              <div className="flex items-center gap-2 text-[#5C6168] text-[18px] font-normal leading-[100%]">
                <Image src={Linkedin} alt="Linkedin" width={20} height={20} />
                <p>linkedin.com/in/danielcaesar</p>
              </div>
            </div>
          </div>
          {/* Biography */}
          <div className="">
            <div className="w-fit space-y-[20px]">
              <h3 className="text-[#5C6168] text-[24px] font-bold leading-[100%] text-center">
                Bio
              </h3>
              <div className="h-[3px] w-[200px] bg-[#5C6168]"></div>
            </div>
            <div className="mx-[40px] mt-[25px] mb-[40px] space-y-[20px] text-[#30353D] text-[18px] font-normal leading-[24px] max-w-lg">
              <p>
                Daniel Caesar brings extensive experience in academic publishing
                and education.
              </p>
              <p>
                As a current professor at a top-tier university, he possesses a
                deep understanding of the academic landscape and the challenges
                faced by young researchers.
              </p>
              <p>
                With a passion for nurturing talent, he leads our editorial team
                in promoting high-quality research.
              </p>
            </div>
          </div>
          {/* Additional Information */}
          <div className="">
            <div className="w-fit space-y-[20px]">
              <h3 className="text-[#5C6168] text-[24px] font-bold leading-[100%] text-center">
                Additional Info
              </h3>
              <div className="h-[3px] w-[200px] bg-[#5C6168]"></div>
            </div>
            <div className="mx-[40px] mt-[25px] mb-[40px] space-y-[20px] text-[#30353D] text-[18px] font-normal leading-[24px] max-w-lg">
              <p>
                Our Chief Editors are dedicated educators and scholars from
                prestigious institutions, ensuring that our journal maintains
                the highest academic standards. Their expertise not only
                enhances the quality of the submissions we receive but also
                provides invaluable mentorship to our authors, guiding them
                through the publication process and fostering their development
                as researchers.
              </p>
            </div>
          </div>
          {/* Signature */}
          <div className="mx-[45px]">
            <p className="capitalize text-black text-[18px] lg:text-[22px] leading-[24px] lg:leading-[28px] font-semibold">
              signature
            </p>
            <Image
              src={Signature}
              alt="Signature"
              width={100}
              height={100}
              className="w-[250px] h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiefEditor;
