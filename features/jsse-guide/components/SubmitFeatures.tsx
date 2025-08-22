"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";
import React, { useState } from "react";
import { tabHeaders } from "../utils/tabHeaders";
import RenderComponent from "./RenderComponent";

const SubmitFeatures = () => {
  const [activeTab, setActiveTab] = useState<string>("author-guidelines");

  return (
    <div className="space-y-[50px] bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] pt-[80px] max-w-[1440px] mx-auto">
      {/* Tabs */}
      <div>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
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
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-[50px]">
            <RenderComponent activeTab={activeTab} tabValues={tabHeaders} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SubmitFeatures;
