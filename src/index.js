import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
//ReactDOM.render(<App/>,document.querySelector('#root'))
import { BrowserRouter } from "react-router-dom";
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
