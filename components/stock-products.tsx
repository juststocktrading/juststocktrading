import React from "react";
import StockProductCard from "@/components/stock-product-card";

const stockProducts = [
  {
    id: 1,
    name: "MIXED WOMEN CLOTHING",
    tag: "25KG",
    price: "£249.99",
    desc: "Premium quality women's clothing with a variety of styles and sizes. Contains skirts, trousers, undies, blouses and various ladies wears.",
    img: "/women.png",
    stripe: null,
    soldOut: false,
  },
  {
    id: 2,
    name: "MIXED KIDS CLOTHING",
    tag: "25KG",
    price: "£249.99 (PRE-ORDERS ONLY)",
    desc: "Premium quality kids' clothing with a variety of styles and sizes. Contains shirts, pants, dresses and various wears for babies and children.",
    img: "/kiddies.png",
    stripe: "https://buy.stripe.com/eVq14g6xH5KK3G9fYe9AA00",
    soldOut: false,
  },
  {
    id: 3,
    name: "MIXED MEN CLOTHING",
    tag: "25KG",
    price: "£249.99",
    desc: "Premium quality men's clothing with a variety of styles and sizes. Contains shirts, pants, jackets and various wears for different occasions.",
    img: "/men.png",
    stripe: null,
    soldOut: false,
  },
  {
    id: 4,
    name: "GENERAL MIX",
    tag: "25KG",
    price: "£199.99",
    desc: "Men, Kids and Ladies (ladies are more) supplier bag",
    img: "/men.png",
    stripe: null,
    soldOut: false,
  },
  {
    id: 5,
    name: "LADIES MIX DRESSES",
    tag: "25KG",
    price: "£249.99",
    desc: "Party dress, long dress, short dress",
    img: "/women.jpg",
    stripe: null,
    soldOut: false,
  },
  {
    id: 6,
    name: "MIXED WOMEN CLOTHING",
    tag: "55KG",
    price: "£499.99",
    desc: "Premium quality women's clothing with a variety of styles and sizes. Contains Shorts, Pants, Blouses, casual tops, dresses and skirts.",
    img: "/ladies.png",
    stripe: "https://buy.stripe.com/eVq14g6xH5KK3G9fYe9AA00",
    soldOut: false,
  },
  {
    id: 7,
    name: "LADIES UNDERWEAR MIX",
    tag: "25KG",
    price: "£249.99",
    desc: "Contains bras, panties, nighties, veils and various lingeries.",
    img: "/women.jpg",
    stripe: null,
    soldOut: true,
  },
  {
    id: 8,
    name: "MIXED KIDS CLOTHING",
    tag: "55KG",
    price: "£499.99",
    desc: "kids' wear, various sizes and styles. 0-12 yr Boys and girls",
    img: "/ladies.png",
    stripe: null,
    soldOut: true,
  },
  {
    id: 9,
    name: "WINTER GENERAL MIX",
    tag: "25KG",
    price: "£149.99",
    desc: "Hoodies, zip-ups, sweaters, jumpers, jackets and coats.",
    img: "/men.png",
    stripe: null,
    soldOut: false,
  },
];

const StockProducts: React.FC = () => {
  return (
    <section id="shop" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Our Stocks
          </h2>
          <p className="text-gray-500">Best Sellers — quality you can count on.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stockProducts.map((product) => (
            <StockProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StockProducts;
