import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Reseller Bus",
  description: "Terms and conditions for purchasing wholesale stock from Reseller Bus.",
};

const sections = [
  {
    title: "Products",
    body: (
      <>
        <p>For resellers, we offer new clothes with tags and wholesale cream-grade garments.</p>
        <p>By making a purchase from us, you understand and agree that:</p>
        <ul>
          <li>Unless otherwise noted, the majority of the items are either cream grade or brand-new with tags.</li>
          <li>There may be differences in brands, styles, sizes, colours, quality, and number.</li>
          <li>Certain brands, products, sizes, colours, or quantities cannot be guaranteed.</li>
          <li>For illustration purposes, sample photos and videos are included.</li>
          <li>Resale value, demand, and profitability may differ depending on the selling platform and the client.</li>
          <li>One of the main features of wholesale apparel is variations in the stock's contents.</li>
        </ul>
        <p>
          We do not open, examine, count, sort, grade, quality-check, or confirm the contents of sealed mixed
          sacks before shipping, unless specifically indicated differently.
        </p>
        <p>
          The existence, amount, condition, or resale value of any specific brand, style, size, color, or item
          type within a sack are not guaranteed.
        </p>
        <p>
          By placing a purchase, you attest to your comprehension of the nature of wholesale mixed-stock apparel
          and your acceptance of its inherent variability.
        </p>
      </>
    ),
  },
  {
    title: "Purchases for Businesses",
    body: (
      <>
        <p>Reseller Bus only sells goods that are meant to be used for business and resale.</p>
        <p>Customers attest that they are buying stock for trade, business, or resale when they place an order.</p>
      </>
    ),
  },
  {
    title: "Orders",
    body: (
      <ul>
        <li>Every order is based on availability.</li>
        <li>We hold the right to not accept or cancel orders as deemed necessary.</li>
        <li>The customer is responsible for the accuracy of every information submitted during purchase.</li>
      </ul>
    ),
  },
  {
    title: "Pricing & Payment",
    body: (
      <ul>
        <li>All our products are priced in GBP (£).</li>
        <li>Full payment is expected before stocks are shipped or picked up.</li>
        <li>We have the right to change prices as deemed fit.</li>
      </ul>
    ),
  },
  {
    title: "Shipping",
    body: (
      <>
        <p>
          Shipping information and delivery estimates can be found on our{" "}
          <a href="/pages/faq" className="underline underline-offset-4 hover:text-neutral-950">
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
    title: "Returns & Refunds",
    body: <p>Please note, we do not accept returns or issue refunds.</p>,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12 text-center">
        <h1 className="font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
          Your usage of this website and your purchases from Reseller Bus are governed by these
          terms and conditions. You accept our terms and conditions by placing an order.
        </p>
      </header>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-serif text-xl text-neutral-900 mb-3 border-b border-neutral-200 pb-2">
              {section.title}
            </h2>
            <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
