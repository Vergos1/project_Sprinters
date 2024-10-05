import { useEffect, useState } from "react";
import { icons } from "../../utils/helper/icons";
import s from "./preloader.module.scss";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add(s.noScroll);
    } else {
      document.body.classList.remove(s.noScroll);
    }
  }, [isLoading]);

  return (
    <div className={`${s.preloader} animate`}>
      <span className={s.logo}>{icons.logo}</span>
    </div>
  );
};
