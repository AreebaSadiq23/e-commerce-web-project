"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/AppContext";
import Header from "@/components/header/Header";
import {
  FaUser,
  FaEnvelope,
  FaHome,
  FaCity,
  FaGlobe,
  FaMapPin,
} from "react-icons/fa";

export default function Checkout() {
  const router = useRouter();
  const { cart, clearCart } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Order placed:", { ...formData, cart });
      clearCart();
      setOrderComplete(true);
      setTimeout(() => {
        router.push("/order-confirmation");
      }, 2000);
    } catch (error) {
      console.error("Error processing order:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 bg-white shadow-lg rounded-xl mt-10 border border-gray-300 mb-10">
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Thank You for Your Order!
        </h1>
        <p className="mb-4 text-gray-700">
          Your order has been successfully placed. Redirecting to confirmation
          page...
        </p>
      </div>
    );
  }

  const fieldIcons = {
    name: <FaUser className="text-gray-500" />,
    email: <FaEnvelope className="text-gray-500" />,
    address: <FaHome className="text-gray-500" />,
    city: <FaCity className="text-gray-500" />,
    country: <FaGlobe className="text-gray-500" />,
    zipCode: <FaMapPin className="text-gray-500" />,
  };

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-12 border border-gray-200 mb-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">
          Checkout Here!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {(
            ["name", "email", "address", "city", "country", "zipCode"] as const
          ).map((field) => (
            <div key={field} className="space-y-2">
              <label
                htmlFor={field}
                className="block font-medium text-gray-700 capitalize"
              >
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-300">
                {fieldIcons[field as keyof typeof fieldIcons]}
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-3 bg-transparent focus:outline-none text-lg"
                />
              </div>
            </div>
          ))}

          <div className="p-6 bg-gray-50 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Order Summary
            </h2>
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-gray-700 text-lg"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 mt-4 flex justify-between font-bold text-gray-900 text-xl">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex">
            <button
              type="submit"
              className="w-60 bg-gradient-to-r from-indigo-500 to-purple-600  hover:from-purple-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 py-4 rounded-lg text-white text-lg font-bold hover:shadow-xl"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
