"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { User } from "lucide-react";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import MobileMenu from "@/components/mobile-menu";

const NavbarContent: React.FC = () => {
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled
          ? "bg-[#4a4a4a]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-[#4a4a4a] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu (Left on Mobile, Hidden on Desktop) */}
          <div className="flex items-center lg:hidden">
            <MobileMenu />
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              <span className="font-black text-white text-xl sm:text-2xl tracking-tighter uppercase flex items-center gap-1">
                JUSTSTOCKTRADING
              </span>
            </Link>
          </div>

          {/* Center Navigation (Desktop Only) */}
          <div className="hidden lg:flex flex-grow justify-end pr-6 lg:pr-10">
            <MainNav />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">

            {/* <Link
              href="/profile"
              aria-label="User profile"
              className="p-2 text-white hover:text-[#bc2727] rounded-full transition-colors hidden sm:block"
            >
              <User className="h-5 w-5" strokeWidth={2.5} />
            </Link> */}

            <NavbarActions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarContent;
