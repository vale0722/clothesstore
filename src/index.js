import React from "react";
import ReactDOM from "react-dom";
import "./presentation/assets/styles/index.scss";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./infrastructure/helpers/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
