"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  Check,
  RotateCw,
  Search,
  ExternalLink,
  Layers,
  ShieldCheck,
  Globe,
  Radio,
  Zap,
} from "lucide-react";
import { FlipCard } from "@/components/ui/flip-card";
import { cn } from "@/lib/utils";

interface AIAnswerRoomProps {
  onOpenDemo?: (category?: string) => void;
}

export function AIAnswerRoomSection({ onOpenDemo }: AIAnswerRoomProps) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string, isFlipped: boolean) => {
    setFlippedCards((prev) => ({ ...prev, [id]: isFlipped }));
  };

  const cardsData = [
    {
      id: "brand-mentions",
      cardNumber: "01",
      title: "Brand Mentions",
      status: "Your Brand ✓",
      badge: "88% Synthesized",
      frontDesc: "Track direct AI brand synthesis across ChatGPT, Claude & Perplexity evaluation prompts.",
      frontDetail: "Grounded in 109 of 124 evaluated queries with 94.8% brand authority sentiment.",
      backTitle: "Deep Mention Metrics",
      backItems: [
        { label: "Direct AI Synthesis", value: "88% rate" },
        { label: "BVI Sentiment Score", value: "94.8%" },
        { label: "Top Query Trigger", value: "Enterprise GEO" },
      ],
      backNote: "Synthesized alongside 2 tier-one publishers as the primary authoritative platform.",
    },
    {
      id: "ai-recommendations",
      cardNumber: "02",
      title: "AI Recommendations",
      status: "Rank #1 Grounded ✓",
      badge: "Top Recommended",
      frontDesc: "Determine which models pick your platform as the #1 recommended software solution.",
      frontDetail: "Ranked #1 for multilingual GEO, Bharat Visibility Index™, and autonomous llms.txt index.",
      backTitle: "Model Breakdown",
      backItems: [
        { label: "Perplexity Pro", value: "#1 Recommended" },
        { label: "ChatGPT GPT-4o", value: "#1 Recommended" },
        { label: "Claude 3.7", value: "#2 Alternative" },
      ],
      backNote: "Dominant direct domain attribution across Perplexity and OpenAI search crawlers.",
    },
    {
      id: "competitor-visibility",
      cardNumber: "03",
      title: "Competitor Visibility",
      status: "Competitor A & B ✓",
      badge: "Displacement Map",
      frontDesc: "Identify which competitors appear beside you and win secondary prompt variations.",
      frontDetail: "Competitor A leads in Reddit r/SaaS forum queries and legacy software listicles.",
      backTitle: "Gap & Displacement",
      backItems: [
        { label: "Forum Dominance", value: "54% Competitor" },
        { label: "Recapture Potential", value: "+35% Market" },
        { label: "Displacement Rate", value: "12% Total" },
      ],
      backNote: "Deploy autonomous llms.txt & schema blueprints to displace competitors in forum queries.",
    },
    {
      id: "citation-sources",
      cardNumber: "04",
      title: "Citation / Source Presence",
      status: "G2 · TechCrunch · Reddit ✓",
      badge: "3 Tier-1 Sources",
      frontDesc: "Inspect the exact URLs, training datasets, and live web sources that shape the AI output.",
      frontDetail: "Driven by 48% direct domain docs, 32% editorial benchmark, and 20% developer proof.",
      backTitle: "Source Attribution",
      backItems: [
        { label: "Primary Domain", value: "48% weight" },
        { label: "Editorial Benchmark", value: "32% weight" },
        { label: "Community Threads", value: "20% weight" },
      ],
      backNote: "Multi-layered grounding anchors brand facts securely against LLM hallucinations.",
    },
  ];

  return (
    <section
      id="answer-room"
      className="relative min-h-screen w-full bg-[#05080A] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10 scroll-mt-16 flex flex-col justify-center items-center"
    >
      {/* Background Subtle Ambient Glow */}
      {/* Background removed */}

      <div className="max-w-[1320px] mx-auto relative z-10 space-y-12">
        
        {/* ── Section Header (Centered) ── */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-xs"
          >
            <span className="size-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-300">
              THE AI ANSWER ROOM
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-jakarta text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]"
          >
            See the answer behind your visibility.
          </motion.h2>

          {/* Subheadline (1-2 lines) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="font-jakarta text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Go beyond a score. See what AI said about your brand, who appeared beside you, and what sources shaped the answer.
          </motion.p>

          {/* Live Question Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-200"
          >
            <span className="text-[#C8102E] font-bold font-mono">Q:</span>
            <span>&ldquo;What are the best AI visibility tools for SaaS in 2026?&rdquo;</span>
            <span className="hidden sm:inline font-mono text-[11px] text-neutral-500">• Live Multi-Engine Audit</span>
          </motion.div>
        </div>

        {/* ── 4 Property Cards (3D Tilt & Flip Interactive) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {cardsData.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="h-full flex"
            >
              <FlipCard
                cardNumber={card.cardNumber}
                isFlipped={flippedCards[card.id] ?? false}
                onFlipChange={(num, flipped) => toggleCard(card.id, flipped)}
                frontContent={
                  <div className="flex h-full flex-col justify-between text-left">
                    {/* Top Section */}
                    <div className="space-y-2.5">
                      {/* Top Row: Number & Status Badge */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-neutral-500">
                          {card.cardNumber}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#C8102E]/10 text-rose-300 border border-[#C8102E]/30">
                          {card.badge}
                        </span>
                      </div>

                      {/* Card Title & Highlighted Status */}
                      <div className="space-y-1">
                        <h3 className="font-jakarta text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                          {card.title}
                        </h3>
                        <div className="text-xs font-mono font-semibold text-[#C8102E] flex items-center gap-1.5">
                          <Check className="size-3.5 shrink-0" />
                          <span className="truncate">{card.status}</span>
                        </div>
                      </div>

                      {/* Card Description */}
                      <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                        {card.frontDesc}
                      </p>
                    </div>

                    {/* Middle Section: Snippet Card */}
                    <div className="my-auto py-2">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-[#141822]/90 border border-white/10 text-[11px] sm:text-xs text-neutral-300 font-sans leading-relaxed">
                        {card.frontDetail}
                      </div>
                    </div>

                    {/* Bottom Section: Flip Prompt */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400 mt-auto">
                      <span>Property Snapshot</span>
                      <span className="text-[#C8102E] font-semibold flex items-center gap-1">
                        Flip ↻
                      </span>
                    </div>
                  </div>
                }
                backContent={
                  <div className="flex h-full flex-col justify-between text-left">
                    {/* Top Section */}
                    <div className="space-y-2.5">
                      {/* Back Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider">
                          {card.backTitle}
                        </span>
                        <span className="font-mono text-[11px] text-neutral-400 font-bold">
                          {card.cardNumber}
                        </span>
                      </div>

                      {/* Metric Breakdown Rows */}
                      <div className="space-y-1.5">
                        {card.backItems.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-xs font-sans"
                          >
                            <span className="text-neutral-300 text-[11px]">{item.label}</span>
                            <span className="font-mono text-[#C8102E] font-bold text-xs">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Middle Section: Back Note */}
                    <div className="my-auto py-2">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-[#C8102E]/10 border border-[#C8102E]/25 text-[11px] sm:text-xs text-neutral-200 leading-relaxed font-sans">
                        {card.backNote}
                      </div>
                    </div>

                    {/* Bottom Section: Flip Back Prompt */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400 mt-auto">
                      <span>Grounding Proof</span>
                      <span className="text-rose-400 font-semibold flex items-center gap-1">
                        Flip back ↻
                      </span>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>

        {/* ── Core Message at Bottom ── */}
        <div className="mt-8 sm:mt-10 pt-6 text-center space-y-1.5 border-t border-white/10">
          <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-200">
            SCORE → ANSWER → INSIGHT
          </div>
          <p className="text-xs text-neutral-500 font-sans">
            Every visibility number has an answer behind it.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AIAnswerRoomSection;
