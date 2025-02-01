'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "../navbar";
import AOS from 'aos';  
import 'aos/dist/aos.css';  

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });  
  }, []);

  return (
    <>
      <Navbar />
      {/* About Company Section */}
      <div className="relative flex flex-wrap items-center justify-between px-4 lg:px-32 py-10" data-aos="fade-up">
        <div className="w-full lg:w-1/2 space-y-6">
          <h4 className="text-sm text-black font-semibold" data-aos="fade-up">About Company</h4>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mt-10" data-aos="fade-up">
            About Us
          </h2>
          <p className="text-gray-600 text-lg" data-aos="fade-up">
            We know how large objects will act, <br />
            but things on a small scale can be unpredictable.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md" data-aos="fade-up">
            Get Quotes Now
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center relative" data-aos="fade-left">
          <Image
            src="/logo/img5.png"
            alt="About Us"
            width={500}
            height={400}
            className="relative"
          />
        </div>
      </div>

      <section className="bg-gray-50 px-4 lg:px-36 max-w-screen-2xl mx-auto space-y-28 mt-24">
        {/* Intro Section */}
        <div className="relative flex flex-wrap items-center justify-between" data-aos="fade-up">
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="text-red-600">Problems trying</p>
            <p className="text-2xl font-bold text-black">
              Met minim Mollie non desert <br />
              Alamo est cliquery dolor do <br />
              met sent.
            </p>
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="text-lg text-gray-500">
              Problem trying to resolve the conflict between the two major
              realms of Classical physics Newtions mechanics
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center mt-16">
          <div className="space-y-2" data-aos="zoom-in">
            <h3 className="text-4xl font-bold text-zinc-800">15K</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="space-y-2" data-aos="zoom-in">
            <h3 className="text-4xl font-bold text-zinc-800">150K</h3>
            <p className="text-gray-600">Monthly Visitors</p>
          </div>
          <div className="space-y-2" data-aos="zoom-in">
            <h3 className="text-4xl font-bold text-zinc-800">15</h3>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
          <div className="space-y-2" data-aos="zoom-in">
            <h3 className="text-4xl font-bold text-zinc-800">100+</h3>
            <p className="text-gray-600">Top Partners</p>
          </div>
        </div>

        <div
          className="relative flex items-center justify-center w-full h-[400px] rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('/logo/img7.png')" }}
          data-aos="fade-up"
        >
          {/* Play Button */}
          <button className="w-16 h-16 bg-blue-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.5l13 6.5-13 6.5V5.5z"
              />
            </svg>
          </button>
        </div>

        {/* Meet Our Team Section */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-md mt-4">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Team Members */}
            {[ 
              { name: "John Doe", role: "Profession", img: "team-1-user-1.jpg" },
              { name: "Jane Smith", role: "Profession", img: "team-1-user-2.jpg" },
              { name: "Alice Brown", role: "Profession", img: "team-1-user-3.jpg" },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 flex flex-col items-center" data-aos="fade-up">
                <Image
                  src={`/editor/${member.img}`}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4 text-blue-500">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Big Companies Section */}
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Big Companies Are Here
          </h2>
          <p className="text-gray-600 text-md text-center mt-4">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-10 items-center">
            {[1, 2, 3, 4, 5, 6].map((logo, index) => (
              <Image
                key={index}
                src={`/logo/${logo}.png`}
                alt={`Company Logo ${logo}`}
                width={100}
                height={50}
                className="object-contain mx-auto"
                data-aos="fade-up"
              />
            ))}
          </div>
        </div>

        {/* Work With Us Section */}
        <div className="w-full bg-lightblue py-16 relative" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Content with Blue Background */}
            <div className="w-full lg:w-1/2 bg-blue-600 p-16 flex flex-col justify-center space-y-6">
              <h2 className="text-xl md:text-md text-white">Work With Us</h2>
              <h1 className="text-white font-bold text-3xl">Now Let’s Grow Yours.</h1>
              <p className="text-white text-md">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century revolutionized our understanding of physics.
              </p>
              {/* Button Aligned to the Left */}
              <div className="self-start">
                <button className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-md hover:bg-transparent hover:border-white text-sm">
                  Get Started
                </button>
              </div>
            </div>

            {/* Right Content - Full-Width Image */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/hero/img2.png"
                alt="Work With Us"
                width={700}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
