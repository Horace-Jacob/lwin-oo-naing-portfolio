import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { HashRouter } from "react-router-dom";
import "./index.css";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
