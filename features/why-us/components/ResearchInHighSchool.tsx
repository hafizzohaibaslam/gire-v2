import Image from "next/image";
import React from "react";
import ResearchImg from "@/public/why-us-page/research.png";

const ResearchInHighSchool = () => {
  return (
    <div className="w-full px-[40px] py-[40px] lg:px-[100px] lg:w-[1440px] lg:mx-auto space-y-[80px]">
      {/* Heading */}
      <div className="space-y-[16px]">
        <h1 className="font-playfair-display text-black text-[30px] lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
          Why Start Research in High School?
        </h1>
        <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal max-w-6xl">
          Engaging in research from a young age is not merely an academic
          exercise; it is a transformative experience that shapes students into
          critical thinkers and informed citizens. Here are several key reasons
          why fostering research skills in high school is essential.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={ResearchImg}
          alt="Research in High School"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ResearchInHighSchool;
