import { ArrowRight } from "lucide-react";

type IssueProps = {
  title: string;
  description: string;
  buttonText: string;
};

export const Issue = ({ title, description, buttonText }: IssueProps) => {
  return (
    <div className="space-y-[19px]">
      <h3 className="font-playfair-display text-[25px] font-bold leading-[100%]">
        {title}
      </h3>
      <p className="text-[18px] font-bold leading-[100%] capitalize">
        {description}
      </p>
      <button className="font-be-vietnam-pro px-[14px] py-[10px] lg:px-[20px] lg:py-[14px] bg-white text-black capitalize border-[1px] border-[#F1F1F340] flex items-center gap-2 text-[14px] font-medium leading-[100%] rounded-[38px] hover:border-transparent cursor-pointer transition-all duration-300 hover:scale-105">
        {buttonText}
        <ArrowRight className="w-[17px] h-[17px]" />
      </button>
    </div>
  );
};
