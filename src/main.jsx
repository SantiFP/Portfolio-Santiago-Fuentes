import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MyContextProvider, MyColorProvider } from "./Store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvider>
      <MyColorProvider>
        <App />
      </MyColorProvider>
    </MyContextProvider>
  </React.StrictMode>
);
