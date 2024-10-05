import s from "./featuresCard.module.scss";
import { FeaturesItemType } from "../../utils/constants/data.constants";

export const FeaturesCard = ({
  icon,
  title,
  description,
}: FeaturesItemType) => {
  return (
    <div className={s.card}>
      <div className={s.icon}>{icon}</div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
    </div>
  );
};
