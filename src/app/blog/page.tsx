"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Languages,
  ShieldCheck,
  Zap,
  Bot,
  Activity,
  FileCode,
  Terminal,
  Code2,
  Lock,
  Globe,
  Layers,
  Cpu,
  Network,
  Share2,
  GitFork,
  Radio,
  Workflow,
  CheckCircle2,
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

// Interconnected SVG Web Filaments overlay connecting all bento nodes
function SpiderWebOverlay() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-25">
      <svg className="size-full" viewBox="0 0 1360 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="webRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8102E" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#E02444" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C8102E" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8102E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C8102E" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Major Neural Synaptic Web Conduits */}
        {/* Node 1 (Top Left) to Node 2 (Top Right) */}
        <path d="M 450 180 C 650 120, 800 220, 950 180" stroke="url(#webRedGrad)" strokeWidth="1.5" strokeDasharray="4 6" />
        {/* Node 1 to Node 3 */}
        <path d="M 300 320 C 320 420, 250 500, 260 580" stroke="url(#webRedGrad)" strokeWidth="1.5" strokeDasharray="3 5" />
        {/* Node 1 to Node 4 */}
        <path d="M 600 320 C 700 400, 750 480, 800 580" stroke="url(#webRedGrad)" strokeWidth="1.5" strokeDasharray="5 7" />
        {/* Node 2 to Node 4 */}
        <path d="M 1050 320 C 1000 420, 920 480, 850 580" stroke="url(#webRedGrad)" strokeWidth="1.5" strokeDasharray="4 6" />
        {/* Node 3 to Node 5 */}
        <path d="M 260 720 C 260 800, 280 850, 300 920" stroke="url(#webRedGrad)" strokeWidth="1.5" strokeDasharray="4 6" />
        {/* Node 4 to Node 7 & 8 */}
        <path d="M 750 720 C 680 800, 600 860, 520 920" stroke="url(#webRedGrad)" strokeWidth="1.5" strokeDasharray="3 5" />
        <path d="M 900 720 C 950 800, 1000 850, 1050 920" stroke="url(#webRedGrad)" strokeWidth="1.5" strokeDasharray="5 7" />
        {/* Cross-Web Webhook Bridge: Node 5 (DAST) to Node 7 (Cursor AST) */}
        <path d="M 380 960 C 450 940, 500 940, 580 960" stroke="url(#webRedGrad)" strokeWidth="2" />
        {/* Node 8 (Hallucination) to Node 7 (Cursor AST) */}
        <path d="M 900 960 C 800 940, 720 940, 640 960" stroke="url(#webRedGrad)" strokeWidth="2" />

        {/* Pulsing Synaptic Intersection Rings */}
        <circle cx="450" cy="180" r="4" fill="#C8102E" />
        <circle cx="950" cy="180" r="4" fill="#C8102E" />
        <circle cx="260" cy="580" r="4" fill="#C8102E" />
        <circle cx="800" cy="580" r="4" fill="#C8102E" />
        <circle cx="580" cy="960" r="5" fill="#E02444" />
        <circle cx="900" cy="960" r="4" fill="#C8102E" />
      </svg>
    </div>
  );
}

export default function BlogPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoCategory, setDemoCategory] = useState("Research Briefing");

  const handleOpenDemo = (category = "Research Briefing") => {
    setDemoCategory(category);
    setIsDemoOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col w-full bg-[#05080A] text-white selection:bg-[#C8102E] selection:text-white relative overflow-hidden">
        {/* Floating Pill Navbar */}
        <Navbar onOpenDemo={() => handleOpenDemo("Full AI Audit")} />

        <main className="flex-1 flex flex-col w-full pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-[1360px] mx-auto w-full space-y-16 sm:space-y-24">
            
            {/* ── 1. Blog Hero Header with Interactive LinkPreview ── */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A0E14] border border-[#4A1624] text-xs font-sans text-rose-300 shadow-xs"
              >
                <Sparkles className="size-3.5 text-[#C8102E]" />
                <span className="font-semibold tracking-wide">Interconnected Neural Knowledge Web</span>
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
                Every research pillar below operates as an interconnected closed-loop web-hook. From query ingestion across{" "}
                <LinkPreview
                  url="https://chatgpt.com"
                  className="font-semibold text-white underline decoration-[#C8102E] decoration-2 underline-offset-4 hover:text-[#C8102E]"
                >
                  ChatGPT 4o
                </LinkPreview>{" "}
                and{" "}
                <LinkPreview
                  url="https://perplexity.ai"
                  className="font-semibold text-white underline decoration-[#C8102E] decoration-2 underline-offset-4 hover:text-[#C8102E]"
                >
                  Perplexity Pro
                </LinkPreview>{" "}
                to DAST security audits and 1-click Cursor AST remediation — explore how enterprise brand authority is grounded in real time.
              </motion.p>

              {/* Interconnected Network Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#0E121B] border border-white/10 text-xs font-mono text-neutral-300 shadow-md"
              >
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-bold">9 Interconnected Nodes Live</span>
                </div>
                <span className="text-neutral-600">•</span>
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <Workflow className="size-3.5 text-rose-400" />
                  <span>Closed-Loop Web-Hook Topology</span>
                </div>
              </motion.div>
            </div>

            {/* ── 2. Interconnected Bento Web Grid (Spider-Man Web-Hook Architecture) ── */}
            <div className="relative w-full">
              {/* Organic Synaptic Web Background Filaments */}
              <SpiderWebOverlay />

              <BentoGrid className="auto-rows-[25rem] sm:auto-rows-[26rem] md:grid-cols-3 gap-6 relative z-10">
                
                {/* ═══ NODE 1: Master Blueprint (Col-Span 2) ═══ */}
                <BentoCard
                  name="Generative Engine Optimization in 2026: The Comprehensive Enterprise Blueprint"
                  description="A complete technical deep-dive into how multi-hop RAG pipelines, knowledge graph citations, and brand co-citations determine recommendation probability inside frontier search engines."
                  Icon={TrendingUp}
                  badge="Node #01 • Ingestion Root"
                  badgeColor="bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30"
                  meta="⚡ Feeds Node #02 &amp; #04 • 8 min read"
                  cta="Inspect Ingestion Root"
                  onCtaClick={() => handleOpenDemo("GEO Blueprint Research")}
                  className="col-span-3 lg:col-span-2 border-[#C8102E]/40"
                  background={
                    <div className="absolute inset-0 p-6 opacity-35 group-hover:opacity-75 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8102E]/25 rounded-full blur-3xl pointer-events-none" />
                      
                      <div className="max-w-md ml-auto space-y-2.5 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-[10px] text-rose-300 font-bold pb-1 border-b border-white/10">
                          <span>[WEBHOOK: /api/ingestion/consensus]</span>
                          <span className="text-emerald-400">ACTIVE HOOK ✓</span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#07090F]/90 border border-white/10 space-y-1.5 backdrop-blur-sm">
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

                        <div className="p-3 rounded-xl bg-[#07090F]/90 border border-white/10 space-y-1.5 backdrop-blur-sm">
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
                      </div>
                    </div>
                  }
                />

                {/* ═══ NODE 2: Sovereign Bharat Index (BVI) (Col-Span 1) ═══ */}
                <BentoCard
                  name="Why 70% of Indian AI Searches Are Displacing English-Only SaaS Brands"
                  description="How conversational Hinglish and Devanagari prompts trigger alternative retrieval indices in Sarvam, Claude, and GPT-4o — causing English-dominant brands to lose market share."
                  Icon={Languages}
                  badge="Node #02 • Vernacular Tokenizer"
                  badgeColor="bg-purple-500/20 text-[#D1B3FF] border-purple-500/30"
                  meta="⚡ Synced with Node #01 &amp; #09 • 6 min read"
                  cta="Explore BVI Web-Hook"
                  onCtaClick={() => handleOpenDemo("Bharat Index Study")}
                  className="col-span-3 lg:col-span-1"
                  background={
                    <div className="absolute inset-0 p-6 opacity-35 group-hover:opacity-75 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />
                      <div className="space-y-2 font-mono text-[11px]">
                        <div className="p-3 rounded-xl bg-[#07090F]/90 border border-purple-500/30 backdrop-blur-sm space-y-1">
                          <div className="text-[#D1B3FF] text-[10px] font-bold">[PIPE: Sarvam Indic Vectors]</div>
                          <div className="text-white text-xs truncate">&ldquo;Kaunsa billing software reliable hai?&rdquo;</div>
                        </div>
                        <div className="p-2 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-between text-xs">
                          <span className="text-neutral-300">Sarvam Match</span>
                          <span className="font-bold text-[#D1B3FF]">Tier-1 Lead</span>
                        </div>
                      </div>
                    </div>
                  }
                />

                {/* ═══ NODE 3: Autonomous llms.txt Standard (Col-Span 1) ═══ */}
                <BentoCard
                  name="The Autonomous llms.txt Standard: Structuring Directives for GPTBot & ClaudeBot"
                  description="Architectural guidelines for serving token-optimized llms.txt files that guide AI crawlers directly to canonical enterprise facts, API docs, and benchmarks."
                  Icon={FileCode}
                  badge="Node #03 • Crawler Conduit"
                  badgeColor="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                  meta="⚡ Validated by Node #05 • 7 min read"
                  cta="Inspect Crawler Directive"
                  onCtaClick={() => handleOpenDemo("llms.txt Architecture")}
                  className="col-span-3 lg:col-span-1"
                  background={
                    <div className="absolute inset-0 p-5 opacity-35 group-hover:opacity-75 transition-opacity duration-500">
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

                {/* ═══ NODE 4: Reverse-Engineering Perplexity Pro (Col-Span 2) ═══ */}
                <BentoCard
                  name="Reverse-Engineering Perplexity Pro: How Primary Domain Weights Win Citations"
                  description="Empirical analysis of 50,000 Perplexity Pro responses showing why direct technical documentation carries 48% citation weight over secondary forum listicles and SEO blogs."
                  Icon={Bot}
                  badge="Node #04 • Attribution Mesh"
                  badgeColor="bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30"
                  meta="⚡ Linked to Node #01 &amp; #08 • 5 min read"
                  cta="View Attribution Web"
                  onCtaClick={() => handleOpenDemo("Perplexity Lab Report")}
                  className="col-span-3 lg:col-span-2"
                  background={
                    <div className="absolute inset-0 p-6 opacity-35 group-hover:opacity-75 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-72 h-72 bg-[#C8102E]/15 rounded-full blur-3xl" />
                      <div className="max-w-md ml-auto grid grid-cols-3 gap-2 font-mono text-center">
                        <div className="p-3 rounded-xl bg-[#07090F]/90 border border-white/10 backdrop-blur-sm space-y-1">
                          <div className="text-2xl font-bold text-emerald-400">48%</div>
                          <div className="text-[10px] text-neutral-400 font-sans">Primary Docs</div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#07090F]/90 border border-white/10 backdrop-blur-sm space-y-1">
                          <div className="text-2xl font-bold text-[#C8102E]">32%</div>
                          <div className="text-[10px] text-neutral-400 font-sans">Knowledge Graph</div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#07090F]/90 border border-white/10 backdrop-blur-sm space-y-1">
                          <div className="text-2xl font-bold text-neutral-400">20%</div>
                          <div className="text-[10px] text-neutral-400 font-sans">Forum Mentions</div>
                        </div>
                      </div>
                    </div>
                  }
                />

                {/* ═══ NODE 5: DAST Security Audits & Zero-Trust (Col-Span 1) ═══ */}
                <BentoCard
                  name="DAST Security Audits: Preventing TLS and CSP Hallucination Vulnerabilities"
                  description="When enterprise websites block crawler IPs or fail CSP handshake policies, LLMs hallucinate fallback data. Continuous DAST scanning eliminates citation voids."
                  Icon={ShieldCheck}
                  badge="Node #05 • Security Sentinel"
                  badgeColor="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                  meta="⚡ Guards Node #03 &amp; Feeds #07 • 6 min read"
                  cta="View Sentinel Status"
                  onCtaClick={() => handleOpenDemo("Security & DAST Audit")}
                  className="col-span-3 lg:col-span-1"
                  background={
                    <div className="absolute inset-0 p-5 opacity-35 group-hover:opacity-75 transition-opacity duration-500">
                      <div className="p-3 rounded-xl bg-[#07090F] border border-cyan-500/30 font-mono text-[10.5px] space-y-1.5 backdrop-blur-sm">
                        <div className="flex items-center justify-between text-cyan-400 font-bold border-b border-white/10 pb-1">
                          <span>DAST Sentinel v4.2</span>
                          <span>PASS</span>
                        </div>
                        <div className="text-neutral-300">✓ TLS 1.3 Strict Mode</div>
                        <div className="text-neutral-300">✓ CSP Header Directives</div>
                        <div className="text-emerald-400 font-bold">✓ 200+ Audits Passed</div>
                      </div>
                    </div>
                  }
                />

                {/* ═══ NODE 6: Q3 2026 Perception Benchmark (Col-Span 1) ═══ */}
                <BentoCard
                  name="Q3 2026 Perception Benchmark: GPT-4o vs Claude 3.7 vs Gemini 3.5"
                  description="Benchmarking citation stability, domain grounding ratios, and hallucination frequencies across 1,000 Global 2000 brand queries."
                  Icon={Zap}
                  badge="Node #06 • Perception Matrix"
                  badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
                  meta="⚡ Cross-Model Benchmark • 9 min read"
                  cta="Read Perception Score"
                  onCtaClick={() => handleOpenDemo("Benchmark Study")}
                  className="col-span-3 lg:col-span-1"
                  background={
                    <div className="absolute inset-0 p-5 opacity-35 group-hover:opacity-75 transition-opacity duration-500">
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

                {/* ═══ NODE 7: Deterministic Cursor AST & IDE Remediation (Col-Span 1) ═══ */}
                <BentoCard
                  name="Deterministic IDE Remediation: Synthesizing Cursor Prompts in Under 30 Seconds"
                  description="How AIVI synthesizes verified AST-level prompts for Cursor IDE and Claude Code to remediate crawler directives and JSON-LD schema with zero manual coding."
                  Icon={Terminal}
                  badge="Node #07 • Autonomous Remediation"
                  badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
                  meta="⚡ Resolves Gaps from #05 &amp; #08 • 4 min read"
                  cta="Deploy AST Patch"
                  onCtaClick={() => handleOpenDemo("AST Remediation")}
                  className="col-span-3 lg:col-span-1"
                  background={
                    <div className="absolute inset-0 p-5 opacity-35 group-hover:opacity-75 transition-opacity duration-500">
                      <div className="p-3 rounded-xl bg-[#07090F] border border-blue-500/30 font-mono text-[10px] space-y-1 backdrop-blur-sm">
                        <div className="text-neutral-500">// Fix Missing GEO Schema</div>
                        <div className="text-emerald-400">&gt; npx @aivi/remediate</div>
                        <div className="text-blue-300">&gt; inject KnowledgeGraph</div>
                      </div>
                    </div>
                  }
                />

                {/* ═══ NODE 8: Sub-Minute Hallucination Alerts (Col-Span 2) ═══ */}
                <BentoCard
                  name="Sub-Minute Hallucination Alerts: Real-Time Pricing & Feature Drift Protection"
                  description="Detecting and mitigating model drift when generative search engines hallucinate deprecated legacy pricing or competitor features during live user sessions."
                  Icon={Activity}
                  badge="Node #08 • Drift Interceptor"
                  badgeColor="bg-amber-500/20 text-amber-300 border-amber-500/30"
                  meta="⚡ Auto-Triggers Node #07 • 5 min read"
                  cta="Inspect Interceptor Web"
                  onCtaClick={() => handleOpenDemo("Hallucination Alert Protocol")}
                  className="col-span-3 lg:col-span-2"
                  background={
                    <div className="absolute inset-0 p-6 opacity-35 group-hover:opacity-75 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl" />
                      <div className="max-w-md ml-auto space-y-2 font-mono text-[11px]">
                        <div className="p-2.5 rounded-xl bg-[#07090F]/90 border border-amber-500/30 flex items-center justify-between text-xs">
                          <span className="text-amber-300 flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                            <span>Drift Intercepted</span>
                          </span>
                          <span className="text-white font-bold">&lt; 42s Response</span>
                        </div>
                        <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-[10px] text-neutral-400">
                          Entity: Enterprise Pricing Anchor • Status: Schema Overwrite Injected ✓
                        </div>
                      </div>
                    </div>
                  }
                />

                {/* ═══ NODE 9: Multi-Hop RAG Knowledge Graph Synthesis (Col-Span 1) ═══ */}
                <BentoCard
                  name="Multi-Hop RAG Graph Synthesis: Winning Semantic Triplets"
                  description="How JSON-LD schema entity resolution binds your platform to primary category keywords inside frontier vector databases."
                  Icon={Network}
                  badge="Node #09 • Knowledge Graph"
                  badgeColor="bg-rose-500/20 text-rose-300 border-rose-500/30"
                  meta="⚡ Anchors Node #02 &amp; #03 • 6 min read"
                  cta="Explore Graph Triplets"
                  onCtaClick={() => handleOpenDemo("Knowledge Graph Synthesis")}
                  className="col-span-3 lg:col-span-1"
                  background={
                    <div className="absolute inset-0 p-5 opacity-35 group-hover:opacity-75 transition-opacity duration-500">
                      <div className="p-3 rounded-xl bg-[#07090F] border border-rose-500/30 font-mono text-[10.5px] space-y-2 backdrop-blur-sm">
                        <div className="text-rose-400 font-bold"># Semantic Triplet Map</div>
                        <div className="text-neutral-300 text-[10px]">&gt; Brand (Subject)</div>
                        <div className="text-emerald-400 text-[10px]">&gt; Authoritative GEO (Predicate)</div>
                        <div className="text-blue-300 text-[10px]">&gt; Tier-1 Citation (Object)</div>
                      </div>
                    </div>
                  }
                />

              </BentoGrid>
            </div>

            {/* ── 3. Bottom Newsletter & Enterprise Briefing Banner ── */}
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
