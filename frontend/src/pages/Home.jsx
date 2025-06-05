import React from "react";
import BannerCarousel from '@/components/BannerCarousel'
import FilterTab from '@/components/FilterTab'
import ProductList from '@/components/ProductList'


export default function Home() {
  return (
    <div>
      <BannerCarousel />

      <FilterTab />
      
      <ProductList />
    </div>
  );
}
