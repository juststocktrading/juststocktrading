import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              Shop the Latest Styles: Stay ahead of the curve with our best sellers
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap ml-4"
          >
            All products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

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
