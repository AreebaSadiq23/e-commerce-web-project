"use client"

import { useAppContext } from "../context/AppContext"
import ShopPage from "../ShopPage/page"

export default function Wishlist() {
  const { wishlist } = useAppContext()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ShopPage key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

