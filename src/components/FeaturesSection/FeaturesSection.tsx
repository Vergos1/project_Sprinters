import s from "./featuresSection.module.scss";
import { FeaturesCard } from "../FeaturesCard/FeaturesCard";
import { featuresList } from "../../utils/constants/data.constants";
import { Button } from "../Button/Button";

export const FeaturesSection = () => {
  return (
    <div className={`${s.features} animate`}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.substandardCard}>
            <div className={s.content}>
              <h3 className={s.title}>Наші фішки</h3>
              <p className={s.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <Button variant="primary" className={s.button}>
              Дізнатись більше
            </Button>
          </div>
          {featuresList.map(({ icon, title, description }) => (
            <FeaturesCard
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
