"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Globe, ShieldCheck, Cpu } from "lucide-react";
import { WHY_AIVI_ITEMS } from "@/lib/data";

export function WhyAivi() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Rocket":
        return <Rocket className="size-5" />;
      case "Globe":
        return <Globe className="size-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="size-5" />;
      case "Cpu":
        return <Cpu className="size-5" />;
      default:
        return <Rocket className="size-5" />;
    }
  };

  return (
    <section id="why-aivi" className="py-20 sm:py-28 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-accent-700 text-xs font-semibold uppercase tracking-wider">
            <span>The AIVI Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Why We Build Differently
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-normal">
            A disciplined engineering methodology that values working production software over speculative promises.
          </p>
        </motion.div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_AIVI_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all space-y-4 text-left group"
            >
              <div className="size-11 rounded-2xl bg-orange-50 group-hover:bg-accent-500 border border-orange-200/60 group-hover:border-accent-500 flex items-center justify-center text-accent-600 group-hover:text-white transition-colors duration-300">
                {getIcon(item.icon)}
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
