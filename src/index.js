require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Wrapper from "./components/Wrapper/Wrapper";

const appElement = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <Wrapper>
      <App />
    </Wrapper>
  </Provider>,
  appElement
);
