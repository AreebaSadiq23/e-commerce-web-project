'use client'
import { useShoppingCart } from 'use-shopping-cart'
import { useState } from 'react'

export default function CartPage() {
  const { cartDetails, removeItem, setItemQuantity, redirectToCheckout } = useShoppingCart()
  const [isRedirecting, setRedirecting] = useState(false)

  const handleQuantityChange = (id: string, quantity: number) => {
    setItemQuantity(id, quantity)
  }

  const handleRemoveItem = (id: string) => {
    removeItem(id)
  }

  const handleCheckout = async () => {
    setRedirecting(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartDetails),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const data = await response.json()

      if (data.sessionId) {
        redirectToCheckout(data.sessionId)
      } else {
        throw new Error('Session ID not found')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setRedirecting(false)
    }
  }

  if (!cartDetails || Object.keys(cartDetails).length === 0) {
    return <p>Your cart is empty.</p>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {Object.values(cartDetails).map((entry) => (
        <div key={entry.id} className="flex items-center justify-between border-b py-4">
          <div>
            <h2 className="text-xl">{entry.name}</h2>
            <p className="text-gray-600">${(entry.price / 100).toFixed(2)}</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange(entry.id, entry.quantity - 1)}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              -
            </button>
            <span className="mx-2">{entry.quantity}</span>
            <button
              onClick={() => handleQuantityChange(entry.id, entry.quantity + 1)}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              +
            </button>
            <button
              onClick={() => handleRemoveItem(entry.id)}
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-8">
        <button
          onClick={handleCheckout}
          disabled={isRedirecting}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isRedirecting ? 'Redirecting...' : 'Proceed to Checkout'}
        </button>
      </div>
    </div>
  )
}
