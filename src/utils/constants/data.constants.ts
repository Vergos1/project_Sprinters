import { ReactElement } from "react";
import { RoutesList } from "../../app/routes/routes.types";
import { icons } from "../helper/icons";

export type HeaderLinkType = {
  title: string;
  path: string;
};

export type FeaturesItemType = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
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

export const featuresList: FeaturesItemType[] = [
  {
    id: 1,
    icon: icons.location,
    title: "Доступ до місцязнаходження водія",
    description:
      "Слідкуй за актуальною локацією водія та завжди будь в курсі де зараз Твій бус або відправлена Тобою посилка. Ми не Uber, але теж круто!",
  },
  {
    id: 2,
    icon: icons.phone,
    title: "Онлайн бронювання у додатку",
    description:
      "Швидке бронювання онлайн! Забудь про сотні дзвінків перед поїздкою!",
  },
  {
    id: 3,
    icon: icons.info,
    title: "Статус поїздки",
    description:
      "Додаток нагадає про поїздку та повідомить тебе, як тільки водій вирушить в дорогу!",
  },
  {
    id: 4,
    icon: icons.car,
    title: "Відстеження поїздок",
    description: "Відправив посилку рідним? Відстежуй її у режимі онлайн",
  },
];

export const citiesList: string[] = [
  "Київ",
  "Одеса",
  "Дніпро",
  "Кривий ріг",
  "Львів",
  "Тернопіль",
  "Харків",
  "Полтава",
  "Херсон",
  "Житомир",
];

export const passengerNumberList: string[] = [
  "1 пасажир",
  "2 пасажири",
  "3 пасажири",
  "4 пасажири",
  "5 пасажирів",
];
