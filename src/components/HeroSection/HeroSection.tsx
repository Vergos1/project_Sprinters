import s from "./heroSection.module.scss";
import { Button } from "../Button/Button";
import ContentImage from "../../assets/sprites/hero-content-image.svg?react";
import HeroSpriteImage from "../../assets/sprites/hero-sprite.svg?react";
import { useViewportSize } from "@mantine/hooks";

export const HeroSection = () => {
  const { width } = useViewportSize();

  return (
    <div className={`${s.hero} animate`}>
      <div className={`${s.container} container`}>
        <div className={s.wrapper}>
          <div className={s.content}>
            {width >= 740 ? (
              <h1 className={s.title}>Перевізники Європи</h1>
            ) : (
              <h1 className={s.titleMobile}>
                <span className={s.selected}>YDC</span> Перевізники <br />
                <span className={s.selected}>Європи</span>
              </h1>
            )}
            <p className={s.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button
              href="/"
              variant={width >= 740 ? "secondary" : "primary"}
              className={s.button}
            >
              Бронюй
            </Button>
          </div>
          {width >= 740 && <ContentImage />}
          {width < 740 && <HeroSpriteImage className={s.sprite} />}
        </div>
      </div>
    </div>
  );
};
