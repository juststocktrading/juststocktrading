import Link from "next/link";

const staticRoutes = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-8 font-bold tracking-widest uppercase">
      {staticRoutes.map((route) => (
        <Link 
          key={route.href}
          href={route.href} 
          className="text-sm transition-colors text-white hover:text-[#bc2727]"
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
