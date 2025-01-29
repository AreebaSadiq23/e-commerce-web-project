import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Maxi Dress",
    category: "Department",
    price: 199.99,
    image: "/hero/maxi.jpg",
    description:
      "Exclusive Maxi dresses for special events. Make a bold statement with these high-end outfits.",
  },
  {
    id: 2,
    title: "Trendy Outfit",
    category: "Department",
    price: 79.99,
    image: "/editor/trendyoutfit.jpg",
    description:
      "Comfort meets style with this cozy. A perfect choice for casual outings, bringing both ease and elegance.",
  },
  {
    id: 3,
    title: "Men Fashion",
    category: "Department",
    price: 129.99,
    image: "/editor/men-fashion.jpg",
    description:
      "A trendy outfit perfect for any occasion. Elevate your style with this versatile piece made for modern fashion enthusiasts.",
  },
  {
    id: 4,
    title: "Kids Collection",
    category: "Department",
    price: 49.99,
    image: "/editor/kid.jpg",
    description:
      "Colorful and fun outfits for kids. Let your children shine with vibrant designs tailored for both comfort and play.",
  },
  {
    id: 5,
    title: "Winter Collection",
    category: "Department",
    price: 109.99,
    image: "/editor/img cozy.jpeg",
    description:
      "Stay warm with our winter collection. Crafted for those chilly days, this collection is a must-have for the season.",
  },
  {
    id: 6,
    title: "Luxury Clothing",
    category: "Department",
    price: 199.99,
    image: "/hero/cloth.jpg",
  description:
    "Luxury clothing that combines elegance and comfort. Perfect for any occasion, these outfits are designed to make you stand out.",
  },
  {
    id: 7,
    title: "Girls Kurti",
    category: "Department",
    price: 59.99,
    image: "/editor/img kurti.png",
    description:
      "Stylish kurtis for girls of all ages. A perfect blend of tradition and modernity to elevate your wardrobe.",
  },
  {
    id: 8,
    title: "Designer Dress",
    category: "Department",
    price: 199.99,
    image: "/editor/img pur.jpeg",
    description:
      "Exclusive designer dresses for special events. Make a bold statement with these high-end outfits.",
  },
  {
    id: 9,
    title: "Casual Jacket",
    category: "Department",
    price: 89.99,
    image: "/editor/img casual.jpg",
    description:
      "Stay stylish and warm with this casual jacket. Perfect for outdoor adventures or daily wear, this jacket combines fashion with functionality.",
  },
  {
    id: 10,
    title: "Woman Dress",
    category: "Department",
    price: 99.99,
    image: "/editor/img9.png",
    description:
      "Elegant and comfortable dresses for women. These dresses are designed to bring out your confidence and charm.",
  },
  {
    id: 11,
    title: "Party Dress",
    category: "Department",
    price: 199.99,
    image: "/editor/clo.jpg",
    description: "Elegant party dress perfect for special occasions. Stand out with this stylish and chic outfit.",
  },
  {
    id: 12,
    title: "Shirt ",
    category: "Department",
    price: 139.99,
    image: "/editor/img4.png",
    description:
      "Classic shirt for everyday wear. Comfortable and stylish, perfect for any occasion.",
  },
];

const CardSection: React.FC = () => {
  return (
    <div className="py-16 px-6 bg-gray-50 max-w-screen-2xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-lg font-semibold text-blue-500 uppercase tracking-wide">
          Featured Products
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">Our Best Sellers</h2>
        <p className="text-gray-500 mt-4">Explore our most popular items, curated just for you.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/card/${product.id}`}>
            <div
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 flex flex-col cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-72">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Product Content */}
              <div className="flex flex-col p-6 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                <p className="text-gray-600 text-sm mt-3">{product.description}</p>

                {/* Price Section */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-blue-600">${product.price}</span>
                  <span className="text-sm text-gray-400 line-through">$129.99</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
