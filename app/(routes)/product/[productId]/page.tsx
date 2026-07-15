import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Container from "@/components/ui/container";
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
      <Container>
        <div className="py-6 sm:py-8 lg:py-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap pb-1">
            <Link href="/" className="hover:text-foreground transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link href="/shop" className="hover:text-foreground transition-colors shrink-0">
              Shop
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-foreground font-medium truncate max-w-[160px] sm:max-w-[200px]">
              {product.name}
            </span>
          </nav>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div className="lg:sticky lg:top-6 lg:self-start">
              <Gallery images={product.variations.flatMap((v) => v.images)} />
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <Info data={product} />
            </div>
          </div>

          <hr className="my-12 sm:my-16 border" />

          <ProductList title="You Might Also Like" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
