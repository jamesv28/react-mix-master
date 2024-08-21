import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";

import "./index.css";
import "react-toastify/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer autoClose="2000" position="top-right" />
    <App />
  </React.StrictMode>
);
