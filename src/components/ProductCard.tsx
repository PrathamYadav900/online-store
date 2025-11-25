"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button}  from "@/components/ui/Button";
import { Product } from '../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, selectCartItems, updateQuantity } from '../features/AddToCart/CartSlice';
import { RootState } from '../store/store';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => selectCartItems(state));
  const existingItem = cartItems.find(item => item.id === product.id);
  const [incart, setIncart] = useState(!!existingItem);

  const handleAddItem = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    dispatch(addItem(product));
    setIncart(true);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    if (existingItem) {
      dispatch(updateQuantity({ id: product.id, quantity: existingItem.quantity + 1 }));
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    if (existingItem && existingItem.quantity > 1) {
      dispatch(updateQuantity({ id: product.id, quantity: existingItem.quantity - 1 }));
    } else if (existingItem && existingItem.quantity === 1) {
      dispatch(removeItem(product.id));
      setIncart(false);
    }
  };

  return (
    <div className="group cursor-pointer">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-secondary rounded-lg">
          <img
            src={product.image}
            alt={product.title }
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="space-y-2">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-sans text-base font-medium text-foreground group-hover:text-muted-foreground transition-colors">
            {product.title }
          </h3>
        </Link>
        <p className="font-display text-lg font-semibold">₹{product.price.toLocaleString()}</p>
        <Link 
  href="/products"
  className="inline-block border border-black text-black px-8 py-3 w-full mt-full hover:bg-gray-800 hover:text-white transition"
>
  Shop Now
</Link>
        {/* {!incart ? (
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-2"
            onClick={handleAddItem}
          >
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center justify-between mt-2 border rounded-lg p-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDecrement}
              className="h-8 w-8 p-0"
            >
              -
            </Button>
            <span className="font-medium">{existingItem?.quantity}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleIncrement}
              className="h-8 w-8 p-0"
            >
              +
            </Button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductCard;