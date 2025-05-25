import HeroSection from "@/features/shared/components/HeroSection";
import Footer from "@/features/shared/components/Footer";
import React from "react";
import Research from "@/features/why-us/components/Research";
import Benefits from "@/features/why-us/components/Benefits";
import Benefits2 from "@/features/why-us/components/Benefits2";
import ResearchInHighSchool from "@/features/why-us/components/ResearchInHighSchool";
import ResearchCardsList from "@/features/why-us/components/ResearchCardsList";

const OurMissionPage = () => {
  return (
    <div className="w-full">
      <HeroSection.Root
        backgroundImage="why-us-page/background-img.png"
        className="pb-[200px] lg:pb-[400px]"
      >
        <HeroSection.Title>Why Us</HeroSection.Title>
        <HeroSection.Description>
          At [Journal Name], we believe high school students are capable of
          serious academic inquiry. Our mission is to support their voices and
          encourage meaningful engagement with research from an early stage.
        </HeroSection.Description>
      </HeroSection.Root>
      <Research />
      <Benefits />
      <Benefits2 />
      <ResearchInHighSchool />
      <ResearchCardsList />
      <Footer />
    </div>
  );
};

export default OurMissionPage;
