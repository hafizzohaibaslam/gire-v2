import React from "react";

const GeneralFormattingRequirements = () => {
  return (
    <div>
      <p className="text-[#6F6C90] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[30px] font-figtree font-normal">
        Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
        ultrices. Cursus sit amet dictum sit amet justo donec enim diam
        porttitor lacus luctus accumsan tortor posuere.
      </p>
      {/* Table */}
      <table className="w-full table-fixed border-collapse mt-[20px] bg-[#FCFCFC]">
        <thead>
          <tr>
            <th className="font-poppins text-left font-medium text-[#222222] text-[20px] leading-[100%] px-[22px] py-[22px] w-1/2 border-r border-b border-gray-200">
              Requirement
            </th>
            <th className="font-poppins text-left font-medium text-[#222222] text-[20px] leading-[100%] px-[22px] py-[22px] border-b border-gray-200">
              Specification
            </th>
          </tr>
        </thead>
        <tbody className="text-[#222222]">
          {tableData.map((row) => (
            <tr key={row.requirement}>
              <td className="font-poppins text-[20px] leading-[100%] font-medium px-[22px] py-[26px] align-top border-r border-b border-gray-200">
                {row.requirement}
              </td>
              <td className="font-figtree text-[16px] font-medium leading-[100%] px-[22px] py-[26px] border-b border-gray-200">
                {row.specification}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* End of Table */}
    </div>
  );
};

export default GeneralFormattingRequirements;

const tableData = [
  {
    requirement: "Word count",
    specification: "2,000–3,000 words (text only)",
  },
  {
    requirement: "Document format",
    specification: "Microsoft Word (.doc, .docx)",
  },
  {
    requirement: "Page layout",
    specification: "US Letter (8½×11”), 1″ margins all sides",
  },
  {
    requirement: "Font",
    specification: "Times New Roman, 12-point",
  },
  {
    requirement: "Line spacing",
    specification: "Double-spaced",
  },
  {
    requirement: "Paragraph indent",
    specification: "0.5″ first-line indent",
  },
  {
    requirement: "Citation style",
    specification: "Vancouver (numeric, bracketed in-text)",
  },
  {
    requirement: "Reference list",
    specification: "Numbered, in order of appearance",
  },
  {
    requirement: "Figures / Tables",
    specification:
      "Separate files (.jpg/.jpeg), ≥300 dpi; captions in main text",
  },
  {
    requirement: "File naming",
    specification:
      "Main manuscript: LastName_FirstInitial_Manuscript.docx Figure files: LastName_Fig1.jpg, LastName_Fig2.jpg",
  },
];
