import { Select } from "@mantine/core";
import s from "./tab.module.scss";
import { citiesList, passengerNumberList } from "../../../utils/constants/data.constants";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import { icons } from "../../../utils/helper/icons";

export const CarrierTab = () => {
    const [value, setValue] = useState<Date | null>(null);
    const rightSectionIcon = icons.arrowBottom;

    return (
        <div className={`${s.tab} animate`}>
            <Select
                placeholder="Звідки?"
                rightSection={rightSectionIcon}
                data={citiesList}
                withScrollArea={false}
                styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
            />
            <Select
                placeholder="Куди?"
                rightSection={rightSectionIcon}
                data={citiesList}
                withScrollArea={false}
                styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
            />
            <DatePickerInput
                leftSection={icons.calendar}
                rightSection={rightSectionIcon}
                leftSectionPointerEvents="none"
                placeholder="Коли?"
                value={value}
                onChange={setValue}
            />
            <Select
                placeholder="Кількість пасажирів"
                rightSection={rightSectionIcon}
                data={passengerNumberList}
                withScrollArea={false}
                styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
            />
        </div>
    );
}