import React from "react";
import Image from "next/image";

const CustomSection = () => {
  return (
    <div className="py-20 px-4 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Image */}
        <div className="md:w-1/2 mb-10 md:mb-0 ml-24">
          <Image
            src="/editor/img 5.png"
            alt="Left Image"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Section: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-gray-800">Summer 2020</h3>
          <h1 className="font-bold text-6xl mt-6"> Part of the neural<br /> universe</h1>
          <p className="text-xl text-gray-600 mt-4">
            we know how large objects will act, <br /> but things on a small scale.
          </p>
          <div className="mt-8 space-x-4">
            {/* Buttons */}
            <button className="bg-green-600 text-white py-2 px-4 w-full sm:w-[200px] rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Buy Now
            </button>
            <button className="bg-transparent border-2 border-green-600 text-green-600 py-2 px-4 w-full sm:w-[200px] rounded-lg hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
