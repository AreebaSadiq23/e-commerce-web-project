import React from "react";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="bg-emerald-800 py-20 px-6 max-w-screen-2xl mx-auto">
      <div className="container flex flex-wrap items-center">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-left text-white px-4">
          <h2 className="text-xl text-white sm:ml-10 lg:ml-48">SUMMER 2020</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold sm:ml-10 lg:ml-48 lg:mt-10">
            Vita Classic </h1> <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold sm:ml-10 lg:ml-48 lg:mt-5"> Product</h1>
          
          <p className="mt-4 text-white sm:text-xl sm:ml-10 lg:ml-48">
            We know large products will act, we know <br />
            how objects will act, we know
          </p>
          <div className="mt-6 flex items-center space-x-6 sm:ml-10 lg:ml-48 lg:mt-10">
            <span className="text-2xl font-semibold text-white">$16.48</span>
            <a
              href="#"
              className="inline-block bg-green-600 text-white text-lg font-medium px-10 py-3 rounded hover:bg-green-700 transition"
            >
              Add To Cart
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 flex justify-center sm:mt-8">
          <Image
            src="/editor/img15.png"
            alt="Banner"
            width={400}
            height={400}
            className="object-cover rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
