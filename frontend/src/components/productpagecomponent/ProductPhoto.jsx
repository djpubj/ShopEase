import React from "react";
import color1 from "@/assets/productpageimg/color1.png";
import color2 from "@/assets/productpageimg/color2.png";
import color3 from "@/assets/productpageimg/color3.png";
import color4 from "@/assets/productpageimg/color4.png";
import color5 from "@/assets/productpageimg/color5.png";
import { useRecoilValue } from "recoil";
import { currentProduct } from "../../data/atoms/atoms";

export default function ProductPhoto() {
  const currentproduct = useRecoilValue(currentProduct);
  return (
    <div>
      <img
        src={currentproduct.imageUrl}
        alt="Airpods Max"
        className="h-120 object-cover rounded-md"
      />
      <div className="flex gap-4 mt-4">
        {[currentproduct.imageUrl].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index}`}
            className="w-20 h-20 rounded-lg border cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
