import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Music2 } from "lucide-react";

const StockFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 scroll-mt-20">
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
                <Link href="/shop" className="hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
                <span>
                  Unit 7, 5 Alive, York Road, Bradford BD8 0HR
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-gray-400" />
                <a href="tel:+447344056285" className="hover:text-white transition-colors">
                  +44 7344 056285
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-gray-400" />
                <a href="mailto:info@juststocktrading.co.uk" className="hover:text-white transition-colors">
                  info@juststocktrading.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 shrink-0 text-gray-400" />
                <a
                  href="https://wa.me/447353243741?text=Hello%2C%20I%27m%20interested%20in%20your%20wholesale%20clothing%20supply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://tiktok.com/@resellerbus"
                aria-label="TikTok"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Music2 className="w-4 h-4" />
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        &copy; 2026 Just stock trading. All rights reserved.
      </div>
    </footer>
  );
};

export default StockFooter;

