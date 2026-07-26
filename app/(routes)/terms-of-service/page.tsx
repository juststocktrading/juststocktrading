import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SectionLabel, Stamp } from "@/components/Stamp";

export const metadata: Metadata = {
  title: "Terms and Conditions | Reseller Bus",
  description: "Terms and conditions for purchasing wholesale stock from Reseller Bus.",
};

const clauses = [
  {
    num: "01",
    title: "Products",
    body: (
      <>
        <p>For resellers, we offer new clothes with tags and wholesale cream-grade garments.</p>
        <p>By making a purchase from us, you understand and agree that:</p>
        <ul>
          <li>Unless otherwise noted, the majority of items are either cream grade or brand-new with tags.</li>
          <li>There may be differences in brands, styles, sizes, colours, quality, and number.</li>
          <li>Certain brands, products, sizes, colours, or quantities cannot be guaranteed.</li>
          <li>Sample photos and videos are included for illustration purposes only.</li>
          <li>Resale value, demand, and profitability may differ depending on the selling platform and the client.</li>
          <li>Variation in stock contents is a defining feature of wholesale apparel, not a defect.</li>
        </ul>
        <p>
          We do not open, examine, count, sort, grade, quality-check, or confirm the contents of sealed
          mixed sacks before shipping, unless specifically indicated otherwise.
        </p>
        <p>
          The existence, amount, condition, or resale value of any specific brand, style, size, color, or
          item type within a sack is not guaranteed.
        </p>
        <p>
          By placing a purchase, you confirm your understanding of the nature of wholesale mixed-stock
          apparel and accept its inherent variability.
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "Purchases for Businesses",
    body: (
      <>
        <p>Reseller Bus only sells goods intended for business and resale.</p>
        <p>By placing an order, customers attest that they are buying stock for trade, business, or resale.</p>
      </>
    ),
  },
  {
    num: "03",
    title: "Orders",
    body: (
      <ul>
        <li>Every order is subject to availability.</li>
        <li>We reserve the right to decline or cancel orders as deemed necessary.</li>
        <li>The customer is responsible for the accuracy of all information submitted at checkout.</li>
      </ul>
    ),
  },
  {
    num: "04",
    title: "Pricing & Payment",
    body: (
      <ul>
        <li>All products are priced in GBP (£).</li>
        <li>Full payment is required before stock is shipped or picked up.</li>
        <li>We reserve the right to change prices at our discretion.</li>
      </ul>
    ),
  },
  {
    num: "05",
    title: "Shipping",
    body: (
      <>
        <p>
          Shipping information and delivery estimates can be found on our{" "}
          <a
            href="/pages/faq"
            className="text-[#1C2127] underline decoration-[#D9A441] decoration-2 underline-offset-4 hover:text-[#B54A32]"
          >
            FAQ page
          </a>
          .
        </p>
        <p>We are not responsible for delays caused by:</p>
        <ul>
          <li>Delivery companies</li>
          <li>Customs delays</li>
          <li>Errors caused by customers</li>
          <li>Circumstances outside our reasonable control</li>
        </ul>
      </>
    ),
  },
  {
    num: "06",
    title: "Returns & Refunds",
    body: <p>Please note — we do not accept returns or issue refunds.</p>,
    flagged: true,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className={`${fontVariables} min-h-screen bg-[#F6F2EA]`}>
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Header */}
        <header className="mb-16 border-b-2 border-[#1C2127] pb-10 text-center">
          <SectionLabel>Trade Agreement · Reseller Bus</SectionLabel>
          <h1 className="mt-4 font-[family-name:var(--font-oswald)] text-4xl uppercase tracking-tight text-[#1C2127] sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-[family-name:var(--font-inter)] text-[15px] leading-relaxed text-[#5B5648]">
            Your usage of this website and your purchases from Reseller Bus are governed by these
            terms. Placing an order constitutes acceptance.
          </p>
        </header>

        {/* Clauses */}
        <div className="space-y-12">
          {clauses.map((clause) => (
            <section
              key={clause.num}
              className="grid grid-cols-[3.5rem_1fr] gap-x-6 border-b border-dashed border-[#D8D2C4] pb-10 last:border-none sm:grid-cols-[4.5rem_1fr]"
            >
              <span className="font-[family-name:var(--font-mono)] text-2xl font-medium text-[#D9A441] sm:text-3xl">
                {clause.num}
              </span>
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h2 className="font-[family-name:var(--font-oswald)] text-xl uppercase tracking-wide text-[#1C2127] sm:text-2xl">
                    {clause.title}
                  </h2>
                  {clause.flagged && <Stamp>Final · No Returns</Stamp>}
                </div>
                <div className="space-y-3 font-[family-name:var(--font-inter)] text-[15px] leading-relaxed text-[#3C382F] [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                  {clause.body}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}