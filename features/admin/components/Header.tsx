"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import Sidebar from "./Sidebar";

const AdminHeader = () => {
  const [isOffCanvasSidebarOpen, setIsOffCanvasSidebarOpen] = useState(false);

  const renderOffCanvasSidebar = () => {
    if (typeof window === "undefined") return null;
    return createPortal(
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 w-[300px] bg-white border-r-[1px] border-[#E0E0E0] transition-all duration-300 ease-in-out ${cn(
          isOffCanvasSidebarOpen ? "translate-x-0" : "translate-x-[-100%]"
        )}`}
      >
        <Sidebar />
      </div>,
      document.body
    );
  };
  return (
    <div className="bg-white px-[40px] py-[12px] flex gap-6 items-center justify-between lg:justify-end border-b-[1px] border-[#E0E0E0]">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={100}
        height={100}
        className="w-[60px] h-[60px] block lg:hidden"
      />
      <div className="flex items-center gap-4">
        <Image
          src={"https://github.com/shadcn.png"}
          alt="avatar"
          width={100}
          height={100}
          className="w-[40px] h-[40px] rounded-full"
        />
        <Menu
          className="w-[30px] h-[30px] cursor-pointer block lg:hidden"
          onClick={() => setIsOffCanvasSidebarOpen((prev) => !prev)}
        />
        {renderOffCanvasSidebar()}
      </div>
    </div>
  );
};

export default AdminHeader;
