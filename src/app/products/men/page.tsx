"use client"
import React, { useEffect, useState } from "react";
import  ProductCard  from "@/components/ProductCard";
import { Product } from "@/types/type";
import axios from "axios";
import ESkeleton from "@/components/Skeleton";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Keywords to identify men's products
const menKeywords = ['men', 'male', 'boy', 'shirt', 'trouser', 'polo', 'blazer'];

const filterMensProducts = (products: Product[]) => {
  return products.filter(product => {
    const searchText = `${product.title} ${product.description}`.toLowerCase();
    return menKeywords.some(keyword => searchText.includes(keyword));
  });
};

const MenProductsPage = () => {
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
        const allProducts = res.data.AllProduct;
        const mensProducts = filterMensProducts(allProducts);
        setProducts(mensProducts);
      } catch (e) {
        setError("Failed to fetch products. Please try again later.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-display font-bold mb-8">Men's Collection</h2>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <ESkeleton key={index} />
            ))}
          </div>
        ) : error ? (
          <div className="text-red-600 text-xl text-center py-10">{error}</div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No men's products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenProductsPage;