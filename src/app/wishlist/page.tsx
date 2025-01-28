"use client"

import { useAppContext } from "../context/AppContext"
import ProductCard from "@/components/productcard"
import Header from "@/components/Header"


export default function Wishlist() {
  const { wishlist } = useAppContext()

  return (
    <>
    <Header/>
    <div>
      <h1 className="text-3xl font-bold mb-8 mt-10 text-center">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center mb-10">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 ml-10">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
    </>
  )
}

