import React from "react";
// import Image from "next/image";
import { Package, Shield, Clock } from "lucide-react";

const StockAbout: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* <div className="relative aspect-[4/3] rounded-xl overflow-hidden lg:order-2">
            <Image src="/about.jpeg" alt="About Just Stock Trading" fill className="object-cover" />
          </div> */}
          <div className="space-y-6 lg:order-1">
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              About Just Stock Trading
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Your Strategic UK Partner <br />
              for Quality Clothing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Just Stock Trading Limited was established to bridge the gap between
              UK quality stocks and resellers seeking reliable wholesale goods. We
              specialise in sourcing quality cream grade clothing and liquidation
              stock for resale markets worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are not simply wholesalers. We are your strategic sourcing
              partner — ensuring transparency, efficiency, and reliability at
              every step of the procurement and export process.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-500">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">6 Yrs</div>
                <div className="text-sm text-gray-500">In Business</div>
              </div>
            </div>

            <a
              href="shop"
              className="inline-block bg-black text-white font-medium py-3 px-8 rounded-full hover:bg-gray-800 transition-colors text-sm"
            >
              Browse Our Products
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-6 space-y-3">
              <Package className="w-8 h-8 text-gray-700" />
              <h3 className="font-semibold text-gray-900">Quality Sourcing</h3>
              <p className="text-sm text-gray-500">
                Carefully selected cream grade and liquidation stock from trusted UK suppliers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 space-y-3">
              <Shield className="w-8 h-8 text-gray-700" />
              <h3 className="font-semibold text-gray-900">Trusted Process</h3>
              <p className="text-sm text-gray-500">
                Transparent procurement and reliable export to markets worldwide.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 space-y-3 sm:col-span-2">
              <Clock className="w-8 h-8 text-gray-700" />
              <h3 className="font-semibold text-gray-900">Global Delivery</h3>
              <p className="text-sm text-gray-500">
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
