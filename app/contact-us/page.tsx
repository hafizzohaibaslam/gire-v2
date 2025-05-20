import React from "react";
import Footer from "@/features/shared/components/Footer";
import CustomerService from "@/features/contact-us/components/CustomerService";
import HeroSection from "@/features/shared/components/HeroSection";

const ContactUsPage = () => {
  return (
    <>
      <HeroSection.Root backgroundImage="contact-us-page/background-img.png">
        <HeroSection.Title>The Path to Success</HeroSection.Title>
        <HeroSection.Description className="max-w-2xl">
          For inquiries, please use the form below to get in touch with us. We
          welcome your questions and feedback regarding the journal, submission
          process, or any other concerns.
        </HeroSection.Description>
      </HeroSection.Root>
      <div className="relative z-10">
        <CustomerService />
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
