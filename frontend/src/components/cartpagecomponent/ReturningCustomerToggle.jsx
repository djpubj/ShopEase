import React from "react";

export default function ReturningCustomerToggle() {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        defaultChecked
        className="w-5 h-5 text-green-600"
      />
      <span className="text-sm font-medium text-gray-700">
        Returning Customer?
      </span>
    </div>
  );
}
