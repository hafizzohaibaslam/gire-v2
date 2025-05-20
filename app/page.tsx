import HeroSection from "@/features/home/components/HeroSection";
import WelcomeToJournal from "@/features/home/components/WelcomeToJournal";
import Brands from "@/features/home/components/Brands";
import GlobalNetwork from "@/features/home/components/GlobalNetwork";
import KeyFeatures from "@/features/home/components/KeyFeatures";
import Footer from "@/features/shared/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeToJournal />
      <Brands />
      <GlobalNetwork />
      <KeyFeatures />
      <Footer />
    </>
  );
}
