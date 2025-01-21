"use client"

import Image from "next/image"
import { Trash2 } from "lucide-react"
import { useAppContext } from "../context/AppContext"
import { useRouter } from "next/navigation"

export default function Cart() {
  const router = useRouter()
  const { cart, removeFromCart, updateCartItemQuantity } = useAppContext()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    router.push("/checkout")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} width={80} height={80} className="mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateCartItemQuantity(item.id, Number.parseInt(e.target.value))}
                  className="w-16 p-1 border border-gray-300 rounded mr-4"
                />
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

