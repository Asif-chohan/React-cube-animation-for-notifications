import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import "./index.js";

window.baseURL =
  window.location.hostname === "localhost" ? "http://localhost:8080" : "";

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
registerServiceWorker();
