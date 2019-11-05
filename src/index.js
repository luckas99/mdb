import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import i18next from "i18next";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

// Setup i18next
i18next
  .use(XHR)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",

    fallbackLng: "en"
  });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
