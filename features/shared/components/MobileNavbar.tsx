"use client";
import React from "react";
import { useGlobalContext } from "../providers/GlobalProvider";
import Link from "next/link";
import { navlinks } from "../utils/navlinks";
import clsx from "clsx";
import { X } from "lucide-react";

const MobileNavbar = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <X
        className="absolute top-4 right-4 h-[24px] w-[24px] text-black cursor-pointer hover:scale-115 transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen(false)}
      />
      <ul className=" flex flex-col items-center justify-center gap-10">
        {navlinks.map((link) => (
          <li
            key={link.href}
            className={clsx(
              "text-[16px] leading-[100%] font-medium transition-all cursor-pointer duration-300 hover:scale-105 font-playfair-display"
            )}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
