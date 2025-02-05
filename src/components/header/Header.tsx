"use client";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Heart, LogOut } from "lucide-react";
import { useAppContext } from "../../app/context/AppContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: number; title: string }[]
  >([]);
  const { isLoggedIn, logout, cart, user, wishlist } = useAppContext();
  const wishlistCount = wishlist?.length || 0;
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = cart?.length || 0;

  const products = useMemo(
    () => [
      { id: 1, title: "Maxi Dress" },
      { id: 2, title: "Trendy Outfit" },
      { id: 3, title: "Men Fashion" },
      { id: 4, title: "Kids Collection" },
      { id: 5, title: "Winter Collection" },
      { id: 6, title: "Luxury Clothing" },
      { id: 7, title: "Girls Kurti" },
      { id: 8, title: "Designer Dress" },
      { id: 9, title: "Casual Jacket" },
      { id: 10, title: "Woman Dress" },
      { id: 11, title: "Party Dress" },
      { id: 12, title: "Shirt" },
    ],
    []
  );

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
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
        <div className="text-2xl font-bold text-gray-800 order-1">Bandage</div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden order-4">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center order-2">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/ShopPage"
                className="text-gray-700 hover:text-blue-500"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-blue-500"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Icons & Search Bar */}
        <div className="hidden lg:flex items-center space-x-4 order-3">
          {/* Search Bar */}
          <div className="relative w-auto lg:w-80 ml-auto">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <MagnifyingGlassIcon className="absolute right-0 top-0 mt-2 mr-3 h-6 w-6 text-gray-400" />
            {searchQuery && (
              <div className="absolute w-full bg-white shadow-md rounded-lg mt-1 max-h-48 overflow-auto z-10">
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/card/${product.id}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {product.title}
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-2 text-gray-500">No products found.</p>
                )}
              </div>
            )}
          </div>

          {/* Desktop Icons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Welcome, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="text-gray-600 hover:text-gray-800 disabled:opacity-50"
                >
                  <LogOut className="inline-block mr-1" size={20} />
                  {isLoggingOut ? "Logging out..." : "Logout"}
                </button>
              </div>
            ) : (
              <Link href="/login" className="text-blue-400 hover:text-blue-300">
                <FaUser className="inline-block mr-1" size={20} />
                Login
              </Link>
            )}
            <div className="relative">
              <Link
                href="/cart"
                className="text-blue-400 flex items-center text-lg"
              >
                <FaShoppingCart className="mr-1" />
                {cartCount}
              </Link>
            </div>
            <div className="relative">
              <Link
                href="/wishlist"
                className="text-blue-400 flex items-center text-lg"
              >
                <Heart className="mr-1" />
                {wishlistCount}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav id="mobile-menu" className="lg:hidden bg-gray-100 py-4 px-6">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/ShopPage"
                className="text-gray-700 hover:text-blue-500"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-blue-500"
              >
                Pricing
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                <div>
                  <span className="text-gray-700">Welcome, {user?.name}!</span>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-gray-500 ml-4"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/login" className="flex items-center text-blue-400">
                  <FaUser className="mr-2" /> Login/Register
                </Link>
              )}
            </li>
            <li>
              <Link href="/cart" className="text-blue-400 flex items-center">
                <FaShoppingCart className="mr-1" />
                {cartCount}
              </Link>
            </li>
            <li>
              <Link
                href="/wishlist"
                className="text-blue-400 flex items-center"
              >
                <Heart className="mr-1" />
                {wishlistCount}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
