"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Heart } from "lucide-react";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import MobileMenu from "@/components/mobile-menu";
import { Category } from "@/types";

interface NavbarContentProps {
  categories: Category[];
}

const NavbarContent: React.FC<NavbarContentProps> = ({ categories }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Mobile Menu (Left on Mobile, Hidden on Desktop) */}
          <div className="flex items-center lg:hidden">
            <MobileMenu categories={categories} />
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              <span className={`font-black text-blue-600 transition-all duration-300 ${isScrolled ? "text-2xl sm:text-3xl" : "text-3xl"}`}>
                ResellerBus
              </span>
            </Link>
          </div>

          {/* Center Navigation (Desktop Only) */}
          <div className="hidden lg:flex flex-grow justify-center">
            <MainNav data={categories} />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors" aria-label="Search">
              <Search className="h-6 w-6" />
            </button>
            
            <Link href="/profile" aria-label="User profile" className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors hidden sm:block">
              <User className="h-6 w-6" />
            </Link>
            
            <Link href="/wishlist" aria-label="Wishlist" className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors hidden sm:block">
              <Heart className="h-6 w-6" />
            </Link>
            
            <NavbarActions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarContent;
