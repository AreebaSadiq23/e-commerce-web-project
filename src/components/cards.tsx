"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CardSection = () => {
  const products = [
    { id: 1, title: "Casual jacket", category: "Department", price: 89.99, image: "/editor/img casual.jpg" },
    { id: 2, title: "Trendy OutFit", category: "Department", price: 129.99, image: "/editor/trendyoutfit.jpg" },
    { id: 3, title: "Man Shirt", category: "Department", price: 89.99, image: "/editor/img4.png" },
    { id: 4, title: "Summer T-shirt", category: "Department", price: 89.99, image: "/editor/img8.png" },
    { id: 5, title: "Woman Dress", category: "Department", price: 99.99, image: "/editor/img9.png" },
    { id: 6, title: "Girls Kurti", category: "Department", price: 89.99, image: "/editor/img kurti.png" },
    { id: 7, title: "Designer Dress", category: "Department", price: 89.99, image: "/editor/img.jpg" },
    { id: 8, title: "Kids collection", category: "Department", price: 89.99, image: "/editor/img kid.png" },
  ];

  return (
    <div className="py-20 px-4 bg-gray-50 max-w-screen-2xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-xl font-semibold text-blue-600">Featured Product</h3>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">Best Seller Products</h2>
        <p className="text-gray-500 mt-4">Problems solving and trying to resolve the conflict between</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center transform transition-transform hover:scale-105">
            <Link href={`/card/${product.id}`}>
              <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px] shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg">
                <Image
                  src={product.image}
                  alt={`Card Image ${product.id}`}
                  width={239}
                  height={188}
                  className="object-cover transition-transform duration-300 hover:scale-110 rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-center text-black">{product.title}</h3>
                <h4 className="text-gray-600 mt-2 text-center">{product.category}</h4>
                <div className="flex justify-center items-center mt-2 space-x-2">
                  <p className="text-gray-500">${product.price}</p>
                  <p className="text-gray-400 line-through">$129.99</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
