import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
// import Router from "react-router";
import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import "./firebaseconfig";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
