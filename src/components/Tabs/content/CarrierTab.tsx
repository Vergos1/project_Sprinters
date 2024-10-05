import { Select } from "@mantine/core";
import s from "./tab.module.scss";
import {
  citiesList,
  passengerNumberList,
} from "../../../utils/constants/data.constants";
import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import { icons } from "../../../utils/helper/icons";
import { FormDataType } from "../Tabs";

export const CarrierTab = ({
  setFormData,
}: {
  setFormData: (data: FormDataType) => void;
}) => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [passengerCount, setPassengerCount] = useState("");
  const rightSectionIcon = icons.arrowBottom;

  const handleInputChange = () => {
    setFormData({
      fromCity,
      toCity,
      date,
      passengerCount,
    });
  };

  useEffect(
    () => {
      handleInputChange();
    },
    [fromCity, toCity, date, passengerCount], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <div className={`${s.tab} animate`}>
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
        leftSectionPointerEvents="none"
        placeholder="Коли?"
        value={date}
        onChange={(date) => {
          setDate(date);
          handleInputChange();
        }}
      />
      <Select
        placeholder="Кількість пасажирів"
        rightSection={rightSectionIcon}
        data={passengerNumberList}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: "auto" } }}
        value={passengerCount}
        onChange={(value: string | null) => {
          setPassengerCount(value || "");
          handleInputChange();
        }}
      />
    </div>
  );
};
