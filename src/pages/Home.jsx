import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import ServicesPreview from "../components/home/ServicesPreview";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection/>
      <HowItWorks />
      <ServicesPreview />
    </>
  );
};

export default Home;