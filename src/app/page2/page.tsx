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

  const images = ["/shop/1.jpg", "/shop/2.png"];

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
      <div className="container mx-auto my-8 px-4 max-w-screen-xl">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        {/* Left Image Section with Carousel */}
        <div className="relative w-full md:w-[506px] h-[400px] flex justify-center">
          <Image
            src={images[currentImageIndex]}
            alt="Phone"
            width={400}
            height={400}
            className="object-cover rounded-lg"
          />
          {/* Carousel Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-0 top-1/2 transform -translate-y-1/2 text-gray-800 p-2 text-xl md:text-3xl"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-0 top-1/2 transform -translate-y-1/2  text-gray-800 p-2 text-xl md:text-3xl"
          >
            &gt;
          </button>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 px-4 md:px-6 mt-6 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">Phone Model</h2>

          {/* Stars Rating */}
          <div className="flex justify-center md:justify-start items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`w-5 h-5 ${
                  index < rating ? "text-yellow-500" : "text-gray-400"
                }`}
              />
            ))}
            <p className="text-gray-500 ml-2">10 Reviews</p>
          </div>

          {/* Price Section */}
          <p className="text-xl md:text-2xl font-bold text-black my-3">$1,139.33</p>

          {/* Availability */}
          <p className="text-black">
            Availability: <span className="font-semibold">In Stock</span>
          </p>

          {/* Product Details */}
          <p className="text-gray-700 mt-3 text-sm md:text-base">
            Met minimum Mollie non desert Alamo est sit cliquey dolor do met
            sent. RELIT official consequent door ENIM RELIT Mollie.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Excitation venial consequent sent nostrum met.
          </p>

          {/* Light Gray Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Color Circles */}
          <div className="flex justify-center md:justify-start space-x-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
          </div>

          {/* Export Options and Icons */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
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
        <div className="flex flex-col md:flex-row mt-12">
          {/* Left Image with Specific Size and Radius */}
          <div className="overflow-hidden md:ml-20 mb-6 md:mb-0">
            <Image
              src="/shop/3.png"
              alt="Image"
              width={400}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Right Content with Heading and Paragraphs */}
          <div className="w-full flex flex-col md:flex-row">
            {/* Left Section: Upper Paragraphs */}
            <div className="w-full md:w-1/2 pr-6 ml-3">
              <h2 className="text-2xl font-bold mb-4">
                The quick fox jumps over
              </h2>

              {/* Upper Paragraphs */}
              <div className="space-y-4 text-sm">
                <p className="text-gray-700">
                  Met minimum Mollie non desert Alamo est sit cliquey <br />{" "}
                  dolor do met sent. RELIT official consequent door ENIM
                  <br /> RELIT Mollie Excitation venial consequent sent nostrum
                  met.
                </p>
                <p className="text-gray-700">
                  Met minimum Mollie non desert Alamo est sit cliquey
                  <br /> dolor do met sent. RELIT official consequent door ENIM{" "}
                  <br /> RELIT Mollie. Excitation venial consequent sent nostrum
                  met.
                </p>
                <p className="text-gray-700">
                  Met minimum Mollie non desert Alamo est sit cliquey <br />{" "}
                  dolor do met sent. RELIT official consequent door ENIM <br />{" "}
                  RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>

            {/* Right Side Section */}
            <div className="w-full md:w-1/2 pl-6 mt-2 space-y-4">
              <h3 className="text-2xl font-bold">The quick fox jumps over</h3>
              <p className="text-gray-700">
                &gt; the quick fox jumps over the lazy dog
                <br />
                &gt; the quick fox jumps over the lazy dog
                <br />
                &gt; the quick fox jumps over the lazy dog
              </p>
              <h3 className="text-2xl font-bold">The quick fox jumps over</h3>
              <p className="text-gray-700">
                &gt; the quick fox jumps over the lazy dog
                <br />
                &gt; the quick fox jumps over the lazy dog
                <br />
                &gt; the quick fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </div>

        {/* BESTSELLER PRODUCTS */}
        <div className="mt-12">
          {/* BESTSELLER PRODUCTS Heading */}
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-semibold ml-5">BESTSELLER PRODUCTS</h2>
          </div>

          {/* Cards Container */}
          <div className="flex flex-wrap justify-between">
            {/* Card 1 */}
            <div className="bg-white shadow-md p-4 rounded-lg w-full md:w-1/4 h-full mb-6">
              <div className="h-60 bg-gray-200  mb-4">
                <Image
                  src="/shoppage/img1.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-left">
                Graphic Design
              </h3>
              <h4 className="text-md font-bold text-gray-500 mb-4 text-left">
                English Department
              </h4>
              <div className="flex">
                <span className="text-gray-400 font-bold">$16.48</span>
                <span className="text-green-800 font-bold ml-9">$6.48</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md p-4 rounded-lg w-full md:w-1/4 h-full mb-6">
              <div className="h-60 bg-gray-200 mb-4">
                <Image
                  src="/shoppage/img2.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-left">
                Graphic Design
              </h3>
              <h4 className="text-md font-bold text-gray-500 mb-4 text-left">
                English Department
              </h4>
              <div className="flex">
                <span className="text-gray-400 font-bold">$16.48</span>
                <span className="text-green-800 font-bold ml-9">$6.48</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md p-4 rounded-lg w-full md:w-1/4 h-full mb-6">
              <div className="h-60 bg-gray-200 mb-4">
                <Image
                  src="/shoppage/img3.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-left">
                Graphic Design
              </h3>
              <h4 className="text-md text-gray-500 mb-4 text-left font-bold">
                English Department
              </h4>
              <div className="flex">
                <span className="text-gray-400 font-bold">$16.48</span>
                <span className="text-green-800 font-bold ml-10">$6.48</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md p-4 rounded-lg w-full md:w-1/4 h-full mb-6">
              <div className="h-60 bg-gray-200 mb-4">
                <Image
                  src="/shoppage/img4.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-left">
                Graphic Design
              </h3>
              <h4 className="text-md font-bold text-gray-500 mb-4 text-left">
                English Department
              </h4>
              <div className="flex">
                <span className="text-gray-400 font-bold">$16.48</span>
                <span className="text-green-800 font-bold ml-10">$6.48</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-md p-4 rounded-lg w-full md:w-1/4 h-full mb-6">
              <div className="h-48 bg-gray-200 mb-4">
                <Image
                  src="/shoppage/img5.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-left">
                Graphic Design
              </h3>
              <h4 className="text-md font-bold text-gray-500 mb-4 text-left">
                English Department
              </h4>
              <div className="flex">
                <span className="text-gray-400 font-bold">$16.48</span>
                <span className="text-green-800 font-bold ml-10">$6.48</span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white shadow-md p-4 rounded-lg w-full md:w-1/4 h-full mb-6">
              <div className="h-48 bg-gray-200 mb-4">
                <Image
                  src="/shoppage/img6.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-left">
                Graphic Design
              </h3>
              <h4 className="text-md font-bold text-gray-500 mb-4 text-left">
                English Department
              </h4>
              <div className="flex">
                <span className="text-gray-400 font-bold">$16.48</span>
                <span className="text-green-800 font-bold ml-10">$6.48</span>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white shadow-md p-4 rounded-lg w-full md:w-1/4 h-full mb-6">
              <div className="h-48 bg-gray-200 mb-4">
                <Image
                  src="/shoppage/img1.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-left">
                Graphic Design
              </h3>
              <h4 className="text-md font-bold text-gray-500 mb-4 text-left">
                English Department
              </h4>
              <div className="flex">
                <span className="text-gray-400 font-bold">$16.48</span>
                <span className="text-green-800 font-bold ml-10">$6.48</span>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white shadow-md p-4 rounded-lg w-full md:w-1/4 h-full mb-6">
              <div className="h-48 bg-gray-200 mb-4">
                <Image
                  src="/shoppage/img2.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-left">
                Graphic Design
              </h3>
              <h4 className="text-md font-bold text-gray-500 mb-4 text-left">
                English Department
              </h4>
              <div className="flex">
                <span className="text-gray-400 font-bold">$16.48</span>
                <span className="text-green-800 font-bold ml-10">$6.48</span>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-20 items-center">
              {[1, 2, 3, 4, 5, 6].map((logo, index) => (
                <Image
                  key={index}
                  src={`/logo/${logo}.png`}
                  alt={`Company Logo ${logo}`}
                  width={100}
                  height={50}
                  className="object-contain mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
