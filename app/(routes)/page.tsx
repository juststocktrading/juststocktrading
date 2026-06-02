import getBillboards from "@/actions/get-billboards";
import BillboardCard from "@/components/ui/billboard-card";
import getProducts from "@/actions/get-products";
import InfoSection from "@/components/Infosection";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/Herosection";
import DummyProductPage from "@/components/DummyProduct";
import Newsletter from "@/components/Newsletter";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards();

  return (
    <div className="w-full overflow-hidden bg-slate-50">
      <HeroSection />
      <Container>
        <div className="space-y-10 pb-10">
          <ProductList title="New Arrivals" items={products} />
        </div>
      </Container>
      {/* <WhyChooseUs /> */}
      <Testimonial />

      {/* Our Collections — Bento Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
              Our collections
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-prose">
              Inspire and let yourself be inspired, from one unique fashion to another.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-[260px]">
            {billboards[0] && (
              <BillboardCard
                key={billboards[0].id}
                data={billboards[0]}
                className="md:row-span-2"
              />
            )}
            {billboards[1] && (
              <BillboardCard
                key={billboards[1].id}
                data={billboards[1]}
              />
            )}
            {billboards[2] && (
              <BillboardCard
                key={billboards[2].id}
                data={billboards[2]}
              />
            )}
          </div>
        </div>
      </section>

      <Newsletter />
      <Features />
    </div>
  );
};

export default HomePage;
