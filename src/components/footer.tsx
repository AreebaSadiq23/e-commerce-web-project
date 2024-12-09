import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4">
      {/* Footer Top with Logo and Social Icons */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center mb-12">
        {/* Brand Logo */}
        <div className="text-3xl font-semibold">
          <span className="text-black">Bandage</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-blue-400">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" className="text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-blue-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Footer Main Content - Grid Layout */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Company Info</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Career</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Features</h4>
          <ul className="space-y-2 text-sm">
            <li>Buisness and Marketing</li>
            <li>User Analytics</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>IOS and Andriod</li>
            <li>Watch a Demo</li>
            <li>Customer</li>
            <li>API</li>
          </ul>
        </div>
      </div>

      {/* Get in Touch (This section now placed side by side with Resources on larger screens) */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 text-gray-800 rounded-md mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto"
            />
            {/* Subscribe Button */}
            <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm text-gray-400 mt-12">
        <p>Made with Love by Finished. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
