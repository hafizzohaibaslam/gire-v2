import Footer from "@/features/shared/components/Footer";
import React from "react";
import SubmitFeatures from "@/features/jsse-guide/components/SubmitFeatures";
import HeroSection from "@/features/shared/components/HeroSection";

const JSSEGuidePage = () => {
  return (
    <>
      <HeroSection.Root
        backgroundImage="submit-page/background-img.png"
        className="pb-[250px]"
      >
        <HeroSection.Title>JSSE Guide</HeroSection.Title>
        <HeroSection.Description>
          At JSSE, we are dedicated to making your manuscript submission process
          smooth and straightforward. From the moment you begin, we will guide
          you through each step, offering clear instructions and detailed
          feedback to help you refine your work.
          <br />
          <br />
          <strong>Ready to Submit Your Work?</strong> <br /> Complete your
          submission by sending your files through the form below. If you have
          any questions about formatting or the submission process, feel free to
          contact us we&apos;re here to help!
        </HeroSection.Description>
      </HeroSection.Root>
      <SubmitFeatures />
      <Footer />
    </>
  );
};

export default JSSEGuidePage;
