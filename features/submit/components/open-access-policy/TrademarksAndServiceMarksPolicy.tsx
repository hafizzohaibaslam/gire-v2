import React from "react";

const TrademarksAndServiceMarksPolicy = () => {
  return (
    <div>
      <div className="space-y-[20px]">
        <p className="font-inter text-[16px] leading-[24px]">
          Certain names, graphics, logos, icons, designs, words, titles, or
          phrases on this website or within JSSE journal articles may constitute
          trade names, trademarks, or service marks of JSSE or other entities.
          As is customary in scholarly publications, trademarks and service
          marks are not necessarily identified with the trademark (TM), service
          mark (SM), or registered trademark (R) symbols. The omission of these
          symbols does not imply the absence of a trademark registration.
        </p>
        <p className="font-inter text-[16px] leading-[24px]">
          The display of trademarks on this website does not imply that a
          license of any kind has been granted. JSSE, and any associated logos
          or marks, are the exclusive property of the organization and its
          affiliates.
        </p>
      </div>
      <div className="space-y-[20px] my-[20px]">
        <h1 className="font-inter font-semibold text-[18px] leading-[26px]">
          Registered Trademarks
        </h1>
        <ul className="space-y-[10px] list-disc list-inside ml-6">
          <li className="font-inter text-[16px] leading-[24px]">
            JSSE is a registered trademark of JSSE Publications.
          </li>
        </ul>
      </div>
      <p className="font-inter text-[16px] leading-[24px]">
        Any use of these trademarks or service marks requires prior written
        permission from JSSE Publications. Unauthorized use of these marks is
        prohibited and may result in legal action.
      </p>
    </div>
  );
};

export default TrademarksAndServiceMarksPolicy;
