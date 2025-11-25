"use client"
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  [key: string]: any;
}

// Skeleton loader for products
const ProductSkeleton = () => (
  <div className="animate-pulse">
    <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-1/2" />
  </div>
);

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/api/v1/product/bulk`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        // Get only first 8 products for homepage
        setProducts(res.data.AllProduct.slice(0, 8));
      } catch (e) {
        setError("Failed to load products");
        console.error(e, "Error fetching featured products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return (
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Trending Now
        </h2>
        <div className="w-20 h-0.5 bg-foreground mx-auto" />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {loading ? (
          // Show 8 skeleton loaders while loading
          Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;