import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const StockFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
                <span>
                  123 Main Street,<br />Leeds, LS1 1AB, UK
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-gray-400" />
                <a href="tel:+441130000000" className="hover:text-white transition-colors">
                  +44 113 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-gray-400" />
                <a href="mailto:hello@yourbrand.com" className="hover:text-white transition-colors">
                  hello@yourbrand.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
                X (Twitter)
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        &copy; 2026 YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default StockFooter;
