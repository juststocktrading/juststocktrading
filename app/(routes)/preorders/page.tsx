import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-Order Information | Reseller Bus",
  description: "How pre-orders work at Reseller Bus.",
};

const points = [
  "You can pay for orders before stocks arrive.",
  "The supply of stocks rise and fall due to seasonal movement of the market.",
  "You can join our waiting list for high demand stocks, to ensure you are never left out from premium supplies.",
  "Pre-orders can be done by making full payment for stocks listed as pre-orders.",
  "We try our best to deliver orders within the discussed time frame, however delays could happen due to events beyond our jurisdiction.",
  "By pre-ordering, you agree and confirm that delivery dates are subject to change.",
  "We try to notify affected customers as soon as we can if any significant delay is expected.",
  "By pre-ordering, you accept these terms.",
];

export default function PreOrdersPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10 text-center">
        <h1 className="font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl">
          Pre-Order Information
        </h1>
      </header>

      <ul className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 border-t border-neutral-200 pt-8 text-center">
        <p className="text-[15px] text-neutral-700">We truly appreciate your business.</p>
        <p className="mt-2 font-serif italic text-neutral-900">— Helping Resellers Thrive. —</p>
      </div>
    </main>
  );
}
