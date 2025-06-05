import React from "react";
import color1 from "@/assets/productpageimg/color1.png";
import color2 from "@/assets/productpageimg/color2.png";
import color3 from "@/assets/productpageimg/color3.png";
import color4 from "@/assets/productpageimg/color4.png";
import color5 from "@/assets/productpageimg/color5.png";

export default function ProductPhoto() {
  return (
    <div>
      <img
        src={color2}
        alt="Airpods Max"
        className="rounded-xl w-full object-cover"
      />
      <div className="flex gap-4 mt-4">
        {[color1, color4, color5, color3].map((src, index) => (
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
