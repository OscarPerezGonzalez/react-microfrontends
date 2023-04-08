import React from "react";
import ReactDOM from "react-dom";
import CustomButtonB from "./components/UI/atoms/Button/CustomButtonB";
import CustomTextInput from "./components/UI/atoms/Input/CustomTextInput";
import CustomIconTitle from "./components/UI/atoms/IconTitle/IconTitle";
import StyleProvider from "./providers/Style";

import "./index.css";
import CustomButtonA from "./components/UI/atoms/Button/CustomButtonA";
import ScreenComponent from "./components/UI/molecules/Screen/Screen";
import MainComponent from "./components/UI/organisms/Main";

const App = () => (
  <StyleProvider>
    <MainComponent/>
  </StyleProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
