import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-12 px-4 max-w-screen-2xl mx-auto">
      {/* Footer Top with Logo and Social Icons */}
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-12">
        {/* Logo */}
        <div className="text-3xl font-semibold mb-4 sm:mb-0">
          <span className="text-zinc-950 font-bold font-2xl">Bandage</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-blue-400">
            <FaFacebookF size={28} />
          </a>
          <a href="https://twitter.com" className="text-blue-400">
            <FaTwitter size={28} />
          </a>
          <a href="https://instagram.com" className="text-blue-400">
            <FaInstagram size={28} />
          </a>
        </div>
      </div>

      {/* Footer Main Content - Grid Layout */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Company Info</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xl font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Career</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-xl font-bold mb-4">Features</h4>
          <ul className="space-y-2 text-sm">
            <li>Business and Marketing</li>
            <li>User Analytics</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xl font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>iOS and Android</li>
            <li>Watch a Demo</li>
            <li>Customer</li>
            <li>API</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-md text-cyan-600 mt-12 font-light">
        <p>
          Made With Love By Areeba{" "}
          <FiHeart className="inline text-red-500 mx-1" />. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
