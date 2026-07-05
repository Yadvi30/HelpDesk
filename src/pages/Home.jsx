import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import ServicesPreview from "../components/home/ServicesPreview";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection/>
      <HowItWorks />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
      
    </>
  );
};

export default Home;