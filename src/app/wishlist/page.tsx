'use client'
import { useState } from 'react';

type WishlistItem = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export default function Home() {
  // Sample wishlist items
  const initialWishlist: WishlistItem[] = [
    { id: 1, name: 'Minimalist Watch', description: 'A sleek minimalist watch design.', image: '/wishlist/3.jpg' },
    { id: 2, name: 'Wireless Earbuds', description: 'Noise-canceling wireless earbuds.', image: '/wishlist/1.jpg' },
    { id: 3, name: 'Sunglasses', description: 'Stylish sunglasses for summer.', image: '/wishlist/2.jpg' },
  ];

  // Wishlist state
  const [wishlist, setWishlist] = useState<WishlistItem[]>(initialWishlist);

  // Remove item from wishlist
  const removeItem = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <div className="w-full max-w-5xl px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Wishlist</h2>
        <div className="flex flex-col space-y-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md border border-gray-300"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md text-lg hover:bg-red-600 transition-all"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
