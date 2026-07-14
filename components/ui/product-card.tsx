"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { ShoppingBag, Zap, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCart();
  const router = useRouter();
  const [selectedVariationId, setSelectedVariationId] = useState(
    data.variations[0]?.id || ""
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    cart.addItem(data, selectedVariationId);
  };

  const onBuyNow = async (event: React.MouseEvent) => {
    event.stopPropagation();
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        items: [{ productId: data.id, variationId: selectedVariationId }],
      }
    );
    window.location = response.data.url;
  };

  const selectedVariation =
    data.variations.find((v) => v.id === selectedVariationId) ||
    data.variations[0];
  const price = selectedVariation?.price ?? 0;
  const imageUrl =
    selectedVariation?.images[0]?.url ??
    data.images[0]?.url ??
    "/placeholder.png";

  if (!selectedVariation) {
    return (
      <div className="bg-card text-card-foreground rounded-xl border p-4">
        <p className="text-sm text-muted-foreground">{data.name} (No variations available)</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up group bg-card text-card-foreground rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div onClick={handleClick} className="cursor-pointer relative">
        <div className="aspect-square bg-muted relative overflow-hidden">
          <div className={`absolute inset-0 bg-muted animate-pulse ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 z-10`} />
          <Image
            src={imageUrl}
            alt={data.name}
            fill
            className={`object-cover group-hover:scale-105 transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-muted-foreground border">
              {data.category?.name}
            </span>
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <button
              onClick={handleClick}
              className="bg-background/80 backdrop-blur-sm p-2 rounded-full border shadow-sm hover:bg-accent transition-colors"
            >
              <Eye className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          {selectedVariation.stock <= 5 && selectedVariation.stock > 0 && (
            <div className="absolute bottom-3 left-3">
              <span className="text-[10px] font-medium bg-destructive/90 text-destructive-foreground px-2 py-0.5 rounded-full">
                Only {selectedVariation.stock} left
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div onClick={handleClick} className="cursor-pointer space-y-1">
          <h3 className="font-semibold text-base text-card-foreground leading-tight line-clamp-1 group-hover:text-primary transition-colors">
            {data.name}
          </h3>
          <Currency value={price} />
        </div>
        <Select
          value={selectedVariationId}
          onValueChange={setSelectedVariationId}
        >
          <SelectTrigger className="w-full h-9 text-sm border rounded-lg bg-background">
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
        <div className="flex flex-col gap-2 mt-auto pt-1">
          <button
            onClick={onBuyNow}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium py-2.5 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            <Zap className="w-4 h-4" />
            Buy Now
          </button>
          <button
            onClick={onAddToCart}
            className="w-full flex items-center justify-center gap-2 border bg-background hover:bg-accent text-foreground text-sm font-medium py-2.5 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
