'use client';
import React, { useState } from "react";
import Link from "next/link"; // Import Link component from next/link

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">Bandage</div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/page2" className="text-gray-600 hover:text-gray-900">
            Product
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Right Section: Login and Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/login" className="text-blue-500 font-bold hover:text-gray-900">
            Login
          </Link>
          <Link
            href="/team"
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-600"
          >
            <span>Become a Member</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-md">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/ShopPage" className="text-gray-600 hover:text-gray-900">
            Product
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <div className="flex flex-col items-center w-full space-y-3 mt-4">
            <Link
              href="/login"
              className="text-blue-500 font-bold hover:text-gray-900 w-full text-center"
            >
              Login
            </Link>
            <Link
              href="/team"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full text-center"
            >
              Become a Member
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
