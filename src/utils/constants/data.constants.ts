import { RoutesList } from "../../app/routes/routes.types";

export type HeaderLinkType = {
  title: string;
  path: string;
};

export const headerLinksList: HeaderLinkType[] = [
  {
    title: "Головна",
    path: RoutesList.home,
  },
  {
    title: "Бронювання",
    path: RoutesList.home,
  },
  {
    title: "Рейси",
    path: RoutesList.home,
  },
  {
    title: "Допомога",
    path: RoutesList.home,
  },
];
