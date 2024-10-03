import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../utils/config/theme";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </MantineProvider>
  );
}
