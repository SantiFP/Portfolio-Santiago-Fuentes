import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { MyColorProvider } from "./Store/ColorStore.jsx";
import { LifeCounterProvider } from "./Store/LifeStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <MyColorProvider>
        <LifeCounterProvider>
          <App />
        </LifeCounterProvider>
      </MyColorProvider>
  </React.StrictMode>
);
