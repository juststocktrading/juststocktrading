"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

import Summary from "./components/summary";
import CartItem from "./components/cart-item";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-background min-h-screen">
      <Container>
        <div className="py-10 sm:py-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-card-foreground">Shopping Cart</h1>
          <div className="mt-8 sm:mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-muted-foreground">No items added to cart.</p>
              )}
              {cart.items.length > 0 && (
                <div className="space-y-4">
                  <ul className="divide-y">
                    {cart.items.map((item) => (
                      <CartItem
                        key={`${item.product.id}-${item.variationId}`}
                        data={item.product}
                        variationId={item.variationId}
                      />
                    ))}
                  </ul>
                  <Button
                    onClick={cart.removeAll}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Clear Cart
                  </Button>
                </div>
              )}
            </div>
            <div className="mt-8 lg:mt-0 lg:col-span-5">
              <Summary />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
