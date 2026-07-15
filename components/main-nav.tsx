"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"

const staticRoutes = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const MainNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-8 font-bold tracking-widest uppercase">
      {staticRoutes.map((route) => {
        const isActive = pathname === route.href;
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm transition-colors hover:text-[#bc2727] relative group",
              isActive ? "text-[#bc2727]" : "text-white"
            )}
          >
            {route.label}
            {isActive && (
              <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#bc2727]" />
            )}
            <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#bc2727] transition-all group-hover:w-full" />
          </Link>
        )
      })}
    </nav>
  );
};

export default MainNav;
