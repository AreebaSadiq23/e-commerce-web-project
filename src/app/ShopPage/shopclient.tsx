"use client";
import { useState, useEffect } from "react";
import { FiList, FiGrid } from "react-icons/fi";
import Image from "next/image";
import Header from "@/components/header/Header";
import Link from "next/link";
import AOS from "aos"; 
import "aos/dist/aos.css";

const images = [
  "/hero/1.png",
  "/hero/product2.png",
  "/hero/2.png",
  "/hero/3.png",
  "/hero/4.png"
];

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const productsData: Product[] = [
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
    image: "/hero/img9.png",
    description:
      "Elegant and comfortable dresses for women. These dresses are designed to bring out your confidence and charm.",
  },
  {
    id: 11,
    title: "Party Dress",
    category: "Department",
    price: 199.99,
    image: "/editor/clo.jpg",
    description:
      "Elegant party dress perfect for special occasions. Stand out with this stylish and chic outfit.",
  },
  {
    id: 12,
    title: "Shirt",
    category: "Department",
    price: 139.99,
    image: "/editor/img4.png",
    description:
      "Classic shirt for everyday wear. Comfortable and stylish, perfect for any occasion.",
  },
];

const HomePage = () => {
  
  const [products, setProducts] = useState<Product[]>(productsData);
  const [sortOption, setSortOption] = useState<string>("Popularity");
  const [currentPage] = useState<number>(1);
  const productsPerPage = 12;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSortOption(option);

    let sortedProducts = [...products];
    if (option === "High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts = productsData;
    }

    setProducts(sortedProducts);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 mb-10">
        {/* Image Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center mt-10">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-auto object-cover"
              />
              <div className="absolute text-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white p-4">
                <h3 className="text-xl font-bold mt-20">Trending Apparel</h3>
                <p>Explore 5 stylish Products</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter and Sorting Options */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10">
          <div className="text-md text-gray-500 font-bold mt-7">
            Showing all {products.length} results
          </div>

          <div className="flex items-center space-x-4 mt-7">
            <h2 className="text-gray-600 font-bold">Views:</h2>
            <button className="bg-gray-200 p-2 flex items-center space-x-2">
              <FiGrid className="text-gray-600" />
            </button>
            <button className="bg-gray-200 p-2 flex items-center space-x-2">
              <FiList className="text-gray-600" />
            </button>
          </div>

          <select
            className="bg-gray-200 p-2 rounded mt-7"
            value={sortOption}
            onChange={handleSort}
          >
            <option className="bg-gray-200 p-2">Popularity</option>
            <option>High to Low</option>
            <option>Low to High</option>
          </select>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {currentProducts.map((product) => (
            <Link key={product.id} href={`/card/${product.id}`}>
              <div
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 flex flex-col cursor-pointer"
                data-aos="fade-up"
              >
                <div className="relative w-full h-72">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                <div className="flex flex-col p-6 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800" data-aos="fade-up" data-aos-delay="300">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1" data-aos="fade-up" data-aos-delay="400">
                    {product.category}
                  </p>
                  <p className="text-gray-600 text-sm mt-3" data-aos="fade-up"data-aos-delay="500">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-blue-600" data-aos="fade-up"data-aos-delay="600">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through" data-aos="fade-up"data-aos-delay="700">
                      $129.99
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-16">
          <button className="px-4 py-2 text-slate-500 text-sm sm:px-8 sm:py-6 border-2 border-blue-400">
            Prev
          </button>

          <div className="flex justify-center">
            {[1, 2, 3].map((number) => (
              <button
                key={number}
                className={`px-4 py-2 font-bold text-gray-400 text-sm sm:px-8 sm:py-6 border-2 border-blue-400 ${number === 2 ? "bg-blue-400 text-white" : "bg-transparent"}`}
              >
                {number}
              </button>
            ))}
          </div>

          <a href="/page2">
            <button className="px-4 py-2 text-gray-500 text-sm sm:px-8 sm:py-6 border-2 border-blue-400">
              Next
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
