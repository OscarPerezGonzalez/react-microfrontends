import React from "react";
import ReactDOM from "react-dom";


import "./index.css";
import Clients from "./pages/Clients";

const App = () => (
  <Clients />
);
ReactDOM.render(<App />, document.getElementById("app"));
