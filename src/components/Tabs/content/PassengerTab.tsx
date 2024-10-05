import { Select } from "@mantine/core";
import s from "./tab.module.scss";
import { citiesList } from "../../../utils/constants/data.constants";
import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import { icons } from "../../../utils/helper/icons";
import { FormDataType } from "../Tabs";

export const PassengerTab = ({
  setFormData,
}: {
  setFormData: (data: FormDataType) => void;
}) => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  const handleInputChange = () => {
    setFormData({
      fromCity,
      toCity,
      date,
    });
  };

  useEffect(
    () => {
      handleInputChange();
    },
    [fromCity, toCity, date], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const rightSectionIcon = icons.arrowBottom;
  const currentDate = new Date();

  return (
    <div className={`${s.tab} ${s.passengerTab} animate`}>
      <Select
        placeholder="Звідки?"
        rightSection={rightSectionIcon}
        data={citiesList}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: "auto" } }}
        value={fromCity}
        onChange={(value: string | null) => {
          setFromCity(value || "");
          handleInputChange();
        }}
      />
      <Select
        placeholder="Куди?"
        rightSection={rightSectionIcon}
        data={citiesList}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: "auto" } }}
        value={toCity}
        onChange={(value: string | null) => {
          setToCity(value || "");
          handleInputChange();
        }}
      />
      <DatePickerInput
        leftSection={icons.calendar}
        rightSection={rightSectionIcon}
        minDate={currentDate}
        leftSectionPointerEvents="none"
        placeholder="Коли?"
        value={date}
        onChange={(date) => {
          setDate(date);
          handleInputChange();
        }}
      />
    </div>
  );
};
