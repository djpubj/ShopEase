import React from "react";

export default function ProductInfo() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Airpods- Max</h1>
      <p className="text-gray-600">
        a perfect balance of exhilarating high-fidelity audio and the effortless
        magic of AirPods.
      </p>

      <div className="flex items-center gap-2">
        <span className="text-green-600 text-sm">★★★★★</span>
        <span className="text-sm text-gray-500">(121)</span>
      </div>

      <p className="text-xl font-semibold">$549.00 or 99.99/month</p>
      <p className="text-sm text-gray-500">
        Suggested payments with 6 months special financing
      </p>

      {/* Color Picker */}
      <div>
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
      </div>

      {/* Quantity & Buttons */}
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center border px-3 py-1 rounded-full">
          <button className="text-xl">−</button>
          <span className="px-3">1</span>
          <button className="text-xl">+</button>
        </div>
        <span className="text-orange-600 text-sm font-medium">
          Only 12 Items Left!
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="bg-green-900 text-white px-6 py-2 rounded-full">
          Buy Now
        </button>
        <button className="border border-black px-6 py-2 rounded-full">
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
