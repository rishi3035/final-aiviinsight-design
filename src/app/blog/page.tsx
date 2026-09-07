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
  Network,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LinkPreview } from "@/components/ui/link-preview";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

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
        
        {/* ── Background Subtle Grid Texture (Matching Pricing Section with Dark Obsidian & Fade-Red) ── */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 size-full z-0",
            "bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]",
            "bg-[size:36px_36px]",
            "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
          )}
        />

        {/* ── Ambient Fade-Red Glow Elements Across Page ── */}
        <div className="pointer-events-none absolute top-0 inset-x-0 h-[650px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,16,46,0.18),transparent_65%)] z-0" />
        <div className="pointer-events-none absolute top-1/4 -right-24 w-[600px] h-[600px] bg-[#C8102E]/10 rounded-full blur-[140px] z-0" />
        <div className="pointer-events-none absolute top-2/3 -left-24 w-[550px] h-[550px] bg-[#C8102E]/8 rounded-full blur-[140px] z-0" />

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

            {/* ── 2. Clean Bento Grid (No Text Overlap, Split & Stacked Stages) ── */}
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* ═══ BOX 1: Master Blueprint (Col-Span 2, Split Layout) ═══ */}
              <BentoCard
                layout="split"
                name="Generative Engine Optimization in 2026: The Comprehensive Enterprise Blueprint"
                description="A complete technical deep-dive into how multi-hop RAG pipelines, knowledge graph citations, and brand co-citations determine recommendation probability inside frontier search engines."
                Icon={TrendingUp}
                badge="GEO & Citations • Master Blueprint"
                badgeColor="bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30"
                meta="8 min read • Sep 2026"
                cta="Read Master Blueprint"
                onCtaClick={() => handleOpenDemo("GEO Blueprint Research")}
                className="col-span-1 md:col-span-2 lg:col-span-2"
                visual={
                  <div className="space-y-3 font-mono text-[11px]">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-neutral-400">
                      <span className="text-[10px] font-bold text-rose-300 tracking-wider uppercase">Live Probe Consensus</span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">99.4% Avg</span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-neutral-300 text-xs">
                          <span className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>ChatGPT 4o Search</span>
                          </span>
                          <span className="text-emerald-400 font-bold">99.4%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full w-[99.4%]" />
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-neutral-300 text-xs">
                          <span className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-rose-400" />
                            <span>Perplexity Pro Multi-Hop</span>
                          </span>
                          <span className="text-rose-400 font-bold">98.6%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#C8102E] rounded-full w-[98.6%]" />
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-neutral-300 text-xs">
                          <span className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-blue-400" />
                            <span>Claude 3.7 Reasoning</span>
                          </span>
                          <span className="text-blue-400 font-bold">97.8%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-400 rounded-full w-[97.8%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 2: Sovereign Bharat Index (BVI) (Col-Span 1) ═══ */}
              <BentoCard
                layout="stacked"
                name="Why 70% of Indian AI Searches Are Displacing English-Only SaaS Brands"
                description="How conversational Hinglish and Devanagari prompts trigger alternative retrieval indices in Sarvam, Claude, and GPT-4o."
                Icon={Languages}
                badge="Bharat Index (BVI)"
                badgeColor="bg-purple-500/20 text-[#D1B3FF] border-purple-500/30"
                meta="6 min read • Sep 2026"
                cta="Explore BVI Study"
                onCtaClick={() => handleOpenDemo("Bharat Index Study")}
                className="col-span-1"
                visual={
                  <div className="space-y-2.5 font-mono text-[11px]">
                    <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-1">
                      <div className="text-purple-300 text-[10px] font-bold"># Regional Prompt Vector</div>
                      <div className="text-white text-xs truncate">&ldquo;Kaunsa billing software sabse reliable hai?&rdquo;</div>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5 text-xs">
                      <span className="text-neutral-300">Sarvam Indic LLM</span>
                      <span className="font-bold text-purple-300">Tier-1 Citation</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5 text-xs">
                      <span className="text-neutral-400">English Fallback</span>
                      <span className="font-bold text-rose-400">0% Displaced</span>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 3: Autonomous llms.txt Standard (Col-Span 1) ═══ */}
              <BentoCard
                layout="stacked"
                name="The Autonomous llms.txt Standard: Structuring Directives for GPTBot & ClaudeBot"
                description="Architectural guidelines for serving token-optimized llms.txt files that guide AI crawlers directly to canonical enterprise facts and benchmarks."
                Icon={FileCode}
                badge="DAST & llms.txt"
                badgeColor="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                meta="7 min read • Aug 2026"
                cta="Inspect llms.txt Guide"
                onCtaClick={() => handleOpenDemo("llms.txt Architecture")}
                className="col-span-1"
                visual={
                  <div className="p-3 rounded-xl bg-black/50 border border-emerald-500/20 font-mono text-[10.5px] space-y-1.5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-1 text-neutral-400">
                      <span className="text-emerald-400 font-bold">/llms.txt</span>
                      <span className="text-emerald-400">200 OK</span>
                    </div>
                    <div className="text-neutral-400">&gt; User-agent: GPTBot, ClaudeBot</div>
                    <div className="text-neutral-400">&gt; Allow: /api, /benchmarks</div>
                    <div className="text-emerald-300 font-semibold pt-1">&gt; Authority: 100% Verified</div>
                  </div>
                }
              />

              {/* ═══ BOX 4: Reverse-Engineering Perplexity Pro (Col-Span 2, Split Layout) ═══ */}
              <BentoCard
                layout="split"
                name="Reverse-Engineering Perplexity Pro: How Primary Domain Weights Win Citations"
                description="Empirical analysis of 50,000 Perplexity Pro responses showing why direct technical documentation carries 48% citation weight over secondary forum listicles and SEO blogs."
                Icon={Bot}
                badge="GEO & Citations • Empirical Lab"
                badgeColor="bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30"
                meta="5 min read • Aug 2026"
                cta="Read Perplexity Lab Report"
                onCtaClick={() => handleOpenDemo("Perplexity Lab Report")}
                className="col-span-1 md:col-span-2 lg:col-span-2"
                visual={
                  <div className="space-y-3 font-mono">
                    <div className="text-[10px] font-bold text-rose-300 uppercase tracking-wider pb-1 border-b border-white/10">
                      Citation Weight Breakdown
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20 space-y-1">
                        <div className="text-xl sm:text-2xl font-bold text-emerald-400">48%</div>
                        <div className="text-[10px] text-neutral-400 font-sans">Primary Docs</div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-[#C8102E]/30 space-y-1">
                        <div className="text-xl sm:text-2xl font-bold text-rose-400">32%</div>
                        <div className="text-[10px] text-neutral-400 font-sans">JSON-LD Schema</div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                        <div className="text-xl sm:text-2xl font-bold text-neutral-400">20%</div>
                        <div className="text-[10px] text-neutral-400 font-sans">Forums / Social</div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 5: DAST Security Audits & Zero-Trust (Col-Span 1) ═══ */}
              <BentoCard
                layout="stacked"
                name="DAST Security Audits: Preventing TLS and CSP Hallucination Vulnerabilities"
                description="When enterprise websites block crawler IPs or fail CSP handshake policies, LLMs hallucinate fallback data. Continuous DAST scanning eliminates citation voids."
                Icon={ShieldCheck}
                badge="Security & Compliance"
                badgeColor="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                meta="6 min read • Aug 2026"
                cta="View Security Report"
                onCtaClick={() => handleOpenDemo("Security & DAST Audit")}
                className="col-span-1"
                visual={
                  <div className="p-3 rounded-xl bg-black/50 border border-cyan-500/20 font-mono text-[10.5px] space-y-1.5">
                    <div className="flex items-center justify-between text-cyan-400 font-bold border-b border-white/10 pb-1">
                      <span>DAST Engine v4.2</span>
                      <span className="text-emerald-400 font-bold">ALL PASS</span>
                    </div>
                    <div className="text-neutral-300 flex items-center gap-1.5 pt-0.5">
                      <CheckCircle2 className="size-3 text-emerald-400" />
                      <span>TLS 1.3 Strict Mode</span>
                    </div>
                    <div className="text-neutral-300 flex items-center gap-1.5">
                      <CheckCircle2 className="size-3 text-emerald-400" />
                      <span>CSP Crawler Directives</span>
                    </div>
                    <div className="text-emerald-400 font-bold text-[10px] pt-0.5">
                      ✓ Zero Injection Vulnerabilities
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 6: Q3 2026 Multi-Model Perception Benchmark (Col-Span 1) ═══ */}
              <BentoCard
                layout="stacked"
                name="Q3 2026 Perception Benchmark: GPT-4o vs Claude 3.7 vs Gemini 3.5"
                description="Benchmarking citation stability, domain grounding ratios, and hallucination frequencies across 1,000 Global 2000 brand queries."
                Icon={Zap}
                badge="Model Benchmarks"
                badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
                meta="9 min read • Jul 2026"
                cta="Read Benchmark Study"
                onCtaClick={() => handleOpenDemo("Benchmark Study")}
                className="col-span-1"
                visual={
                  <div className="p-3 rounded-xl bg-black/50 border border-blue-500/20 font-mono text-[10.5px] space-y-2">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="text-white font-bold">GPT-4o Search</span>
                      <span className="text-emerald-400 font-bold">99.4%</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="text-white font-bold">Claude 3.7 Sonnet</span>
                      <span className="text-blue-400 font-bold">98.2%</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="text-white font-bold">Gemini 3.5 Pro</span>
                      <span className="text-purple-400 font-bold">96.8%</span>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 7: Deterministic Cursor AST & IDE Remediation (Col-Span 1) ═══ */}
              <BentoCard
                layout="stacked"
                name="Deterministic IDE Remediation: Synthesizing Cursor Prompts in Under 30 Seconds"
                description="How AIVI synthesizes verified AST-level prompts for Cursor IDE and Claude Code to remediate crawler directives and JSON-LD schema with zero manual coding."
                Icon={Terminal}
                badge="1-Click AST Fix"
                badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
                meta="4 min read • Jul 2026"
                cta="View AST Prompts"
                onCtaClick={() => handleOpenDemo("AST Remediation")}
                className="col-span-1"
                visual={
                  <div className="p-3 rounded-xl bg-black/50 border border-blue-500/20 font-mono text-[10px] space-y-1">
                    <div className="text-neutral-500">// Fix Missing GEO Schema</div>
                    <div className="text-emerald-400">&gt; npx @aivi/remediate</div>
                    <div className="text-blue-300">&gt; inject KnowledgeGraph</div>
                    <div className="text-emerald-300 pt-0.5">✓ 4 files updated cleanly</div>
                  </div>
                }
              />

              {/* ═══ BOX 8: Sub-Minute Hallucination Alerts & SLA Enforcement (Col-Span 2, Split Layout) ═══ */}
              <BentoCard
                layout="split"
                name="Sub-Minute Hallucination Alerts: Real-Time Pricing & Feature Drift Protection"
                description="Detecting and mitigating model drift when generative search engines hallucinate deprecated legacy pricing or competitor features during live user sessions."
                Icon={Activity}
                badge="SOC2 Compliance & SLA"
                badgeColor="bg-amber-500/20 text-amber-300 border-amber-500/30"
                meta="5 min read • Jul 2026"
                cta="Inspect Alert Protocol"
                onCtaClick={() => handleOpenDemo("Hallucination Alert Protocol")}
                className="col-span-1 md:col-span-2 lg:col-span-2"
                visual={
                  <div className="space-y-2.5 font-mono text-[11px]">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/30 flex items-center justify-between text-xs">
                      <span className="text-amber-300 flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                        <span>Drift Intercepted</span>
                      </span>
                      <span className="text-white font-bold">&lt; 42s Latency</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[10px] text-neutral-400 space-y-1">
                      <div>Entity: <span className="text-neutral-200">Enterprise Pricing Anchor</span></div>
                      <div>Action: <span className="text-emerald-400">Schema Overwrite Injected ✓</span></div>
                    </div>
                  </div>
                }
              />

              {/* ═══ BOX 9: Multi-Hop RAG Knowledge Graph Synthesis (Col-Span 1) ═══ */}
              <BentoCard
                layout="stacked"
                name="Multi-Hop RAG Graph Synthesis: Winning Semantic Triplets"
                description="How JSON-LD schema entity resolution binds your platform to primary category keywords inside frontier vector databases."
                Icon={Network}
                badge="Knowledge Graph"
                badgeColor="bg-rose-500/20 text-rose-300 border-rose-500/30"
                meta="6 min read • Jun 2026"
                cta="View Graph Architecture"
                onCtaClick={() => handleOpenDemo("Knowledge Graph Synthesis")}
                className="col-span-1"
                visual={
                  <div className="p-3 rounded-xl bg-black/50 border border-rose-500/20 font-mono text-[10.5px] space-y-1.5">
                    <div className="text-rose-400 font-bold border-b border-white/10 pb-1"># Semantic Triplet Map</div>
                    <div className="text-neutral-300 text-[10px]">&gt; Brand (Subject)</div>
                    <div className="text-emerald-400 text-[10px]">&gt; Authoritative GEO (Predicate)</div>
                    <div className="text-blue-300 text-[10px]">&gt; Tier-1 Citation (Object)</div>
                  </div>
                }
              />

            </BentoGrid>

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
