import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AccountPage() {
  const navigate = useNavigate();

  const User = {
    id: "1",
    firstName: "Aditya",
    lastName: "Pandey",
    phoneNumber: "+91 9884552464",
    gmail: "adityaPandey23@gmail.com",
  };

  const handleLogout = () => {
    // Add your logout logic here (e.g. clear localStorage, reset auth state)
    // localStorage.clear();
    // authContext.logout();
    navigate("/LoginPage");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 sm:px-12">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 border-b pb-4">
          <FaUserCircle className="text-blue-800 text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">My Account</h2>
            <p className="text-sm text-gray-500">Welcome back, {User.firstName}!</p>
          </div>
        </div>

        {/* User Info */}
        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">First Name:</span>
            <span>{User.firstName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Last Name:</span>
            <span>{User.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Phone Number:</span>
            <span>{User.phoneNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{User.gmail}</span>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 text-right">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
