"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";
import React, { useState } from "react";
import { tabHeaders } from "../utils/tabHeaders";
import AuthorGuidelines from "./AuthorGuidelines";
import Templates from "./Templates";
import ReviewProcess from "./ReviewProcess";

const SubmitFeatures = () => {
  const [activeTab, setActiveTab] = useState<string>("author-guidelines");

  return (
    <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] pt-[80px] max-w-[1440px] mx-auto">
      {/* Tabs */}
      <div>
        <Tabs defaultValue={activeTab}>
          <TabsList className="flex flex-col lg:flex-row gap-[15px] lg:items-center lg:justify-center">
            {tabHeaders.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={clsx(
                  "text-[16px] sm:text-[20px] font-semibold font-figtree leading-[18px] sm:leading-[24px] px-[25px] py-[16px] rounded-4xl border-[1px] border-[#EEF2F6] cursor-pointer hover:bg-[#3385FF] hover:border-[#3385FF] hover:text-white transition-all duration-300 ease-in-out",
                  activeTab === tab.value &&
                    "bg-[#3385FF] border-[#3385FF] text-white"
                )}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Author Guidelines Content */}
          <TabsContent value="author-guidelines" className="mt-[50px]">
            <AuthorGuidelines />
          </TabsContent>
          {/* Templates Content */}
          <TabsContent value="templates" className="mt-[50px]">
            <Templates />
          </TabsContent>
          {/* Review Process Content */}
          <TabsContent value="review-process" className="mt-[50px]">
            <ReviewProcess />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SubmitFeatures;
