import React from "react";
import { render } from "react-dom";

import App from "./App";
import AppWithReducer from "./App--withReducer";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    {/* <App /> */}
    <AppWithReducer />
  </React.StrictMode>,
  rootElement
);
