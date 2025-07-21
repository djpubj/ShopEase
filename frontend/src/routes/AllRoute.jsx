import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/loginlogout/LogInPage";
import SignupPage from "@/pages/loginlogout/SignupPage";
import Home from "@/pages/Home";
import ProductPage from "@/pages/ProductPage";
import CartCheckout from "@/pages/CartCheckout";
import SearchedPage from "../pages/SearchedPage";
import AccountPage from "../pages/AccountPage";

export default function AllRoute() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CartCheckout" element={<CartCheckout />} />
      <Route path="/ProductPage" element={<ProductPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignupPage" element={<SignupPage />} />
      <Route path="/SearchedPage" element={<SearchedPage/>}/>
      <Route path="/account" element={<AccountPage />} />
      {/* <Route path="/"/> */}
    </Routes>
    </>
  );
}
