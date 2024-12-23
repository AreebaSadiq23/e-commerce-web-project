"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  HeartIcon,
  ShoppingCartIcon,
  EyeIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import Navbar from "../navbar";

const ProductSection = () => {
  const rating = 5;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/shop/1.jpg", "/shop/2.jpg"];

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-12 px-4 max-w-screen-xl">
        <div className="flex flex-wrap items-center justify-between gap-12">
          {/* Left Image Section with Carousel */}
          <div className="w-full md:w-[506px] h-[450px] relative">
            <Image
              src={images[currentImageIndex]}
              alt="Phone"
              width={506}
              height={450}
              className="ml-20"
            />
            <button
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-4 rounded-full text-3xl"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-4 rounded-full text-3xl"
            >
              &gt;
            </button>
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-2">Phone Model</h2>

            {/* Stars Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`w-5 h-5 ${
                    index < rating
                      ? "text-yellow-500"
                      : "text-gray-300 border border-yellow-500"
                  }`}
                />
              ))}
              <p className="text-gray-500 mb-0 ml-2">10 Reviews</p>
            </div>

            {/* Price Section */}
            <p className="text-2xl font-bold text-black mb-4">$1,139.33</p>

            {/* Availability */}
            <div className="mb-4">
              <p className="text-black">
                Availability: <span className="text-green-500">In Stock</span>
              </p>
            </div>

            {/* Product Details */}
            <p className="text-gray-700 mb-4">
              Met minimum Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>
            <p className="text-gray-700 mb-4">
              Excitation venial consequent sent nostrum met.
            </p>

            {/* Color Circles */}
            <div className="flex space-x-2 mb-6">
              {["red", "blue", "yellow", "green"].map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full bg-${color}-500 cursor-pointer`}
                />
              ))}
            </div>

            {/* Icons and Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
                Export Options
              </button>
              <div className="flex items-center space-x-3">
                <HeartIcon className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer" />
                <ShoppingCartIcon className="w-6 h-6 text-gray-600 hover:text-green-500 cursor-pointer" />
                <EyeIcon className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* New Section for Description, Additional Info, and Reviews */}
        <div className="flex flex-wrap mt-12 gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/shop/3.png"
              alt="Product Detail"
              width={400}
              height={500}
              className="object-cover rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold mb-4">
              The quick fox jumps over
            </h2>
            <p className="text-gray-700 text-sm">
              Met minimum Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>
            <p className="text-gray-700 text-sm">
              Excitation venial consequent sent nostrum met.
            </p>
            <p className="text-gray-700 text-sm">
              Met minimum Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
