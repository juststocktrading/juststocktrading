"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    const variation = item.variationId
      ? item.product.variations.find((v) => v.id === item.variationId)
      : item.product.variations[0];
    return total + (variation?.price || 0);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        items: items.map((item) => ({
          productId: item.product.id,
          variationId: item.variationId || item.product.variations[0]?.id,
        })),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="rounded-lg bg-card border p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg font-medium text-card-foreground">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t pt-4">
          <div className="text-base font-medium text-card-foreground">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
