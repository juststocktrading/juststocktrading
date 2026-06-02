import Link from "next/link";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-sm sm:text-base text-gray-500">
              Shop the Latest Styles: Stay ahead of the curve with our newest arrivals
            </p>
            <Link
              href="/shop"
              className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap ml-4"
            >
              All products
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        {items.length === 0 && <NoResults />}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;

