"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/Stamp";

type QA = {
  code: string;
  question: string;
  answer: React.ReactNode;
};

type Group = {
  label: string;
  items: QA[];
};

const groups: Group[] = [
  {
    label: "Pricing & Ordering",
    items: [
      {
        code: "P1",
        question: "How do you sell?",
        answer: <p>We sell our New With Tags clothing in 50kg bags.</p>,
      },
      {
        code: "P2",
        question: "How much is your bale?",
        answer: (
          <>
            <p>Our bales are 50 kg in size.</p>
            <ul className="mt-2 space-y-1">
              <li>Kiddies — £600</li>
              <li>Women Mix — £500</li>
              <li>Men Mix — £750</li>
              <li>General Mix — £590</li>
            </ul>
          </>
        ),
      },
      {
        code: "P3",
        question: "Do you accept credit cards?",
        answer: <p>Yes, you can buy using credit cards on our website.</p>,
      },
      {
        code: "P4",
        question: "Do you do payment on delivery?",
        answer: <p>No, payment validates the order.</p>,
      },
    ],
  },
  {
    label: "Shipping",
    items: [
      {
        code: "S1",
        question: "What is the cost of shipping within the UK?",
        answer: (
          <ul className="space-y-1">
            <li>Standard Shipping — £20 (2–5 business days)</li>
            <li>Express Shipping — £50 (1–2 business days)</li>
          </ul>
        ),
      },
      {
        code: "S2",
        question: "What is the cost of shipping to Europe?",
        answer: <p>All Europe shipping is calculated on a pro-rata basis.</p>,
      },
      {
        code: "S3",
        question: "What is the cost of shipping to Africa?",
        answer: (
          <ul className="space-y-1">
            <li>Ghana — £50</li>
            <li>Nigeria — £60</li>
            <li>Gambia — £80</li>
          </ul>
        ),
      },
      {
        code: "S4",
        question: "Can I pick up?",
        answer: <p>Yes, you can pick up at our office upon appointment.</p>,
      },
    ],
  },
  {
    label: "Product Info",
    items: [
      {
        code: "I1",
        question: "What brands are in your bales?",
        answer: (
          <p>
            Our bales contain top UK high street brands. You can check out samples on our TikTok
            page.
          </p>
        ),
      },
      {
        code: "I2",
        question: "Are the items used or new?",
        answer: <p>Our clothing is new with tags (95%).</p>,
      },
      {
        code: "I3",
        question: "How many items are in your bales?",
        answer: (
          <>
            <p>Item counts vary because the weight of clothes varies.</p>
            <ul className="mt-2 space-y-1">
              <li>Estimate 160–200+ items for Ladies</li>
              <li>320–380 items for Kids</li>
              <li>150–190 items for Men</li>
            </ul>
          </>
        ),
      },
      {
        code: "I4",
        question: "Can I choose specific brands?",
        answer: (
          <p>
            No, we pack our items based on the listed categories and the ratio of the contents
            may vary.
          </p>
        ),
      },
    ],
  },
  {
    label: "Policies",
    items: [
      {
        code: "R1",
        question: "Do you accept returns or give refunds?",
        answer: <p>No refunds or returns.</p>,
      },
    ],
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<string | null>("P1");

  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.label}>
          <SectionLabel>{group.label}</SectionLabel>
          <div className="mt-3 space-y-3">
            {group.items.map((item) => {
              const isOpen = open === item.code;
              return (
                <div
                  key={item.code}
                  className="relative flex border border-[#D8D2C4] bg-white/70 transition-colors hover:border-[#1C2127]"
                >
                  {/* Ticket stub */}
                  <div className="relative flex w-14 shrink-0 items-center justify-center border-r border-dashed border-[#D8D2C4] bg-[#F6F2EA]">
                    <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#B54A32]">
                      {item.code}
                    </span>
                    {/* punch notches */}
                    <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#F6F2EA] ring-1 ring-[#D8D2C4]" />
                    <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#F6F2EA] ring-1 ring-[#D8D2C4]" />
                  </div>

                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : item.code)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-[family-name:var(--font-inter)] text-[15px] font-medium text-[#1C2127]">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#B54A32] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0">
                        <div className="px-5 pb-5 font-[family-name:var(--font-inter)] text-[14px] leading-relaxed text-[#5B5648] [&_ul]:list-disc [&_ul]:pl-5">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
