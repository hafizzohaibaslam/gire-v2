import Footer from "@/features/shared/components/Footer";
import HeroSection from "@/features/shared/components/HeroSection";
import SubmissionAvailableChecklist from "@/features/submission-available/components/SubmissionAvailableChecklist";
import React from "react";

const SubmissionAvailable = () => {
  return (
    <>
      <HeroSection.Root backgroundImage="submission-available-page/background-img.png">
        <HeroSection.Title>Submission is now available.</HeroSection.Title>
        <HeroSection.Description>
          We invite high school students from all over the world to submit
          original research articles across various disciplines. This is an
          excellent opportunity to showcase your work and contribute to the
          academic discourse. Submissions are accepted on a rolling basis, and
          we encourage students to explore their interests and share their
          findings.
        </HeroSection.Description>
      </HeroSection.Root>
      <SubmissionAvailableChecklist />
      <Footer />
    </>
  );
};

export default SubmissionAvailable;
