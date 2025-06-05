import React from 'react';

const ProductSpecs = () => {
  return (
    <div className="bg-gray-100 p-12 text-gray-800 rounded-2xl">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          Apple AirPods Max Wireless Headphones Full Specifications
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* General Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">General</h2>
            <div className="space-y-2">
              <SpecItem label="Brand" value="Apple" />
              <SpecItem label="Model" value="Model AirPods Max Wireless Headphones" />
              <SpecItem label="Price" value="$549.00" />
              <SpecItem label="Release Date" value="December 2020" />
              <SpecItem label="Model Number" value="AirPods Max" />
              <SpecItem label="Headphone Type" value="Over-Ear" />
              <SpecItem label="Connectivity" value="Wireless" />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Product details</h2>
            <div className="space-y-2">
              <SpecItem label="Microphone" value="Yes" />
              <SpecItem label="Driver Type" value="Dynamic" />
              <SpecItem label="Driver Size (mm)" value="40" />
              <SpecItem label="Number of Drivers" value="1" />
              <SpecItem label="Water Resistant" value="No" />
              <SpecItem label="Weight (g)" value="385.00" />
              <SpecItem label="Battery Life (Hrs)" value="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecItem = ({ label, value }) => (
  <div className="flex justify-between">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

export default ProductSpecs;
