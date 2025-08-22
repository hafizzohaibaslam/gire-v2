import React from "react";

const CopyrightNotice = () => {
  return (
    <div className="space-y-[20px]">
      <p className="font-inter text-[16px] leading-[24px]">
        Unless stated otherwise, all articles published in JSSE are open access
        and distributed under the terms of the{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Creative Commons Attribution License
        </a>{" "}
        (CC BY), which permits unrestricted use, distribution, and reproduction
        in any medium, provided that the original work is properly cited. The
        citation should include the original URL and full bibliographic
        information.
      </p>
      <p className="font-inter text-[16px] leading-[24px]">
        To ensure proper attribution, the complete bibliographic details
        (authors, title, journal, volume/issue, and article ID), along with a
        link to the original publication on the JSSE website, must be included
        in any reuse or distribution. Additionally, the copyright and license
        information (“Licensed under Creative Commons Attribution cc-by 4.0”)
        must be cited appropriately.
      </p>
    </div>
  );
};

export default CopyrightNotice;
