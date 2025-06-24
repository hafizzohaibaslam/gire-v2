import React from "react";
import Image from "next/image";
import { brands } from "../utils/brands";

const Brands = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[20px] lg:px-[149px]">
      <div className="mt-[76px] space-y-[76px]">
        <div className="space-y-[56px]">
          <h1 className="font-playfair-display capitalize text-center text-[#080A47] text-[24px] lg:text-[36px] leading-[30px] lg:leading-[43px] -tracking-[0.5px] font-semibold">
            trusted by these brands and more
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-center lg:items-center lg:justify-between gap-[60px]">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between gap-4"
              >
                <Image
                  src={brand.Logo}
                  alt={brand.name}
                  width={100}
                  height={100}
                  className="text-[#5A7184] w-[34px] h-[35px]"
                />
                <Image
                  src={brand.name}
                  alt={brand.name}
                  width={100}
                  height={100}
                  className="text-[#5A7184] w-[100px] h-[35px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="border-[0.94px] border-[#080A47] opacity-[10%] w-full"></div>
      </div>
    </div>
  );
};

export default Brands;
