import s from "./featuresSection.module.scss";
import { FeaturesCard } from "../FeaturesCard/FeaturesCard";
import { featuresList } from "../../utils/constants/data.constants";

export const FeaturesSection = () => {
  return (
    <div className={s.features}>
      <div className="container">
        <div className={s.wrapper}>
            {featuresList.map(({ icon, title, description }) => (
                <FeaturesCard key={title} icon={icon} title={title} description={description} />
            ))}
        </div>
      </div>
    </div>
  );
};