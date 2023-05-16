import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css"
import { MyLifesProvider, MyColorProvider } from "./Store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyLifesProvider>
      <MyColorProvider>
        <App />
      </MyColorProvider>
    </MyLifesProvider>
  </React.StrictMode>
);
