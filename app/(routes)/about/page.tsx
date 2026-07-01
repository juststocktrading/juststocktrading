"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Shield,
  Globe,
  Award,
  CheckCircle2,
  TrendingUp,
  Headphones,
  Leaf,
  ArrowRight,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import StockTestimonials from "@/components/stock-testimonials";


const features = [
  {
    icon: Package,
    title: "Quality Sourcing",
    description:
      "Carefully selected cream grade and liquidation stock from trusted UK suppliers.",
  },
  {
    icon: Shield,
    title: "Trusted Process",
    description:
      "Transparent procurement and reliable export you can count on for your business.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description:
      "Shipping to UK, Ghana, Nigeria, Gambia & all over Europe seamlessly.",
  },
  {
    icon: Award,
    title: "Premium Grade",
    description:
      "Quality-checked, New with Tags stock ready to be shipped directly to you.",
  },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "6+", label: "Years in Business" },
  { value: "15+", label: "Countries Served" },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Trust & Transparency",
    description:
      "We build lasting relationships through honest communication and clear processes.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description:
      "Every item is carefully inspected to ensure it meets our high standards.",
  },
  {
    icon: TrendingUp,
    title: "Reseller Success",
    description:
      "We're invested in your growth — your success is our success.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Giving quality clothing a second life through responsible sourcing.",
  },
];


const Counter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center">
        <Image
          src="/about.jpeg"
          alt="Just Stock Trading Warehouse"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-[url('/bg.svg')] opacity-5" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            Your Strategic UK Partner
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              For Quality Clothing
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Bridging the gap between UK quality stocks and resellers worldwide
            with premium cream grade clothing and liquidation stock.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
            >
              Browse Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-1">
                  <Counter value={stat.value} suffix={stat.value.includes("+") ? "+" : "%"} />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/back.png"
                  alt="Our Story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-2xl p-6 shadow-xl hidden lg:block">
                <div className="text-3xl font-black">6+</div>
                <div className="text-sm text-blue-200 font-medium">Years of Excellence</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  More Than Just
                  <br />
                  <span className="text-blue-600">Wholesalers</span>
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Just Stock Trading Limited was established to bridge the gap
                    between UK quality stocks and resellers seeking reliable
                    wholesale goods. We specialise in sourcing quality cream
                    grade clothing and liquidation stock for resale markets
                    worldwide.
                  </p>
                  <p>
                    We are not simply wholesalers. We are your strategic sourcing
                    partner — ensuring transparency, efficiency, and reliability
                    at every step of the procurement and export process.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  Our Core Commitments
                </h3>
                <ul className="space-y-4">
                  {[
                    "Providing premium quality cream grade and liquidation stock",
                    "Ensuring a transparent and reliable procurement process",
                    "Delivering value to resellers across the UK, Africa, and Europe",
                    "Maintaining sustainable practices through responsible sourcing",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower resellers worldwide with access to premium quality UK
                stock at competitive prices, fostering sustainable trade
                relationships that drive mutual growth.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the most trusted bridge between UK surplus stock and
                global resale markets, known for quality, integrity, and
                exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Built for Resellers,
              <br />
              <span className="text-blue-600">Built on Trust</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We provide an unparalleled sourcing experience tailored for
              resellers who demand the best in quality and service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white border border-gray-200 p-8 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              What Drives
              <span className="text-blue-600"> Us</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              The principles that guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StockTestimonials />

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                Ready to Source with Us?
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
                Join hundreds of successful resellers who trust us for premium
                quality stock, reliable delivery, and exceptional support.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
                >
                  Browse Our Stock
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <Headphones className="w-4 h-4" />
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
