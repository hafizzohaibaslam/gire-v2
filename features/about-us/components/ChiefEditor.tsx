"use client";
import React, { useState } from "react";
import ChiefEditorImage from "@/public/about-us-page/chief-editor.png";
import Email from "@/public/about-us-page/email.svg";
import Mobile from "@/public/about-us-page/mobile.svg";
import Linkedin from "@/public/about-us-page/linkedin.svg";
import Signature from "@/public/about-us-page/signature.svg";
import ChiefEditorCard from "./ChiefEditorCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";
import { aboutUsTabs } from "../utils/aboutUsTabs";

const ChiefEditor = () => {
  const [activeTab, setActiveTab] = useState<string>("chief-editor");

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
      {/* Chief Editor Tabs */}
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="flex flex-col lg:flex-row gap-[15px] lg:items-center lg:justify-center">
          {aboutUsTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={clsx(
                "text-[16px] sm:text-[20px] font-semibold font-figtree leading-[18px] sm:leading-[24px] px-[25px] py-[16px] rounded-4xl border-[1px] border-[#EEF2F6] cursor-pointer hover:bg-[#3385FF] hover:border-[#3385FF] hover:text-white transition-all duration-300 ease-in-out",
                activeTab === tab.value &&
                  "bg-[#3385FF] border-[#3385FF] text-white"
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab} className="mt-[50px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[50px]">
            {/* Card 1 */}
            {Array.from({ length: 2 }).map((_, index) => (
              <ChiefEditorCard
                key={index}
                image={ChiefEditorImage.src}
                socialMediaIcon={{
                  email: Email.src,
                  phone: Mobile.src,
                  linkedin: Linkedin.src,
                }}
                socialMedia={{
                  email: "hi.robyn.kingsley@gmail.com",
                  phone: "+1 234 567 890",
                  linkedin: "linkedin.com/in/danielcaesar",
                }}
                additionalInfo="Our Chief Editors are dedicated educators and scholars from prestigious institutions, ensuring that our journal maintains the highest academic standards. Their expertise not only enhances the quality of the submissions we receive but also provides invaluable mentorship to our authors, guiding them through the publication process and fostering their development as researchers."
                signature={Signature}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChiefEditor;
