import { useState } from "react";
import s from "./tabs.module.scss";
import { CarrierTab } from "./content/CarrierTab";
import { PassengerTab } from "./content/PassengerTab";
import { Button } from "../Button/Button";

const tabs = [
  {
    id: 1,
    title: "Пасажир",
    content: <CarrierTab />,
  },
  {
    id: 2,
    title: "Перевізник",
    content: <PassengerTab />,
  },
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={s.tabs}>
      <div className={s.buttonsWrapper}>
        {tabs.map((tab) => (
          <button
            className={`${s.button} ${activeTab === tab.id ? s.active : ""}`}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={s.content}>
        <form action="" className={s.form}>
          {tabs.map((tab) => activeTab === tab.id && tab.content)}
          <Button variant="primary" type="submit" className={s.button}>
            Поїхали
          </Button>
        </form>
      </div>
    </div>
  );
};
