import React from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const ShopPage = () => {
  return (
    <div className="container mx-auto my-12 px-4 max-w-screen-2xl">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Left Heading */}
        <h3 className="text-2xl font-semibold">Shop</h3>

        {/* Breadcrumb */}
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

      {/* Showing Results & Filter Section */}
      <div className="flex justify-between items-center mb-6 mt-12">
        <span className="text-gray-400 font-bold">Showing 12 Results</span>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 bg-gray-200 px-4 py-2 rounded-md text-sm">
            <span>Popularity</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
            Filter
          </button>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="flex flex-wrap justify-center gap-20 mt-10">
        {[
          "/logo/1.png",
          "/logo/2.png",
          "/logo/3.png",
          "/logo/4.png",
          "/logo/5.png",
          "/logo/6.png",
        ].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Brand Logo ${index + 1}`}
            width={96}
            height={48}
            className="w-20 h-auto"
          />
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex justify-center transform transition-transform hover:scale-105"
          >
            <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px] shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-md">
              <Image
                src={`/product/img${index + 7}.png`}
                alt={`Card Image ${index + 1}`}
                width={239}
                height={188}
                className="object-cover transition-transform duration-300 hover:scale-110 rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-center text-black">
                Graphic Design
              </h3>
              <h4 className="text-gray-600 mt-2 text-center">
                English Department
              </h4>
              {/* Prices */}
              <div className="flex justify-center items-center mt-2 space-x-2">
                <p className="text-gray-500">$99.99</p>
                <p className="text-gray-400 line-through">$129.99</p>
              </div>
              {/* Circles */}
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;