"use client";

import React, { useState } from "react";
import { Archive, ChevronDown, ChevronUp, Layers, ExternalLink, ArrowRight } from "lucide-react";
import { ARCHIVE_PRODUCTS } from "@/lib/data";

export function SecondaryProducts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 bg-stone-100/60 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Collapsible Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600">
              <Archive className="size-4" />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-stone-900">
                Additional Ecosystem Utilities &amp; Product Archives
              </h3>
              <p className="text-xs text-stone-500">
                Specialized enterprise tools, free developer utilities, and tailored client solutions.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200/70 text-xs font-semibold text-stone-700 transition-colors self-start sm:self-auto"
          >
            <span>{isOpen ? "Hide Products" : "View Secondary Products (4)"}</span>
            {isOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
          </button>
        </div>

        {/* Expandable Grid */}
        {isOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 animate-fade-in">
            {ARCHIVE_PRODUCTS.map((prod) => (
              <div
                key={prod.name}
                className="p-4 rounded-2xl bg-white border border-stone-200/70 shadow-2xs space-y-2 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-900">{prod.name}</span>
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-medium bg-stone-100 text-stone-600">
                    {prod.badge}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  {prod.description}
                </p>
                <div className="text-[10px] font-mono text-accent-600 pt-1 font-semibold">
                  {prod.type}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
