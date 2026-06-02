"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="ml-auto flex items-center">
      <button 
        onClick={() => router.push('/cart')} 
        className="relative flex items-center p-2 text-gray-600 hover:text-black transition-colors"
        aria-label="Shopping Cart"
      >
        <ShoppingBag size={24} />
        {cart.items.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-blue-600 rounded-full border-2 border-white">
            {cart.items.length}
          </span>
        )}
      </button>
    </div>
  );
}
 
export default NavbarActions;