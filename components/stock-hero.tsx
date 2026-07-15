import React from "react";
import Link from "next/link";
import Image from "next/image";

const StockHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden">
      <Image
        src="/bg.png"
        alt="Background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32" style={{ maxWidth: "min(90rem, 100%)" }}>
        <h1
          className="font-black tracking-tight leading-tight text-white"
          style={{
            fontSize: "clamp(1.75rem, 10vw, 3.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          THE SELLER<br />
          RESELLERS TRUST
        </h1>
        <p
          className="text-white/90 mt-3 sm:mt-4"
          style={{
            fontSize: "clamp(0.85rem, 3vw, 1.1rem)",
            lineHeight: "1.65",
            maxWidth: "min(32rem, 90%)",
          }}
        >
          Premium cream grade clothing and New with Tags stock.
          Quality-checked, Trusted, and Ready to ship.
        </p>
        <Link
          href="shop"
          className="inline-flex items-center bg-white font-bold no-underline transition-all duration-200 hover:bg-[#e8e8e8] hover:-translate-y-0.5 active:scale-[0.97] mt-6 sm:mt-8"
          style={{
            color: "#2c2c2c",
            fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
            borderRadius: "8px",
            padding: "clamp(0.6rem, 2vw, 0.85rem) clamp(1.25rem, 4vw, 2.25rem)",
          }}
        >
          SHOP NOW
        </Link>
      </div>
    </section>
  );
};

export default StockHero;
