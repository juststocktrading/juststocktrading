import React from "react";
import { Package, Shield, Clock } from "lucide-react";

const StockAbout: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:order-1">
            <p className="text-xs sm:text-sm tracking-widest text-muted-foreground uppercase">
              About Just Stock Trading
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground leading-tight">
              Your Strategic UK Partner <br />
              for Quality Clothing
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Just Stock Trading Limited was established to bridge the gap between
              UK quality stocks and resellers seeking reliable wholesale goods. We
              specialise in sourcing quality cream grade clothing and liquidation
              stock for resale markets worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              We are not simply wholesalers. We are your strategic sourcing
              partner — ensuring transparency, efficiency, and reliability at
              every step of the procurement and export process.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-card-foreground">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-card-foreground">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-card-foreground">6 Yrs</div>
                <div className="text-xs sm:text-sm text-muted-foreground">In Business</div>
              </div>
            </div>

            <a
              href="shop"
              className="inline-block bg-primary text-primary-foreground font-medium py-3 px-8 rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
              Browse Our Products
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-muted rounded-xl p-5 sm:p-6 space-y-3">
              <Package className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" />
              <h3 className="font-semibold text-card-foreground">Quality Sourcing</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Carefully selected cream grade and liquidation stock from trusted UK suppliers.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-5 sm:p-6 space-y-3">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" />
              <h3 className="font-semibold text-card-foreground">Trusted Process</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Transparent procurement and reliable export to markets worldwide.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-5 sm:p-6 space-y-3 sm:col-span-2">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" />
              <h3 className="font-semibold text-card-foreground">Global Delivery</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Delivery available within the UK, Ghana, Nigeria, Gambia and all over Europe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockAbout;
