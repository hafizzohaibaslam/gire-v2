import Footer from "@/features/shared/components/Footer";
import React from "react";
import SubmitFeatures from "@/features/submit/components/SubmitFeatures";
import HeroSection from "@/features/shared/components/HeroSection";

const SubmitPage = () => {
  return (
    <>
      <HeroSection.Root
        backgroundImage="submit-page/background-img.png"
        className="pb-[250px]"
      >
        <HeroSection.Title>Submit</HeroSection.Title>
        <HeroSection.Description>
          At [Journal Name], we are dedicated to making your manuscript
          submission process smooth and straightforward. From the moment you
          begin, we will guide you through each step, offering clear
          instructions and detailed feedback to help you refine your work.
        </HeroSection.Description>
      </HeroSection.Root>
      <SubmitFeatures />
      <Footer />
    </>
  );
};

export default SubmitPage;
