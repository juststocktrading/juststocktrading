import type { Metadata } from "next";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Reseller Bus",
  description: "Frequently asked questions about buying wholesale stock from Reseller Bus.",
};

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10 text-center">
        <h1 className="font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl">FAQ</h1>
        <p className="mt-3 text-[15px] text-neutral-600">Frequently Asked Questions.</p>
      </header>

      <FaqAccordion />

      <div className="mt-10 rounded-md border border-neutral-200 bg-neutral-50 p-5 text-center text-[14px] leading-relaxed text-neutral-700">
        <p>
          <strong className="text-neutral-900">Important:</strong> Please read our{" "}
          <a
            href="/policies/terms-of-service"
            className="underline underline-offset-4 hover:text-neutral-950"
          >
            Terms and Conditions
          </a>{" "}
          before placing an order.
        </p>
        <p className="mt-1">
          By purchasing from Reseller Bus, you acknowledge and accept our terms and conditions.
        </p>
      </div>
    </main>
  );
}
