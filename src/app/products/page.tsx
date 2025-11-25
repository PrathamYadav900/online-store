"use client"
import React, { useEffect, useState } from "react";
import  ProductCard  from "@/components/ProductCard";
import { Product } from "@/types/type";
import axios from "axios";
import ESkeleton from "@/components/Skeleton";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface AllProductsProp {
  products: Product[];
}

export const AllProducts: React.FC<AllProductsProp> = ({ products }) => {
  return (
    <div className=" grid 
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-6
  p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductsPage = () => {
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
        setProducts(res.data.AllProduct);
      } catch (e) {
        setError("Failed to fetch products. Please try again later.");
        console.error(e, "Error in ProductsPage");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-display font-bold mb-8">All Collection</h2>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ESkeleton key={index} />
          ))}
        </div>
      ) : error ? (
        <div className="text-red-400 text-xl text-center py-10">{error}</div>
      ) : (
        <AllProducts products={products} />
      )}
    </div>
    </div>
  );
};

export default ProductsPage;