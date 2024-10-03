import "@mantine/core/styles.css";

import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./AppProvider";

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
