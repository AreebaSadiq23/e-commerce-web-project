import React from "react";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="bg-emerald-800 py-20 px-6">
      <div className="container mx-auto flex flex-wrap items-center ml-36">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-left text-white">
          <h2 className="text-xl text-white">Summer 2020</h2>
          <h1 className="text-6xl font-bold">
            Vita Classic <br /> Product
          </h1>
          <p className="mt-4 text-white text-2xl">
            We know large products will act, we know <br />
            how objects will act, we know.
          </p>
          <div className="mt-6 flex items-center space-x-6">
            <span className="text-2xl font-semibold text-white">$16.48</span>
            <a
              href="#"
              className="inline-block bg-green-600 text-white text-lg font-medium px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Add To Cart
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/editor/img15.png"
            alt="Banner"
            width={300}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
