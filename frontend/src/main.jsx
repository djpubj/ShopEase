import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";
import { OrderInCartFetcher } from "./data/CartProductfetcher.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
        <OrderInCartFetcher/>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
