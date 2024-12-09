import React from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const PromoBanner = () => {
  return (
    <div className="bg-gray-800 text-white px-4 py-3 items-center justify-between flex-wrap hidden sm:flex">
      {/* Left Section */}
      <div className="flex items-center space-x-6 ml-6">
        {/* Phone Icon and Number */}
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-white" />
          <span className="text-sm">(225) 555-0118</span>
        </div>
        {/* Email Icon and Email */}
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-white" />
          <span className="text-sm">michelle.rivers@example.com</span>
        </div>
      </div>

      {/* Center Section */}
      <div className="text-center mt-2 md:mt-0">
        <span className="text-white font-bold">
          Follow us and get a chance to win 80% off!
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <span className="text-sm font-semibold">Follow Us  :</span>
        <FaInstagram className="text-white cursor-pointer" />
        <FaYoutube className="text-white cursor-pointer" />
        <FaFacebook className="text-white cursor-pointer" />
        <FaTwitter className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default PromoBanner;
