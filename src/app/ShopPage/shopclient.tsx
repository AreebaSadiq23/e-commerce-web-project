"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import { Heart, ShoppingCart } from "lucide-react";
import { useAppContext } from "../context/AppContext";

interface Product {
  id: number;
  name: string;
  title:string;
  price: number;
  oldprice?:number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, wishlist, addToWishlist, removeFromWishlist } = useAppContext();

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="flex justify-center transform transition-transform hover:scale-105">
      <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px] shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-md">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={239}
          height={188}
          className="object-cover transition-transform duration-300 hover:scale-110 rounded-md"
        />
        <h3 className="text-2xl font-semibold mt-6 text-black">{product.name}</h3>
        <h4 className="text-gray-600 mt-4 text-center font-semibold">{product.title}</h4>
        <p className="text-md text-gray-600 mt-4">{product.description}</p>
        <div className="flex justify-center mt-2 space-x-2 mr-5">
          <p className="text-green-800">${product.price.toFixed(2)}</p>
          <p className="text-gray-400 line-through">$129.99</p>
        </div>
        <div className="flex justify-center mt-5 space-x-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={handleAddToCart}>
            <ShoppingCart className="inline-block mr-1" size={16} />
          </button>
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded ${isWishlisted ? "text-red-500" : "text-gray-500"}`}
          >
            <Heart className="inline-block" size={20} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ShopPageClient = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Graphic Design",
      title:"English Department",
      price: 99.99,
      image: "/editor/img8.png",
      description: "Enhance your creative projects with this amazing design.",
    },
    {
      id: 2,
      name: "Graphic Design",
      title:"English Department",
      price: 79.99,
      image: "/editor/img13.png",
      description: "Perfect for any branding or marketing materials.",
    },
    {
      id: 3,
      name: "Graphic Design",
      title:"English Department",
      price: 59.99,
      image: "/editor/img6.png",
      description: "Professional-grade design for all your needs.",
    },
    {
      id: 4,
      name: "Graphic Design",
      title:"English Department",
      price: 129.99,
      image: "/editor/img7.png",
      description: "Premium design for impactful visuals.",
    },
    {
      id: 5,
      name: "Graphic Design",
      title:"English Department",
      price: 24.99,
      image: "/editor/img9.png",
      description: "Affordable design with excellent quality.",
    },
    {
      id: 6,
      name: "Graphic Design",
      title:"English Department",
      price: 49.99,
      image: "/editor/img12.png",
      description: "Simple yet elegant design for daily use.",
    },
    {
      id: 7,
      name: "Graphic Design",
      title:"English Department",
      price: 89.99,
      image: "/editor/img10.png",
      description: "High-quality design for professional projects.",
    },
    {
      id: 8,
      name: "Graphic Design",
      title:"English Department",
      price: 69.99,
      image: "/editor/img11.png",
      description: "Versatile design suitable for various purposes.",
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto my-12 px-4 max-w-screen-2xl">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Shop</h1>
          <div className="breadcrumb flex items-center text-gray-500 space-x-2">
            <span>Home</span>
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            <span className="font-semibold text-gray-800">Shop</span>
          </div>
        </div>

        {/* Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center mt-12">
          {/* Previous Button */}
          <Link href="/shop?page=1" className="px-6 py-4 bg-white text-gray-700 border border-gray-400 text-sm">
            Previous
          </Link>

          {/* Page Buttons */}
          <button className="px-4 py-4 bg-white text-gray-700 border border-gray-400 text-sm">1</button>
          <button className="px-4 py-4 bg-blue-600 text-white border border-blue-400 text-sm">2</button>
          <button className="px-4 py-4 bg-white text-gray-700 border border-gray-400 text-sm">3</button>

          {/* Next Button */}
          <Link href="/page2" className="px-6 py-4 bg-white text-gray-700 border border-gray-400 text-sm">
            Next
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopPageClient;
