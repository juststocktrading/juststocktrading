import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SectionLabel } from "@/components/Stamp";

export const metadata: Metadata = {
  title: "Pre-Order Information | Reseller Bus",
  description: "How pre-orders work at Reseller Bus.",
};

const terms = [
  "You can pay for orders before stock arrives.",
  "Stock supply rises and falls with the seasonal movement of the market.",
  "You can join our waiting list for high-demand stock, so you're never left out of premium supplies.",
  "Pre-orders are made by paying in full for stock listed as pre-order.",
  "We do our best to deliver within the discussed time frame, though delays can happen due to events beyond our jurisdiction.",
  "By pre-ordering, you agree that delivery dates are subject to change.",
  "We notify affected customers as soon as possible if a significant delay is expected.",
  "By pre-ordering, you accept these terms.",
];

export default function PreOrdersPage() {
  return (
    <main className={`${fontVariables} min-h-screen bg-[#F6F2EA]`}>
      <div className="mx-auto max-w-3xl px-6 py-20">
        <header className="mb-10 text-center">
          <SectionLabel>Shipping Docket</SectionLabel>
          <h1 className="mt-4 font-[family-name:var(--font-oswald)] text-4xl uppercase tracking-tight text-[#1C2127] sm:text-5xl">
            Pre-Order Information
          </h1>
        </header>

        {/* Waybill card */}
        <div className="border-2 border-[#1C2127] bg-white/60">
          {/* Waybill header strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#1C2127] bg-[#D9A441] px-6 py-3">
            <span className="font-[family-name:var(--font-oswald)] text-sm uppercase tracking-[0.2em] text-[#1C2127]">
              Pre-Order Terms
            </span>
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#1C2127]/70">
              Ref: RB-PREORDER
            </span>
          </div>

          <ul className="divide-y divide-dashed divide-[#D8D2C4]">
            {terms.map((term, index) => (
              <li key={term} className="flex gap-5 px-6 py-4">
                <span className="mt-0.5 shrink-0 font-[family-name:var(--font-mono)] text-sm text-[#B54A32]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[15px] leading-relaxed text-[#3C382F]">
                  {term}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Signature line */}
        <div className="mt-14 text-center">
          <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#5B5648]">
            We truly appreciate your business.
          </p>
          <p className="mt-3 font-[family-name:var(--font-oswald)] text-2xl italic tracking-wide text-[#1C2127]">
            Helping Resellers Thrive.
          </p>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#D9A441]" />
        </div>
      </div>
    </main>
  );
}
