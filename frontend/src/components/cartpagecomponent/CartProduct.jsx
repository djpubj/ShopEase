import React from "react";

export default function CartProduct() {
  const product = {
    img: "https://i.imgur.com/PljC9Fn.png",
    name: "Airpods - Max",
    color: "Pink",
    price: 549.0,
    quantity: 1,
  };
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex gap-6 items-center">
      <img
        src={product.img}
        alt={product.name}
        className="w-24 h-24 rounded-md"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500">Color: {product.color}</p>
        <p className="text-gray-800 font-semibold mt-2">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">
          Quantity: {product.quantity.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
