import IssueDetails from "@/features/open-issues/components/IssueDetails";
import Footer from "@/features/shared/components/Footer";
import HeroSection from "@/features/shared/components/HeroSection";
import React from "react";

const OpenIssuesPage = () => {
  return (
    <>
      <HeroSection.Root
        backgroundImage="issues-open-page/background-img.png"
        className="pb-[300px]"
      >
        <HeroSection.Title>
          Enhancing Student Engagement through Gamified Learning Platforms.
        </HeroSection.Title>
      </HeroSection.Root>
      <div className="relative z-10">
        <IssueDetails />
      </div>
      <Footer />
    </>
  );
};

export default OpenIssuesPage;
