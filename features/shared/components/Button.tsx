import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "w-full cursor-pointer py-[16px] flex items-center justify-center text-[16px] leading-[100%] font-semibold bg-[#3385FF] border-[2px] border-[#3385FF] rounded-[38px] text-white hover:opacity-80 transition-all duration-300",
      secondary:
        "w-full cursor-pointer py-[16px] flex items-center justify-center text-[16px] leading-[100%] font-semibold bg-[#3385FF] border-[2px] border-[#3385FF] rounded-[38px] text-white hover:opacity-80 transition-all duration-300",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
