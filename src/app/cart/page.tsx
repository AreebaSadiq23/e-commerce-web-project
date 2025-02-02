"use client";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";
import Header from "@/components/header/Header";

export default function Cart() {
  const router = useRouter();
  const { cart, removeFromCart, updateCartItemQuantity } = useAppContext();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 py-8 bg-gray-50">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border-b py-4"
              >
                <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="mb-4 md:mb-0 md:mr-4 mx-auto md:mx-0"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600 mt-2">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-400 line-through">$129.99</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartItemQuantity(
                        item.id,
                        Number.parseInt(e.target.value)
                      )
                    }
                    className="w-16 p-2 border border-gray-300 rounded"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 flex items-center justify-center"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-8">
              <p className="text-lg md:text-xl font-semibold text-center md:text-left">
                Total: ${total.toFixed(2)}
              </p>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={handleCheckout}
                  className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full md:w-auto"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
