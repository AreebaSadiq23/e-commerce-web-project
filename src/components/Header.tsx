'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Heart, LogOut } from 'lucide-react';
import { useAppContext } from '../app/context/AppContext';

const Header = () => {
  const { isLoggedIn, logout, cart, user } = useAppContext();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

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
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="text-gray-600 hover:text-gray-800 disabled:opacity-50"
              >
                <LogOut className="inline-block mr-1" size={20} />
                {isLoggingOut ? 'Logging out...' : 'Logout'}
              </button>
            </div>
          ) : (
            <Link href="/login" className="text-blue-500 hover:text-blue-400">
              <FaUser className="inline-block mr-1" size={20} />
              Login
            </Link>
          )}
          <div className="relative">
            <Link href="/cart" className="text-blue-500 flex items-center text-xl">
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
            <li>
              {isLoggedIn ? (
                <div>
                  <span className="text-gray-700">Welcome, {user?.name}!</span>
                  <button onClick={handleLogout} className="text-gray-700 hover:text-gray-500 ml-4">
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
              <Link href="/cart" className="text-gray-500 flex items-center">
                <FaShoppingCart className="mr-1" />
                {cartCount}
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="text-red-500 flex items-center">
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
