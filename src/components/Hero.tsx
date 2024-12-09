import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative bg-blue-100 py-56">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero/img.png"
          alt="New Collection"
          layout="fill"  
          objectFit="cover" 
          className="shadow-lg"
        />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6">
        {/* Left Section: Text Content */}
        <div className="text-center lg:text-left w-full lg:w-1/2 space-y-6">
          <h5 className="text-white text-xl lg:text-2xl">SUMMER 2020</h5>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-10">
            New Collection
          </h1>
          <p className="text-xl lg:text-2xl text-white">
            We know how large objects will act, but things on a scale.
          </p>
          {/* Shop Now Button */}
          <a
            href="#"
            className="inline-block mt-6 px-10 py-4 bg-green-600 text-white text-lg font-semibold"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
