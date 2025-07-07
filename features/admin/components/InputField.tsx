import { cn } from "@/lib/utils";
import React from "react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      className={cn(
        "border-[1px] border-[#DFEAF2] rounded-[15px] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-200 hover:border-gray-400 text-[#718EBF] font-inter font-normal text-[15px] placeholder:text-[#718EBF] transition-all duration-200",
        className
      )}
      {...props}
    />
  );
}

export default InputField;
