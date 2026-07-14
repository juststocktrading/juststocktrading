"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/447344056285?text=Hello%2C%20I%27m%20interested%20in%20your%20wholesale%20clothing%20supply.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all duration-300 group animate-fade-in-up"
    >
      <span className="flex items-center justify-center w-12 h-12">
        <MessageCircle className="w-6 h-6" />
      </span>
      <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 text-sm font-medium whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFloat;
