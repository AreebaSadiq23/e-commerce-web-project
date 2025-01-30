import React from "react";
import Image from "next/image";
import CardSection from "@/components/hero/cards";
import BannerSection from "@/components/hero/Banner";
import CustomSection from "@/components/hero/customer";
import FeaturedSection from "@/components/hero/featured";

const HeroSection = () => {
  return (
    <>
      <div className="relative bg-blue-400 py-40 max-w-screen-2xl mx-auto">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero/img 2.png"
            alt="New Collection"
            layout="fill"
            objectFit="cover"
            className="shadow-lg"
          />
        </div>

        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6">
          {/* Left Section: Text Content */}
          <div className="text-center lg:text-left w-full lg:w-1/2 space-y-6 mt-12 lg:mt-0 lg:ml-10">
            <h5 className="text-amber-200 text-xl lg:text-2xl">SUMMER 2025</h5>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-10">
              New Collection
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              We know how large objects will act, <br />
              but things on a scale.
            </p>
            {/* Shop Now Button */}
            <a
              href="/products"
              className="inline-block mt-6 px-10 py-4 text-amber-200 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-lg font-semibold"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <CardSection />
      <BannerSection />
      <CustomSection />
      <FeaturedSection />
    </>
  );
};

export default HeroSection;
