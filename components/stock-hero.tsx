import React from "react";
import Link from "next/link";
import Image from "next/image";

const StockHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden">
      <Image
        src="/fam.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-28">
        {/* <p
          className="text-[0.6rem] sm:text-[0.7rem] lg:text-[0.75rem] font-bold tracking-[0.18em] uppercase mb-2 sm:mb-3 lg:mb-4"
          style={{ color: "#bc2727" }}
        >
          Delivery available within the UK, Ghana, Nigeria, Gambia and all over Europe
        </p> */}
        <h1
          className="font-black tracking-tight leading-tight mb-3 sm:mb-4 lg:mb-5 text-white"
          style={{
            fontSize: "clamp(2rem, 8vw, 3.2rem)",
            letterSpacing: "-0.03em",
          }}
        >
          THE SELLER<br />
          RESELLERS TRUST
        </h1>
        <p
          className="leading-relaxed max-w-full sm:max-w-md lg:max-w-lg text-white/90"
          style={{
            fontSize: "clamp(0.85rem, 2.5vw, 1.05rem)",
            lineHeight: "1.6",
          }}
        >
          Premium cream grade clothing and New with Tags stock.
          Quality-checked, Trusted, and Ready to ship.
        </p>
        <Link
          href="shop"
          className="inline-block bg-white font-bold no-underline transition-all duration-200 hover:bg-[#e8e8e8] hover:-translate-y-0.5 px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 mt-6 sm:mt-7 lg:mt-8"
          style={{
            color: "#2c2c2c",
            fontSize: "clamp(0.85rem, 2vw, 0.92rem)",
            borderRadius: "8px",
          }}
        >
          SHOP NOW
        </Link>
      </div>
    </section>
  );
};

export default StockHero;
