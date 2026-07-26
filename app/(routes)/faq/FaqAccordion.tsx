"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type QA = {
  question: string;
  answer: React.ReactNode;
};

const faqs: QA[] = [
  {
    question: "How do you sell?",
    answer: <p>We sell our New With Tags clothing in 50kg bags.</p>,
  },
  {
    question: "How much is your bale?",
    answer: (
      <>
        <p>Our bales are 50 kg in size.</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Kiddies — £600</li>
          <li>Women Mix — £500</li>
          <li>Men Mix — £750</li>
          <li>General Mix — £590</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the cost of shipping within the UK?",
    answer: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Standard Shipping — £20 (2-5 business days)</li>
        <li>Express Shipping — £50 (1-2 business days)</li>
      </ul>
    ),
  },
  {
    question: "What is the cost of shipping to Europe?",
    answer: <p>All Europe shipping is calculated on a pro-rata basis.</p>,
  },
  {
    question: "What is the cost of shipping to Africa?",
    answer: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Ghana — £50</li>
        <li>Nigeria — £60</li>
        <li>Gambia — £80</li>
      </ul>
    ),
  },
  {
    question: "Do you accept credit cards?",
    answer: <p>Yes, you can buy using credit cards on our website.</p>,
  },
  {
    question: "Do you do payment on delivery?",
    answer: <p>No, payment validates the order.</p>,
  },
  {
    question: "What brands are in your bales?",
    answer: (
      <p>
        Our bales contain top UK high street brands. You can check out samples on our TikTok
        page.
      </p>
    ),
  },
  {
    question: "Are the items used or new?",
    answer: <p>Our clothing is new with tags (95%).</p>,
  },
  {
    question: "How many items are in your bales?",
    answer: (
      <>
        <p>The item counts on bales may vary because the weight of clothes varies.</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Estimate 160–200+ items for Ladies</li>
          <li>320–380 items for Kids</li>
          <li>150–190 items for Men</li>
        </ul>
      </>
    ),
  },
  {
    question: "Do you accept returns or give refunds?",
    answer: <p>No refunds or returns.</p>,
  },
  {
    question: "Can I pick up?",
    answer: <p>Yes, you can pick up at our office upon appointment.</p>,
  },
  {
    question: "Can I choose specific brands?",
    answer: (
      <p>
        No, we pack our items based on the listed categories and the ratio of the contents may
        vary.
      </p>
    ),
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] font-medium text-neutral-900">{faq.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-neutral-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <div className="pb-5 text-[15px] leading-relaxed text-neutral-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
