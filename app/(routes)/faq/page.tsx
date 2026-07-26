import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SectionLabel, Stamp } from "@/components/Stamp";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Reseller Bus",
  description: "Frequently asked questions about buying wholesale stock from Reseller Bus.",
};

export default function FaqPage() {
  return (
    <main className={`${fontVariables} min-h-screen bg-[#F6F2EA]`}>
      <div className="mx-auto max-w-3xl px-6 py-20">
        <header className="mb-12 text-center">
          <SectionLabel>Before You Order</SectionLabel>
          <h1 className="mt-4 font-[family-name:var(--font-oswald)] text-4xl uppercase tracking-tight text-[#1C2127] sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </header>

        <FaqAccordion />

        {/* Notice */}
        <div className="mt-16 flex flex-col items-center gap-4 border-2 border-dashed border-[#B54A32]/50 bg-white/50 px-6 py-8 text-center">
          <Stamp>Read Before You Buy</Stamp>
          <p className="max-w-md font-[family-name:var(--font-inter)] text-[14px] leading-relaxed text-[#3C382F]">
            Please read our{" "}
            <a
              href="/policies/terms-of-service"
              className="font-medium text-[#1C2127] underline decoration-[#D9A441] decoration-2 underline-offset-4 hover:text-[#B54A32]"
            >
              Terms and Conditions
            </a>{" "}
            before placing an order. By purchasing from Reseller Bus, you acknowledge and accept
            them.
          </p>
        </div>
      </div>
    </main>
  );
}
