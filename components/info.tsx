"use client";

import { useState, MouseEventHandler } from "react";
import axios from "axios";
import { ShoppingBag, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const [selectedVariationId, setSelectedVariationId] = useState(
    data.variations[0]?.id || ""
  );

  const selectedVariation =
    data.variations.find((v) => v.id === selectedVariationId) ||
    data.variations[0];

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data, selectedVariationId);
  };

  const onBuyNow: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.stopPropagation();
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        items: [{ productId: data.id, variationId: selectedVariationId }],
      }
    );
    window.location = response.data.url;
  };

  if (!selectedVariation) {
    return (
      <div className="bg-card text-card-foreground rounded-xl border p-4">
        <p className="text-sm text-muted-foreground">{data.name} (No variations available)</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{data.category?.name}</p>
        <h1 className="text-3xl font-bold text-card-foreground leading-tight">
          {data.name}
        </h1>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-card-foreground">
          <Currency value={selectedVariation.price} />
        </span>
        {data.variations.length > 1 && (
          <span className="text-sm text-muted-foreground line-through">
            <Currency value={selectedVariation.price * 1.15} />
          </span>
        )}
      </div>

      <hr className="border" />

      {data.variations.length > 1 && (
        <div className="space-y-3">
          <label className="text-sm font-medium text-card-foreground">Size</label>
          <Select
            value={selectedVariation.id}
            onValueChange={(value) => setSelectedVariationId(value)}
          >
            <SelectTrigger className="w-full sm:w-[240px] bg-background">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {data.variations.map((variation) => (
                <SelectItem key={variation.id} value={variation.id}>
                  {variation.size?.name || "One Size"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {selectedVariation.stock > 0 ? (
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-600 font-medium">In Stock</span>
          {selectedVariation.stock <= 5 && (
            <span className="text-muted-foreground">
              &mdash; Only {selectedVariation.stock} left
            </span>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-destructive" />
          <span className="text-destructive font-medium">Out of Stock</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          onClick={onBuyNow}
          disabled={selectedVariation.stock === 0}
          size="lg"
          className="flex-1 gap-2 h-12 text-base"
        >
          <Zap className="w-5 h-5" />
          Buy Now
        </Button>
        <Button
          onClick={onAddToCart}
          disabled={selectedVariation.stock === 0}
          variant="outline"
          size="lg"
          className="flex-1 gap-2 h-12 text-base"
        >
          <ShoppingBag className="w-5 h-5" />
          Add to Cart
        </Button>
      </div>

      <hr className="border" />

      {data.description && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-card-foreground">Description</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Info;
