'use client'

import Image from 'next/image';
import { useState } from 'react';

interface Product {
  title: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
}

interface ProductDetailClientProps {
  product: Product;
  images: string[];
}

export default function ProductDetailClient({ product, images }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  // Ensure we have at least one image
  const productImages = images && images.length > 0 ? images : [product.image];
  
  console.log("Product:", product);
  console.log("Images array:", productImages);
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
              <Image
                src={productImages[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[3/4] bg-gray-100 overflow-hidden border-2 transition ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Column - Product Info */}
          <div className="space-y-8">
            {/* Product Title & Price */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900">
                {product.title}
              </h1>
              <p className="text-3xl font-light text-gray-900">
                ₹{product.price?.toLocaleString('en-IN')}
              </p>
            </div>
            
            {/* Description */}
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
                  Select Size
                </h2>
                <button className="text-sm text-gray-500 hover:text-gray-900 underline">
                  Size Guide
                </button>
              </div>
              
              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium border transition ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-900 border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity Selection */}
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
                Quantity
              </h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border border-gray-300 hover:border-black transition flex items-center justify-center"
                >
                  <span className="text-xl">−</span>
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border border-gray-300 hover:border-black transition flex items-center justify-center"
                >
                  <span className="text-xl">+</span>
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <div className="space-y-4 pt-4">
              <button
                disabled={!selectedSize}
                className={`w-full py-4 text-base font-medium transition ${
                  selectedSize
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {selectedSize ? 'Add to Cart' : 'Select a Size'}
              </button>
              
              <button className="w-full py-4 text-base font-medium border border-black text-black hover:bg-gray-50 transition">
                Add to Wishlist
              </button>
            </div>
            
            {/* Product Details */}
            <div className="border-t border-gray-200 pt-8 space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-gray-900 uppercase tracking-wider">
                  Product Details
                  <span className="text-xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="mt-4 text-sm text-gray-600 space-y-2">
                  <p>• 100% Premium Cotton</p>
                  <p>• Regular fit</p>
                  <p>• Machine washable</p>
                  <p>• Imported</p>
                </div>
              </details>
              
              <details className="group border-t border-gray-200 pt-4">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-gray-900 uppercase tracking-wider">
                  Shipping & Returns
                  <span className="text-xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="mt-4 text-sm text-gray-600 space-y-2">
                  <p>• Free shipping on orders above ₹999</p>
                  <p>• Delivery in 3-5 business days</p>
                  <p>• Easy 30-day returns</p>
                  <p>• Cash on delivery available</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}