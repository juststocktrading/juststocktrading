"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const staticRoutes = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop All" },
  { href: "/about", label: "About Us" },
  // { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const categoryRoutes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="flex items-center space-x-8 font-medium">
      {/* Static Links */}
      {staticRoutes.map((route) => {
        const isActive = pathname === route.href;
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-base transition-colors hover:text-blue-600 relative group",
              isActive ? "text-blue-600" : "text-gray-600"
            )}
          >
            {route.label}
            {isActive && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
            )}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 rounded-full transition-all group-hover:w-full" />
          </Link>
        )
      })}
    </nav>
  );
};

export default MainNav;
