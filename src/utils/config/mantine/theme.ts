import s from "./theme.module.scss";
import { DatePickerInput } from "@mantine/dates";
import { createTheme, Select } from "@mantine/core";

export const theme = createTheme({
    components: {
        Select: Select.extend({
            classNames: {
                root: s['selectRoot'],
                wrapper: s['selectWrapper'],
                input: s['selectInput'],
                label: s['selectLabel'],
            },
        }),
        DatePickerInput: DatePickerInput.extend({
            classNames: {
                root: s['datePickerRoot'],
                input: s['datePickerInput'],
                placeholder: s['datePickerPlaceholder'],
            }
        })
    },
});
