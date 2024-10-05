import s from "./featuresCard.module.scss";
import { FeaturesItemType } from "../../utils/constants/data.constants";

export const FeaturesCard = ({
  icon,
  title,
  description,
  id,
}: FeaturesItemType) => {
  return (
    <div className={`${s.card} animate`}>
      <div className={s.icon}>{icon}</div>
      <div className={s.content}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};
