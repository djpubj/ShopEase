import React from "react";
import SummaryInCart from "@/components/SummaryInCart";
import DeliveryInformation from '@/components/DeliveryInfromation'
import CartProduct from "@/components/cartpagecomponent/CartProduct";
import DeliveryInfo from "@/components/cartpagecomponent/DeliveryInfo";
import DeliveryInfoEdit from "@/components/cartpagecomponent/DeliveryInfoEdit";
import ReturningCustomerToggle from "../components/cartpagecomponent/ReturningCustomerToggle";

export default function CartCheckout() {
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

          {/* Returning Customer */}
          <ReturningCustomerToggle/>

          {/* Delivery Info */}
          <DeliveryInfo/>

          {/* Delivery Info  Edit*/}
          <DeliveryInfoEdit/>
        </div>

        {/* Right Side */}
        <SummaryInCart/>
      </div>
    </div>
  );
};

