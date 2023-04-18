import React from "react";
import ReactDOM from "react-dom";
import StyleProvider from "./providers/Style";

import "./index.css";
import MainComponent from "./components/UI/organisms/Main/Main";

const App = () => (
  <StyleProvider>
    <MainComponent/>
  </StyleProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
