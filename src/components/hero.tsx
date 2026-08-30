"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Dynamically import RibbonFieldBackground to ensure smooth client-side WebGL hydration
const RibbonFieldBackground = dynamic(
  () => import("@/shaders/ribbon-field/RibbonFieldBackground").then((mod) => mod.RibbonFieldBackground),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 size-full bg-[#05080A]" />
    ),
  }
);

interface HeroProps {
  onOpenDemo?: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between bg-[#05080A] text-white pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      
      {/* 1. Exact ThreeUI PredictiveArcCanvas (Ribbon Field) Interactive WebGL Shader Background */}
      <RibbonFieldBackground
        speed={2.37}
        pointerAmount={1.30}
        smoothing={0.095}
        hue={105}
        saturation={1.42}
        brightness={1.00}
        opacity={1.00}
      />

      {/* Atmospheric left shadow gradient for pristine typography readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05080A]/90 via-[#05080A]/50 to-transparent pointer-events-none z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080A]/80 via-transparent to-[#05080A]/30 pointer-events-none z-1" />

      {/* 2. Main Display Typography (Left-aligned Luxury Display Sans) */}
      <div className="relative z-10 my-auto pt-6 sm:pt-12 max-w-[1000px] text-left space-y-6">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md"
        >
          <span className="size-2 rounded-full bg-[#C8102E] animate-pulse" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-200">
            Next-Gen Sovereign AI Search Intelligence
          </span>
        </motion.div>

        {/* Dominant Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-jakarta text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-normal tracking-[-0.04em] text-white leading-[1.04] drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
        >
          Engineering the future <br />
          of AI search visibility.
        </motion.h1>
      </div>

      {/* 3. Bottom Row: Narrative Subtext (Left) + Action Pill (Right) */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pt-10">
        
        {/* Left Editorial Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
          className="font-jakarta text-sm sm:text-base md:text-[17px] text-neutral-300 leading-relaxed max-w-[520px] font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          We unravel complex generative AI search across ChatGPT, Perplexity, Claude, and Gemini with sovereign intelligence and citation proof.
        </motion.p>

        {/* Right Discovery Pill Button with Crimson Arrow Circle */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          onClick={onOpenDemo}
          type="button"
          className="group self-start md:self-auto inline-flex items-center gap-3 sm:gap-4 pl-5 sm:pl-6 pr-2 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <span className="font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-white">
            Discover Our Platform
          </span>
          <div className="size-8 sm:size-9 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] text-white flex items-center justify-center transition-all shadow-md group-hover:scale-105">
            <ArrowRight className="size-4 stroke-[2.2]" />
          </div>
        </motion.button>

      </div>

    </section>
  );
}

export default Hero;
