import clsx from "clsx";
import React from "react";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const Button = ({ className, children, icon }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full max-w-lg bg-[#2325360D] py-[15px] px-[20px] flex items-center justify-center gap-2 text-[14px] lg:text-[16px] leading-[100%] font-semibold capitalize text-[#232536] rounded-[100px] hover:bg-[#232536] hover:text-white transition-all duration-300 cursor-pointer",
        className
      )}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
