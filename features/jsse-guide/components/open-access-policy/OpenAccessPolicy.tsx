import React from "react";

const OpenAccessPolicy = () => {
  return (
    <div>
      <p className="text-normal text-[#52525B] text-[16px] leading-[24px] lg:text-[22px] lg:leading-[32px]">
        At JSSE, we follow the principle of open access by making all published
        content freely available to the public. We believe that providing
        immediate access to research accelerates global knowledge exchange and
        promotes the rapid advancement of scholarly work. Copyright is retained
        by the authors of each article. Articles published in JSSE can be freely
        used, distributed, and reproduced by others. All content is published
        under the{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {" "}
          Creative Commons Attribution License{" "}
        </a>{" "}
        (CC BY 4.0), which permits unrestricted use, distribution, and
        reproduction in any medium, provided the original work is properly
        cited. This includes the complete bibliographic details (authors, title,
        journal, volume/issue, and article ID), a link to the original
        publication (URL), and this copyright and licensing information
        (Licensed under Creative Commons Attribution cc-by 4.0).
      </p>
    </div>
  );
};

export default OpenAccessPolicy;
