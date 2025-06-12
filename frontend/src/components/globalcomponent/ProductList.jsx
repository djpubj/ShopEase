import React from "react";
import ProductCard from "./ProductCard";
import img1 from "@/assets/img/img1.png";
import banner1 from "@/assets/banner1.png";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentProduct,
  productDataState1,
  productDataState2,
} from "../../data/atoms/atoms";

const ProductList = () => {
  const products = useRecoilValue(productDataState1);
  const setcurrentproduct = useSetRecoilState(currentProduct);
  const products2 = useRecoilValue(productDataState2);
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-50">
      {products != null &&
        products.map((p, index) => (
          <ProductCard
            key={index}
            productId={p.productId}
            image={p.imageUrl}
            title={p.title}
            price={p.price}
            description={p.description}
            rating={p.rating}
            onClick={() => {
              setcurrentproduct(p);
            }}
          />
        ))}
      <div className="w-full">
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-64 md:h-96 mt-6">
          <img
            src={banner1}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {products2 != null &&
        products2.map((p, index) => (
          <ProductCard
            key={index}
            image={p.imageUrl}
            title={p.title}
            price={p.price}
            description={p.description}
            rating={p.rating}
            onClick={() => {
              setcurrentproduct(p);
            }}
          />
        ))}
    </div>
  );
};

export default ProductList;
