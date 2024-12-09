import React from "react";
import Image from "next/image"; 
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  ChevronRightIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

const ShopPage = () => {
  return (
    <div className="container mx-auto my-12 px-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 mt-10">
        {/* Product Card */}
        {[
          "/Cloth/img casual.jpg",
          "/Cloth/img clo.jpeg",
          "/Cloth/img kurti.jpg",
          "/Cloth/trendyoutfit.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="shop-item text-center border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 relative"
          >
            {/* Image */}
            <Image
              src={src}
              alt={`Cloth ${index + 1}`}
              width={400}  
              height={200} 
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Product Information Over Image */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-medium">{`Cloth ${index + 1}`}</h3>
              <p className="text-sm text-gray-300">{`$${20 + index * 5}.00`}</p>
              <p className="text-sm text-gray-300">{`${5 + index * 3} Items`}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Showing Results & Filter Section */}
      <div className="flex justify-between items-center mb-6 mt-12">
        <span>Showing 4 Results</span>

        {/* Buttons Section */}
        <div className="flex w-full justify-between items-center">
          {/* Centered Views and Additional Icons */}
          <div className="flex items-center space-x-4 mx-auto">
            <button className="flex items-center space-x-1 bg-gray-200 p-2 rounded-md text-sm">
              <span>Views</span>
            </button>
            {/* Grid Icon */}
            <button className="bg-gray-200 p-2 rounded-md">
              <Squares2X2Icon className="w-4 h-4" />
            </button>
            {/* Additional Icon */}
            <button className="bg-gray-200 p-2 rounded-md">
              <AdjustmentsHorizontalIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Right-Aligned Buttons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 bg-gray-200 p-2 rounded-md text-sm">
              <span>Popularity</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-1 bg-blue-500 text-white p-2 rounded-md text-md">
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="flex flex-wrap justify-center gap-24 mt-20">
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
            className="w-24 h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
