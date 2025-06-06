import React from "react";
import ProductCard from "./ProductCard";
import img1 from "@/assets/img/img1.png";
import img2 from "@/assets/img/img2.png";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Laptop sleeve MacBook",
    price: 59,
    description: "Organic Cotton, fairtrade certified",
    rating: 4.0,
    image: img1,
  },
  {
    title: "AirPods Max",
    price: 559,
    description: "A perfect balance of high-fidelity audio",
    rating: 5.0,
    image: img2,
  },
  {
    title: "Flower Laptop Sleeve",
    price: 39,
    description: "15 in. x 10 in. – Flap top closure",
    rating: 3.0,
    image: img1,
  },
  {
    title: "Supreme Water Bottle",
    price: 19,
    description: "Table with air purifier, stained veneer/black",
    rating: 6.0,
    image: img2,
  },
];

const ProductList = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-50">
      {products.map((p, index) => (
        <ProductCard key={index} {...p} />
      ))}
      {products.map((p, index) => (
        <ProductCard key={index} {...p} />
      ))}
    </div>
  );
};

export default ProductList;
