import { cn } from "@/lib/utils";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  className?: string;
};

function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "font-inter font-normal text-[#232323] text-[16px]",
        className
      )}
      {...props}
    />
  );
}

export default Label;
