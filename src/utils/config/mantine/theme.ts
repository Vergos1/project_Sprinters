import s from "./theme.module.scss";
import { DatePickerInput } from "@mantine/dates";
import { createTheme, Popover, Select } from "@mantine/core";

export const theme = createTheme({
  components: {
    Select: Select.extend({
      classNames: {
        root: s["selectRoot"],
        wrapper: s["selectWrapper"],
        dropdown: s["selectDropdown"],
        options: s["selectOptions"],
        option: s["selectOption"],
        input: s["selectInput"],
        label: s["selectLabel"],
      },
    }),
    DatePickerInput: DatePickerInput.extend({
      classNames: {
        root: s["datePickerRoot"],
        input: s["datePickerInput"],
        placeholder: s["datePickerPlaceholder"],
      },
    }),
    Popover: Popover.extend({
      classNames: {
        dropdown: s["popoverDropdown"],
      },
    }),
  },
});
