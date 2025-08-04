"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import clsx from "clsx";
import React, { useState } from "react";
import { faqsData } from "../utils/faqsData";

const FAQs = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  const handleAccordionClick = (value: string) => {
    setActiveAccordion(activeAccordion === value ? "" : value);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-[40px] lg:px-[100px] mb-[120px]">
      <div className="space-y-[20px] flex flex-col items-center justify-center text-center">
        <h1 className="font-playfair-display font-semibold text-[25px] lg:text-[48px] leading-[24px] lg:leading-[46px]">
          FAQs
        </h1>
        <p className="font-inter text-[18px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-normal text-[#5A7184]">
          Frequently Asked Questions{" "}
        </p>
      </div>
      <div className="mt-[40px] shadow-lg rounded-[18px] max-w-[1440px] mx-auto  lg:px-[90px]">
        <Accordion
          type="single"
          collapsible
          className="mt-[50px] w-full p-[38px]"
        >
          {faqsData.map((faq) => {
            return (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b-[1px] border-[#D9DBE9] py-[38px] group relative"
              >
                <div className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full group-hover:bg-[#d4d6e8] transition-all ease-in-out duration-500"></div>
                <AccordionTrigger
                  className={clsx(
                    "w-full text-[#170F49] text-[16px] lg:text-[24px] leading-[24px] lg:leading-[28px] font-medium font-figtree -tracking-[1px]",
                    activeAccordion === faq.id && "text-[#3385FF] font-semibold"
                  )}
                  onClick={() => handleAccordionClick(faq.id)}
                >
                  <div className="flex items-center gap-[10px] justify-between">
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="mt-[13px] text-[#5A7184] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] font-inter font-normal">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
