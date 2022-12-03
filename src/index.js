import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./Component/GlobalStyle";
import { ArrContext } from "./Page/Edit/ArrContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ArrContext>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </ArrContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
