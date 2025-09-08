import React from "react";

const TablesFigures = () => {
  return (
    <div>
      <div className="font-figtree text-[16px] lg:text-[18px] leading-[24px] lg:leading-[30px] font-medium text-[#222222]">
        <ol className="list-decimal list-inside">
          <li>Figure Legends</li>
          <li>Number sequentially (Figure 1, Figure 2, etc.)</li>
          <li>
            Bold “Figure X.” followed by concise title and detailed description
            (define all abbreviations).
          </li>
          <br />
          <li>Tables</li>
          <li>Title above table: Table 1. Title of table</li>
          <li>Use Word’s built‑in table function (no images).</li>
          <li>Columns clearly labeled; include units.</li>
          <li>Footnotes (superscript letters) for clarifications.</li>
        </ol>
      </div>
    </div>
  );
};

export default TablesFigures;
