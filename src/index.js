import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import BalloonContextProvider from "./contextapi/BalloonContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BalloonContextProvider>
      <App />
    </BalloonContextProvider>
  </React.StrictMode>
);
