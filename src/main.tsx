import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

import "./styles/_styles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
