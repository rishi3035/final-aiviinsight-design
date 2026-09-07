"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  Zap,
  ShieldCheck,
  Globe,
  Settings2,
  Command,
  Plus,
  ArrowRight,
  Layers,
  Activity,
  CheckCircle2,
  Lock,
  Search,
  Cpu,
  FileCode,
  TrendingUp,
  Languages,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export default function FeaturesPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedDemoCategory, setSelectedDemoCategory] = useState("GEO & AI Search");
  const [isSyncActive, setIsSyncActive] = useState(true);

  const handleOpenDemo = (category = "GEO & AI Search") => {
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
            
            {/* ── 1. Hero Header ── */}
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A0E14] border border-[#4A1624] text-xs font-sans text-rose-300 shadow-xs"
              >
                <Sparkles className="size-3.5 text-[#C8102E]" />
                <span className="font-semibold tracking-wide">Enterprise Generative Governance &amp; AI Search Suite</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="font-jakarta text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.08]"
              >
                Deterministic Governance &amp; <br />
                <span className="bg-gradient-to-r from-white via-neutral-200 to-[#C8102E] bg-clip-text text-transparent">
                  Citation Dominance Across Frontier AI.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-sans text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal"
              >
                Empowering Global 2000 enterprises and category leaders to benchmark synthetic perception, enforce factual grounding, prevent multilingual brand erosion, and automate IDE-level security compliance.
              </motion.p>
            </div>

            {/* ── 2. Primary Bento Grid Showcase (Interactive Component) ── */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 flex-wrap gap-2">
                <div className="space-y-1 text-left">
                  <h2 className="text-xl sm:text-2xl font-bold font-jakarta text-white tracking-tight">
                    Core Intelligence &amp; Synthesis Telemetry
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans">
                    Enterprise-grade multi-model observability, displacement telemetry, and deterministic IDE remediation pipelines.
                  </p>
                </div>
                <Badge className="bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30 font-mono text-xs">
                  Enterprise Fleet v2.4 Active
                </Badge>
              </div>

              {/* Bento Grid Showcase Integration */}
              <BentoGridShowcase
                integration={
                  <Card className="flex h-full flex-col justify-between p-6 sm:p-7 bg-[#0E121B] border-white/10 hover:border-[#C8102E]/50 transition-all rounded-3xl shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="space-y-4 text-left relative z-10">
                      <div className="flex size-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C8102E] to-[#FF7A1A] text-white shadow-lg shadow-red-950/40">
                        <Bot className="size-6" />
                      </div>
                      
                      <div className="space-y-2">
                        <CardTitle className="text-2xl font-bold text-white">
                          Frontier Model &amp; Graph Ingestion
                        </CardTitle>
                        <CardDescription className="text-sm text-neutral-400 leading-relaxed">
                          Performs sub-second neural query evaluations across OpenAI ChatGPT Search, Anthropic Claude 3.7, Perplexity Pro, Google Gemini 3.5 Flash, and Indic foundation models to capture live grounding consensus.
                        </CardDescription>
                      </div>

                      <div className="space-y-2 pt-2 text-xs font-mono text-neutral-300">
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#07090F] border border-white/10">
                          <span className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>ChatGPT 4o Enterprise Search</span>
                          </span>
                          <span className="text-emerald-400 font-bold">99.4% Fidelity</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#07090F] border border-white/10">
                          <span className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-blue-400" />
                            <span>Claude 3.7 Sonnet Reasoning</span>
                          </span>
                          <span className="text-blue-400 font-bold">Anchored</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#07090F] border border-white/10">
                          <span className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-[#C8102E]" />
                            <span>Perplexity Pro Indic Telemetry</span>
                          </span>
                          <span className="text-rose-300 font-bold">Verified</span>
                        </div>
                      </div>
                    </div>

                    <CardFooter className="pt-6 mt-auto flex items-center justify-between border-t border-white/10 p-0 relative z-10">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenDemo("GEO & AI Search")}
                        className="border-white/20 hover:bg-white/10 text-white text-xs font-semibold cursor-pointer"
                      >
                        <Settings2 className="mr-2 h-4 w-4 text-[#C8102E]" />
                        Configure Ingestion Pipeline
                      </Button>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-neutral-400">Live Ingestion</span>
                        <Switch
                          checked={isSyncActive}
                          onCheckedChange={setIsSyncActive}
                          aria-label="Toggle live sync"
                        />
                      </div>
                    </CardFooter>
                  </Card>
                }
                trackers={
                  <Card className="h-full bg-[#0E121B] border-white/10 hover:border-white/20 transition-all rounded-3xl p-6 flex flex-col justify-between text-left shadow-xl">
                    <CardContent className="p-0 flex h-full flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase mb-1">
                          <Activity className="size-3.5" />
                          <span>Active Observability</span>
                        </div>
                        <CardTitle className="text-lg font-bold text-white">
                          Distributed Grounding Probes
                        </CardTitle>
                        <CardDescription className="text-xs text-neutral-400">
                          05 Frontier Model Families • 10,000+ Daily Evaluation Vectors
                        </CardDescription>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex -space-x-2 overflow-hidden">
                          <div className="size-8 rounded-full bg-emerald-600 border-2 border-[#0E121B] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                            GPT
                          </div>
                          <div className="size-8 rounded-full bg-orange-600 border-2 border-[#0E121B] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                            CLD
                          </div>
                          <div className="size-8 rounded-full bg-blue-600 border-2 border-[#0E121B] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                            PPX
                          </div>
                          <div className="size-8 rounded-full bg-purple-600 border-2 border-[#0E121B] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                            GEM
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          100% Ingestion SLA
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                }
                statistic={
                  <Card className="relative h-full w-full overflow-hidden bg-[#0E121B] border-white/10 hover:border-[#C8102E]/40 transition-all rounded-3xl shadow-xl flex items-center justify-center p-6">
                    {/* Dotted background */}
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(#C8102E 1.5px, transparent 1.5px)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                    <CardContent className="relative z-10 flex flex-col items-center justify-center text-center p-0 space-y-1">
                      <div className="text-6xl sm:text-7xl font-extrabold font-jakarta bg-gradient-to-br from-white via-neutral-100 to-[#C8102E] bg-clip-text text-transparent">
                        10.4×
                      </div>
                      <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                        Verified Citation Weight Lift
                      </div>
                    </CardContent>
                  </Card>
                }
                focus={
                  <Card className="h-full bg-[#0E121B] border-white/10 hover:border-white/20 transition-all rounded-3xl p-6 flex flex-col justify-between text-left shadow-xl">
                    <CardContent className="p-0 flex h-full flex-col justify-between space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg font-bold text-white">
                            Sovereign Indic Accuracy Matrix
                          </CardTitle>
                          <CardDescription className="text-xs text-neutral-400">
                            Hindi, Hinglish &amp; Regional Dialect Fidelity
                          </CardDescription>
                        </div>
                        <Badge className="bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30 font-mono text-[10px]">
                          Sovereign
                        </Badge>
                      </div>

                      <div>
                        <span className="text-5xl font-extrabold font-jakarta text-white">96.4%</span>
                      </div>

                      <div className="flex justify-between text-[11px] font-mono text-neutral-400 pt-1 border-t border-white/5">
                        <span>Max Entity Authority</span>
                        <span className="text-emerald-400">Zero Hallucinations SLA</span>
                      </div>
                    </CardContent>
                  </Card>
                }
                productivity={
                  <Card className="h-full bg-[#0E121B] border-white/10 hover:border-white/20 transition-all rounded-3xl p-6 flex flex-col justify-between text-left shadow-xl">
                    <CardContent className="p-0 flex h-full flex-col justify-end space-y-2">
                      <div className="size-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <FileCode className="size-4" />
                      </div>
                      <CardTitle className="text-lg font-bold text-white">
                        Deterministic IDE Remediation Engine
                      </CardTitle>
                      <CardDescription className="text-xs text-neutral-400 leading-relaxed">
                        Synthesizes verified AST-level prompts for Cursor IDE, Claude Code, and GitHub Copilot to remediate infrastructure vulnerabilities and crawlability bottlenecks instantly.
                      </CardDescription>
                    </CardContent>
                  </Card>
                }
                shortcuts={
                  <Card className="h-full bg-[#0E121B] border-white/10 hover:border-white/20 transition-all rounded-3xl p-6 flex items-center justify-between text-left shadow-xl">
                    <CardContent className="p-0 flex w-full flex-wrap items-center justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-lg font-bold text-white">
                          Global Telemetry Command &amp; Control
                        </CardTitle>
                        <CardDescription className="text-xs text-neutral-400">
                          Trigger instant multi-engine displacement matrices, compliance audits, and knowledge graph diffs via unified enterprise hotkeys.
                        </CardDescription>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex h-8 px-2.5 items-center justify-center rounded-lg border border-white/15 bg-[#07090F] font-mono text-xs font-bold text-neutral-200 shadow-inner">
                          <Command className="size-3.5 mr-1" />
                          <span>K</span>
                        </div>
                        <span className="text-xs text-neutral-500 font-mono">+</span>
                        <div className="flex h-8 px-2.5 items-center justify-center rounded-lg border border-white/15 bg-[#07090F] font-mono text-xs font-bold text-neutral-200 shadow-inner">
                          <span>A</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                }
              />
            </div>

            {/* ── 3. Four Core Pillar Suites (Curvy Deep Bento) ── */}
            <div className="space-y-8 pt-6">
              <div className="max-w-2xl mx-auto text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold font-jakarta text-white tracking-tight">
                  Mission-Critical Pillars of Generative Governance
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans">
                  Institutional-grade infrastructure engineered to monitor, protect, and scale enterprise market share in the LLM-native web.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "Generative Engine Optimization (GEO) & Citation Engineering",
                    desc: "Reverse-engineer and optimize the multi-hop retrieval pipelines powering AI answer engines. Establish verifiable domain authority, secure primary source attribution, and systematically displace competing brands on high-intent commercial prompts.",
                    tag: "Algorithmic Attribution",
                    badgeColor: "bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30",
                    points: [
                      "Multi-hop RAG citation and domain authority benchmarking",
                      "Algorithmic displacement modeling for high-intent B2B queries",
                      "Authoritative schema blueprints and entity graph structuring",
                    ],
                  },
                  {
                    icon: Languages,
                    title: "Bharat Visibility Index™ (BVI) Multilingual Governance",
                    desc: "Protect enterprise brand equity across India's rapidly expanding multilingual AI user base. Neutralize English-only bias by structuring localized semantic vectors across Hindi, Hinglish, Tamil, and regional conversational search architectures.",
                    tag: "Sovereign Indic Grounding",
                    badgeColor: "bg-[#B388FF]/20 text-[#D1B3FF] border-[#B388FF]/30",
                    points: [
                      "Dialect-aware conversational entity grounding across 12+ Indic languages",
                      "Tier-1/Tier-2 enterprise market displacement and penetration analytics",
                      "Native alignment with sovereign Indian foundation models and tokenizers",
                    ],
                  },
                  {
                    icon: ShieldCheck,
                    title: "Autonomous DAST & llms.txt Crawler Infrastructure",
                    desc: "Execute 200+ continuous, non-intrusive DAST assessments against public-facing infrastructure while serving structured, token-optimized llms.txt directives to frontier AI web crawlers.",
                    tag: "Security & Agentic Crawlability",
                    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                    points: [
                      "Continuous TLS, CSP header, and endpoint security posture validation",
                      "Machine-readable llms.txt repository and documentation structuring",
                      "One-click deterministic remediation instructions for modern developer workflows",
                    ],
                  },
                  {
                    icon: Activity,
                    title: "Synthetic Perception & Hallucination Defense Protocol",
                    desc: "Deploy continuous automated telemetry across OpenAI, Anthropic, Google, and Perplexity ecosystems. Detect synthetic hallucinations, outdated commercial terms, and negative sentiment before they reach enterprise buyers.",
                    tag: "Hallucination Defense",
                    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
                    points: [
                      "Sub-minute hallucination detection and cross-model discrepancy alerting",
                      "Automated publisher grounding and corroborative citation mapping",
                      "Institutional-grade audit reporting and SOC2-ready compliance exports",
                    ],
                  },
                ].map((suite, idx) => {
                  const Icon = suite.icon;
                  return (
                    <motion.div
                      key={suite.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="p-7 sm:p-8 rounded-3xl bg-[#0E121B] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6 text-left shadow-xl group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                            <Icon className="size-6 text-[#C8102E]" />
                          </div>
                          <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-mono border font-semibold", suite.badgeColor)}>
                            {suite.tag}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-jakarta text-xl font-bold text-white tracking-tight">
                            {suite.title}
                          </h3>
                          <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                            {suite.desc}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-white/5">
                          {suite.points.map((pt, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-xs text-neutral-300 font-sans">
                              <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => handleOpenDemo(suite.title)}
                        className="w-full justify-between border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold cursor-pointer"
                      >
                        <span>Explore {suite.title.split(" ")[0]} Architecture</span>
                        <ArrowRight className="size-4 text-[#C8102E]" />
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ── 4. Bottom Full-Width CTA Banner ── */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A0E14] via-[#0E121B] to-[#1A0E14] border border-[#C8102E]/30 flex flex-col lg:flex-row items-center justify-between gap-8 text-left shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-2 relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase">
                  <Sparkles className="size-3.5" />
                  <span>Enterprise Deployment &amp; Readiness</span>
                </div>
                <h3 className="font-jakarta text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Secure Your Enterprise&apos;s Authoritative Foothold in Generative AI Search.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Deploy our non-intrusive multi-model audit pipeline to benchmark synthetic brand perception, detect citation gaps, and protect market share across every frontier LLM.
                </p>
              </div>

              <div className="flex items-center gap-3 relative z-10 w-full lg:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() => handleOpenDemo("Full AI Audit")}
                  className="w-full lg:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white font-sans font-bold text-sm sm:text-base shadow-xl shadow-red-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Schedule Enterprise Architecture Review</span>
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
          initialCategory={selectedDemoCategory}
        />
      </div>
    </SmoothScroll>
  );
}
