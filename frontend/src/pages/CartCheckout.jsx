import { useState } from "react";
import SummaryInCart from "@/components/cartpagecomponent/SummaryInCart";
import CartProduct from "@/components/cartpagecomponent/CartProduct";
import DeliveryInfo from "@/components/cartpagecomponent/DeliveryInfo";
import DeliveryInfoEdit from "@/components/cartpagecomponent/DeliveryInfoEdit";
import { useRecoilValue } from "recoil";
import { orderInCartState } from "../data/atoms/atoms";

export default function CartCheckout() {
  const [deliveryInfoEdit, setdeliveryInfoEdit] = useState(false);
  const handleToggleDeliveryInfoEdit = () => {
    setdeliveryInfoEdit((prev) => !prev);
  };
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="md:col-span-2 space-y-6">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500">
            Home / <span className="text-black font-medium">Checkout</span>
          </p>
          {/* Product Review */}

          <CartProduct/>

          {/* Delivery Info */}

          <DeliveryInfo onToggleEdit={handleToggleDeliveryInfoEdit} />

          {/* Delivery Info  Edit*/}
          {deliveryInfoEdit && <DeliveryInfoEdit />}
        </div>

        {/* Right Side */}
        <SummaryInCart />
      </div>
    </div>
  );
}
