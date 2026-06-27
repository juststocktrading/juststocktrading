"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const StockHeader: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-10 flex items-center justify-between h-16"
      style={{ backgroundColor: "#4a4a4a", boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
    >
      <Link href="/" className="no-underline">
        <Image src="/logo.jpg" alt="Logo" width={230} height={56} className="rounded" />
      </Link>

      <button
        className="menu-toggle lg:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
        aria-label="Toggle navigation"
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className="block w-6 h-[2px] bg-white rounded-sm transition-transform duration-300" />
        <span className="block w-6 h-[2px] bg-white rounded-sm transition-transform duration-300" />
        <span className="block w-6 h-[2px] bg-white rounded-sm transition-transform duration-300" />
      </button>

      <nav
        className={`${
          navOpen ? "flex" : "hidden"
        } lg:flex absolute lg:static top-16 left-0 w-full lg:w-auto flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-8 p-0 lg:p-0`}
        style={{ backgroundColor: navOpen ? "#4a4a4a" : "transparent" }}
      >
        {[
          { href: "shop", label: "Shop" },
          { href: "about", label: "About" },
          { href: "contact", label: "Contact" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative text-[#e8e8e8] no-underline text-[0.95rem] font-medium tracking-wide py-1 hover:text-white transition-colors duration-200
              w-full lg:w-auto px-10 lg:px-0
              border-b lg:border-b-0 border-white/10 last:border-b-0
              lg:after:content-[''] lg:after:absolute lg:after:bottom-[-2px] lg:after:left-0 lg:after:h-[2px] lg:after:bg-white lg:after:transition-all lg:after:duration-250 lg:after:w-0 hover:lg:after:w-full"
            onClick={() => setNavOpen(false)}
            style={{ paddingTop: "0.6rem", paddingBottom: "0.6rem" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default StockHeader;
