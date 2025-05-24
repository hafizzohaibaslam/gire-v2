"use client";
import React from "react";
import GlobalProvider from "../providers/GlobalProvider";
import MobileNavbar from "./MobileNavbar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalProvider>
      <MobileNavbar />
      {children}
    </GlobalProvider>
  );
};

export default Providers;
