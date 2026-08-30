"use client";

import React from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <span>Validated in Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Trusted by Builders &amp; Institutions
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-normal">
            Real feedback from early engineers, growth practitioners, and placement officers across India.
          </p>
        </div>

        {/* 3 Clean Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-[#FAFAF9] border border-stone-200/80 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-6 text-left"
            >
              <div className="space-y-4">
                {/* Quote Icon & Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white text-stone-600 border border-stone-200">
                    {t.product}
                  </span>
                  <Quote className="size-5 text-accent-400 opacity-60" />
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info with Circular Avatar Initials */}
              <div className="pt-4 border-t border-stone-200/60 flex items-center gap-3">
                <div className="size-10 rounded-full bg-accent-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                  {t.initials}
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium leading-snug">
                    {t.role} · <span className="text-stone-700 font-semibold">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Footnote */}
        <div className="text-center">
          <p className="text-xs text-stone-400 font-normal">
            Feedback from early pilot users and testers during product development.
          </p>
        </div>

      </div>
    </section>
  );
}
