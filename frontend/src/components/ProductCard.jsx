import React from "react";

const ProductCard = ({ image, title, price, description, rating }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md max-w-[240px] hover:shadow-lg transition">
      <div className="relative">
        <img src={image} alt={title} className="rounded-xl w-full h-[180px] object-contain" />
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          ❤️
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-[10px]">{description}</p>
        <div className="flex items-center text-green-600 font-bold text-sm">
          {"★".repeat(5)} <span className="text-black ml-2">({rating})</span>
        </div>
        <p className="text-lg font-bold">${price}.00</p>
        <button className="mt-2 border rounded-full w-full py-1 hover:bg-blue-600 hover:text-white transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
