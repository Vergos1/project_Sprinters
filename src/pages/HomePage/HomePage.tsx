import s from "./homePage.module.scss";
import { FeaturesSection } from "../../components/FeaturesSection/FeaturesSection";
import { ContactsSection } from "../../components/ContactsSection/ContactsSection";
import { HeroSection } from "../../components/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ContactsSection />
      <FeaturesSection />
    </>
  );
};

export default HomePage;
