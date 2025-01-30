"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";
import Navbar from "../../navbar";
import { useAppContext } from "../../context/AppContext";

const sanity = sanityClient({
  projectId: "4qicm0s5",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  id: number;
  name: string;
  image: string;
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const { addToCart, addToWishlist } = useAppContext();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const query = `*[ _type == "product" && _id == "${id}" ][0]{
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }`;

        const data = await sanity.fetch(query);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center text-slate-600">Loading Product Details...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-600">Product not found!</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
        <Image
          src={product.imageUrl || "/default-image.jpg"}
          alt={product.title}
          width={400}
          height={400}
          className="w-full md:w-1/2 h-[500px] rounded-lg shadow-md"
        />
        <div className="md:w-1/2 mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mt-10">{product.title}</h2>
          <p className="text-slate-600 mt-4 text-sm">{product.description}</p>
          <p className="text-xl font-bold text-slate-800 mt-4">
            ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
          {product.discountPercentage > 0 && (
            <p className="text-sm text-green-700">{product.discountPercentage}% OFF</p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-slate-200 text-black rounded-full px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
             <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className="flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              <Heart className="h-5 w-5" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
