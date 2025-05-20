import AdvisoryBoard from "@/features/about-us/components/AdvisoryBoard";
import ChiefEditor from "@/features/about-us/components/ChiefEditor";
import EditorialTeam from "@/features/about-us/components/EditorialTeam";
import React from "react";
import Footer from "@/features/shared/components/Footer";
import HeroSection from "@/features/shared/components/HeroSection";

const AboutUsPage = () => {
  return (
    <>
      <HeroSection.Root backgroundImage="about-us-page/background-img.png">
        <HeroSection.Title>About Us</HeroSection.Title>
        <HeroSection.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </HeroSection.Description>
      </HeroSection.Root>
      <div className="relative z-10">
        <ChiefEditor />
      </div>
      <AdvisoryBoard />
      <EditorialTeam />
      <Footer />
    </>
  );
};

export default AboutUsPage;
