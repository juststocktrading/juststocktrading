import StockHero from "@/components/stock-hero";
import StockProducts from "@/components/stock-products";
import StockAbout from "@/components/stock-about";
import StockTestimonials from "@/components/stock-testimonials";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <StockHero />
      <StockProducts />
      <StockAbout />
      <StockTestimonials />
    </div>
  );
};

export default HomePage;
