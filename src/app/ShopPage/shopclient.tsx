'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import { Heart, ShoppingCart } from "lucide-react";
import { useAppContext } from "../context/AppContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
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
    <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px] shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-md">
      <Image
        src={product.image}
        alt={product.name}
        width={239}
        height={188}
        className="object-cover transition-transform duration-300 hover:scale-110 rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4 text-center text-black">{product.name}</h3>
      <div className="flex justify-center items-center mt-2 space-x-2">
        <p className="text-gray-500">${product.price}</p>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        <div className="w-4 h-4 rounded-full bg-red-500"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
        <div className="w-4 h-4 rounded-full bg-green-500"></div>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-5"
      >
        <ShoppingCart className="inline-block mr-1" size={16} />
        Add to Cart
      </button>
      <button
        onClick={handleToggleWishlist}
        className={`p-2 rounded ${isWishlisted ? "text-red-500" : "text-gray-500"} mt-2 ml-2`}
      >
        <Heart className="inline-block" size={20} fill={isWishlisted ? "currentColor" : "none"} />
      </button>
    </div>
  );
};

const ShopPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto my-12 px-4 max-w-screen-2xl">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Shop</h3>
          <div className="breadcrumb flex items-center text-gray-500 space-x-2">
            <span>Home</span>
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            <span className="font-semibold text-gray-800">Shop</span>
          </div>
        </div>

        {/* Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[
            "/Cloth/img casual.jpg",
            "/Cloth/img clo.jpeg",
            "/Cloth/img kurti.jpg",
            "/Cloth/trendyoutfit.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="shop-item border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 relative"
            >
              <Image
                src={src}
                alt={`Cloth ${index + 1}`}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-200">
                <h3 className="text-lg font-medium">CLOTHS</h3>
                <p className="text-sm text-gray-300">5 Items</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="flex justify-center transform transition-transform hover:scale-105">
              <ProductCard
                product={{
                  id: index + 1,
                  name: `Product ${index + 1}`,
                  price: 99.99,
                  image: `/product/img${index + 7}.png`,
                }}
              />
              
            </div>
            
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center mt-12">
          {/* Previous Button */}
          <Link href="/page2">
            <button className="px-6 py-4 bg-white text-gray-700 border border-gray-400 text-sm">
              Next
            </button>
          </Link>

          {/* Page Buttons */}
          <button className="px-4 py-4 bg-white text-gray-700 border border-gray-400 text-sm">
            1
          </button>
          <button className="px-4 py-4 bg-blue-500 text-white border border-blue-400 text-sm">
            2
          </button>
          <button className="px-4 py-4 bg-white text-gray-700 border border-gray-400 text-sm">
            3
          </button>

          {/* Next Button */}
          <Link href="/page2">
            <button className="px-6 py-4 bg-white text-gray-700 border border-gray-400 text-sm">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
