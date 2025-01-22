'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaShoppingCart, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Heart, LogOut } from 'lucide-react'; 
import { useAppContext } from '../app/context/AppContext'; 

const Header = () => {
  const { isLoggedIn, cart, user, logout } = useAppContext();

  // Calculate the total items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // State for toggling the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-100 shadow-md max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Bandage</div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/ShopPage" className="text-gray-700 hover:text-blue-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-gray-700 hover:text-blue-500">
                Pricing
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Welcome, {user?.name}</span>
              <button onClick={logout} className="text-gray-600 hover:text-gray-800">
                <LogOut className="inline-block mr-1" size={20} />
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="text-gray-600 hover:text-gray-800">
              <FaUser className="inline-block mr-1" size={20} />
              Login
            </Link>
          )}
          <div className="relative">
            <Link href="/cart" className="text-blue-500 flex items-center">
              <FaShoppingCart className="mr-1" />
              {cartCount}
            </Link>
          </div>
          <div className="relative">
            <Link href="/wishlist" className="text-blue-500 flex items-center">
              <Heart className="mr-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-gray-100 py-4 px-6">
          <ul className="flex flex-col space-y-4">
            {/* Navigation Links */}
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/ShopPage" className="text-gray-700 hover:text-blue-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-gray-700 hover:text-blue-500">
                Pricing
              </Link>
            </li>
            {/* Mobile Icons */}
            <li>
              {isLoggedIn ? (
                <div>
                  <span className="text-gray-700">Welcome, {user?.name}!</span>
                  <button onClick={logout} className="text-gray-700 hover:text-blue-500 ml-4">
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/login" className="flex items-center text-blue-500">
                  <FaUser className="mr-2" /> Login/Register
                </Link>
              )}
            </li>
            <li>
              <Link href="/cart" className="text-blue-500 flex items-center">
                <FaShoppingCart className="mr-1" />
                {cartCount > 0 && <span className="text-xs bg-red-500 text-white rounded-full px-2 ml-1">{cartCount}</span>}
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="text-blue-500 flex items-center">
                <Heart className="mr-1" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
