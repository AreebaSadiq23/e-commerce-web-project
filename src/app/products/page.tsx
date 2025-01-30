"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Navbar from "../navbar";

const sanity = sanityClient({
  projectId: "4qicm0s5",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const query = `*[ _type == "product" ]{
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags
      }`;

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-center text-slate-800 mt-4 mb-4 font-bold text-lg">
          Products from API&apos;s Data
        </h2>
        {loading ? (
          <p className="text-center text-slate-600">Loading Products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => router.push(`/productcard/${product._id}`)}
              >
                <Image
                  src={product.imageUrl || "/default-image.jpg"}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCards;
