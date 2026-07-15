import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";

import getProducts from "@/actions/get-products";
import getCategory from "@/actions/get-category";
import getSizes from "@/actions/get-sizes";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{ sizeId?: string }> | undefined;
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { categoryId } = await params;
  const { sizeId } = (await searchParams) ?? {
    sizeId: undefined,
  };

  const products = await getProducts({
    categoryId,
    ...(sizeId && { sizeId }),
  });

  const [sizes, category] = await Promise.all([
    getSizes(),
    getCategory(categoryId),
  ]);

  return (
    <div className="bg-background">
      <Container>
        <Billboard data={category?.billboard ?? null} />
        <div className="pb-16 sm:pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
