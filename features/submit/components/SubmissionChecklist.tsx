import React from "react";

const SubmissionChecklist = () => {
  return (
    <div>
      <div className="font-figtree text-[16px] lg:text-[18px] leading-[24px] lg:leading-[30px] font-medium text-[#6F6C90]">
        <h4>Submission Checklist</h4>
        <ol className="list-decimal list-inside">
          <li>Manuscript file (.doc/.docx) follows template exactly</li>
          <li>
            Figures/tables uploaded as separate .jpg/.jpeg files, ≥300 dpi
          </li>
          <li>All citations formatted in Vancouver style</li>
          <li>Word count between 2,000–3,000 words</li>
          <li>Permission forms (if required) included</li>
        </ol>
      </div>
    </div>
  );
};

export default SubmissionChecklist;
