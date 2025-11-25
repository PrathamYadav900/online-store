"use client"
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";
import Link from "next/link";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-display font-bold tracking-tight">
            FES
          </Link>

          {/* Deskhrefp Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              
            >
              Home
            </Link>
             <Link
              href="/products"
              className="text-sm font-medium hover:text-primary transition-colors"
              
            >
              All Products
            </Link>
            <Link
              href="/products/men"
              className="text-sm font-medium hover:text-primary transition-colors"
              
            >
              Men
            </Link>
            <Link
              href="/products/women"
              className="text-sm font-medium hover:text-primary transition-colors"
              
            >
              Women
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
              
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              
            >
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu hrefggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products/men"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                href="/products/women"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button variant="ghost" className="justify-start">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
