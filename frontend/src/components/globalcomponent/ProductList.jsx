import banner1 from "@/assets/banner1.png";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentProduct,
  productDataState1,
  productDataState2,
} from "../../data/atoms/atoms";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = useRecoilValue(productDataState1);
  const setcurrentproduct = useSetRecoilState(currentProduct);
  const products2 = useRecoilValue(productDataState2);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-gray-50 justify-items-center">
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
      <div className="col-span-full w-full ">
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
