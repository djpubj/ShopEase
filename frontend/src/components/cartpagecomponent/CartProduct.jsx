import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { orderInCartState, totalAmountState } from "../../data/atoms/atoms";

export default function CartProduct() {
  // const product = {
  //   img: "https://i.imgur.com/PljC9Fn.png",
  //   name: "Airpods - Max",
  //   price: 549.0,
  //   quantity: 1,
  // };
  const [cartProductList, setCartProductList] =
    useRecoilState(orderInCartState);
  console.log(cartProductList);
  const setTotal = useSetRecoilState(totalAmountState);
  const handleQuantityChange = (productId, delta) => {
    setCartProductList((prevList) =>
      prevList
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  useEffect(() => {
    setTotal((total) => (total = calculateTotalAmount(cartProductList)));
  }, [cartProductList]);

  return (
    <div className="space-y-4">
      {cartProductList.map((product) => (
        <div
          key={product.productId}
          className="bg-white rounded-xl shadow-sm p-6 flex gap-6 items-center"
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-24 h-24 rounded-md"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-800 font-semibold mt-2">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="font-medium">Qty:</span>
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 ">
                <button
                  className="text-lg text-gray-300 hover:text-gray-800 px-1"
                  onClick={() => {
                    handleQuantityChange(product.productId, -1);
                  }}
                >
                  −
                </button>
                <span className="px-3 text-gray-900 font-semibold">
                  {product.quantity.toString().padStart(2, "0")}
                </span>
                <button
                  className="text-lg text-gray-300 hover:text-gray-800 px-1"
                  onClick={() => {
                    handleQuantityChange(product.productId, 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const calculateTotalAmount = (products) => {
  return products.reduce((total, product) => {
    return total + (product.price || 0) * (product.quantity || 1);
  }, 0);
};
