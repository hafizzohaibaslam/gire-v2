import clsx from "clsx";
import React from "react";

type TagsProps = {
  tag: string;
  className?: string;
};

const Tags = ({ tag, className }: TagsProps) => {
  return (
    <button
      key={tag}
      className={clsx(
        "font-figtree px-[12px] py-[9px] bg-[#3385FF] rounded-[8px] text-white text-[14px] leading-[20px] tracking-[3px] font-semibold",
        className
      )}
    >
      {tag}
    </button>
  );
};

export default Tags;
