"use client"

import Link from "next/link"
import Header from "@/components/Header"

export default function OrderConfirmation() {
  return (
    <>
    <Header/>
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 mt-10">Order Confirmation</h1>
      <p className="mb-4">Your order has been successfully placed. Thank you for shopping with us!</p>
      <p className="mb-8">You will receive an email confirmation shortly.</p>
      <div className="pb-10">
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ">
        Return to Home
      </Link>
      </div>
    </div>
    </>
  )
}


