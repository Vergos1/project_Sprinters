import s from "./appHeader.module.scss";

import { RoutesList } from "../../app/routes/routes.types";
import { headerLinksList } from "../../utils/constants/data.constants";

import Logo from "../../assets/icons/logo.svg?react";

export default function AppHeader() {
  return (
    <header className={s.header}>
      <div className="container">
        <a href={RoutesList.home} className={s.logo}>
          <Logo />
        </a>
        <nav className={s.navigation}>
          <ul className={s.list}>
            {headerLinksList.map(({ title, path }) => (
              <li key={title}>
                <a href={path}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className={s.button}>Бронюй</button>
      </div>
    </header>
  );
}
