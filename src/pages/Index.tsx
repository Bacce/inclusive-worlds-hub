import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CharactersSection from "@/components/CharactersSection";
import ServicesSection from "@/components/ServicesSection";
import ResourcesSection from "@/components/ResourcesSection";
import AdvocacySection from "@/components/AdvocacySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CharactersSection />
      <ServicesSection />
      <ResourcesSection />
      <AdvocacySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
