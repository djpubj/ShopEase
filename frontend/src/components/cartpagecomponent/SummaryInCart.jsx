import {useState} from "react";


export default function SummaryInCart() {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const product = {
    img: "https://i.imgur.com/PljC9Fn.png",
    name: "Airpods - Max",
    color: "Pink",
    price: 549.0,
    quantity: 1,
  };
  const paymentMethods = [
    { id: "cod", label: "Cash on Delivery" },
    { id: "shopcart", label: "ShopEase Card" },
    { id: "paypal", label: "Paypal" },
    { id: "card", label: "Credit or Debit card", defaultChecked: true },
  ];

  const summaryItems = [
    { label: "Sub Total", value: `₹${product.price.toFixed(2)}` },
    { label: "Tax(10%)", value: `₹${(product.price * 0.1).toFixed(2)}` },
    { label: "Coupon Discount", value: "-₹54.90" },
    { label: "Shipping Cost", value: "₹0.00" },
  ];

  const paymentInput = [
    { label: "Email*", type: "email" },
    { label: "Card Holder Name*", type: "text" },
    {
      label: "Card Number*",
      type: "text",
      placeholder: "0000******1245",
    },
    {
      label: "Expiry",
      type: "text",
      placeholder: "MM/YY",
      isHalf: true,
    },
    {
      label: "CVC",
      type: "text",
      placeholder: "000",
      isHalf: true,
    },
  ];

  const total = (product.price + product.price*0.1 - 54.9);
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <h3 className="text-xl font-semibold">Order Summary</h3>

      {/* Coupon */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          className="border rounded-md px-3 py-2 flex-1 text-sm"
        />
        <button className=" text-white px-4 py-2 rounded-md text-sm bg-blue-600 hover:bg-blue-500">
          Apply coupon
        </button>
      </div>

      {/* Payment Options */}
      <div>
        <h4 className="text-md font-semibold mb-2">Payment Details</h4>
        <div className="space-y-2 text-sm">
          {paymentMethods.map(({ id, label, defaultChecked }) => (
            <label key={id} className="block">
              <input
                type="radio"
                name="payment"
                checked={selectedMethod === id}
                onChange={() => setSelectedMethod(id)}
              />{" "}
              {label}
            </label>
          ))}
        </div>

        <div className="flex gap-2 mt-2">
          <img
            src="https://i.imgur.com/LhLExEV.png"
            alt="Amazon"
            className="h-6"
          />
          <img
            src="https://i.imgur.com/xP8Yz3U.png"
            alt="MasterCard"
            className="h-6"
          />
          <img
            src="https://i.imgur.com/Hs1zwn9.png"
            alt="Visa"
            className="h-6"
          />
        </div>
      </div>

      {/* Payment Inputs */}
      {selectedMethod !== "cod" && (
        <div className="space-y-4 text-sm">
          {paymentInput.map(({ label, type, placeholder, isHalf }, i, arr) =>
            isHalf ? null : (
              <div key={label}>
                <label>{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>
            )
          )}

          <div className="flex gap-4">
            {[
              { label: "Expiry", placeholder: "MM/YY" },
              { label: "CVC", placeholder: "000" },
            ].map(({ label, placeholder }) => (
              <div key={label} className="flex-1">
                <label>{label}</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary Breakdown */}
      <div className="text-sm text-gray-700 space-y-1">
        {summaryItems.map(({ label, value }) => (
          <div key={label} className="flex justify-between">
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}

        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Total</span>
          <span>= &#8377;{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Pay Button */}
      <button className="w-full text-white py-3 rounded-xl font-medium text-lg bg-blue-600 hover:bg-blue-500">
        Pay &#8377;{total.toFixed(2)}
      </button>

      {/* Cashback Card */}
      <div className="bg-[#fdf4eb] text-sm p-4 rounded-md">
        <span className="font-semibold text-blue-800">Earn 5% cash back</span>{" "}
        on ShopEase <br />
        <a href="#" className="text-blue-700 underline text-sm">
          Learn More
        </a>
      </div>
    </div>
  );
}
