import HeroSection from "@/features/home/components/HeroSection";
import WelcomeToJournal from "@/features/home/components/WelcomeToJournal";
import Brands from "@/features/home/components/Brands";
// import GlobalNetwork from "@/features/home/components/GlobalNetwork";
import KeyFeatures from "@/features/home/components/KeyFeatures";
import Footer from "@/features/shared/components/Footer";
import ResearchFields from "@/features/shared/components/ResearchFields";
import VideoSection from "@/features/home/components/VideoSection";
import FAQs from "@/features/home/components/FAQs";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <WelcomeToJournal />
      <Brands />
      {/* <GlobalNetwork /> */}
      <KeyFeatures />
      <ResearchFields />
      <FAQs />
      <VideoSection />
      <Footer />
    </div>
  );
}
