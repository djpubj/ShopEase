import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({
  image,
  title,
  price,
  description,
  rating,
}) {
  const [liked, setLiked] = useState(false);
  const handlelikedClick = () => {
    setLiked(!liked);
  };
  return (
    <div className="bg-white rounded-2xl p-4  max-w-[240px] hover:shadow-lg transition">
      <div className="relative">
        <Link to="/ProductPage">
          <img
            src={image}
            alt={title}
            className="rounded-xl w-full h-[180px] object-contain
        transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </Link>
        <HeartButton liked={liked} handleClick={handlelikedClick}/>
      </div>
      <div className="mt-4 space-y-1">
        <Link to="/ProductPage">
          <h3 className="font-semibold text-lg ">{title}</h3>
        </Link>
        <p className="text-gray-500 text-[10px]">{description}</p>
        <div className="flex items-center text-green-600 font-bold text-sm">
          {"★".repeat(rating)} <span className="text-black ml-2">({rating}.0)</span>
        </div>
        <Link to="/ProductPage">
          <p className="text-lg font-bold"> &#8377; {price}.00</p>
        </Link>
      </div>
      <button
        className="mt-2 border rounded-full w-full py-1 text-white bg-blue-600 hover:bg-blue-500 "
        onClick={null}
      >
        Add to Cart
      </button>
    </div>
  );
}

function HeartButton({ liked, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-5"
        viewBox="0 0 24 24"
        fill={liked ? "#ef4444" : "#ffffff"}
        stroke="#ef4444"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 21C12 21 4 13.75 4 8.5C4 5.75 6 4 8.5 4C10 4 11.25 5 12 6C12.75 5 14 4 15.5 4C18 4 20 5.75 20 8.5C20 13.75 12 21 12 21Z"
        />
      </svg>
    </button>
  );
}
