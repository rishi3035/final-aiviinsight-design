"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowUpRight,
  Shield,
  Layers,
  Sparkles,
  Bot,
  Activity,
  AlertCircle,
  Globe,
  Languages,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BVISectionProps {
  onOpenDemo?: (category?: string) => void;
}

export function BVISection({ onOpenDemo }: BVISectionProps) {
  const [activeFrequency, setActiveFrequency] = useState("Weekly");

  return (
    <section
      id="bvi"
      className="relative min-h-screen w-full bg-[#05070B] text-white py-16 lg:py-0 px-4 sm:px-8 lg:px-14 overflow-hidden border-t border-white/10 scroll-mt-0 select-text flex flex-col justify-center items-center"
    >
      {/* Background rich radial atmospheric glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#C8102E]/12 rounded-full blur-[160px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[400px] bg-purple-600/8 rounded-full blur-[180px] pointer-events-none -z-0" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10 space-y-6 sm:space-y-8 lg:space-y-10 my-auto">
        
        {/* ── Top Header Row (Matching Reference Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
          <div className="lg:col-span-7 space-y-3.5 text-left">
            {/* Pill Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1427] border border-[#3E2368] text-xs font-sans text-[#B388FF] shadow-xs"
            >
              <Sparkles className="size-3 text-[#C8102E]" />
              <span className="font-semibold text-xs tracking-wide">Bharat Visibility Index™</span>
            </motion.div>

            {/* Dominant Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.08]"
            >
              Core-powered by <br />
              <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                Bharat AI Engine
              </span>
              <span className="text-xs sm:text-sm font-normal text-neutral-400 font-sans ml-3 inline-block align-middle">
                (Hindi, Hinglish &amp; Indic LLMs)
              </span>
            </motion.h2>
          </div>

          {/* Right Subtext Description */}
          <div className="lg:col-span-5 text-left lg:text-right">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed max-w-lg lg:ml-auto"
            >
              Protecting and anchoring your brand authority across 70%+ of Indian conversational search queries on ChatGPT, Claude, and Perplexity.
            </motion.p>
          </div>
        </div>

        {/* ── 5-Card Bento Grid Layout (Fills Viewport Beautifully) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* ════ CARD 1: Large Featured Card with Sparkline Curve (Span 7 cols) ════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 rounded-3xl bg-[#0E121B] border border-white/10 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between space-y-6 relative overflow-hidden transition-all shadow-2xl group"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Left Column Inside Card 1 */}
              <div className="sm:col-span-6 space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#FFB300] font-sans text-xs font-bold">
                    <Zap className="size-4 fill-current" />
                    <span>3.4x Faster than English SEO</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
                    className="size-8 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer group-hover:scale-105"
                  >
                    <ArrowUpRight className="size-4.5" />
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-jakarta text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    &ldquo;Kaunsa SaaS tool best hai billing ke liye?&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    Captures high-intent Hinglish searches that traditional US keyword crawlers completely miss.
                  </p>
                </div>

                <div className="text-xs text-neutral-400 font-sans">
                  Anchors verified schema across Indian regional queries.
                </div>
              </div>

              {/* Right Column Inside Card 1 (System Scan Wave Curve Visual) */}
              <div className="sm:col-span-6 rounded-2xl bg-[#07090F] border border-white/10 p-5 space-y-3 text-left shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans text-neutral-400">System scan</span>
                  <div className="flex items-center gap-1.5 text-xs font-sans text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    <span>Weekly</span>
                    <ChevronDown className="size-3 text-neutral-500" />
                  </div>
                </div>

                {/* Big Score */}
                <div className="space-y-0.5">
                  <div className="text-3xl sm:text-4xl font-extrabold font-jakarta text-white">
                    94.8 <span className="text-sm font-normal text-neutral-400">/100</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-400">
                    Sovereign BVI Authority • Zero Hallucinations
                  </div>
                </div>

                {/* SVG Curve Wave with Peak Pinpoint */}
                <div className="relative pt-3 h-20 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" fill="none">
                    <defs>
                      <linearGradient id="bviGradFull" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C8102E" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#C8102E" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Gradient Fill */}
                    <path
                      d="M0 45 C 30 48, 60 50, 90 35 C 120 20, 135 5, 150 10 C 165 15, 180 30, 200 25 L 200 60 L 0 60 Z"
                      fill="url(#bviGradFull)"
                    />
                    {/* Stroke Curve */}
                    <path
                      d="M0 45 C 30 48, 60 50, 90 35 C 120 20, 135 5, 150 10 C 165 15, 180 30, 200 25"
                      stroke="#C8102E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Peak Dot & Guides */}
                    <line x1="145" y1="0" x2="145" y2="60" stroke="#C8102E" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.4" />
                    <circle cx="145" cy="9" r="5" fill="#C8102E" className="animate-pulse" />
                    <circle cx="145" cy="9" r="2.2" fill="#FFFFFF" />
                  </svg>
                </div>

                {/* Days of week footer */}
                <div className="flex justify-between text-[10px] font-mono text-neutral-500 pt-1">
                  <span>sun</span>
                  <span>mon</span>
                  <span>tue</span>
                  <span>wed</span>
                  <span className="text-white font-bold bg-[#C8102E] px-1.5 py-0.2 rounded-xs">thu</span>
                  <span>fri</span>
                  <span>sat</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ════ CARD 2: Indic LLM Grounding Pipeline (Span 5 cols) ════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-5 rounded-3xl bg-[#0E121B] border border-white/10 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between space-y-5 text-left transition-all shadow-2xl group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#B388FF] font-sans text-xs sm:text-sm font-bold">
                <Languages className="size-4.5" />
                <span>Indic LLM Grounding Pipeline</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
                className="size-8 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer group-hover:scale-105"
              >
                <ArrowUpRight className="size-4.5" />
              </button>
            </div>

            <div className="space-y-2.5">
              <h3 className="font-jakarta text-lg sm:text-xl font-bold text-white tracking-tight">
                Devanagari, Hinglish &amp; Vernacular Context
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                Direct entity anchoring across ChatGPT-4o, Claude 3.7, Perplexity Pro, and Sarvam Indic LLMs to prevent English competitor fallback.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-[#07090F] border border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300">
              <span className="flex items-center gap-2 text-rose-300">
                <CheckCircle2 className="size-4 text-[#C8102E]" />
                <span>llms.txt Indic Schema</span>
              </span>
              <span className="text-emerald-400 font-bold">Active &amp; Grounded</span>
            </div>
          </motion.div>

          {/* ════ CARD 3: Protection+ (Span 3 cols) ════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="md:col-span-1 lg:col-span-3 rounded-3xl bg-[#0E121B] border border-white/10 hover:border-white/20 p-5 sm:p-6 flex flex-col justify-between space-y-4 text-left transition-all shadow-xl group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-sans text-xs sm:text-sm font-bold">
                <Shield className="size-4 text-[#C8102E]" />
                <span>Protection+</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
                className="size-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer group-hover:scale-105"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              Zero competitor displacement on regional and vernacular consumer prompts.
            </p>

            <div className="text-xs font-mono text-rose-400 font-semibold pt-1">
              100% Sovereign Coverage
            </div>
          </motion.div>

          {/* ════ CARD 4: Multi-layers (Span 3 cols) ════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="md:col-span-1 lg:col-span-3 rounded-3xl bg-[#0E121B] border border-white/10 hover:border-white/20 p-5 sm:p-6 flex flex-col justify-between space-y-4 text-left transition-all shadow-xl group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-sans text-xs sm:text-sm font-bold">
                <Layers className="size-4 text-blue-400" />
                <span>Multi-layers</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
                className="size-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer group-hover:scale-105"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              Hindi, Hinglish, Tamil &amp; Telugu multi-tier semantic entity recognition.
            </p>

            <div className="text-xs font-mono text-blue-400 font-semibold pt-1">
              4 Regional Dialect Tiers
            </div>
          </motion.div>

          {/* ════ CARD 5: Auto-fix system / Matrix Block (Span 3 cols) ════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-3 rounded-3xl bg-[#0E121B] border border-white/10 hover:border-white/20 p-5 sm:p-6 flex flex-col justify-between space-y-4 text-left transition-all shadow-xl group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 font-sans text-xs sm:text-sm font-bold">
                <Activity className="size-4" />
                <span>Auto-fix system</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
                className="size-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer group-hover:scale-105"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-neutral-400">System (Indic Grounding)</span>
                <span className="text-emerald-400 font-bold">87.5%</span>
              </div>

              {/* Glowing Matrix Grid Blocks */}
              <div className="grid grid-cols-8 gap-1.5 pt-1">
                {Array.from({ length: 24 }).map((_, i) => {
                  const isBright = [1, 2, 4, 7, 8, 10, 13, 14, 15, 18, 20, 21, 22].includes(i);
                  const isMedium = [0, 3, 6, 9, 12, 17, 23].includes(i);
                  return (
                    <div
                      key={i}
                      className={cn(
                        "h-3 rounded-xs transition-all",
                        isBright
                          ? "bg-emerald-400 shadow-xs shadow-emerald-400/60"
                          : isMedium
                          ? "bg-emerald-800/70"
                          : "bg-[#141B26]"
                      )}
                    />
                  );
                })}
              </div>
            </div>

            <div className="text-[11px] text-neutral-500 font-mono">
              Auto-generates 1-click Cursor schema prompts
            </div>
          </motion.div>

          {/* ════ CARD 6: Detections / Spectrum Bars (Span 3 cols) ════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="md:col-span-1 lg:col-span-3 rounded-3xl bg-[#0E121B] border border-white/10 hover:border-white/20 p-5 sm:p-6 flex flex-col justify-between space-y-4 text-left transition-all shadow-xl group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-400 font-sans text-xs sm:text-sm font-bold">
                <AlertCircle className="size-4" />
                <span>Detections</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
                className="size-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer group-hover:scale-105"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-neutral-400">Issues (16 items)</span>
                <span className="text-[#C8102E] font-bold">12.5%</span>
              </div>

              {/* Vertical Spectrum Audio Bars */}
              <div className="flex items-end gap-1 pt-1 h-6">
                {Array.from({ length: 20 }).map((_, i) => {
                  const isAlert = i < 8;
                  const heights = [70, 90, 80, 100, 60, 85, 95, 75, 40, 50, 45, 60, 35, 55, 40, 50, 45, 30, 40, 35];
                  return (
                    <div
                      key={i}
                      style={{ height: `${heights[i]}%` }}
                      className={cn(
                        "w-full rounded-xs transition-all",
                        isAlert
                          ? "bg-[#C8102E] shadow-xs shadow-red-950/50"
                          : "bg-neutral-700/50"
                      )}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono">
              <span>24 mins ago</span>
              <span className="size-2 rounded-full bg-[#C8102E] animate-pulse" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default BVISection;
