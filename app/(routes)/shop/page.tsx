import React from "react";

import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";

import BillboardCard from "@/components/ui/billboard-card";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";

interface ShopPageProps {
  searchParams: Promise<{ sizeId?: string }> | undefined;
}

const ShopPage = async ({ searchParams }: ShopPageProps) => {
  const { sizeId } = (await searchParams) ?? {
    sizeId: undefined,
  };

  const [sizes] = await Promise.all([getSizes()]);

  const [products, billboards] = await Promise.all([
    getProducts({
      isFeatured: true,
      ...(sizeId && { sizeId }),
    }),
    getBillboards(),
  ]);

  return (
    <div className="w-full overflow-hidden bg-background">
      <Container>
        <div className="space-y-10 pb-10">
          <div className="relative z-20 mt-10 md:mt-20 flex flex-col items-center mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
              Products page
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-prose mx-auto mb-8 leading-relaxed">
              Carefully curated picks from our best-loved essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {billboards.slice(0, 6).map((billboard) => (
              <BillboardCard key={billboard.id} data={billboard} />
            ))}
          </div>

          <div className="pb-24">
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
        </div>
      </Container>
    </div>
  );
};

export default ShopPage;
