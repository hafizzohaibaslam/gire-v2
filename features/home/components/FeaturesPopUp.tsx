import React from "react";
import { X } from "lucide-react";
import { popupData } from "../utils/popupData";

type FeaturesPopUpProps = {
  title: string;
  handleClose: () => void;
  openPopUp: boolean;
};

const FeaturesPopUp = ({
  title,
  handleClose,
  openPopUp,
}: FeaturesPopUpProps) => {
  if (!openPopUp) return null;

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-[16px] p-[40px] w-[90%] max-w-[1440px] mx-auto max-h-[90vh] overflow-y-scroll">
        {/* Cross Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <X className="w-[24px] h-[24px]" />
        </button>

        <div>
          {/* Content */}
          <h1 className="capitalize font-playfair-display text-black text-[24px] lg:text-[36px] leading-[22px] lg:leading-[28px] tracking-[0px] font-semibold mb-[30px]">
            {title}
          </h1>
          <div className="space-y-[10px] overflow-y-scroll max-h-[50vh]">
            {popupData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-[4px] text-[#52525B] text-[20px] leading-[24px] lg:leading-[36px] font-normal font-inter"
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPopUp;
