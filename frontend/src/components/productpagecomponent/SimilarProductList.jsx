import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentProduct,
  productDataState1,
  productDataState2,
} from "../../data/atoms/atoms";
import ProductCard from "../globalcomponent/ProductCard";

// const products = [
//   {
//     title: "Laptop sleeve MacBook",
//     price: 59,
//     description: "Organic Cotton, fairtrade certified",
//     rating: 5,
//     image: img1,
//   },
//   {
//     title: "AirPods Max",
//     price: 559,
//     description: "A perfect balance of high-fidelity audio",
//     rating: 4,
//     image: img2,
//   },
//   {
//     title: "Flower Laptop Sleeve",
//     price: 39,
//     description: "15 in. x 10 in. – Flap top closure",
//     rating: 3,
//     image: img1,
//   },
//   {
//     title: "Supreme Water Bottle",
//     price: 19,
//     description: "Table with air purifier, stained veneer/black",
//     rating: 6,
//     image: img2,
//   },
//   {
//     title: "Flower Laptop Sleeve",
//     price: 39,
//     description: "15 in. x 10 in. – Flap top closure",
//     rating: 3,
//     image: img1,
//   },
//   {
//     title: "Supreme Water Bottle",
//     price: 19,
//     description: "Table with air purifier, stained veneer/black",
//     rating: 6,
//     image: img2,
//   },
// ];

const SimilarProductList = () => {
  const products = useRecoilValue(productDataState1);
  const products2 = useRecoilValue(productDataState2);
  const [currentproduct, setcurrentproduct] = useRecoilState(currentProduct);
  return (
    <div className="p-6 bg-gray-50 rounded-2xl my-4">
      <h1 className="text-3xl font-bold mb-6 pl-5">Similar Products</h1>
      <div className="overflow-x-auto whitespace-nowrap p-6 bg-gray-50 scrollbar-hide">
        <div className="inline-flex gap-6">
          {products.map((p, index) =>
            currentproduct.category === p.category ? (
              <ProductCard
                key={index}
                image={p.imageUrl}
                title={p.title}
                price={p.price}
                description={p.description}
                rating={p.rating}
                onClick={() => {
                  setcurrentproduct(p);
                  window.scrollTo({ top: 0, behavior: 'smooth' }); 
                }}
              />
            ) : null
          )}
          {products2.map((p, index) =>
            currentproduct.category === p.category ? (
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
                  window.scrollTo({ top: 0, behavior: 'smooth' }); 
                }}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarProductList;
