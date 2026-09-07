"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LinkPreview } from "@/components/ui/link-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All Articles",
  "GEO & Citations",
  "Bharat Index (BVI)",
  "DAST & llms.txt",
  "Model Benchmarks",
];

const ARTICLES = [
  {
    id: "geo-2026-blueprint",
    title: "Generative Engine Optimization (GEO) in 2026: The Comprehensive Enterprise Blueprint",
    category: "GEO & Citations",
    badgeColor: "bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30",
    readTime: "8 min read",
    date: "Sep 2026",
    summary:
      "A complete technical deep-dive into how multi-hop RAG pipelines, knowledge graph citations, and brand co-citations determine recommendation probability inside frontier search engines.",
    featured: true,
    author: "Rishikesh & AIVI Research Team",
    linkUrl: "https://perplexity.ai",
    previewUrl: "https://perplexity.ai",
    tags: ["GEO", "Perplexity", "ChatGPT 4o", "RAG"],
  },
  {
    id: "bharat-vernacular-displacement",
    title: "Why 70% of Indian AI Searches Are Displacing English-Only SaaS Brands",
    category: "Bharat Index (BVI)",
    badgeColor: "bg-[#B388FF]/20 text-[#D1B3FF] border-[#B388FF]/30",
    readTime: "6 min read",
    date: "Sep 2026",
    summary:
      "How conversational Hinglish and Devanagari prompts trigger alternative retrieval indices in Sarvam, Claude, and GPT-4o — causing English-dominant brands to lose market share.",
    featured: false,
    author: "AIVI Indic Intelligence",
    linkUrl: "https://sarvam.ai",
    previewUrl: "https://sarvam.ai",
    tags: ["BVI", "Indic LLMs", "Hinglish", "Sarvam"],
  },
  {
    id: "llms-txt-standard-architecture",
    title: "The Autonomous llms.txt Standard: Structuring Directives for GPTBot & ClaudeBot",
    category: "DAST & llms.txt",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    readTime: "7 min read",
    date: "Aug 2026",
    summary:
      "Architectural guidelines for serving token-optimized llms.txt files that guide AI crawlers directly to canonical enterprise facts, API docs, and benchmarks.",
    featured: false,
    author: "Security & Crawlability Group",
    linkUrl: "https://anthropic.com/claude",
    previewUrl: "https://anthropic.com/claude",
    tags: ["llms.txt", "Crawlers", "ClaudeBot", "GPTBot"],
  },
  {
    id: "multi-hop-rag-citations",
    title: "Reverse-Engineering Perplexity Pro: How Primary Domain Weights Win Citations",
    category: "GEO & Citations",
    badgeColor: "bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30",
    readTime: "5 min read",
    date: "Aug 2026",
    summary:
      "Empirical analysis of 50,000 Perplexity Pro responses showing why direct technical documentation carries 48% citation weight over secondary forum listicles.",
    featured: false,
    author: "AIVI Evaluation Labs",
    linkUrl: "https://perplexity.ai",
    previewUrl: "https://perplexity.ai",
    tags: ["Perplexity Pro", "RAG", "Attribution"],
  },
  {
    id: "dast-security-ai-crawlers",
    title: "DAST Security Audits: Preventing TLS and CSP Hallucination Vulnerabilities",
    category: "DAST & llms.txt",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    readTime: "6 min read",
    date: "Aug 2026",
    summary:
      "When enterprise websites block crawler IPs or fail CSP handshake policies, LLMs hallucinate fallback data. How continuous DAST scanning solves the hallucination gap.",
    featured: false,
    author: "Cybersecurity Research",
    linkUrl: "https://chatgpt.com",
    previewUrl: "https://chatgpt.com",
    tags: ["DAST", "Cybersecurity", "CSP Headers"],
  },
  {
    id: "model-benchmarks-q3-2026",
    title: "Q3 2026 Multi-Model Perception Benchmark: Comparing GPT-4o, Claude 3.7 & Gemini 3.5",
    category: "Model Benchmarks",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    readTime: "9 min read",
    date: "Jul 2026",
    summary:
      "Benchmarking citation stability, domain grounding ratios, and hallucination frequencies across 1,000 Global 2000 brand queries.",
    featured: false,
    author: "AIVI Benchmark Fleet",
    linkUrl: "https://gemini.google.com",
    previewUrl: "https://gemini.google.com",
    tags: ["Benchmarks", "Gemini 3.5", "Claude 3.7", "GPT-4o"],
  },
];

export default function BlogPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "All Articles" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES[0];

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col w-full bg-[#05080A] text-white selection:bg-[#C8102E] selection:text-white">
        {/* Floating Pill Navbar */}
        <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

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

            {/* ── 2. Featured Master Article Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#0E121B] via-[#121824] to-[#0E121B] border border-white/15 hover:border-[#C8102E]/50 transition-all shadow-2xl relative overflow-hidden group text-left"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6 max-w-4xl">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#C8102E]/20 text-rose-300 border border-[#C8102E]/40 uppercase tracking-wider">
                    Featured Master Blueprint
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <Calendar className="size-3.5" />
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <Clock className="size-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="font-jakarta text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-rose-100 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 flex-wrap gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    {featuredArticle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsDemoOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white font-sans font-bold text-xs sm:text-sm transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Read Full Research Report</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* ── 3. Filter Tabs & Live Search Bar ── */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer font-sans",
                      selectedCategory === cat
                        ? "bg-white text-black shadow-md"
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
                  placeholder="Search articles, models, RAG..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-[#0E121B] border border-white/15 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C8102E] transition-colors"
                />
              </div>
            </div>

            {/* ── 4. Curated Articles Grid (Curvy Enterprise Bento Cards) ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {filteredArticles.map((article, idx) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-7 rounded-3xl bg-[#0E121B] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-5 shadow-xl group hover:scale-[1.01]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className={cn("px-2.5 py-0.5 rounded-full text-[11px] font-mono border font-semibold", article.badgeColor)}>
                        {article.category}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500">
                        {article.readTime}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-jakarta text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-rose-200 transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-sans text-xs text-neutral-400 leading-relaxed line-clamp-3">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {article.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                      <span className="text-[11px] text-neutral-500">{article.author}</span>
                      <button
                        type="button"
                        onClick={() => setIsDemoOpen(true)}
                        className="text-[#C8102E] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── 5. Frontier Search Engine Telemetry Strip (LinkPreview Integration) ── */}
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

            {/* ── 6. Bottom Newsletter & Enterprise Briefing Banner ── */}
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
                  onClick={() => setIsDemoOpen(true)}
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
          initialCategory="Full AI Audit"
        />
      </div>
    </SmoothScroll>
  );
}
