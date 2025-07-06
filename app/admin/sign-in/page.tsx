"use client";
import Button from "@/features/shared/components/Button";
import Image from "next/image";
import React from "react";

const AdminSigninPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-[url('/admin/admin-login-bg.png')] bg-cover bg-center">
      <div className="absolute top-8 left-16">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={100}
          height={100}
          className="w-[80px] h-[80px]"
        />
      </div>
      <div className="bg-white p-[47px] rounded-lg max-w-[520px] w-full [box-shadow:0px_0px_10px_3px_rgba(0,0,0,0.1)] space-y-[44px]">
        <h1 className="font-poppins text-[32px] font-semibold text-[#2B3241] text-center">
          Welcome Back
        </h1>
        <form className="space-y-[35px]" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="email"
                className="font-poppins font-normal text-[16px] text-[#2B3241]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="admin@gmail.com"
                className="w-full py-[18px] px-[16px] bg-[#F2F5FF] rounded-[28px] text-[#798397] text-[14px] font-poppins font-normal"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="password"
                className="font-poppins font-normal text-[16px] text-[#2B3241]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full py-[18px] px-[16px] bg-[#F2F5FF] rounded-[28px] text-[#798397] text-[14px] font-poppins font-normal"
              />
            </div>
          </div>
          <Button type="submit">Continue</Button>
        </form>
      </div>
    </div>
  );
};

export default AdminSigninPage;
