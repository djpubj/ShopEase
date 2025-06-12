import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { currentProduct } from "../../data/atoms/atoms";

export default function ProductInfo() {
  const currentproduct = useRecoilValue(currentProduct);
  const [count,setcount]=useState(0);

  useEffect(()=>{
    setcount(count=>0)
  },[currentproduct])

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">{currentproduct.title}</h1>
      <p className="text-gray-600">
        {currentproduct.description}
      </p>

      <div className="flex items-center gap-2">
        <span className="text-green-600 text-sm">{"★".repeat(currentproduct.rating)}{" "}</span>
        <span className="text-sm text-gray-500">{currentproduct.rating}</span>
      </div>

      <p className="text-xl font-semibold">${currentproduct.price}</p>
      <p className="text-sm text-gray-500">
        Suggested payments with 6 months special financing
      </p>

      {/* Color Picker */}
      {/* <div>
        <p className="font-semibold mb-2">Choose a Color</p>
        <div className="flex gap-3">
          {["#d77c7c", "#333", "#ccc", "#d3e7d4", "#345"].map((color, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full border-2 ${
                i === 0 ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div> */}

      {/* Quantity & Buttons */}
      {count!=0 &&
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center border px-3 py-1 rounded-full">
          <button className="text-xl" onClick={()=>{setcount(count=>count-1)}}>−</button>
          <span className="px-3">{count}</span>
          <button className="text-xl" onClick={()=>{setcount(count=>count+1)}}>+</button>
        </div>
        <span className="text-orange-600 text-sm font-medium">
          Only 12 Items Left!
        </span>
      </div>}

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full">
          Buy Now
        </button>
        <button className="border border px-6 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-500" onClick={()=>{setcount(count=>count+1)}}>
          Add to Cart
        </button>
      </div>

      {/* Delivery Info */}
      <div className="border p-4 mt-6 rounded-xl space-y-2 text-sm">
        <div>
          <strong>🚚 Free Delivery</strong>
          <p className="underline">
            Enter your Postal code for Delivery Availability
          </p>
        </div>
        <div>
          <strong>↩️ Return Delivery</strong>
          <p>
            Free 30days Delivery Returns.{" "}
            <span className="underline ">Details</span>
          </p>
        </div>
      </div>
    </div>
  );
}
