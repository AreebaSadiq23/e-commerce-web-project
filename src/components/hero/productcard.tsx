"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useAppContext } from "../../app/context/AppContext";

interface Product {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, wishlist, addToWishlist, removeFromWishlist } =
    useAppContext();

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {product.title || product.name}
        </h2>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <div className="flex justify-between">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <ShoppingCart className="inline-block mr-1" size={16} />
            Add to Cart
          </button>
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded ${isWishlisted ? "text-red-500" : "text-gray-500"}`}
          >
            <Heart
              className="inline-block"
              size={20}
              fill={isWishlisted ? "currentColor" : "none"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
