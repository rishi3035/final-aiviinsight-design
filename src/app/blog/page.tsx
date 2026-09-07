"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Languages,
  ShieldCheck,
  Zap,
  Bot,
  Activity,
  Calendar,
  Clock,
  ExternalLink,
  ChevronRight,
  Search,
  Filter,
  FileCode,
  Terminal,
  Code2,
  Lock,
  Globe,
  Layers,
  Cpu,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LinkPreview } from "@/components/ui/link-preview";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All Research",
  "GEO & Citations",
  "Bharat Index (BVI)",
  "DAST & llms.txt",
  "Model Benchmarks",
  "IDE Remediation",
];

export default function BlogPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoCategory, setDemoCategory] = useState("Research Briefing");
  const [selectedCategory, setSelectedCategory] = useState("All Research");
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenDemo = (category = "Research Briefing") => {
    setDemoCategory(category);
    setIsDemoOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col w-full bg-[#05080A] text-white selection:bg-[#C8102E] selection:text-white">
        {/* Floating Pill Navbar */}
        <Navbar onOpenDemo={() => handleOpenDemo("Full AI Audit")} />

        <main className="flex-1 flex flex-col w-full pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1360px] mx-auto w-full space-y-16 sm:space-y-24">
            
            {/* ── 1. Blog Hero Header with Interactive LinkPreview ── */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A0E14] border border-[#4A1624] text-xs font-sans text-rose-300 shadow-xs"
              >
                <Sparkles className="size-3.5 text-[#C8102E]" />
                <span className="font-semibold tracking-wide">Daily Intelligence &amp; AI Citation Research</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="font-jakarta text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.08]"
              >
                The Sovereign AI Visibility &amp; <br />
                <span className="bg-gradient-to-r from-white via-neutral-200 to-[#C8102E] bg-clip-text text-transparent">
                  Generative Search Journal.
                </span>
              </motion.h1>

              {/* Interactive Narrative with LinkPreview */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-sans text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-normal"
              >
                We reverse-engineer how{" "}
                <LinkPreview
                  url="https://chatgpt.com"
                  className="font-semibold text-white underline decoration-[#C8102E] decoration-2 underline-offset-4 hover:text-[#C8102E]"
                >
                  ChatGPT 4o
                </LinkPreview>
                ,{" "}
                <LinkPreview
                  url="https://perplexity.ai"
                  className="font-semibold text-white underline decoration-[#C8102E] decoration-2 underline-offset-4 hover:text-[#C8102E]"
                >
                  Perplexity Pro
                </LinkPreview>
                ,{" "}
                <LinkPreview
                  url="https://anthropic.com/claude"
                  className="font-semibold text-white underline decoration-[#C8102E] decoration-2 underline-offset-4 hover:text-[#C8102E]"
                >
                  Claude 3.7
                </LinkPreview>
                , and{" "}
                <LinkPreview
                  url="https://sarvam.ai"
                  className="font-semibold text-white underline decoration-[#B388FF] decoration-2 underline-offset-4 hover:text-[#B388FF]"
                >
                  Sarvam Indic LLMs
                </LinkPreview>{" "}
                cite, ground, and synthesize authoritative enterprise brands across global and vernacular markets.
              </motion.p>
            </div>

            {/* ── 2. Filter Tabs & Live Search Bar ── */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer font-sans",
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-[#C8102E] to-[#E02444] text-white shadow-md shadow-red-950/40"
                        : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search research, RAG, BVI..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-[#0E121B] border border-white/15 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C8102E] transition-colors"
                />
              </div>
            </div>

            {/* ── 3. Creative Bento Grid Master Layout with Rich Visual Data ── */}
            <BentoGrid className="auto-rows-[25rem] md:auto-rows-[26rem] lg:grid-cols-3 gap-6">
              
              {/* ═══ BOX 1: Master Blueprint (Spans 2 columns on lg) ═══ */}
              <BentoCard
                name="Generative Engine Optimization in 2026: The Comprehensive Enterprise Blueprint"
                description="A complete technical deep-dive into how multi-hop RAG pipelines, knowledge graph citations, and brand co-citations determine recommendation probability inside frontier search engines."
                Icon={TrendingUp}
                badge="GEO & Citations • Master Blueprint"
                badgeColor="bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30"
                meta="8 min read • Sep 2026"
                cta="Read Master Blueprint"
                onCtaClick={() => handleOpenDemo("GEO Blueprint Research")}
                className="lg:col-span-2"
                background={
                  <div className="absolute inset-0 p-6 opacity-35 group-hover:opacity-60 transition-opacity duration-500">
                    {/* Background Radial Glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8102E]/20 rounded-full blur-3xl" />
                    
                    {/* Visual Telemetry Stream */}
                    <div className="max-w-md ml-auto space-y-2 font-mono text-[11px]">
                      <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1.5 backdrop-blur-sm">
                        <div className="flex items-center justify-between text-neutral-400">
                          <span className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>ChatGPT 4o Search Probes</span>
                          </span>
                          <span className="text-emerald-400 font-bold">99.4% Grounded</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full w-[99.4%]" />
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1.5 backdrop-blur-sm">
                        <div className="flex items-center justify-between text-neutral-400">
                          <span className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-rose-400" />
                            <span>Perplexity Pro Multi-Hop RAG</span>
                          </span>
                          <span className="text-rose-400 font-bold">98.6% Grounded</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#C8102E] rounded-full w-[98.6%]" />
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1.5 backdrop-blur-sm">
                        <div className="flex items-center justify-between text-neutral-400">
                          <span className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-blue-400" />
                            <span>Claude 3.7 Reasoning Graph</span>
                          </span>
                          <span className="text-blue-400 font-bold">97.8% Grounded</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-400 rounded-full w-[97.8%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 2: Sovereign Bharat Index (BVI) ═══ */}
              <BentoCard
                name="Why 70% of Indian AI Searches Are Displacing English-Only SaaS Brands"
                description="How conversational Hinglish and Devanagari prompts trigger alternative retrieval indices in Sarvam, Claude, and GPT-4o — causing English-dominant brands to lose market share."
                Icon={Languages}
                badge="Bharat Index (BVI)"
                badgeColor="bg-purple-500/20 text-[#D1B3FF] border-purple-500/30"
                meta="6 min read • Sep 2026"
                cta="Explore BVI Study"
                onCtaClick={() => handleOpenDemo("Bharat Index Study")}
                className="lg:col-span-1"
                background={
                  <div className="absolute inset-0 p-6 opacity-35 group-hover:opacity-60 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />
                    <div className="space-y-2 font-mono text-[11px]">
                      <div className="p-3 rounded-xl bg-black/60 border border-purple-500/30 backdrop-blur-sm space-y-1">
                        <div className="text-[#D1B3FF] text-[10px] font-bold"># Regional Prompt Vector</div>
                        <div className="text-white text-xs truncate">&ldquo;Kaunsa billing software sabse reliable hai?&rdquo;</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-between text-xs">
                        <span className="text-neutral-300">Sarvam Match</span>
                        <span className="font-bold text-[#D1B3FF]">Tier-1 Lead</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs">
                        <span className="text-neutral-400">English Fallback</span>
                        <span className="font-bold text-rose-400">0% Displaced</span>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 3: Autonomous llms.txt Standard ═══ */}
              <BentoCard
                name="The Autonomous llms.txt Standard: Structuring Directives for GPTBot & ClaudeBot"
                description="Architectural guidelines for serving token-optimized llms.txt files that guide AI crawlers directly to canonical enterprise facts, API docs, and benchmarks."
                Icon={FileCode}
                badge="DAST & llms.txt"
                badgeColor="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                meta="7 min read • Aug 2026"
                cta="Inspect llms.txt Guide"
                onCtaClick={() => handleOpenDemo("llms.txt Architecture")}
                className="lg:col-span-1"
                background={
                  <div className="absolute inset-0 p-5 opacity-35 group-hover:opacity-65 transition-opacity duration-500">
                    <div className="p-3.5 rounded-xl bg-[#07090F] border border-emerald-500/30 font-mono text-[10.5px] space-y-1.5 backdrop-blur-sm">
                      <div className="flex items-center justify-between border-b border-white/10 pb-1 text-neutral-400">
                        <span className="text-emerald-400 font-bold">/llms.txt</span>
                        <span className="text-emerald-400">200 OK</span>
                      </div>
                      <div className="text-neutral-400">&gt; User-agent: GPTBot, ClaudeBot</div>
                      <div className="text-neutral-400">&gt; Allow: /api, /benchmarks</div>
                      <div className="text-emerald-300 font-semibold">&gt; Authority: 100% Verified</div>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 4: Reverse-Engineering Perplexity Pro (Spans 2 cols on lg) ═══ */}
              <BentoCard
                name="Reverse-Engineering Perplexity Pro: How Primary Domain Weights Win Citations"
                description="Empirical analysis of 50,000 Perplexity Pro responses showing why direct technical documentation carries 48% citation weight over secondary forum listicles and SEO blogs."
                Icon={Bot}
                badge="GEO & Citations • Empirical Lab"
                badgeColor="bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30"
                meta="5 min read • Aug 2026"
                cta="Read Perplexity Lab Report"
                onCtaClick={() => handleOpenDemo("Perplexity Lab Report")}
                className="lg:col-span-2"
                background={
                  <div className="absolute inset-0 p-6 opacity-35 group-hover:opacity-60 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#C8102E]/15 rounded-full blur-3xl" />
                    <div className="max-w-md ml-auto grid grid-cols-3 gap-2 font-mono text-center">
                      <div className="p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-sm space-y-1">
                        <div className="text-2xl font-bold text-emerald-400">48%</div>
                        <div className="text-[10px] text-neutral-400 font-sans">Primary Docs</div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-sm space-y-1">
                        <div className="text-2xl font-bold text-[#C8102E]">32%</div>
                        <div className="text-[10px] text-neutral-400 font-sans">Knowledge Graph</div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-sm space-y-1">
                        <div className="text-2xl font-bold text-neutral-400">20%</div>
                        <div className="text-[10px] text-neutral-400 font-sans">Forum Mentions</div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 5: DAST Security Audits & Zero-Trust Crawlability ═══ */}
              <BentoCard
                name="DAST Security Audits: Preventing TLS and CSP Hallucination Vulnerabilities"
                description="When enterprise websites block crawler IPs or fail CSP handshake policies, LLMs hallucinate fallback data. Continuous DAST scanning eliminates citation voids."
                Icon={ShieldCheck}
                badge="Security & Compliance"
                badgeColor="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                meta="6 min read • Aug 2026"
                cta="View Security Report"
                onCtaClick={() => handleOpenDemo("Security & DAST Audit")}
                className="lg:col-span-1"
                background={
                  <div className="absolute inset-0 p-5 opacity-35 group-hover:opacity-65 transition-opacity duration-500">
                    <div className="p-3 rounded-xl bg-[#07090F] border border-cyan-500/30 font-mono text-[10.5px] space-y-1.5 backdrop-blur-sm">
                      <div className="flex items-center justify-between text-cyan-400 font-bold border-b border-white/10 pb-1">
                        <span>DAST Scanner v4.2</span>
                        <span>PASS</span>
                      </div>
                      <div className="text-neutral-300">✓ TLS 1.3 Strict Mode</div>
                      <div className="text-neutral-300">✓ CSP Header Directives</div>
                      <div className="text-emerald-400 font-bold">✓ 200+ Audits Passed</div>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 6: Q3 2026 Multi-Model Perception Benchmark (Spans 1 col) ═══ */}
              <BentoCard
                name="Q3 2026 Perception Benchmark: GPT-4o vs Claude 3.7 vs Gemini 3.5"
                description="Benchmarking citation stability, domain grounding ratios, and hallucination frequencies across 1,000 Global 2000 brand queries."
                Icon={Zap}
                badge="Model Benchmarks"
                badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
                meta="9 min read • Jul 2026"
                cta="Read Benchmark Study"
                onCtaClick={() => handleOpenDemo("Benchmark Study")}
                className="lg:col-span-1"
                background={
                  <div className="absolute inset-0 p-5 opacity-35 group-hover:opacity-65 transition-opacity duration-500">
                    <div className="p-3 rounded-xl bg-[#07090F] border border-blue-500/30 font-mono text-[10.5px] space-y-2 backdrop-blur-sm">
                      <div className="flex items-center justify-between text-neutral-400">
                        <span className="text-white font-bold">GPT-4o Search</span>
                        <span className="text-emerald-400">99.4%</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-400">
                        <span className="text-white font-bold">Claude 3.7 Sonnet</span>
                        <span className="text-blue-400">98.2%</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-400">
                        <span className="text-white font-bold">Gemini 3.5 Flash</span>
                        <span className="text-purple-400">96.8%</span>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 7: Deterministic Cursor AST & IDE Remediation ═══ */}
              <BentoCard
                name="Deterministic IDE Remediation: Synthesizing Cursor Prompts in Under 30 Seconds"
                description="How AIVI synthesizes verified AST-level prompts for Cursor IDE and Claude Code to remediate crawler directives and JSON-LD schema with zero manual coding."
                Icon={Terminal}
                badge="1-Click AST Fix"
                badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
                meta="4 min read • Jul 2026"
                cta="View AST Prompts"
                onCtaClick={() => handleOpenDemo("AST Remediation")}
                className="lg:col-span-1"
                background={
                  <div className="absolute inset-0 p-5 opacity-35 group-hover:opacity-65 transition-opacity duration-500">
                    <div className="p-3 rounded-xl bg-[#07090F] border border-blue-500/30 font-mono text-[10px] space-y-1 backdrop-blur-sm">
                      <div className="text-neutral-500">// Fix Missing GEO Schema</div>
                      <div className="text-emerald-400">&gt; npx @aivi/remediate</div>
                      <div className="text-blue-300">&gt; inject KnowledgeGraph</div>
                    </div>
                  </div>
                }
              />

            </BentoGrid>

            {/* ── 4. Frontier Search Engine Telemetry Deck (LinkPreview Integration) ── */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E121B] border border-white/10 text-center space-y-6 shadow-xl">
              <div className="space-y-2 max-w-xl mx-auto">
                <Badge className="bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30 font-mono text-xs">
                  Frontier LLM Telemetry
                </Badge>
                <h3 className="font-jakarta text-2xl font-bold text-white tracking-tight">
                  Monitored Ingestion Engines
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-400">
                  Hover over any model to preview real-time engine telemetry and knowledge grounding.
                </p>
              </div>

              <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 pt-2">
                {[
                  { name: "ChatGPT Search (GPT-4o)", url: "https://chatgpt.com" },
                  { name: "Perplexity Pro", url: "https://perplexity.ai" },
                  { name: "Claude 3.7 Sonnet", url: "https://anthropic.com/claude" },
                  { name: "Google Gemini 3.5", url: "https://gemini.google.com" },
                  { name: "Sarvam Indic Engine", url: "https://sarvam.ai" },
                ].map((engine) => (
                  <div
                    key={engine.name}
                    className="px-4 py-2.5 rounded-2xl bg-[#07090F] border border-white/15 hover:border-[#C8102E]/60 transition-all text-xs font-mono text-neutral-200 shadow-sm"
                  >
                    <LinkPreview url={engine.url} className="font-semibold text-white hover:text-[#C8102E]">
                      {engine.name}
                    </LinkPreview>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 5. Bottom Newsletter & Enterprise Briefing Banner ── */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A0E14] via-[#0E121B] to-[#1A0E14] border border-[#C8102E]/30 flex flex-col lg:flex-row items-center justify-between gap-8 text-left shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-2 relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase">
                  <Sparkles className="size-3.5" />
                  <span>Executive AI Visibility Briefings</span>
                </div>
                <h3 className="font-jakarta text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Stay ahead of every generative engine algorithm shift.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Join 1,200+ enterprise marketing and SEO leaders receiving our weekly multi-model citation research and Bharat Visibility benchmarks.
                </p>
              </div>

              <div className="flex items-center gap-3 relative z-10 w-full lg:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() => handleOpenDemo("Full Research Suite")}
                  className="w-full lg:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white font-sans font-bold text-sm sm:text-base shadow-xl shadow-red-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Full Research Suite</span>
                  <ArrowRight className="size-4.5" />
                </button>
              </div>
            </div>

          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Demo / Audit Modal */}
        <DemoModal
          isOpen={isDemoOpen}
          onClose={() => setIsDemoOpen(false)}
          initialCategory={demoCategory}
        />
      </div>
    </SmoothScroll>
  );
}
