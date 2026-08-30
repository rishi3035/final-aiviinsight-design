"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
  Globe,
  Bot,
  Layers,
  Activity,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface FinalAuditSectionProps {
  onOpenDemo?: (category?: string) => void;
}

export function FinalAuditSection({ onOpenDemo }: FinalAuditSectionProps) {
  const [domainInput, setDomainInput] = useState("https://yourbrand.com");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;

    setIsScanning(true);
    setScanProgress(0);
    setScanComplete(false);

    // Simulate real-time diagnostic scan
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanComplete(true);
          setTimeout(() => {
            onOpenDemo?.("Audit Live AI Search Citation");
          }, 800);
          return 100;
        }
        return prev + 25;
      });
    }, 280);
  };

  const auditFeatures = [
    { title: "Brand mentions", desc: "Track where your brand is synthesized in LLM answers" },
    { title: "AI recommendations", desc: "Identify top-#1 recommended products across engines" },
    { title: "Competitor visibility", desc: "Spot competitors winning citation real estate" },
    { title: "Citation / source presence", desc: "Map training data & live web search citations" },
    { title: "Visibility gaps", desc: "Uncover missing Hindi, Hinglish, and Indic prompts" },
  ];

  return (
    <section
      id="final-audit"
      className="relative w-full bg-[#FAF9F6] text-neutral-900 py-24 sm:py-32 lg:py-36 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-neutral-200 scroll-mt-16"
    >
      {/* Background Subtle Grid Texture matching Pricing section */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 size-full -z-0",
          "bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]",
          "bg-[size:36px_36px]",
          "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        )}
      />

      {/* Floating Animated Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 size-[450px] bg-red-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 size-[450px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 space-y-12">
        {/* ── Section Header ── */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 shadow-xs"
          >
            <span className="size-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-800">
              BEFORE YOU LEAVE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-jakarta text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-neutral-900 leading-[1.12]"
          >
            What is AI saying about <br className="hidden sm:inline" />
            your brand right now?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="font-jakarta text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            Find out where your brand appears, which competitors are winning, and what AI search opportunities you&rsquo;re missing.
          </motion.p>
        </div>

        {/* ── Interactive Audit / Search Interface ── */}
        <div className="relative max-w-3xl mx-auto">
          {/* Subtle animated floating signals around the card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex items-center gap-2 absolute -top-6 -left-16 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 shadow-lg text-xs font-mono font-semibold text-neutral-800 z-20"
          >
            <span className="size-2 rounded-full bg-[#C8102E]" />
            <span>AI Visibility Radar: 94.8%</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex items-center gap-2 absolute -top-4 -right-12 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 shadow-lg text-xs font-mono font-semibold text-neutral-800 z-20"
          >
            <Zap className="size-3.5 text-[#FF7A1A]" />
            <span>Competitor Displacement</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:flex items-center gap-2 absolute -bottom-4 -left-12 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 shadow-lg text-xs font-mono font-semibold text-neutral-800 z-20"
          >
            <Bot className="size-3.5 text-blue-600" />
            <span>ChatGPT &amp; Perplexity Citations</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="hidden lg:flex items-center gap-2 absolute -bottom-5 -right-16 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 shadow-lg text-xs font-mono font-semibold text-neutral-800 z-20"
          >
            <Globe className="size-3.5 text-[#C8102E]" />
            <span>Bharat Visibility Index™</span>
          </motion.div>

          {/* Main Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl bg-white border border-neutral-300/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 sm:p-10 space-y-8"
          >
            {/* Input Form Header */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="domain-search"
                  className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-2"
                >
                  <Search className="size-3.5 text-neutral-400" />
                  <span>ENTER YOUR WEBSITE</span>
                </label>
                <span className="text-[11px] font-mono text-neutral-400">
                  Instant Deep LLM Diagnostic
                </span>
              </div>

              {/* URL Input Bar */}
              <div className="relative flex items-center">
                <input
                  id="domain-search"
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  placeholder="https://yourbrand.com"
                  className="w-full h-14 sm:h-16 pl-5 pr-16 sm:pr-20 rounded-2xl bg-[#F8F9FA] border border-neutral-300 focus:border-[#C8102E] focus:bg-white text-sm sm:text-base font-mono text-neutral-900 placeholder:text-neutral-400 outline-none transition-all shadow-inner"
                />

                <button
                  type="submit"
                  disabled={isScanning}
                  className="absolute right-2 sm:right-2.5 size-10 sm:size-12 rounded-xl bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white flex items-center justify-center shadow-md shadow-[#C8102E]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-75"
                >
                  <ArrowRight className="size-5" />
                </button>
              </div>

              {/* Scanning Progress Bar */}
              <AnimatePresence>
                {isScanning && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 pt-1"
                  >
                    <div className="flex justify-between text-xs font-mono text-neutral-600">
                      <span>Scanning generative search engines...</span>
                      <span>{scanProgress}%</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#C8102E] to-[#FF7A1A]"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <div className="h-px w-full bg-neutral-200" />

            {/* Checklist: "We'll look for" */}
            <div className="space-y-4 text-left">
              <div className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-700">
                We&rsquo;ll look for:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {auditFeatures.map((feat) => (
                  <div
                    key={feat.title}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F9FA] border border-neutral-200/80 transition-colors hover:border-neutral-300"
                  >
                    <CheckCircle2 className="size-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="font-sans text-xs sm:text-sm font-bold text-neutral-900">
                        {feat.title}
                      </div>
                      <div className="font-sans text-[11px] text-neutral-500 leading-tight">
                        {feat.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-neutral-200">
              <button
                type="button"
                onClick={() => onOpenDemo?.("Audit Live AI Search Citation")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white font-sans font-bold text-sm sm:text-base shadow-lg shadow-red-950/15 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Run My Free AI Visibility Audit</span>
                <ArrowRight className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800 font-sans font-semibold text-sm transition-all cursor-pointer"
              >
                Explore AI Visibility Insights
              </button>
            </div>

            {/* Small Supporting Line */}
            <p className="text-center text-xs text-neutral-500 font-sans">
              Get a snapshot of your AI visibility across the searches that matter to your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FinalAuditSection;
