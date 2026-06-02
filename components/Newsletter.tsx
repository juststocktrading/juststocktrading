import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-8">
      <div className="flex flex-col lg:flex-row bg-[#F8F9FA] rounded-2xl overflow-hidden shadow-sm">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            Join our newsletter. Enjoy big discounts.
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Hear what they say about us
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="jane@framer.com"
                className="w-full bg-[#E9ECEF] text-gray-800 placeholder-gray-500 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 bg-gray-200 rounded px-1">
                <MoreHorizontal className="w-4 h-4" />
              </div>
            </div>
            <button className="bg-black text-white px-8 py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
              Signup
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative min-h-[300px]">
          <img 
            src="/hold.jpg" 
            alt="Newsletter Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
