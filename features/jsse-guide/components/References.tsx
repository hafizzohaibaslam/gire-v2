import React from "react";

const References = () => {
  return (
    <div>
      <h4 className="text-[#6F6C90] font-figtree font-bold text-[18px] leading-[30px]">
        References
      </h4>
      <div className="font-figtree text-[16px] lg:text-[18px] leading-[24px] lg:leading-[30px] font-normal text-[#6F6C90]">
        <ol className="list-decimal list-inside">
          <li>Format:</li>
          <li>Vancouver style; should be numbered sequentially</li>
          <li>
            1. Lastname AB, Lastname CD. Title of article. Journal Name.
            Year;Volume(Issue):Page‑range.
          </li>
          <li>DOIs preferred when available.</li>
        </ol>
      </div>
    </div>
  );
};

export default References;
