import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import StockHero from "@/components/stock-hero";
import StockAbout from "@/components/stock-about";
import StockTestimonials from "@/components/stock-testimonials";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="w-full overflow-hidden">
      <StockHero />
      <Container>
        <div className="space-y-10 pb-10">
          <ProductList title="Best Sellers" items={products} />
        </div>
      </Container>
      <StockAbout />
      <StockTestimonials />
    </div>
  );
};

export default HomePage;
