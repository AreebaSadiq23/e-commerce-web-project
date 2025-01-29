'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import {useAppContext} from "../../context/AppContext";
import Header from '@/components/header/Header';

interface Product {
  id: number;
  title: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}
const products: Product[] = [
  { id: 1, title: "Maxi Dress", name: "Maxi Dress", category: "Department", price: 199.99, image: "/hero/maxi.jpg", description:       "Exclusive Maxi dresses for special events. Make a bold statement with these high-end outfits.",  },
  { id: 2, title: "Trendy Outfit", name: "Trendy Outfit", category: "Department", price: 79.99, image: "/editor/trendyoutfit.jpg", description: "Comfort meets style with this cozy hoodie." },
  { id: 3, title: "Men Fashion", name: "Men Fashion", category: "Department", price: 129.99, image: "/editor/men-fashion.jpg", description: "A trendy outfit perfect for any occasion." },
  { id: 4, title: "Kids Collection", name: "Kids Collection", category: "Department", price: 49.99, image: "/editor/kid.jpg", description: "Colorful and fun outfits for kids." },
  { id: 5, title: "Winter Collection", name: "Winter Collection", category: "Department", price: 89.99, image: "/editor/img cozy.jpeg", description: "Stay warm with our winter collection." },
  { id: 6, title: "Luxury Clothing", name: "Luxury Clothing", category: "Department", price: 109.99, image: "/hero/cloth.jpg", description:     "Luxury clothing that combines elegance and comfort. Perfect for any occasion, these outfits are designed to make you stand out.",  },
  { id: 7, title: "Girls Kurti", name: "Girls Kurti", category: "Department", price: 199.99, image: "/editor/img kurti.png", description: "Stylish kurtis for girls." },
  { id: 8, title: "Designer Dress", name: "Designer Dress", category: "Department", price: 59.99, image: "/editor/img pur.jpeg", description: "Exclusive designer dresses for special events." },
  { id: 9, title: "Casual Jacket", name: "Casual Jacket", category: "Department", price: 199.99, image: "/editor/img casual.jpg", description:"Stay stylish and warm with this casual jacket. Perfect for outdoor adventures or daily wear, this jacket combines fashion with functionality.",  },
  { id: 10, title: "Woman Dress", name: "Woman Dress", category: "Department", price: 99.99, image: "/editor/img9.png", description: "Elegant and comfortable dresses for women." },
  { id: 11, title: "Party Dress", name: "Party Dress", category: "Department", price: 199.99, image: "/editor/clo.jpg", description: "Elegant party dress perfect for special occasions. Stand out with this stylish and chic outfit." },
  { id: 12, title: "Shirt", name: "Shirt", category: "Department", price: 139.99, image: "/editor/img4.png", description:"Classic shirt for everyday wear. Comfortable and stylish, perfect for any occasion.",  },
];

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { addToCart, addToWishlist } = useAppContext()
  const { id } = useParams(); 

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>; 
  }

  const handleAddToCart = () => {
    addToCart(product)
  };

  const handleAddToWishlist = () => {
    addToWishlist(product)

  };

  return (
    <><Header/>
    <div className="flex flex-col md:flex-row mt-10">
      <div className="md:w-1/2 mb-10 ml-24">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(4.5) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
            />
          ))}
          <span className="ml-2 text-gray-600">4.5 stars</span>
        </div>
        <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Size</h3>
          <div className="flex gap-2">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded ${
                  selectedSize === size
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Color</h3>
          <div className="flex gap-2">
            {['Red', 'Blue', 'Green'].map((color) => (
              <button
                key={color}
                className={`px-4 py-2 border rounded ${
                  selectedColor === color
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
          <button
            className="flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100"
            onClick={handleAddToWishlist}
          >
            <Heart className="h-5 w-5" />
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

