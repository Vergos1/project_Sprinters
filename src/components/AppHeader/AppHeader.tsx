import s from "./appHeader.module.scss";
import { headerLinksList } from "../../utils/constants/data.constants";
import { Button } from "../Button/Button";

export default function AppHeader({ variant }: { variant?: string }) {
  return (
    <header className={s.header}>
      <div className="header-container">
        <div className={s.wrapper}>
          {/* <AppLogo variant="mobile" /> */}
          <nav className={s.navigation}>
            <ul className={s.list}>
              {headerLinksList.map(({ title, path }) => (
                <li className={s.item} key={title}>
                  <a className={s.link} href={path}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button>Бронюй</Button>
        </div>
      </div>
    </header>
  );
}
