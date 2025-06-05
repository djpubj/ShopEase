import React from "react";
import Home from "./pages/Home";
import Header from "@/components/Header";
import BannerCarousel from "./components/BannerCarousel";
import FilterTab from "./components/FilterTab";
import ProductList from "./components/ProductList";
import ProductPage from "@/pages/ProductPage";
import CartCheckout from "./pages/CartCheckout";
import DeliveryInformation from "./components/DeliveryInfromation";
import Footer from "./components/Footer";
import SearchedPage from "./pages/SearchedPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/CartCheckout" element={<CartCheckout/>}/>
        <Route path="/ProductPage" element={<ProductPage/>}/>
        {/* <SearchedPage /> */}
      </Routes>
      <Footer />
    </>
  );
}
