"use client";

import React, { useState, useEffect } from "react";
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
import { cn } from "@/lib/utils";

// 4 Interactive Visual Stages for the Left Screen
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

// 6 Enterprise Workflow Capability Cards (Matching Right-Side Grid in inspiration)
const CAPABILITY_CARDS = [
  {
    id: "ingestion",
    icon: Bot,
    title: "Autonomous Neural Ingestion",
    desc: "Performs continuous, sub-second query evaluations across ChatGPT 4o, Claude 3.7, Perplexity Pro, and Gemini to capture live synthesis consensus.",
    badge: "Multi-Model Telemetry",
    color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    iconBg: "bg-emerald-500/20 text-emerald-400",
  },
  {
    id: "bvi",
    icon: Languages,
    title: "Sovereign Bharat Grounding",
    desc: "Neutralizes English-only AI bias across 70%+ Indian non-English queries, anchoring Hinglish, Hindi, and regional conversational tokens.",
    badge: "BVI™ Engine",
    color: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    iconBg: "bg-purple-500/20 text-purple-400",
  },
  {
    id: "displacement",
    icon: Zap,
    title: "Algorithmic Displacement",
    desc: "Identifies competing software platforms appearing on secondary prompt variations and deploys authoritative knowledge graph schema.",
    badge: "Gap Telemetry",
    color: "bg-[#C8102E]/10 text-rose-300 border-[#C8102E]/30",
    iconBg: "bg-[#C8102E]/20 text-[#C8102E]",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "DAST & llms.txt Directives",
    desc: "Executes 200+ automated non-destructive DAST security audits and generates clean machine-readable llms.txt directives for AI web crawlers.",
    badge: "Zero-Trust Crawl",
    color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    iconBg: "bg-cyan-500/20 text-cyan-400",
  },
  {
    id: "remediation",
    icon: FileCode,
    title: "Deterministic IDE Fix Prompts",
    desc: "Synthesizes verified AST-level prompts for Cursor IDE and Claude Code to remediate crawlability and security gaps in under 30 seconds.",
    badge: "1-Click AST Fix",
    color: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    iconBg: "bg-blue-500/20 text-blue-400",
  },
  {
    id: "alerts",
    icon: Activity,
    title: "Hallucination Alerts & Telemetry",
    desc: "Sub-minute automated alerts whenever an LLM hallucinates outdated pricing, false features, or negative sentiment about your platform.",
    badge: "SOC2 Compliance",
    color: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconBg: "bg-amber-500/20 text-amber-400",
  },
];

export default function HowItWorksPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedDemoCategory, setSelectedDemoCategory] = useState("Architecture Walkthrough");
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  // Auto-cycle stages every 2.8 seconds unless paused
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % VISUAL_STAGES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const currentStage = VISUAL_STAGES[activeStageIndex];

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
          <div className="max-w-[1360px] mx-auto w-full space-y-20 sm:space-y-28">
            
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

            {/* ── 2. The Split Showcase Section (Matching Attached Design) ── */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
              onMouseEnter={() => setIsAutoCycling(false)}
              onMouseLeave={() => setIsAutoCycling(true)}
            >
              
              {/* ═══ LEFT SIDE: Dynamic Interactive Visual Stage (Spans 5 cols) ═══ */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
                <div className="relative rounded-3xl bg-[#0E121B] border border-white/10 p-6 sm:p-7 shadow-2xl overflow-hidden group">
                  {/* Subtle Background Radial Atmosphere */}
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

                    <div className="flex items-center gap-1.5">
                      {VISUAL_STAGES.map((stage, idx) => (
                        <button
                          key={stage.id}
                          onClick={() => setActiveStageIndex(idx)}
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

                  {/* Bottom Auto-Play Indicator */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400 relative z-10">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5 text-neutral-500" />
                      <span>{isAutoCycling ? "Auto-cycling live pipeline" : "Paused on hover"}</span>
                    </span>
                    <button
                      onClick={() => setActiveStageIndex((prev) => (prev + 1) % VISUAL_STAGES.length)}
                      className="text-rose-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-semibold"
                    >
                      <span>Next Stage</span>
                      <ChevronRight className="size-3.5" />
                    </button>
                  </div>
                </div>

                {/* Left Mini Caption */}
                <p className="text-xs text-neutral-500 font-sans text-left px-2">
                  Hover over any capability on the right to instantly sync live pipeline visuals.
                </p>
              </div>

              {/* ═══ RIGHT SIDE: 6 Curvy Enterprise Capability Cards (Spans 7 cols) ═══ */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-left">
                {CAPABILITY_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.06 }}
                      onMouseEnter={() => {
                        const targetIdx = VISUAL_STAGES.findIndex((s) => s.id === card.id);
                        if (targetIdx !== -1) setActiveStageIndex(targetIdx);
                      }}
                      className="p-6 rounded-3xl bg-[#0E121B] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-5 shadow-xl group hover:scale-[1.01] cursor-pointer"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className={cn("size-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105", card.iconBg)}>
                            <Icon className="size-5.5" />
                          </div>
                          <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-semibold", card.color)}>
                            {card.badge}
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <h4 className="font-jakarta text-lg font-bold text-white tracking-tight">
                            {card.title}
                          </h4>
                          <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                            {card.desc}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                        <span>Inspect Flow</span>
                        <ArrowRight className="size-3.5 text-[#C8102E] transition-transform group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* ── 3. The 4-Step Pipeline Architecture ── */}
            <div className="space-y-8 pt-8">
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
