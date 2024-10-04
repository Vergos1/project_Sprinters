import s from "./homePage.module.scss";
import ContentImage from "../../assets/sprites/hero-content-image.svg?react";
import { Button } from "../../components/Button/Button";

const HeroSection = () => {
  return (
    <div className={s.hero}>
      <div className={`${s.container} container`}>
        <div className={s.wrapper}>
          <div className={s.content}>
            <h1 className={s.title}>Перевізники Європи</h1>
            <p className={s.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className={s.button}>Бронюй</Button>
          </div>
          <ContentImage />
        </div>
      </div>
    </div>
  );
};

const ContactsSection = () => {
  return (
    <div className={s.contacts}>
      <div className="container">
        <div className={s.wrapper}></div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className={s.features}>
      <div className="container">
        <div className={s.wrapper}></div>
      </div>
    </div>
  );
};

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
