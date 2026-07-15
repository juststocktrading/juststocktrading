"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const slides = [
  [
    {
      stars: 5,
      quote:
        "I run a boutique in Accra and the mixed women clothing bales from Just Stock Trading changed my business. The variety is incredible — skirts, blouses, undies — all cream grade and sellable. My customers keep coming back.",
      initials: "AA",
      color: "#5b8dee",
      name: "Ama Adjei",
      role: "Boutique Owner, Accra, Ghana",
    },
    {
      stars: 5,
      quote:
        "I was sourcing from three different suppliers before. Now I get everything from one place. The kids clothing bales are consistently high quality and the pricing leaves me healthy margins.",
      initials: "DK",
      color: "#e8705a",
      name: "David Kalu",
      role: "Reseller, Lagos, Nigeria",
    },
    {
      stars: 5,
      quote:
        "Delivery to Banjul took just under two weeks and the shipping was trackable the whole way. The 25KG bales were packed securely. I've already placed my second order.",
      initials: "MB",
      color: "#5ba85b",
      name: "Marie Bah",
      role: "Fashion Retailer, Banjul, Gambia",
    },
  ],
  [
    {
      stars: 5,
      quote:
        "The general mix bales are perfect for my market stall. I get men's, women's and kids items in one go. The ladies outnumber the men which is exactly what my customers want.",
      initials: "EO",
      color: "#b05bd4",
      name: "Emeka Okafor",
      role: "Market Trader, Onitsha, Nigeria",
    },
    {
      stars: 5,
      quote:
        "I compared five UK wholesalers before settling on Just Stock Trading. Their cream grade is better than some suppliers' premium. The winter mix with hoodies and jackets flew off my shelves.",
      initials: "CL",
      color: "#d4875b",
      name: "Chloe Lambert",
      role: "Online Reseller, Birmingham, UK",
    },
    {
      stars: 5,
      quote:
        "My shop specialises in ladieswear and the 55KG women's bale is exceptional value. Dresses, tops, trousers — all sorted by size. Saves me hours of sorting time.",
      initials: "FN",
      color: "#5bb8b8",
      name: "Fatima Ndao",
      role: "Fashion Boutique Owner, Dakar, Senegal",
    },
  ],
  [
    {
      stars: 5,
      quote:
        "I started with one 25KG bale six months ago. Now I order four bales a month. The consistency of quality is what keeps me here. Never had a complaint from my end customers.",
      initials: "TA",
      color: "#5870d4",
      name: "Tunde Alabi",
      role: "Wholesale Distributor, Ibadan, Nigeria",
    },
    {
      stars: 5,
      quote:
        "Honestly was sceptical about buying bales online, but the customer service team walked me through everything. The stock arrived exactly as described. Premium cream grade is no joke.",
      initials: "SM",
      color: "#d45b8a",
      name: "Safia Mohamed",
      role: "First-Time Buyer, Freetown, Sierra Leone",
    },
    {
      stars: 5,
      quote:
        "What sets Just Stock Trading apart is transparency. They tell you exactly what's in each bale, the condition, the weight. No surprises. That's rare in this business.",
      initials: "PO",
      color: "#7ab55b",
      name: "Paul Osei",
      role: "Clothing Importer, Kumasi, Ghana",
    },
  ],
];

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex space-x-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
          i <= count ? "text-yellow-400 fill-yellow-400" : "text-muted"
        }`}
      />
    ))}
  </div>
);

const StockTestimonials: React.FC = () => {
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const resetAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
  }, [total]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]);

  const moveSlide = (dir: number) => {
    setCurrent((prev) => Math.max(0, Math.min(total - 1, prev + dir)));
    resetAuto();
  };

  const goToSlide = (i: number) => {
    setCurrent(i);
    resetAuto();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      moveSlide(diff > 0 ? 1 : -1);
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-card-foreground mb-2">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Real reviews from people who love our products.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, si) => (
              <div key={si} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {slide.map((review, ri) => (
                  <div
                    key={ri}
                    className="bg-card rounded-xl p-5 sm:p-6 border flex flex-col justify-between"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <StarRating count={review.stars} />
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shrink-0"
                        style={{ background: review.color }}
                      >
                        {review.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-xs sm:text-sm text-card-foreground truncate">
                          {review.name}
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground truncate">
                          {review.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <button
              className="p-1.5 sm:p-2 rounded-full border hover:bg-accent transition-colors disabled:opacity-30"
              onClick={() => moveSlide(-1)}
              disabled={current === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-card-foreground" : "bg-border"
                  }`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="p-1.5 sm:p-2 rounded-full border hover:bg-accent transition-colors disabled:opacity-30"
              onClick={() => moveSlide(1)}
              disabled={current === total - 1}
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockTestimonials;
