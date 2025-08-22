import HeroSection from "@/features/shared/components/HeroSection";
import Footer from "@/features/shared/components/Footer";
import React from "react";
import MainSection from "@/features/why-us/components/MainSection";

const OurMissionPage = () => {
  return (
    <div className="w-full">
      <HeroSection.Root
        backgroundImage="why-us-page/background-img.png"
        className="pb-[200px] lg:pb-[400px]"
      >
        <HeroSection.Title>Why JSSE</HeroSection.Title>
        <HeroSection.Description>
          At Journal of Student Science Exploration (JSSE), we believe high
          school students are capable of serious academic inquiry. Our mission
          is to support their voices and encourage meaningful engagement with
          research from an early stage.
        </HeroSection.Description>
      </HeroSection.Root>
      <MainSection />
      <Footer />
    </div>
  );
};

export default OurMissionPage;
