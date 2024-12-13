import React from "react";
import Image from "next/image";

const CardSection = () => {
  return (
    <div className="py-20 px-4 bg-gray-50 max-w-screen-2xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-xl font-semibold text-blue-600">Featured Product</h3>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">Best Seller Products</h2>
        <p className="text-gray-500 mt-4">
          Problems solving and trying to resolve the conflict between
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* Example Card */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex justify-center transform transition-transform hover:scale-105"
          >
            <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px] shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={`/editor/img${index + 6}.png`}
                alt={`Card Image ${index + 1}`}
                width={239}
                height={188}
                className="object-cover transition-transform duration-300 hover:scale-110"
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

export default CardSection;
