import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { OrderInCartFetcher } from "./data/CartProductfetcher.js";
import AccountPage from "./pages/AccountPage.jsx";

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
