"use client";

import getCategories from "@/actions/get-categories";
import { X, Menu, Search, User, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const staticLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop All" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

type MobileMenuProps = {
  categories: Awaited<ReturnType<typeof getCategories>>;
};

const MobileMenu = ({ categories }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-black rounded-md transition-colors"
        aria-label="Open mobile menu"
      >
        <Menu size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity" onClick={toggleMenu} />
      )}

      <div
        className={`fixed top-0 left-0 z-[70] h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <p className="text-xl font-black text-blue-600">ResellerBus</p>
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="p-2 -mr-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Mobile Search */}
          <div className="p-5 sm:hidden">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-gray-100 border border-transparent focus:border-blue-500 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-xl transition-all"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Quick Actions (User, Wishlist) */}
          <div className="flex justify-around py-4 border-b border-gray-100 px-5">
            <Link href="/profile" onClick={toggleMenu} className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
              <User size={24} />
              <span className="text-xs font-medium">Profile</span>
            </Link>
            <Link href="/wishlist" onClick={toggleMenu} className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
              <Heart size={24} />
              <span className="text-xs font-medium">Wishlist</span>
            </Link>
          </div>

          <nav className="flex flex-col p-5 space-y-6">
            {/* Static Links */}
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Menu</p>
              {staticLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="block text-gray-900 hover:text-blue-600 text-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Categories */}
            {categories.length > 0 && (
              <div className="space-y-4 border-t border-gray-100 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Categories</p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.id}`}
                      onClick={toggleMenu} 
                      className="block text-gray-600 hover:text-blue-600 text-base transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
