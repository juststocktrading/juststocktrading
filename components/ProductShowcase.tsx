"use client";

import React, { useEffect, useState } from 'react';
import { Product } from '@/types';
import getProducts from '@/actions/get-products';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';

interface ProductShowcaseProps {
  // optional limit
  limit?: number;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ limit = 8 }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getProducts({});
        setProducts(limit ? data.slice(0, limit) : data);
      } catch (err) {
        console.error('Failed to fetch products', err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [limit]);

  if (loading) {
    return <p className="text-center py-8">Loading products...</p>;
  }

  if (products.length === 0) {
    return <NoResults />;
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
