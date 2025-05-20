import React from "react";
import Image from "next/image";
import { brands } from "../utils/brands";

const Brands = () => {
  return (
    <div className="py-[60px] lg:py-[76px] px-[40px] lg:px-[144px] w-full max-w-[1440px] mx-auto space-y-[60px]">
      <h1 className="font-playfair-display capitalize text-center text-[#080A47] text-[24px] lg:text-[36px] leading-[30px] lg:leading-[43px] -tracking-[0.5px] font-semibold">
        trusted by these brands and more
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-between gap-4">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand.image}
            alt={brand.name}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
