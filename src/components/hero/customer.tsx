import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 px-4 bg-gray-100 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Image */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <Image
            src="/editor/img 5.png"
            alt="img"
            width={500}
            height={350}
            className="object-cover w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Section: Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left px-4 flex flex-col items-center md:items-start"
          data-aos="fade-left"
        >
          <h3 className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            SUMMER 2020
          </h3>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mt-4 text-slate-800 leading-tight">
            Part of the Neural <br className="hidden sm:block" />
            Universe
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-6 text-center md:text-left">
            We know how large objects will act, <br className="hidden sm:block" /> 
            but things on a small scale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start w-full gap-4">
            {/* Buttons */}
            <button className="bg-green-600 text-white py-3 px-6 w-full sm:w-[200px] rounded-lg hover:bg-green-700 transition-all">
              Buy Now
            </button>
            <button className="bg-transparent border-2 border-green-600 text-green-600 py-3 px-6 w-full sm:w-[200px] rounded-lg hover:bg-green-600 hover:text-white transition-all">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
