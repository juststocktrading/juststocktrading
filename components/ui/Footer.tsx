import { Instagram, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Search", href: "/search" },
  { label: "FAQ", href: "/faq" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Refunds and Returns Policy", href: "/refund-policy" },
  { label: "Terms & Conditions", href: "/terms-of-service" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Pre-Orders", href: "/preorders" },
];

const paymentMethods = [
  { name: "Amex", bg: "#1F72CD", text: "AMEX" },
  { name: "Apple Pay", bg: "#000000", text: "Pay" },
  { name: "Diners Club", bg: "#FFFFFF", text: "Diners", border: true },
  { name: "Discover", bg: "#FFFFFF", text: "DISCOVER", border: true },
  { name: "Google Pay", bg: "#FFFFFF", text: "G Pay", border: true },
  { name: "Klarna", bg: "#FFB3C7", text: "Klarna" },
  { name: "Maestro", bg: "#FFFFFF", text: "maestro", border: true },
  { name: "Mastercard", bg: "#FFFFFF", text: "mastercard", border: true },
  { name: "Shop Pay", bg: "#5A31F4", text: "shop" },
  { name: "Union Pay", bg: "#FFFFFF", text: "UnionPay", border: true },
  { name: "Visa", bg: "#1A1F71", text: "VISA" },
];

// TikTok isn't in lucide-react, so it's defined as an inline icon.
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82c-.9-.83-1.45-2-1.6-3.32h-3.13v13.44a2.6 2.6 0 1 1-1.83-2.48V10.4a5.83 5.83 0 1 0 5 5.77V9.2a7.15 7.15 0 0 0 4.16 1.33V7.4a4.85 4.85 0 0 1-2.6-1.58z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white text-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Quick links */}
        <nav aria-label="Quick links" className="text-center">
          <h2 className="font-serif text-sm tracking-[0.15em] uppercase mb-6">
            Quick Links
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] text-neutral-700">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-neutral-950 hover:underline underline-offset-4 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter + socials */}
        <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-serif text-xl mb-4">Subscribe to our emails</h3>
            <form className="flex w-full max-w-sm items-stretch border border-neutral-400">
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email"
                required
                className="w-full bg-transparent px-4 py-2.5 text-[15px] placeholder:text-neutral-500 outline-none"
              />
              <button
                type="button"
                aria-label="Email options"
                className="flex items-center justify-center border-l border-neutral-300 bg-neutral-100 px-3 text-neutral-500 hover:bg-neutral-200"
              >
                <span className="text-lg leading-none tracking-tighter">•••</span>
              </button>
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center px-4 text-neutral-800 hover:text-neutral-950"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://shop.app"
              className="flex items-center gap-2 rounded-md bg-[#5A31F4] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#4c28d4] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 21s-6.7-4.35-9.3-8.36C.9 9.7 1.7 6.4 4.6 5.2c2-.83 4 .02 5 1.5 1-1.48 3-2.33 5-1.5 2.9 1.2 3.7 4.5 1.9 7.44C18.7 16.65 12 21 12 21z" />
              </svg>
              Follow on Shop
            </a>
            <a
              href="https://instagram.com/@resellerbus"
              aria-label="Instagram"
              className="text-neutral-800 hover:text-neutral-950"
            >
              <Instagram size={20} strokeWidth={1.75} />
            </a>
            <a href="https://tiktok.com/@resellerbus" aria-label="TikTok" className="text-neutral-800 hover:text-neutral-950">
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method.name}
                title={method.name}
                style={{ backgroundColor: method.bg }}
                className={`flex h-6 w-10 items-center justify-center rounded text-[9px] font-semibold ${
                  method.border ? "border border-neutral-300" : ""
                }`}
              >
                <span
                  className="truncate px-0.5"
                  style={{ color: method.bg === "#FFFFFF" ? "#333" : "#FFF" }}
                >
                  {method.text}
                </span>
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center text-[13px] text-neutral-500">
            <span>© {new Date().getFullYear()}, Just Stock Trading Powered by QWik Multi Services</span>
            <span>·</span>
            <a href="/policies/privacy-policy" className="hover:text-neutral-800 hover:underline underline-offset-4">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}