"use client";
import React, { useState } from "react";
import Email from "@/public/about-us-page/email.svg";
import Mobile from "@/public/about-us-page/mobile.svg";
import Linkedin from "@/public/about-us-page/linkedin.svg";
// import Signature from "@/public/about-us-page/signature.svg";
import ChiefEditorCard from "./ChiefEditorCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";
import { aboutUsTabs } from "../utils/aboutUsTabs";
import EditorialTeam from "./Reviewers";
import AdvisoryBoard from "./AdvisoryBoard";
import { Editor as EditorType } from "@/features/admin/lib/types";
import { useGenericGet } from "@/features/shared/hooks/useGenericGet";
import Skeleton from "@/features/shared/components/Skeleton";

const ChiefEditor = () => {
  const [activeTab, setActiveTab] = useState<string>("chief-editor");

  const {
    data: allData,
    isLoading,
    isError,
  } = useGenericGet<EditorType>({ url: "/api/editors" });

  const handleTabChange = (value: string) => {
    setActiveTab(value);

    // Smooth scroll to the corresponding section
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] lg:pt-[100px] max-w-[1440px] mx-auto">
        {/* Chief Editor Tabs */}
        <Tabs value={activeTab} onValueChange={handleTabChange}>
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

          {/* Introduction */}
          <div className="space-y-[16px] capitalize mt-[50px]">
            <h1 className="font-playfair-display text-black text-[30px] text-center lg:text-[48px] leading-[38px] lg:leading-[46px] font-semibold -tracking-[1px]">
              chief editor
            </h1>
            <p className="text-[#52525B] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>

          {isLoading && (
            <div className="mt-[60px]">
              <Skeleton />
            </div>
          )}

          {!isLoading && isError && (
            <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
              Error loading chief editors
            </div>
          )}

          {!isLoading && !isError && allData && allData.length === 0 && (
            <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
              No chief editors found
            </div>
          )}

          <TabsContent value={activeTab}>
            <div
              id="chief-editor"
              className="grid grid-cols-1 xl:grid-cols-2 gap-[50px]"
            >
              {/* Card 1 */}
              {allData &&
                allData.length > 0 &&
                allData.map((editor, index) => (
                  <ChiefEditorCard
                    key={index}
                    image={editor.imgUrl}
                    personalInfoIcon={{
                      name: Email.src,
                      title: Mobile.src,
                      affiliation: Linkedin.src,
                    }}
                    bio={editor.bio}
                    personalInfo={{
                      name: editor.name,
                      title: editor.title,
                      affiliation: editor.affiliation,
                    }}
                    additionalInfo="Our Chief Editors are dedicated educators and scholars from prestigious institutions, ensuring that our journal maintains the highest academic standards. Their expertise not only enhances the quality of the submissions we receive but also provides invaluable mentorship to our authors, guiding them through the publication process and fostering their development as researchers."
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <AdvisoryBoard />
      <EditorialTeam />
    </>
  );
};

export default ChiefEditor;
