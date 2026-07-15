"use client";

import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
  variationId?: string;
}

const CartItem: React.FC<CartItemProps> = ({ data, variationId }) => {
  const cart = useCart();

  const variation = variationId
    ? data.variations.find((v) => v.id === variationId)
    : data.variations[0];

  const onRemove = () => {
    cart.removeItem(data.id, variationId);
  };

  if (!variation) {
    return (
      <li className="flex py-6 border-b">
        <p className="text-destructive text-sm">No variation available for {data.name}</p>
      </li>
    );
  }

  return (
    <li className="flex py-6 border-b gap-4 sm:gap-6">
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-lg overflow-hidden bg-muted shrink-0">
        <Image
          fill
          src={
            variation.images[0]?.url ??
            data.images[0]?.url ??
            "/placeholder.png"
          }
          alt={data.name}
          className="object-cover object-center"
          sizes="120px"
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-between min-w-0">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="pr-8 sm:pr-0">
          <p className="text-base sm:text-lg font-semibold text-card-foreground truncate">{data.name}</p>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground">
            {variation.size?.name && (
              <span>Size: {variation.size.name}</span>
            )}
          </div>
        </div>
        <div className="mt-2">
          <Currency value={variation.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
