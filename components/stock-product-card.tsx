"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

interface StockProduct {
  id: number;
  name: string;
  tag: string;
  price: string;
  desc: string;
  img: string;
  stripe: string | null;
  soldOut: boolean;
}

interface StockProductCardProps {
  product: StockProduct;
}

const StockProductCard: React.FC<StockProductCardProps> = ({ product }) => {
  if (product.soldOut) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group opacity-80">
        <div className="aspect-square relative bg-gray-100">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-2">
          <span className="inline-block text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded">
            {product.tag}
          </span>
          <h3 className="font-semibold text-sm">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.price}</p>
          <p className="text-xs text-gray-400 line-clamp-2">{product.desc}</p>
          <button
            className="w-full mt-2 bg-red-600 text-white py-2 rounded-lg text-sm font-medium cursor-not-allowed"
            disabled
          >
            SOLD OUT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="aspect-square relative bg-gray-100">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <span className="inline-block text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded">
          {product.tag}
        </span>
        <h3 className="font-semibold text-sm">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.price}</p>
        <p className="text-xs text-gray-400 line-clamp-2">{product.desc}</p>
        {product.stripe ? (
          <a
            href={product.stripe}
            className="flex items-center justify-center gap-2 w-full mt-2 bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            BUY NOW
          </a>
        ) : (
          <button className="flex items-center justify-center gap-2 w-full mt-2 bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            <ShoppingBag className="w-4 h-4" />
            BUY NOW
          </button>
        )}
      </div>
    </div>
  );
};

export default StockProductCard;
