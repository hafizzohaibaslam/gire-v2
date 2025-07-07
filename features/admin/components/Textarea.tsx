import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};
function Textarea({ className, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-[11px] w-full">
      <textarea
        {...props}
        className={cn(
          "border-[1px] border-[#DFEAF2] rounded-[15px] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-200 hover:border-gray-400 text-black font-inter font-normal text-[15px] placeholder:text-black transition-all duration-200",
          className
        )}
      />
    </div>
  );
}

export default Textarea;
