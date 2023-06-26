import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CitiesProvider from "./store/cities-store.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CitiesProvider>
      <App />
    </CitiesProvider>
  </React.StrictMode>
);
