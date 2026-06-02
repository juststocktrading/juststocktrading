"use client";

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I love the variety of styles and the high-quality clothing on this web fashion site.",
    author: "Some & Co",
    rating: 5,
  },
  {
    quote: "The customer service is outstanding. They helped me find the perfect outfit for my event.",
    author: "Jane Doe",
    rating: 5,
  },
  {
    quote: "Fast shipping and the clothes fit perfectly. I'm definitely shopping here again!",
    author: "Sarah Smith",
    rating: 5,
  },
  {
    quote: "Amazing quality for the price. This has become my go-to store for everyday wear.",
    author: "Emily Chen",
    rating: 5,
  },
  {
    quote: "I get compliments every time I wear pieces from this site. Absolutely love it!",
    author: "Michael T.",
    rating: 5,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300); // Wait for fade out
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full bg-[#F4F4F5] py-20 sm:py-28 my-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[300px]">
        
        <div className={`transition-opacity duration-300 flex flex-col items-center ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {/* Stars */}
          <div className="flex space-x-2 mb-8">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-7 h-7 text-black fill-black" />
            ))}
          </div>
          
          {/* Quote */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-snug mb-8 max-w-4xl">
            "{currentTestimonial.quote}"
          </h2>
          
          {/* Author */}
          <p className="text-gray-800 text-lg font-medium">
            - {currentTestimonial.author}
          </p>
        </div>

        {/* Indicators */}
        <div className="flex space-x-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (idx === currentIndex) return;
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
