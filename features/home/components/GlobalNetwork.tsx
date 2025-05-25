import React from "react";
import { globalNetworks } from "../utils/globalNetworks";
import { Globe } from "lucide-react";
import Image from "next/image";

const GlobalNetwork = () => {
  return (
    <div className="mt-[20px] lg:mt-[140px]">
      <div className="w-full max-w-[1440px] mx-auto lg:px-[98px] px-[40px]">
        {/* Content Section */}
        <div className="space-y-[64px]">
          <div className="space-y-[16px] text-center w-full max-w-3xl mx-auto">
            <h1 className="font-playfair-display text-[#183B56] text-[24px] lg:text-[48px] leading-[30px] lg:leading-[48px] tracking-[0.2px] font-semibold">
              Global Academic Network
            </h1>
            <p className="text-[#5A7184] text-[16px] lg:text-[18px] leading-[32px] font-normal ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 text-center border-t-[4px] border-[#3385FF] rounded-tl-lg rounded-tr-lg shadow-lg max-w-7xl mx-auto">
            {globalNetworks.map((network) => (
              <div
                key={network.id}
                className="flex flex-col items-center justify-center py-[48px] px-[31px] space-y-[16px] lg:border-r-[1px] lg:border-[#E5EAF4]"
              >
                <div className="flex items-center justify-center bg-[#3385FF] rounded-[100px] p-[10px]">
                  <Globe className="w-[20px] h-[20px] text-white" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[7px]">
                  <h1 className="font-playfair-display text-[#183B56] text-[24px] lg:text-[36px] leading-[30px] lg:leading-[48px] tracking-[0.2px] font-bold">
                    {network.stats}
                  </h1>
                  <p className="capitalize text-[#5A7184] text-[18px] leading-[20px] lg:leading-[32px]">
                    {network.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Image */}
          <Image
            src="/home-page/global-network.png"
            alt="global network"
            width={1440}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;
