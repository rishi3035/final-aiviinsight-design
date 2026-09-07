"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Bot,
  Zap,
  ShieldCheck,
  Globe,
  Languages,
  FileCode,
  Activity,
  CheckCircle2,
  ArrowRight,
  Search,
  Lock,
  Terminal,
  Cpu,
  RefreshCw,
  Clock,
  Layers,
  Check,
  Copy,
  ChevronRight,
  ExternalLink,
  Code2,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResearchBentoGrid } from "@/components/ui/research-bento-grid";
import { cn } from "@/lib/utils";

// 4 Interactive Visual Stages for the Sticky Left Screen
const VISUAL_STAGES = [
  {
    id: "ingestion",
    stageNumber: "01",
    stageTag: "Multi-Model Ingestion",
    title: "Neural Query Interception",
    accentColor: "#C8102E",
    render: () => (
      <div className="space-y-4 text-left">
        {/* Mock LLM Search Bar */}
        <div className="p-3.5 rounded-2xl bg-[#07090F] border border-white/10 shadow-inner flex items-center gap-3">
          <div className="size-2 rounded-full bg-[#C8102E] animate-pulse shrink-0" />
          <div className="font-mono text-xs text-neutral-300 truncate">
            &ldquo;What is the top enterprise GEO platform for 2026?&rdquo;
          </div>
        </div>

        {/* Live Multi-Model Processing Stream */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>Active Model Probes</span>
            <span className="text-emerald-400 font-bold">4/4 Consensus Live</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { model: "ChatGPT 4o Search", status: "#1 Recommended", rate: "99.4%", color: "text-emerald-400" },
              { model: "Claude 3.7 Reasoning", status: "Primary Citation", rate: "97.8%", color: "text-blue-400" },
              { model: "Perplexity Pro Indic", status: "Verified Authority", rate: "98.6%", color: "text-rose-400" },
              { model: "Gemini 3.5 Flash", status: "Knowledge Grounded", rate: "95.2%", color: "text-purple-400" },
            ].map((item, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-[#07090F]/90 border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-white font-bold">{item.model}</span>
                  <span className={item.color}>{item.rate}</span>
                </div>
                <div className="text-[10px] text-neutral-400 font-sans truncate">{item.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Citation Grounding Card */}
        <div className="p-3 rounded-2xl bg-gradient-to-br from-[#121824] to-[#0A0D14] border border-white/10 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-white font-jakarta">Synthetic Authority Weight</div>
            <div className="text-[11px] font-mono text-neutral-400">Multi-Engine Grounding Consensus</div>
          </div>
          <div className="text-xl font-extrabold font-jakarta text-white bg-gradient-to-r from-white to-rose-400 bg-clip-text text-transparent">
            98.4%
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "bvi",
    stageNumber: "02",
    stageTag: "Bharat Vernacular Matrix",
    title: "Dual-Lingual Indic Grounding",
    accentColor: "#B388FF",
    render: () => (
      <div className="space-y-4 text-left">
        {/* Vernacular Search Prompt */}
        <div className="p-3.5 rounded-2xl bg-[#07090F] border border-purple-500/20 shadow-inner flex items-center gap-3">
          <Languages className="size-4 text-[#B388FF] shrink-0" />
          <div className="font-mono text-xs text-neutral-200 truncate">
            &ldquo;Billing aur GEO ke liye kaunsa software sabse reliable hai?&rdquo;
          </div>
        </div>

        {/* Dual-Lingual Token Map */}
        <div className="p-3.5 rounded-2xl bg-[#07090F]/90 border border-white/10 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#B388FF] font-bold">Hinglish &amp; Devanagari Mapping</span>
            <span className="text-emerald-400">Zero Competitor Fallback</span>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs font-sans">
              <span className="text-neutral-300">English Intent Vector</span>
              <span className="font-mono text-emerald-400 font-bold">100% Grounded</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs font-sans">
              <span className="text-neutral-300">Conversational Hinglish Vector</span>
              <span className="font-mono text-[#B388FF] font-bold">96.2% Grounded</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs font-sans">
              <span className="text-neutral-300">Sarvam Indic Tokenizer Match</span>
              <span className="font-mono text-rose-400 font-bold">Tier-1 Authority</span>
            </div>
          </div>
        </div>

        {/* Displacement Prevention Pill */}
        <div className="p-3 rounded-2xl bg-[#1C1427] border border-[#3E2368] flex items-center justify-between text-xs">
          <span className="text-[#D1B3FF] font-sans">Regional Displacement Protection</span>
          <span className="font-mono font-bold text-white px-2 py-0.5 rounded-md bg-[#3E2368]">Active SLA</span>
        </div>
      </div>
    ),
  },
  {
    id: "security",
    stageNumber: "03",
    stageTag: "Security & Crawlability",
    title: "DAST & llms.txt Architecture",
    accentColor: "#10B981",
    render: () => (
      <div className="space-y-4 text-left">
        {/* Terminal Protocol View */}
        <div className="p-3.5 rounded-2xl bg-[#07090F] border border-emerald-500/20 shadow-inner space-y-2 font-mono text-[11px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-neutral-400">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-400" />
              <span>https://yourdomain.com/llms.txt</span>
            </div>
            <span className="text-emerald-400">200 OK</span>
          </div>

          <div className="text-neutral-300 space-y-1 font-sans text-xs">
            <div className="text-emerald-400 font-mono text-[11px]"># LLM Crawler Token Directives</div>
            <div className="text-neutral-400">&gt; User-agent: GPTBot, ClaudeBot, PerplexityBot</div>
            <div className="text-neutral-400">&gt; Allow: /api/docs, /benchmarks, /features</div>
            <div className="text-neutral-400">&gt; Entity: Global Enterprise AI Visibility Framework</div>
          </div>
        </div>

        {/* 200+ DAST Security Checks Grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-[#07090F] border border-white/10 text-left">
            <div className="text-[10px] font-mono text-neutral-400">TLS Cipher Protocol</div>
            <div className="text-xs font-bold text-emerald-400 font-mono">TLS 1.3 Strict ✓</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#07090F] border border-white/10 text-left">
            <div className="text-[10px] font-mono text-neutral-400">CSP Header Directives</div>
            <div className="text-xs font-bold text-emerald-400 font-mono">Zero Leaks ✓</div>
          </div>
        </div>

        {/* Verified Crawl Token */}
        <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-xs">
          <span className="text-emerald-300 font-sans">Crawler Token Readiness</span>
          <span className="font-mono font-bold text-emerald-400">100% Verified</span>
        </div>
      </div>
    ),
  },
  {
    id: "remediation",
    stageNumber: "04",
    stageTag: "Deterministic IDE Remediation",
    title: "1-Click Cursor AST Synthesis",
    accentColor: "#3B82F6",
    render: () => (
      <div className="space-y-4 text-left">
        {/* IDE Prompt Card */}
        <div className="p-3.5 rounded-2xl bg-[#07090F] border border-blue-500/30 shadow-inner space-y-2.5">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold">
              <Code2 className="size-3.5" />
              <span>Cursor IDE Fix Prompt</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Deterministic AST
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#0B0F19] border border-white/5 font-mono text-[11px] text-neutral-300 space-y-1">
            <div className="text-neutral-500">// Fix Missing GEO Schema &amp; llms.txt Directives</div>
            <div className="text-emerald-400 font-semibold">&gt; npx @aivi/remediate --target=llms.txt</div>
            <div className="text-blue-300">&gt; inject JSON-LD KnowledgeGraph &amp; BVI Anchors</div>
          </div>
        </div>

        {/* Live Diff Status */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-[#07090F] border border-white/10 text-left">
            <div className="text-[10px] font-mono text-neutral-400">Remediation Speed</div>
            <div className="text-xs font-bold text-blue-400 font-mono">&lt; 30 Seconds</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#07090F] border border-white/10 text-left">
            <div className="text-[10px] font-mono text-neutral-400">Knowledge Graph Re-index</div>
            <div className="text-xs font-bold text-emerald-400 font-mono">Immediate</div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-3 rounded-2xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between text-xs">
          <span className="text-blue-300 font-sans">Cursor &amp; Claude Code Compatible</span>
          <span className="font-mono font-bold text-white flex items-center gap-1">
            <Copy className="size-3 text-blue-400" />
            <span>Copy Prompt</span>
          </span>
        </div>
      </div>
    ),
  },
];

// 4 High-Impact Step Narrative Cards (Scroll Track)
const PIPELINE_STEPS = [
  {
    id: "ingestion",
    step: "01",
    badge: "Neural Query Ingestion",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    title: "Autonomous Multi-Model Query Interception",
    description:
      "AIVI performs continuous, sub-second query evaluations across ChatGPT 4o, Claude 3.7, Perplexity Pro, and Gemini. Autonomous probes map where your brand ranks in generative search answers and records live factual attribution scores.",
    bullets: [
      "Sub-second multi-hop query simulations across 10,000+ daily prompt variations",
      "Consensus tracking across OpenAI, Anthropic, Google, and Perplexity",
      "Live attribution score weighting and synthetic citation analysis",
    ],
    stat: "99.4% Multi-Model Consensus",
    icon: Bot,
  },
  {
    id: "bvi",
    step: "02",
    badge: "Bharat Visibility Index (BVI™)",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    title: "Sovereign Indic & Vernacular Vector Grounding",
    description:
      "Over 70% of Indian searches rely on conversational Hinglish, Hindi, and regional scripts. AIVI neutralizes English-only retrieval bias by anchoring multi-lingual vector tokens into Sarvam Indic LLMs, Claude, and GPT-4o.",
    bullets: [
      "Dual-lingual token alignment across Hindi, Hinglish, Tamil, Telugu, and Bengali",
      "Eliminates competitor displacement in non-English enterprise prompts",
      "Direct integration with Sarvam Indic tokenizers and regional knowledge graphs",
    ],
    stat: "70%+ Regional Coverage",
    icon: Languages,
  },
  {
    id: "security",
    step: "03",
    badge: "DAST & Zero-Trust Crawlability",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    title: "Automated DAST Security & llms.txt Directives",
    description:
      "When enterprise firewalls block crawler IPs or fail CSP handshake policies, LLMs hallucinate outdated fallback data. AIVI executes 200+ automated non-destructive security audits and publishes canonical, token-optimized llms.txt directives.",
    bullets: [
      "200+ automated non-destructive DAST security and CSP header evaluations",
      "Machine-readable llms.txt files that steer GPTBot, ClaudeBot, and PerplexityBot",
      "Guaranteed TLS 1.3 strict crawler handshake policies",
    ],
    stat: "200+ Security Audits Passed",
    icon: ShieldCheck,
  },
  {
    id: "remediation",
    step: "04",
    badge: "1-Click IDE AST Remediation",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    title: "Deterministic Cursor & Claude Code AST Synthesis",
    description:
      "No waiting for manual engineering sprints. AIVI synthesizes verified Abstract Syntax Tree (AST) prompts for Cursor IDE and Claude Code to remediate crawlability gaps, inject JSON-LD Knowledge Graph schema, and publish llms.txt in under 30 seconds.",
    bullets: [
      "Deterministic AST prompt synthesis with 1-click terminal copy",
      "Immediate JSON-LD Knowledge Graph injection and validation",
      "Sub-30 second remediation cycle with zero technical debt",
    ],
    stat: "<30s Remediation Time",
    icon: FileCode,
  },
];

export default function HowItWorksPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedDemoCategory, setSelectedDemoCategory] = useState("Architecture Walkthrough");
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // References for Scroll-Driven Sync
  const step0Ref = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [step0Ref, step1Ref, step2Ref, step3Ref];
    const observers: IntersectionObserver[] = [];

    refs.forEach((ref, index) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStageIndex(index);
            }
          });
        },
        {
          rootMargin: "-20% 0px -40% 0px",
          threshold: 0.3,
        }
      );
      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const currentStage = VISUAL_STAGES[activeStageIndex] || VISUAL_STAGES[0];

  const handleOpenDemo = (category = "Architecture Walkthrough") => {
    setSelectedDemoCategory(category);
    setIsDemoOpen(true);
  };

  const scrollToStep = (index: number) => {
    const refs = [step0Ref, step1Ref, step2Ref, step3Ref];
    refs[index]?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveStageIndex(index);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col w-full bg-[#05080A] text-white selection:bg-[#C8102E] selection:text-white">
        {/* Floating Pill Navbar */}
        <Navbar onOpenDemo={() => handleOpenDemo()} />

        <main className="flex-1 flex flex-col w-full pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1360px] mx-auto w-full space-y-20 sm:space-y-28">
            
            {/* ── 1. Clean, High-Impact Page Header ── */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
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

            {/* ── 2. Primary Showcase: Frontier Model Research Bento Grid ── */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="w-full space-y-4"
            >
              <div className="w-full rounded-[28px] border border-white/10 bg-[#080B12]/90 p-2 sm:p-4 shadow-2xl backdrop-blur-md">
                <div className="min-h-[640px] sm:h-[660px] w-full">
                  <ResearchBentoGrid
                    monthlyPrice={1990}
                    previousPrice={32000}
                    currency="USD"
                    defaultSelectedBrand={0}
                    onPausedChange={(paused) => console.log({ paused })}
                    onSelectedBrandChange={(index) => console.log({ index })}
                  />
                </div>
              </div>
            </motion.section>

            {/* ── 3. Scroll-Synchronized Neural Pipeline Section ── */}
            <div className="space-y-10 pt-4">
              
              {/* Section Header */}
              <div className="max-w-3xl text-left space-y-2.5">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">
                  <Activity className="size-3.5" />
                  <span>Scroll-Synchronized Pipeline Engine</span>
                </div>
                <h2 className="font-jakarta text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  End-to-End Neural Query Execution
                </h2>
                <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-400">
                  Scroll down through each milestone to inspect how AIVI intercepts queries, neutralizes competitor displacement, and deploys AST fixes in real time.
                </p>
              </div>

              {/* Scroll Track: Left Sticky Viewport + Right Step Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
                
                {/* ═══ LEFT SIDE: Sticky Interactive Visual Screen (Spans 5 cols) ═══ */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4 z-20">
                  <div className="relative rounded-3xl bg-[#0E121B] border border-white/10 p-6 sm:p-7 shadow-2xl overflow-hidden group">
                    {/* Subtle Ambient Red Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8102E]/15 rounded-full blur-3xl pointer-events-none" />

                    {/* Stage Header Controls */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-neutral-500">
                          {currentStage.stageNumber} / 04
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#C8102E]/20 text-rose-300 border border-[#C8102E]/30 font-semibold">
                          {currentStage.stageTag}
                        </span>
                      </div>

                      {/* Step Jump Dots */}
                      <div className="flex items-center gap-1.5">
                        {VISUAL_STAGES.map((stage, idx) => (
                          <button
                            key={stage.id}
                            type="button"
                            onClick={() => scrollToStep(idx)}
                            className={cn(
                              "size-2 rounded-full transition-all cursor-pointer",
                              activeStageIndex === idx
                                ? "bg-[#C8102E] w-6"
                                : "bg-white/20 hover:bg-white/40"
                            )}
                            aria-label={`Jump to stage ${stage.stageNumber}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Stage Title */}
                    <div className="py-4 text-left relative z-10">
                      <h3 className="font-jakarta text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {currentStage.title}
                      </h3>
                    </div>

                    {/* Dynamic Animated Content Viewport */}
                    <div className="min-h-[290px] relative z-10 flex flex-col justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentStage.id}
                          initial={{ opacity: 0, y: 14, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -14, scale: 0.98 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                          {currentStage.render()}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Bottom Status Ribbon */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400 relative z-10">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Scroll Synchronized</span>
                      </span>
                      <span className="text-neutral-500 font-mono">
                        Stage {activeStageIndex + 1} of 4
                      </span>
                    </div>
                  </div>

                  {/* Left Mini Caption */}
                  <p className="text-xs text-neutral-500 font-sans text-left px-2">
                    Visual simulator automatically syncs as you scroll down the workflow.
                  </p>
                </div>

                {/* ═══ RIGHT SIDE: 4 High-Impact Step Narrative Cards (Spans 7 cols) ═══ */}
                <div className="lg:col-span-7 space-y-8 sm:space-y-12 text-left">
                  {PIPELINE_STEPS.map((stepItem, idx) => {
                    const Icon = stepItem.icon;
                    const isActive = activeStageIndex === idx;
                    const stepRef = [step0Ref, step1Ref, step2Ref, step3Ref][idx];

                    return (
                      <motion.div
                        key={stepItem.id}
                        ref={stepRef}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={cn(
                          "p-7 sm:p-8 rounded-3xl border transition-all duration-500 space-y-6 shadow-xl relative overflow-hidden",
                          isActive
                            ? "bg-gradient-to-br from-[#121824] via-[#0E121B] to-[#140E14] border-[#C8102E]/60 ring-1 ring-[#C8102E]/30 shadow-2xl shadow-red-950/20 scale-[1.01]"
                            : "bg-[#0E121B]/90 border-white/10 opacity-70 hover:opacity-100"
                        )}
                      >
                        {/* Subtle Active Corner Flare */}
                        {isActive && (
                          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8102E]/15 rounded-full blur-3xl pointer-events-none" />
                        )}

                        <div className="space-y-4 relative z-10">
                          {/* Card Header Info */}
                          <div className="flex items-center justify-between gap-3 flex-wrap">
                            <div className="flex items-center gap-2.5">
                              <span className="font-mono text-2xl font-extrabold text-[#C8102E]">
                                {stepItem.step}
                              </span>
                              <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-semibold", stepItem.badgeColor)}>
                                {stepItem.badge}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                              <CheckCircle2 className="size-3.5" />
                              <span>{stepItem.stat}</span>
                            </div>
                          </div>

                          {/* Card Title & Description */}
                          <div className="space-y-2">
                            <h3 className="font-jakarta text-xl sm:text-2xl font-bold text-white tracking-tight">
                              {stepItem.title}
                            </h3>
                            <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                              {stepItem.description}
                            </p>
                          </div>

                          {/* Bullet Highlights */}
                          <div className="space-y-2 pt-2 border-t border-white/5 font-sans text-xs text-neutral-400">
                            {stepItem.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-2">
                                <span className="size-1.5 rounded-full bg-[#C8102E] mt-1.5 shrink-0" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Inspect Button */}
                        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400 relative z-10">
                          <button
                            type="button"
                            onClick={() => scrollToStep(idx)}
                            className="text-rose-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-semibold"
                          >
                            <span>{isActive ? "Active in Visual Viewport" : "Focus Stage Viewport"}</span>
                            <ArrowRight className="size-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

              </div>

            </div>

            {/* ── 4. Deterministic 4-Step Deployment Workflow ── */}
            <div className="space-y-8 pt-6">
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

            {/* ── 5. Bottom Enterprise Call to Action Banner ── */}
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
