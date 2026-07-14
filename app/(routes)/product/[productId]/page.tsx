import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { productId } = await params;
  const product = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop" className="hover:text-foreground transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:sticky lg:top-6 lg:self-start">
            <Gallery images={product.variations.flatMap((v) => v.images)} />
          </div>
          <div className="mt-8 lg:mt-0">
            <Info data={product} />
          </div>
        </div>

        <hr className="my-16 border" />

        <ProductList title="You Might Also Like" items={suggestedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
