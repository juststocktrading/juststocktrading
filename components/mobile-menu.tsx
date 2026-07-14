"use client";

import { X, Menu, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const staticLinks = [
  // { href: "/", label: "Home" },
  { href: "/shop", label: "Shop " },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 -ml-2 text-white hover:text-[#bc2727] rounded-md transition-colors"
        aria-label="Open mobile menu"
      >
        <Menu size={28} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 z-[70] h-full w-[85%] max-w-sm bg-black shadow-[20px_0_60px_rgba(0,0,0,0.5)] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <Link href="/" onClick={toggleMenu} className="font-black text-white text-xl tracking-tighter uppercase flex items-center gap-1">
            JUSTSTOCKTRADING
          </Link>
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="p-2 -mr-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
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
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-white/10 border border-transparent focus:border-[#bc2727] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#bc2727] rounded-xl transition-all font-medium"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          {/* <div className="flex justify-around py-5 border-b border-white/10 px-5">
            <Link
              href="/profile"
              onClick={toggleMenu}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <User size={24} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
            </Link>
            <Link
              href="/wishlist"
              onClick={toggleMenu}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Heart size={24} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Wishlist</span>
            </Link>
          </div> */}

          <nav className="flex flex-col p-5 space-y-6">
            {/* Static Links */}
            <div className="space-y-4">
              
              {staticLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className={`block text-xl font-black uppercase tracking-wide transition-colors ${
                      isActive ? "text-[#bc2727]" : "text-white hover:text-[#bc2727]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
