import React from "react";
import { Facebook, Instagram, Twitter, Tag } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#222]">
        {/* Left Section - Logo and Socials */}
        <div className="lg:col-span-4 flex flex-col items-start">
          {/* Logo Box */}
          <div className="inline-block border-y border-white py-3 mb-8">
            <div className="text-3xl font-light tracking-wide flex items-center gap-1">
              <span>RESELLER</span>
              <Tag className="w-6 h-6 transform rotate-45 text-white fill-white" />
              <span>BUS</span>
            </div>
          </div>
          <p className="text-gray-300 mb-8 text-sm sm:text-base">
            Discover timeless pieces for effortless style.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-white text-black p-2.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Facebook className="h-5 w-5 fill-current border-none" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-white text-black p-2.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-white text-black p-2.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Twitter className="h-5 w-5 fill-current" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:pl-16">
          {/* Information */}
          <div>
            <h3 className="text-lg font-medium mb-6">Information</h3>
            <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
              <li className="leading-relaxed">
                2810 N Church St PMB 48572,
                <br />
                Wilmington, Delaware
              </li>
              <li>
                <a
                  href="tel:+11234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 123 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@example.com"
                  className="hover:text-white transition-colors"
                >
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto pt-8">
        <p className="text-gray-300 text-sm sm:text-base">
          Copyright © 2026, JuststockTrading.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
