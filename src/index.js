import React from "react";
// import { StrictMode } from "react";
// import "@fontsource/poppins";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

import App from "./App";
// import * as serviceWorker from './serviceWorker';

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
