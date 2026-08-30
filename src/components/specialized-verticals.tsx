"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Scale, Activity, CheckCircle, MapPin, Sparkles } from "lucide-react";
import { SPECIALIZED_VERTICALS } from "@/lib/data";

export function SpecializedVerticals() {
  return (
    <section id="verticals" className="py-20 bg-stone-100/50 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="size-3 text-amber-600" />
            <span>Specialized High-Impact Verticals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Purpose-Built AI for Law &amp; Healthcare
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-normal">
            Specialized vertical AI suites engineered for high-compliance sectors with local Indian workflows.
          </p>
        </motion.div>

        {/* 2-Card Pilot Row with Refined Styling (Dashed Accent & Pilot Tags) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIALIZED_VERTICALS.map((vertical, idx) => (
            <motion.div
              key={vertical.id}
              id={vertical.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-3xl bg-white border-2 border-dashed border-stone-300 hover:border-accent-400 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6 group"
            >
              {/* Top Badges & Icon */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-11 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700">
                    {vertical.id === "nyaya-draft" ? (
                      <Scale className="size-5" />
                    ) : (
                      <Activity className="size-5" />
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                    {vertical.badge}
                  </span>
                </div>

                <div className="space-y-1.5 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-accent-600 transition-colors">
                    {vertical.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-stone-700">
                    {vertical.headline}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-left font-normal">
                  {vertical.description}
                </p>

                {/* Feature List */}
                <div className="space-y-2 pt-2 text-left">
                  {vertical.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle className="size-3.5 text-accent-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Pilot Location & CTA */}
              <div className="pt-4 border-t border-stone-100 space-y-4 text-left">
                {vertical.locationNote && (
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                    <MapPin className="size-3.5 text-accent-500 shrink-0" />
                    <span>{vertical.locationNote}</span>
                  </div>
                )}

                <Link
                  href={vertical.route}
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-stone-50 hover:bg-orange-50/80 border border-stone-200/80 group-hover:border-accent-200 text-xs font-semibold text-stone-900 group-hover:text-accent-700 transition-all"
                >
                  <span>Explore {vertical.name} Documentation &amp; Architecture</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
