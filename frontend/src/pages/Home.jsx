import React from "react";
import BannerCarousel from '@/components/homepagecomponent/BannerCarousel'
import FilterTab from '@/components/homepagecomponent/FilterTab'
import ProductList from '@/components/globalcomponent/ProductList'


export default function Home() {
  return (
    <div>
      <BannerCarousel />

      <FilterTab />
      
      <ProductList />
    </div>
  );
}
