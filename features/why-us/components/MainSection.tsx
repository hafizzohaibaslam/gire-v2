"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";
import ReadersTabsContent from "./ReadersTabsContent";
import AuthorsTabsContent from "./AuthorsTabsContent";

const MainSection = () => {
  const [activeTab, setActiveTab] = useState<"for-authors" | "for-readers">(
    "for-authors"
  );

  const handleTabChange = (value: "for-authors" | "for-readers") => {
    setActiveTab(value);
  };

  return (
    <div className="bg-white -mt-[150px] lg:-mt-[355px] px-[20px] py-[40px] sm:px-[40px] lg:px-[100px] lg:py-[100px] max-w-[1440px] mx-auto">
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(value) =>
          handleTabChange(value as "for-authors" | "for-readers")
        }
      >
        <TabsList className="flex flex-col lg:flex-row gap-[15px] lg:items-center lg:justify-center mb-[50px]">
          {tabsConfig.map((tab) => (
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
        {/* For Authors */}
        {tabsConfig.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MainSection;

const tabsConfig = [
  {
    label: "For Authors",
    value: "for-authors",
    content: <AuthorsTabsContent />,
  },
  {
    label: "For Readers",
    value: "for-readers",
    content: <ReadersTabsContent />,
  },
];
