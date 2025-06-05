"use client";
import Image from "next/image";
import React from "react";
// import logo from "@/public/logo.svg";
// import logo2 from "@/public/logo2.png";
import logo3 from "@/public/logo3.svg";
import { navlinks } from "../utils/navlinks";
import Link from "next/link";
import clsx from "clsx";
import { Menu } from "lucide-react";
import { useGlobalContext } from "../providers/GlobalProvider";

const Header = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  return (
    <div className="px-[40px] pt-[20px] lg:pl-[153px] lg:pr-[96px] lg:pt-[55px] w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between text-white">
        <Link href="/">
          <Image src={logo3} alt="logo" width={100} height={100} />
        </Link>
        <ul className="hidden lg:flex items-center gap-10">
          {navlinks.map((link) => (
            <li
              key={link.href}
              className={clsx(
                "text-[16px] leading-[100%] font-medium transition-all cursor-pointer duration-300 hover:scale-105"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <button
            className={clsx(
              "capitalize inline-block w-fit border-2 border-white lg:px-[38px] lg:py-[14px] px-[19px] py-[14px] rounded-[38px] text-[16px] lg:text-[18px] leading-[100%] font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
            )}
          >
            <Link href="/contact-us">contact us</Link>
          </button>
          <Menu
            className={clsx(
              "block lg:hidden w-[24px] h-[24px] text-white cursor-pointer hover:scale-115 transition-all duration-300 ease-in-out",
              isOpen ? "hidden" : "block"
            )}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
