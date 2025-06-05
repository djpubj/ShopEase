import React from "react";
import ProductCard from "./ProductCard";
import img1 from "@/assets/img/img1.png";
import img2 from "@/assets/img/img2.png";

const products = [
  {
    title: "Laptop sleeve MacBook",
    price: 59,
    description: "Organic Cotton, fairtrade certified",
    rating: 121,
    image: img1,
  },
  {
    title: "AirPods Max",
    price: 559,
    description: "A perfect balance of high-fidelity audio",
    rating: 121,
    image: img2,
  },
  {
    title: "Flower Laptop Sleeve",
    price: 39,
    description: "15 in. x 10 in. – Flap top closure",
    rating: 121,
    image: img1,
  },
  {
    title: "Supreme Water Bottle",
    price: 19,
    description: "Table with air purifier, stained veneer/black",
    rating: 121,
    image: img2,
  },
];

const SimilarProductList = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-2xl my-4">
      <h1 className="text-3xl font-bold mb-6 pl-5">
        Similar Products
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((p, index) => (
          <ProductCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProductList;
