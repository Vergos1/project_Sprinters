import s from "./featuresSection.module.scss";

import { useViewportSize } from "@mantine/hooks";

import { FeaturesCard } from "../FeaturesCard/FeaturesCard";
import { featuresList } from "../../utils/constants/data.constants";
import { Button } from "../Button/Button";

import featuresPhoto from "../../assets/pictures/features-photo.png";

export const FeaturesSection = () => {
  const { width } = useViewportSize();

  return (
    <div className={`${s.features} animate`}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.substandardCard}>
            <div className={s.content}>
              {width <= 519 ? (
                <>
                  <img className={s.photo} src={featuresPhoto} alt="features" />
                  <h3 className={s.titleMobile}>
                    <span className={s.selected}>YDC</span> - будь в курсі!
                  </h3>
                  <h4 className={s.titleMobileSm}>
                    Доступ до місцязнаходження водія
                  </h4>
                  <p className={s.descriptionMobile}>
                    Слідкуй за актуальною локацією водія та завжди будь в курсі
                    де зараз Твій бус або відправлена Тобою посилка. Ми не Uber,
                    але теж круто!
                  </p>
                </>
              ) : (
                <>
                  <h3 className={s.title}>Наші фішки</h3>
                  <p className={s.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </>
              )}
            </div>
            <Button href="/" variant="primary" className={s.button}>
              Дізнатись більше
            </Button>
          </div>
          {featuresList.map(({ icon, title, description, id }) =>
            width >= 520 || id > 1 ? (
              <FeaturesCard
                key={id}
                id={id}
                icon={icon}
                title={title}
                description={description}
              />
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
};
