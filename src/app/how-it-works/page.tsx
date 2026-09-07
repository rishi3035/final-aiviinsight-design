"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ResearchBentoGrid } from "@/components/ui/research-bento-grid";

export default function HowItWorksPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedDemoCategory, setSelectedDemoCategory] = useState("Architecture Walkthrough");

  const handleOpenDemo = (category = "Architecture Walkthrough") => {
    setSelectedDemoCategory(category);
    setIsDemoOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col w-full bg-[#05080A] text-white selection:bg-[#C8102E] selection:text-white">
        {/* Floating Pill Navbar */}
        <Navbar onOpenDemo={() => handleOpenDemo()} />

        <main className="flex-1 flex flex-col w-full pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1360px] mx-auto w-full space-y-16 sm:space-y-24">
            
            {/* ── 1. Page Header ── */}
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A0E14] border border-[#4A1624] text-xs font-sans text-rose-300 shadow-xs"
              >
                <Sparkles className="size-3.5 text-[#C8102E]" />
                <span className="font-semibold tracking-wide">Enterprise Workflow &amp; Execution Pipeline</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="font-jakarta text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.08]"
              >
                How AIVI Transforms Your <br />
                <span className="bg-gradient-to-r from-white via-neutral-200 to-[#C8102E] bg-clip-text text-transparent">
                  Generative AI Search Footprint.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-sans text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal"
              >
                From neural query ingestion to deterministic IDE remediation — explore the end-to-end architecture powering authoritative brand citations across ChatGPT, Perplexity, Claude, and Gemini.
              </motion.p>
            </div>

            {/* ── 2. Primary Showcase Section: Multi-Model Research Bento Grid ── */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="w-full"
            >
              <div className="w-full rounded-[28px] border border-white/10 bg-[#080B12]/90 p-2 sm:p-4 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="w-full">
                  <ResearchBentoGrid
                    monthlyPrice={1990}
                    previousPrice={32000}
                    currency="USD"
                    defaultSelectedBrand={0}
                    autoPlay={true}
                    brandRotationInterval={5500}
                    spotlightInterval={6500}
                    onPausedChange={(paused) => console.log({ paused })}
                    onSelectedBrandChange={(index) => console.log({ index })}
                  />
                </div>
              </div>
            </motion.section>

            {/* ── 3. The 4-Step Pipeline Architecture ── */}
            <div className="space-y-8 pt-4">
              <div className="max-w-2xl mx-auto text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold font-jakarta text-white tracking-tight">
                  Deterministic 4-Step Deployment Workflow
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans">
                  From initial onboarding to 100% sovereign recommendation dominance in days, not quarters.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
                {[
                  {
                    step: "01",
                    title: "Domain & Vector Ingestion",
                    desc: "AIVI parses your public domains, technical documentation, and regional product catalog into structured vector embeddings.",
                  },
                  {
                    step: "02",
                    title: "Multi-Model Consensus Probing",
                    desc: "Autonomous probes evaluate 10,000+ daily prompt variations across ChatGPT, Claude, Perplexity, and Gemini.",
                  },
                  {
                    step: "03",
                    title: "Displacement & Hallucination Diff",
                    desc: "Identifies competitor displacement, missing citation anchors, and outdated pricing across English and Hinglish queries.",
                  },
                  {
                    step: "04",
                    title: "1-Click IDE Remediation",
                    desc: "Outputs deterministic AST prompts for Cursor IDE to publish valid llms.txt directives and JSON-LD schema immediately.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-6 rounded-3xl bg-[#0E121B] border border-white/10 hover:border-white/20 transition-all space-y-3 shadow-xl flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="font-mono text-2xl font-extrabold text-[#C8102E]">
                        {item.step}
                      </div>
                      <h4 className="font-jakarta text-base font-bold text-white tracking-tight">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <Check className="size-3.5" />
                      <span>Verified Stage</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── 4. Bottom Enterprise Call to Action Banner ── */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A0E14] via-[#0E121B] to-[#1A0E14] border border-[#C8102E]/30 flex flex-col lg:flex-row items-center justify-between gap-8 text-left shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-2 relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase">
                  <Sparkles className="size-3.5" />
                  <span>Live Architecture Walkthrough</span>
                </div>
                <h3 className="font-jakarta text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  See how AIVI operates on your live domain in real-time.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Schedule a private walkthrough with our enterprise AI search architects or launch a free multi-model citation audit today.
                </p>
              </div>

              <div className="flex items-center gap-3 relative z-10 w-full lg:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() => handleOpenDemo("Architecture Walkthrough")}
                  className="w-full lg:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white font-sans font-bold text-sm sm:text-base shadow-xl shadow-red-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Schedule Architecture Review</span>
                  <ArrowRight className="size-4.5" />
                </button>
              </div>
            </div>

          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Demo Modal */}
        <DemoModal
          isOpen={isDemoOpen}
          onClose={() => setIsDemoOpen(false)}
          initialCategory={selectedDemoCategory}
        />
      </div>
    </SmoothScroll>
  );
}
