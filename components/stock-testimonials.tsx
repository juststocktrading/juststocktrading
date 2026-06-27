"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const slides = [
  [
    {
      stars: 5,
      quote:
        "The wireless headphones are absolutely brilliant. Sound quality is crystal clear and the battery genuinely lasts all day. Best purchase I've made this year.",
      initials: "JM",
      color: "#5b8dee",
      name: "James Mitchell",
      role: "Music Producer, Manchester",
    },
    {
      stars: 5,
      quote:
        "I was sceptical about the smart watch but it's changed how I manage my day. The sleep tracking is surprisingly accurate and the display is gorgeous.",
      initials: "SP",
      color: "#e8705a",
      name: "Sarah Patel",
      role: "Yoga Instructor, Bristol",
    },
    {
      stars: 4,
      quote:
        "The compact camera fits in my jacket pocket but takes photos that rival my old DSLR. Great for travel. Delivery was fast and packaging was really secure.",
      initials: "OT",
      color: "#5ba85b",
      name: "Oliver Thompson",
      role: "Travel Blogger, Edinburgh",
    },
  ],
  [
    {
      stars: 5,
      quote:
        "The portable monitor was a game-changer for working from cafés. Plug it in via USB-C and it just works — no drivers, no fuss. Slim and light too.",
      initials: "AK",
      color: "#b05bd4",
      name: "Amara Khan",
      role: "Freelance Developer, Leeds",
    },
    {
      stars: 5,
      quote:
        "I've tried many mechanical keyboards and this one strikes the perfect balance. The tactile feedback is satisfying without being too loud for an open-plan office.",
      initials: "RH",
      color: "#d4875b",
      name: "Ryan Hughes",
      role: "UX Designer, London",
    },
    {
      stars: 4,
      quote:
        "The ergonomic mouse genuinely relieved the wrist pain I'd had for months. Takes a day or two to adjust to the vertical grip, but after that it feels completely natural.",
      initials: "NW",
      color: "#5bb8b8",
      name: "Nina Watson",
      role: "Accountant, Birmingham",
    },
  ],
  [
    {
      stars: 5,
      quote:
        "The 20K power bank charged my phone four times on a camping trip. It's a bit heavy but worth every gram. The fast-charging on the USB-C port is impressively quick.",
      initials: "DL",
      color: "#5870d4",
      name: "Daniel Lee",
      role: "Outdoor Enthusiast, Cardiff",
    },
    {
      stars: 5,
      quote:
        "The wireless charging stand looks so clean on my desk. The adjustable angle is a thoughtful touch — I can glance at notifications without picking my phone up at all.",
      initials: "FC",
      color: "#d45b8a",
      name: "Fatima Clarke",
      role: "Marketing Manager, Glasgow",
    },
    {
      stars: 5,
      quote:
        "Set the smart bulbs up in under ten minutes and they work perfectly with my voice assistant. The colour range is huge and the app is one of the most intuitive I've used.",
      initials: "MO",
      color: "#7ab55b",
      name: "Marcus Osei",
      role: "Interior Designer, Nottingham",
    },
  ],
];

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex space-x-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i <= count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
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
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-500">
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
              <div key={si} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {slide.map((review, ri) => (
                  <div
                    key={ri}
                    className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <StarRating count={review.stars} />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ background: review.color }}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">
                          {review.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {review.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-30"
              onClick={() => moveSlide(-1)}
              disabled={current === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-30"
              onClick={() => moveSlide(1)}
              disabled={current === total - 1}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockTestimonials;
