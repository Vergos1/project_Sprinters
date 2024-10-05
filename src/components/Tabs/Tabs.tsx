import { useState } from "react";
import s from "./tabs.module.scss";
import { useViewportSize } from "@mantine/hooks";
import { CarrierTab } from "./content/CarrierTab";
import { PassengerTab } from "./content/PassengerTab";
import { Button } from "../Button/Button";

export type FormDataType = {
  fromCity: string;
  toCity: string;
  date: Date | null;
  passengerCount?: string;
};

export const Tabs = () => {
  const { width } = useViewportSize();
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState<FormDataType>({} as FormDataType);
  const { fromCity, toCity, date, passengerCount } = formData;

  const tabs = [
    {
      id: 1,
      title: "Пасажир",
      content: <CarrierTab setFormData={setFormData} />,
    },
    {
      id: 2,
      title: "Перевізник",
      content: <PassengerTab setFormData={setFormData} />,
    },
  ];

  const isValidForm =
    fromCity &&
    toCity &&
    date !== null &&
    (activeTab === 1 ? passengerCount : true);

  return (
    <div className={s.tabs}>
      {width > 768 && (
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
      )}
      <div className={s.content}>
        <form action="" className={s.form}>
          {tabs.map((tab) => activeTab === tab.id && tab.content)}
          <Button
            disabled={!isValidForm}
            variant="primary"
            type="submit"
            className={s.buttonSubmit}
          >
            Поїхали
          </Button>
        </form>
      </div>
    </div>
  );
};
