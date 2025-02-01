import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const CustomSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="py-20 px-4 bg-gray-100 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Image */}
        <div
          className="w-full md:w-1/2 mb-10 md:mb-0 md:ml-24"
          data-aos="fade-right" // Animation for the left section (Image)
        >
          <Image
            src="/editor/img 5.png"
            alt="img"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Right Section: Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-left" // Animation for the right section (Text)
        >
          <h3 className="text-gray-500 text-xl md:text-2xl">SUMMER 2020</h3>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mt-6 text-slate-800">
            Part of the Neural
            <br />
            Universe
          </h1>
          <p className="text-xl text-gray-600 mt-10">
            We know how large objects will act, <br /> but things on a small
            scale.
          </p>
          <div className="mt-8 space-x-4 flex flex-col sm:flex-row justify-center md:justify-start">
            {/* Buttons */}
            <button className="bg-green-600 text-white py-2 px-4 w-full sm:w-[200px] rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 sm:mb-0">
              Buy Now
            </button>
            <button className="bg-transparent border-2 border-green-600 text-green-600 py-2 px-4 w-full sm:w-[200px] rounded hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
