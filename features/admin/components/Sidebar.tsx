"use client";
import { Building, MonitorPlay, Settings, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[300px]">
      <div className="mt-[5px] ml-[25px]">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={100}
          height={100}
          className="w-[60px] h-[60px]"
        />
      </div>
      <div className="mt-[50px]">
        <ul className="space-y-[30px]">
          {navItems.map((item) => (
            <Link href={`/admin/${item.value}`} key={item.id}>
              <li
                key={item.id}
                className={`group pl-[30px] py-[18px] font-medium font-inter text-[18px] flex items-center gap-[20px] hover:bg-[#3385ffcd] hover:text-white transition-all duration-300 ease-in-out rounded-tr-[10px] rounded-br-[10px] cursor-pointer ${
                  pathname === `/admin/${item.value}`
                    ? "text-[#3385FF] border-l-[5px] border-[#3385FF]"
                    : "text-[#B1B1B1]"
                }`}
              >
                <div
                  className={`${
                    pathname === `/admin/${item.value}`
                      ? "text-[#3385FF] group-hover:text-white"
                      : "text-[#B1B1B1] group-hover:text-white"
                  }`}
                >
                  {item.icon}
                </div>
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

const navItems = [
  {
    id: 1,
    label: "Chief Editor",
    value: "chief-editor",
    icon: <UserRound size={25} />,
  },
  {
    id: 2,
    label: "Advisory Board",
    value: "advisory-board",
    icon: <Building size={25} />,
  },
  {
    id: 3,
    label: "Reviewers",
    value: "reviewers",
    icon: <MonitorPlay size={25} />,
  },
  {
    id: 4,
    label: "Issues",
    value: "issues",
    icon: <Settings size={25} />,
  },
];
