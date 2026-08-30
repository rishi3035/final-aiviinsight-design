"use client";

import React from "react";
import { ShieldCheck, Cpu, Sparkles, Layers } from "lucide-react";
import { TRUST_BADGES, TECH_STACK } from "@/lib/data";

export function TrustStrip() {
  return (
    <section className="py-10 border-y border-stone-200/80 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Trust Badges in Flat Grayscale Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-center">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center sm:justify-start gap-3 p-2 rounded-xl text-stone-600 hover:text-stone-900 transition-colors group"
            >
              <div className="size-8 rounded-full bg-stone-200/70 group-hover:bg-orange-100 flex items-center justify-center text-stone-600 group-hover:text-accent-600 shrink-0 transition-colors">
                {badge.icon === "ShieldCheck" && <ShieldCheck className="size-4" />}
                {badge.icon === "Cpu" && <Cpu className="size-4" />}
                {badge.icon === "Sparkles" && <Sparkles className="size-4" />}
                {badge.icon === "Layers" && <Layers className="size-4" />}
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold text-stone-800 leading-tight">
                  {badge.title}
                </div>
                <div className="text-[11px] text-stone-500 font-normal truncate">
                  {badge.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small "Built on" Tech-stack Line */}
        <div className="pt-4 border-t border-stone-200/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-stone-500 font-medium">
          <span className="text-stone-400 font-semibold uppercase tracking-wider text-[10px]">
            Built with production infrastructure:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-stone-600 font-mono">
            {TECH_STACK.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                <span>{tech}</span>
                {i < TECH_STACK.length - 1 && <span className="text-stone-300">•</span>}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
