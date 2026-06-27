import React from "react";
import Link from "next/link";

const StockHero: React.FC = () => {
  return (
    <section
      className="relative w-full text-white bg-cover h-screen bg-center"
      style={{
        backgroundImage: "url('/back.png')",
        padding: "5rem 2rem 4.5rem",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <p
          className="text-[0.75rem] font-bold tracking-[0.18em] uppercase mb-4"
          style={{ color: "#bc2727" }}
        >
          Delivery available within the UK, Ghana, Nigeria, Gambia and all over Europe
        </p>
        <h1
          className="font-black tracking-tight leading-tight mb-[1.1rem]"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            letterSpacing: "-0.03em",
          }}
        >
          THE SELLER <br />
          RESELLERS TRUST
        </h1>
        <p
          className="leading-relaxed"
          style={{
            fontSize: "1.05rem",
            color: "#514949",
            maxWidth: "520px",
            lineHeight: "1.6",
          }}
        >
          Premium cream grade clothing and New with Tags stock. <br />
          Quality-checked, Trusted, and Ready to ship.
        </p>
        <Link
          href="#shop"
          className="inline-block bg-white font-bold no-underline transition-all duration-200 hover:bg-[#e8e8e8] hover:-translate-y-0.5"
          style={{
            color: "#2c2c2c",
            fontSize: "0.92rem",
            padding: "0.75rem 2rem",
            marginTop: "1.75rem",
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
