'use client'
import { useState } from "react";
import { FiTrash2, FiHeart } from "react-icons/fi";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Casual Jacket",
      price: 120.99,
      quantity: 1,
      image: "/Cloth/img casual.jpg",
    },
    {
      id: 2,
      name: "Trendy Out Fit",
      price: 99.49,
      quantity: 2,
      image: "/Cloth/trendyoutfit.jpg",
    },
    {
      id: 2,
      name: "Men",
      price: 99.49,
      quantity: 2,
      image: "/product/img7.png",
    },
  ]);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const updateQuantity = (id: number, type: "increment" | "decrement") => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increment"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToWishlist = (id: number) => {
    alert("Item added to wishlist!");
  };

  const proceedToCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                {/* Product Details */}
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, "decrement")}
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border rounded-md text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, "increment")}
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 size={18} />
                  </button>
                  <button
                    onClick={() => addToWishlist(item.id)}
                    className="text-indigo-500 hover:text-indigo-700"
                  >
                    <FiHeart size={18} />
                  </button>
                </div>
              </div>
            ))}

            {/* Total Section */}
            <div className="flex justify-between items-center mt-6 p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-800">Total:</h2>
              <p className="text-lg font-bold text-indigo-600">
                ${calculateTotal().toFixed(2)}
              </p>
            </div>

            {/* Checkout Button */}
            <div className="text-right mt-4">
              <button
                onClick={proceedToCheckout}
                className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 shadow-md"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-700">
              Your cart is empty!
            </h2>
            <p className="text-gray-500 mt-4">
              Start adding items to your cart now.
            </p>
            <button className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
              Shop Now
            </button>
          </div>
        )}
      </div>

      {/* Checkout Popup */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Checkout</h2>
            <p className="text-lg text-gray-600 mb-4">
              Please confirm your details and proceed with your order.
            </p>

            {/* Checkout Form or Additional Content */}
            <div className="mt-4">
              <button
                onClick={closeCheckout}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
