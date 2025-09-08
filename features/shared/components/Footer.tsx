import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import Logo2 from "@/public/logo2.svg";

const Footer = () => {
  return (
    <div className="mt-[100px] bg-[#1A1A1A] ">
      {/* Blue Section */}
      <div className="border-b-[8px] border-[#3385FF]"></div>
      {/* Footer Content */}
      <div className="py-[60px] px-[20px] sm:px-[40px] lg:px-[100px] w-full max-w-[1440px] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 items-center justify-between">
          {/* Logo Section */}
          <div className="text-white">
            <Link href="/">
              <Image
                src={Logo2}
                alt="logo"
                width={100}
                height={100}
                className="w-[350px] h-[120px] [filter:brightness(100)] -ml-4"
              />
            </Link>
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-4">
                <Mail className="w-[20px] h-[20px]" />
                <p className="text-[16px] font-normal">info@journal.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-[20px] h-[20px]" />
                <p className="text-[16px] font-normal">+123 456 7890</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-[20px] h-[20px]" />
                <p className="text-[16px] font-normal">
                  New York, United States
                </p>
              </div>
            </div>
          </div>
          {/* Home Section */}
          <div className="text-white self-start mt-2 capitalize space-y-2">
            <h1 className="text-[24px] font-semibold">home</h1>
            <p className="text-[16px] font-normal">why JSSE</p>
            <p className="text-[16px] font-normal">issues</p>
            <p className="text-[16px] font-normal">submit</p>
            <p className="text-[16px] font-normal">call of paper</p>
          </div>
          {/* Other Section */}
          <div className="text-white self-start mt-2 capitalize space-y-2">
            <h1 className="text-[24px] font-semibold">other</h1>
            <p className="text-[16px] font-normal">current issue</p>
            <p className="text-[16px] font-normal">about us</p>
            <p className="text-[16px] font-normal">contact us</p>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="space-y-[40px]">
          <div className="border-b-[2px] border-[#F7F7F880] mt-[30px]"></div>
          <p className="text-[14px] text-center font-normal text-white">
            Copyright © 2025 JSSE. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
