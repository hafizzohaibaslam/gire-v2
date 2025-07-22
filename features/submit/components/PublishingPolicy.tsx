"use client";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/features/issues/components/Button";
import { Download } from "lucide-react";
import React, { useState } from "react";
import { publishingPolicyAccordianData } from "../utils/accordianData";

import clsx from "clsx";

const PublishingPolicy = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  const handleAccordionClick = (value: string) => {
    setActiveAccordion(activeAccordion === value ? "" : value);
  };

  return (
    <div>
      <div className="space-y-[30px]">
        <div className="space-y-[25px]">
          <h1 className="font-playfair-display font-semibold text-[32px] lg:text-[48px] leading-[36px] lg:leading-[46px] -tracking-[1px]">
            Publishing Policy
          </h1>
          <p className="text-normal text-[#52525B] text-[16px] leading-[24px] lg:text-[22px] lg:leading-[32px]">
            The submission process at JSSE is designed to be clear and
            accessible, ensuring that all authors can navigate it with ease.
            Below are the key components of the submission process:
          </p>
        </div>
        <Button className="flex items-center gap-[10px]">
          Download Guidelines
          <Download className="w-[20px] h-[20px]" />
        </Button>
      </div>
      {/* Accordian */}
      <Accordion type="single" collapsible className="mt-[50px] w-full">
        {publishingPolicyAccordianData.map((accordian) => {
          return (
            <AccordionItem
              key={accordian.id}
              value={accordian.id}
              className="border-b-[1px] border-[#D9DBE9] py-[38px] group relative"
            >
              <div className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full group-hover:bg-[#d4d6e8] transition-all ease-in-out duration-500"></div>
              <AccordionTrigger
                className={clsx(
                  "w-full text-[#170F49] text-[16px] lg:text-[24px] leading-[24px] lg:leading-[28px] font-medium font-figtree -tracking-[1px]",
                  activeAccordion === accordian.id &&
                    "text-[#3385FF] font-semibold"
                )}
                onClick={() => handleAccordionClick(accordian.id)}
              >
                <div className="flex items-center gap-[10px] justify-between">
                  {accordian.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-[13px] overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                {accordian.content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      {/* Ready to Submit */}
      <div className="bg-[#3385FF] p-[40px] rounded-[16px] text-center space-y-[30px] mt-[100px]">
        <div className="text-white space-y-[23px]">
          <h1 className="font-figtree font-semibold text-[24px] lg:text-[36px] leading-[32px] lg:leading-[48px] tracking-[0.2px]">
            Ready to Submit Your Work?
          </h1>
          <p className="font-figtree font-normal w-full max-w-2xl mx-auto text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px]">
            Complete your submission by sending your files through the form
            below. If you have any questions about formatting or the submission
            process, feel free to contact us we&apos;re here to help!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-[20px]">
          <button className="capitalize font-semibold text-[#3385FF] text-[16px] leading-[100%] gap-[8px] flex justify-center items-center px-[36px] py-[18px] border-[2px] border-[#3385FF] bg-white rounded-[38px] cursor-pointer hover:bg-transparent hover:text-white hover:border-[2px] hover:border-white transition-all duration-300 ease-in-out">
            send file <ArrowRight className="w-[17px] h-[17px]" />
          </button>
          <button className="capitalize text-white border-[2px] border-white hover:bg-white hover:text-[#3385FF] font-semibold text-[16px] leading-[100%] px-[36px] py-[18px] rounded-[38px] cursor-pointer transition-all duration-300 ease-in-out">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishingPolicy;
