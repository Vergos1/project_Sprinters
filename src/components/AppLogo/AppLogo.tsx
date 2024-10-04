import s from "./appLogo.module.scss";
import { RoutesList } from "../../app/routes/routes.types";
import Logo from "../../assets/icons/logo.svg?react";

type AppLogoProps = {
  variant?: "admin" | "mobile";
  size?: number;
};

export const AppLogo = ({ variant = "admin", size }: AppLogoProps) => {
  return (
    <a href={RoutesList.home} className={s.logo}>
      <Logo />
    </a>
  );
};
