import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] flex flex-col justify-center text-left overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop"
          alt="Fashion models"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[90px] font-black leading-[1.1] tracking-tight mb-8">
            <span className="block text-white">THE SELLER</span>
            <span className="block text-white">RESELLERS</span>
            <span className="block text-[#00FF00]">TRUST</span>
          </h1>

          <div className="flex items-center gap-6 mt-12">
            <Link href="/shop" passHref>
              <button className="bg-white hover:bg-gray-100 text-black font-bold py-3 sm:py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out text-sm sm:text-base whitespace-nowrap">
                Shop collection
              </button>
            </Link>
            <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">
              Wear like a Pro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
