import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "../styles/_styles.scss";

import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./AppProvider";

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
