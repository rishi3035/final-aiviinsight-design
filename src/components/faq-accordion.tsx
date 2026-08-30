"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/data";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="size-3.5 text-accent-500" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Answers to Common Queries
          </h2>
          <p className="text-base text-stone-600 font-normal max-w-xl mx-auto">
            Everything you need to know about our platforms, technology stack, pilots, and company compliance.
          </p>
        </div>

        {/* Clean Accordion (One Open at a Time) */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-stone-200/80 bg-[#FAFAF9] overflow-hidden transition-all duration-200 shadow-2xs hover:border-stone-300"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 select-none focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-stone-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`size-7 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent-600 border-accent-200 bg-orange-50" : ""
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed text-left border-t border-stone-100 bg-white/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
