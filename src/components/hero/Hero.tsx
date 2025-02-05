"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import CardSection from "@/components/hero/cards";
import BannerSection from "@/components/hero/Banner";
import CustomSection from "@/components/hero/customer";
import FeaturedSection from "@/components/hero/featured";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="relative bg-blue-400 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 max-w-screen-2xl mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero/img 2.png"
            alt="New Collection"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-6 sm:px-8 md:px-12">
          {/* Left Section: Text Content */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6"
            data-aos="fade-up"
          >
            <h5 className="text-amber-200 text-lg sm:text-xl md:text-2xl">
              SUMMER 2025
            </h5>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              New Collection
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              We know how large objects will act,{" "}
              <br className="hidden sm:block" />
              but things on a scale.
            </p>

            {/* Shop Now Button */}
            <a
              href="/products"
              className="inline-block w-full sm:w-auto mt-4 md:mt-6 px-6 md:px-10 py-3 md:py-4 text-amber-200 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base md:text-lg font-semibold"
              data-aos="fade-up"
              data-aos-delay="600"
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
