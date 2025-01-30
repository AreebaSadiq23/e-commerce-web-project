import React from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { GiWideArrowDunk } from "react-icons/gi";
import Navbar from "../navbar";

const ContactSection: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        {/* Left Side Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ml-16">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-10">
              Contact Us
            </h3>
            <h2 className="text-7xl font-extrabold text-gray-900 mb-4">
              Get in touch <br /> today!
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              We know how large objects will act, but <br />
              things on a small scale.
            </p>
            <div className="mb-4">
              <p className="text-gray-700">Phone: +451 215 215</p>
              <p className="text-gray-700">Fax: +451 215 215</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative">
            <Image
              src="/hero/img8.png"
              alt="Contact"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Visit Our Office */}
        <div className="text-center my-16">
          <h2 className="text-xl text-gray-900 mb-6">Visit Our Office</h2>
          <h3 className="text-4xl font-bold text-gray-800 mb-10">
            We help small businesses <br />
            with big ideas
          </h3>

          {/* Contact Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="p-4 shadow-lg text-center flex flex-col items-center h-[400px] w-[300] border border-blue-300">
              <FaPhoneAlt className="text-7xl text-blue-400 mb-4 mt-7" />
              <p className="text-lg text-gray-600 mb-2 mt-8 font-bold">
                georgia.young@example.com
              </p>
              <p className="text-lg text-gray-600 mb-4 font-bold">
                georgia.young@ple.com
              </p>
              <p className="text-lg text-gray-800 mb-5 font-bold">
                Get Support
              </p>
              <button className="px-11 py-3 rounded-full border border-blue-300 text-blue-500">
                Submit Request
              </button>
            </div>

            <div className="bg-gray-800 p-6 shadow-lg text-center flex flex-col items-center h-[450px] w-[300]">
              <FaMapMarkerAlt className="text-8xl text-blue-400 mb-4 mt-7" />
              <p className="text-lg text-white mb-2 mt-5">
                georgia.young@example.com
              </p>
              <p className="text-lg text-white mb-4">georgia.young@ple.com</p>
              <p className="text-lg text-white mb-5 font-bold">Get Support</p>
              <button className="px-11 py-3 rounded-full border border-blue-300 text-blue-500 mt-3">
                Submit Request
              </button>
            </div>

            <div className="p-6 shadow-lg text-center flex flex-col items-center h-[400px] w-[300] border border-blue-300">
              <FaEnvelope className="text-8xl text-blue-400 mb-4 mt-7" />
              <p className="text-lg text-gray-700 mb-2 font-bold mt-3">
                georgia.young@example.com
              </p>
              <p className="text-lg text-gray-700 mb-4 font-bold">
                georgia.young@ple.com
              </p>
              <p className="text-lg text-gray-800 mb-5 font-bold">
                Get Support
              </p>
              <button className="px-11 py-3 rounded-full border border-blue-300 text-blue-500">
                Submit Request
              </button>
            </div>
          </div>
        </div>

        {/* Final Call-to-Action */}
        <div className="mt-10 py-10 text-center">
          {/* Arrow Icon */}
          <div className="flex justify-center items-center">
            <GiWideArrowDunk className="text-[#23A6F0] text-[80px]" />
          </div>
          <div className="text-center my-16 mt-7">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              We can&apos;t wait to meet you
            </h2>
            <h3 className="text-6xl font-bold text-gray-900 mb-4">
              Let&apos;s Talk
            </h3>
            <button className="px-11 py-3 text-lg bg-blue-500 text-white hover:bg-blue-400 mt-5">
              Try It Free Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
