"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Bot,
  CircleCheck,
  Copy,
  Check,
  Lock,
  Sparkles,
  Search,
  ExternalLink,
  Mic,
  TrendingUp,
  FileText,
  Users,
  Award,
  ArrowRight,
  Radio,
  Star,
  Quote,
  Scale,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Cpu,
  QrCode,
  Hospital,
} from "lucide-react";
import { CORE_PLATFORMS, SPECIALIZED_VERTICALS, TESTIMONIALS } from "@/lib/data";

interface CorePlatformsProps {
  onOpenDemoCategory: (categoryName: string) => void;
}

interface ProductTabItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  icon: React.ReactNode;
  brandColor: string;
  frameBg: string;
  url: string;
  isExternal: boolean;
  tagline: string;
  quote: string;
  reviewer: {
    name: string;
    role: string;
    company: string;
    initials: string;
  };
  metrics: { label: string; value: string }[];
  challenge: string;
  execution: string;
  impact: string;
}

const ALL_PRODUCTS: ProductTabItem[] = [
  {
    id: "hackmywebsite",
    name: "Hack My Website",
    category: "Cybersecurity SaaS",
    badge: "LIVE",
    icon: <ShieldCheck className="size-4" />,
    brandColor: "#10B981",
    frameBg: "bg-gradient-to-br from-emerald-500 via-teal-600 to-slate-900",
    url: "https://hackmywebsite.io/",
    isExternal: true,
    tagline: "Automated Website Security Scanner & AI Fix Generator",
    quote:
      "Hack My Website's AI Launch Score caught two missing security headers and an unauthenticated staging API endpoint right before our client audit. The 1-click Cursor fix prompt solved in 15 minutes what usually takes half a day.",
    reviewer: {
      name: "Rajeshwar Verma",
      role: "Principal Security Architect",
      company: "FinScale Labs",
      initials: "RV",
    },
    metrics: [
      { label: "Automated Checks", value: "200+" },
      { label: "Audit Pipeline", value: "3–8 Min" },
      { label: "AI Launch Score", value: "92/100" },
    ],
    challenge:
      "Modern teams deploy web apps rapidly, leaving security audits as an afterthought and exposing vulnerabilities to automated crawlers.",
    execution:
      "Engineered automated multi-engine pipeline combining OWASP ZAP (DAST), Nuclei (CVEs), and Semgrep (SAST) with instant DNS verification.",
    impact:
      "Delivers objective 0–100 Launch Score with 1-click IDE remediation prompts for Cursor, Claude Code, and Windsurf.",
  },
  {
    id: "campus-career-os",
    name: "AIVI Campus & Career OS",
    category: "Career Tech AI",
    badge: "LIVE",
    icon: <Award className="size-4" />,
    brandColor: "#F97316",
    frameBg: "bg-gradient-to-br from-orange-500 via-amber-600 to-stone-900",
    url: "https://aivilabs.com/",
    isExternal: true,
    tagline: "AI-Powered Career Intelligence & Placement Operating System",
    quote:
      "The Vernacular Voice AI mock interview module transformed confidence levels for our Tier-2 students who struggled with corporate English. Batch interview clearance rate rose significantly within the first semester.",
    reviewer: {
      name: "Dr. Ananya Sengupta",
      role: "Head of Training & Placements",
      company: "Regional Engineering Institute",
      initials: "AS",
    },
    metrics: [
      { label: "AI Career Modules", value: "6 Engines" },
      { label: "Indic Voice AI", value: "Sarvam AI" },
      { label: "Placement Cohort", value: "1,240+ Active" },
    ],
    challenge:
      "Millions of fresh graduates face generic ATS rejections and severe language barriers during high-stakes corporate hiring rounds.",
    execution:
      "Built complete career ecosystem with Resume Studio v2, real-time Job Fit analysis, and Sarvam AI Indic vernacular mock interviews.",
    impact:
      "Empowers Tier-2/3 students with elite-level interview coaching and gives university placement cells 360° cohort analytics.",
  },
  {
    id: "rankmind",
    name: "RankMind AI",
    category: "AI Search & GEO",
    badge: "GEO LIVE",
    icon: <Search className="size-4" />,
    brandColor: "#06B6D4",
    frameBg: "bg-gradient-to-br from-cyan-500 via-blue-600 to-slate-950",
    url: "https://aivisibilityinsights.com/",
    isExternal: true,
    tagline: "Generative Engine Optimization (GEO) & AI Search Intelligence",
    quote:
      "RankMind gave our marketing team the first clear, quantitative picture of how Perplexity and ChatGPT recommend us vs competitors. Our AI Search Share-of-Voice jumped 42% after implementing its GEO roadmap.",
    reviewer: {
      name: "Priyanshu Sharma",
      role: "Head of Organic Growth",
      company: "HyperCart Technologies",
      initials: "PS",
    },
    metrics: [
      { label: "LLM Engines", value: "GPT, Claude, Perplexity" },
      { label: "Prompt Audits", value: "10,000+" },
      { label: "Share of Voice", value: "+42% Growth" },
    ],
    challenge:
      "Traditional SEO is completely blind to whether generative models (ChatGPT, Perplexity, Claude, Gemini) recommend or omit your product.",
    execution:
      "Continuously monitors brand prompt citations across all leading LLMs, auditing semantic brand authority and knowledge graphs.",
    impact:
      "Provides actionable content engineering blueprints so high-growth brands capture primary recommendation slots in AI synthesized answers.",
  },
  {
    id: "nyaya-draft",
    name: "NYAYA-DRAFT",
    category: "Legal Tech Suite",
    badge: "PILOT",
    icon: <Scale className="size-4" />,
    brandColor: "#8B5CF6",
    frameBg: "bg-gradient-to-br from-purple-600 via-indigo-700 to-slate-950",
    url: "/products/nyaya-draft/",
    isExternal: false,
    tagline: "Bilingual Indian Legal Intelligence & Pleadings Studio",
    quote:
      "NYAYA-DRAFT's dual mapping between legacy IPC and new Bharatiya Nyaya Sanhita (BNS) sections cut petition drafting time in half while preserving High Court formatting conventions.",
    reviewer: {
      name: "Adv. Vikramaditya Singh",
      role: "Senior Advocate",
      company: "High Court Bar Association",
      initials: "VS",
    },
    metrics: [
      { label: "Statutory Mapping", value: "BNS / BNSS" },
      { label: "Dictation AI", value: "Bilingual Speech" },
      { label: "Privacy Mode", value: "Air-Gapped" },
    ],
    challenge:
      "Indian advocates spend hours manually cross-referencing legacy IPC provisions with new BNS codes and formatting complex High Court pleadings.",
    execution:
      "Architected bilingual legal drafting engine with automated statutory mapping, prayer section structuring, and voice dictation.",
    impact:
      "Generates format-accurate bail applications, writ petitions, and affidavits in minutes with 100% data sovereignty.",
  },
  {
    id: "aivi-careos",
    name: "AIVI CareOS",
    category: "Healthcare HMS",
    badge: "PILOT UP",
    icon: <Activity className="size-4" />,
    brandColor: "#059669",
    frameBg: "bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-950",
    url: "/products/aivi-careos/",
    isExternal: false,
    tagline: "Lightweight ABDM Hospital Management System",
    quote:
      "CareOS gave our clinic instant ABHA card generation and voice prescription dictation in Hindi. OPD queues now move 40% faster with direct WhatsApp patient alerts.",
    reviewer: {
      name: "Dr. Manish Srivastava",
      role: "Medical Director",
      company: "Apex Polyclinic & Diagnostics (Kanpur)",
      initials: "MS",
    },
    metrics: [
      { label: "ABDM Protocol", value: "M1 / M2 / M3" },
      { label: "Doctor Rx", value: "Voice to Print" },
      { label: "Sync Engine", value: "Offline-First" },
    ],
    challenge:
      "Tier-2/3 nursing homes struggle with clunky legacy software, complex ABDM national compliance, and slow manual prescription writing.",
    execution:
      "Lightweight, offline-first hospital OS with instant ABHA creation, vernacular doctor voice prescriptions, and WhatsApp OPD queues.",
    impact:
      "Piloting across Kanpur, Gorakhpur, and UP healthcare hubs to deliver frictionless digital health records.",
  },
];

export function CorePlatforms({ onOpenDemoCategory }: CorePlatformsProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>("hackmywebsite");
  const [copied, setCopied] = useState(false);

  const currentProduct =
    ALL_PRODUCTS.find((p) => p.id === selectedProductId) || ALL_PRODUCTS[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="platforms" className="py-20 sm:py-28 bg-[#FAFAF9] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header (BRIX Agency / Testimonial & Products Header Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-accent-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="size-3.5 text-accent-600" />
            <span>OUR PLATFORMS &amp; TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950">
            Don&apos;t take our word for it
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Take a look at what engineers, growth leaders, and placement heads have to say about AIVI platforms, and the measurable impact delivered.
          </p>
        </motion.div>

        {/* 1. Horizontal Product Logo / Brand Selector Strip (Reference Matched) */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3.5 overflow-x-auto pb-2 scrollbar-none">
          {ALL_PRODUCTS.map((prod) => {
            const isSelected = prod.id === selectedProductId;

            return (
              <button
                key={prod.id}
                onClick={() => setSelectedProductId(prod.id)}
                className={`group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl sm:rounded-3xl border transition-all duration-200 shrink-0 text-left ${
                  isSelected
                    ? "bg-white border-accent-500 shadow-[0_8px_25px_rgba(249,115,22,0.15)] ring-2 ring-accent-500/20"
                    : "bg-white/80 border-stone-200/90 hover:border-stone-300 hover:bg-white text-stone-700 shadow-2xs"
                }`}
              >
                <div
                  className={`size-8 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-accent-500 text-white shadow-xs"
                      : "bg-stone-100 text-stone-600 group-hover:bg-stone-200"
                  }`}
                >
                  {prod.icon}
                </div>

                <div className="flex flex-col">
                  <span
                    className={`text-xs sm:text-sm font-bold leading-tight ${
                      isSelected ? "text-stone-950" : "text-stone-700 group-hover:text-stone-950"
                    }`}
                  >
                    {prod.name}
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono mt-0.5">
                    {prod.category}
                  </span>
                </div>

                <span
                  className={`ml-1.5 px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase ${
                    prod.badge.includes("LIVE")
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}
                >
                  {prod.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2. The Big 3D Showcase Card (Split Layout with Vibrant Colored 3D Device Container) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl sm:rounded-4xl bg-white border border-stone-200/90 shadow-[0_15px_50px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
              
              {/* Left Column: Stylized Quote, Reviewer, Metrics, and CTAs */}
              <div className="lg:col-span-5 space-y-6 text-left">
                
                {/* Large Stylized Quote Mark */}
                <div className="size-12 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-accent-500 shadow-2xs">
                  <Quote className="size-6 rotate-180" />
                </div>

                {/* Impact Quote */}
                <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed italic">
                  &ldquo;{currentProduct.quote}&rdquo;
                </p>

                {/* Reviewer Details */}
                <div className="flex items-center gap-3.5 pt-1 border-t border-stone-100">
                  <div className="size-11 rounded-full bg-accent-500 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                    {currentProduct.reviewer.initials}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-sm font-bold text-stone-900 leading-tight">
                      {currentProduct.reviewer.name}
                    </div>
                    <div className="text-xs text-stone-500 font-medium leading-snug">
                      {currentProduct.reviewer.role} ·{" "}
                      <span className="text-stone-800 font-semibold">
                        {currentProduct.reviewer.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 pt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-[10px] font-bold text-stone-600 ml-1">5.0 Verified Review</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  {currentProduct.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-stone-50 border border-stone-200/70 text-center space-y-0.5"
                    >
                      <div className="text-xs sm:text-sm font-bold font-mono text-stone-900">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-stone-500 font-medium truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Execution Summary */}
                <div className="p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/60 text-xs text-stone-600 space-y-1">
                  <span className="font-bold text-stone-900 uppercase text-[10px] tracking-wider font-mono">
                    Product Architecture:
                  </span>
                  <p className="leading-relaxed font-normal">{currentProduct.execution}</p>
                </div>

                {/* Action CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {currentProduct.isExternal ? (
                    <a
                      href={currentProduct.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Launch Live Platform</span>
                      <ArrowUpRight className="size-3.5 text-accent-400" />
                    </a>
                  ) : (
                    <a
                      href={currentProduct.url}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Explore Pilot Overview</span>
                      <ArrowRight className="size-3.5 text-accent-400" />
                    </a>
                  )}

                  <button
                    onClick={() => onOpenDemoCategory(currentProduct.name)}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs font-semibold transition-colors"
                  >
                    <span>Request Walkthrough</span>
                  </button>
                </div>
              </div>

              {/* Right Column: 3D Colored Device / Browser Canvas */}
              <div className="lg:col-span-7">
                <div
                  className={`relative rounded-3xl p-4 sm:p-7 ${currentProduct.frameBg} shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-500`}
                >
                  {/* Subtle 3D glossy highlight layer */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Inner Browser Window Container */}
                  <div className="relative rounded-2xl bg-white shadow-2xl border border-white/40 overflow-hidden text-left">
                    
                    {/* Browser Address Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-stone-100 border-b border-stone-200">
                      <div className="flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full bg-rose-400" />
                        <span className="size-2.5 rounded-full bg-amber-400" />
                        <span className="size-2.5 rounded-full bg-emerald-400" />
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded-full text-[11px] font-mono text-stone-600 max-w-[260px] truncate shadow-2xs">
                        <Lock className="size-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{currentProduct.url}</span>
                      </div>

                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    {/* Live Screenshot / UI Mockup Body for Selected Product */}
                    <div className="p-4 sm:p-6 bg-[#FAFAF9] space-y-4">
                      
                      {/* Product Headline Inside Mockup */}
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono font-bold text-accent-600 uppercase">
                          {currentProduct.category} · LIVE DEPLOYED
                        </div>
                        <h4 className="text-base sm:text-xl font-bold text-stone-900 leading-tight">
                          {currentProduct.tagline}
                        </h4>
                      </div>

                      {/* Specialized Content Per Product */}
                      {currentProduct.id === "hackmywebsite" && (
                        <div className="space-y-3">
                          <div className="p-4 rounded-xl bg-[#070A10] text-white border border-slate-800 space-y-3">
                            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                              <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                                <ShieldCheck className="size-3.5" />
                                https://app.verified-domain.com
                              </span>
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                                LAUNCH SCORE: 92/100
                              </span>
                            </div>

                            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-mono">
                              <div className="p-1 rounded bg-slate-900 border border-slate-800">
                                <div className="text-slate-400 font-bold">0</div>
                                <div className="text-[8px] text-slate-500">CRIT</div>
                              </div>
                              <div className="p-1 rounded bg-slate-900 border border-amber-500/20">
                                <div className="text-amber-400 font-bold">1</div>
                                <div className="text-[8px] text-amber-500">HIGH</div>
                              </div>
                              <div className="p-1 rounded bg-slate-900 border border-emerald-500/20">
                                <div className="text-emerald-400 font-bold">3</div>
                                <div className="text-[8px] text-emerald-500">MED</div>
                              </div>
                              <div className="p-1 rounded bg-slate-900 border border-slate-800">
                                <div className="text-slate-400 font-bold">4</div>
                                <div className="text-[8px] text-slate-500">LOW</div>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-lg bg-black border border-slate-800 flex items-center justify-between text-[11px] font-mono">
                              <span className="text-emerald-300 truncate">
                                // 1-Click Fix: Set max-age=63072000 in security headers
                              </span>
                              <button
                                onClick={() => handleCopy("Add Strict-Transport-Security in headers.")}
                                className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white text-[10px] shrink-0 ml-2"
                              >
                                {copied ? "Copied" : "Copy"}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentProduct.id === "campus-career-os" && (
                        <div className="space-y-3">
                          <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs space-y-3">
                            <div className="grid grid-cols-3 gap-2">
                              <div className="p-2 rounded-lg bg-stone-50 text-center">
                                <div className="text-[9px] text-stone-500">ATS Resume</div>
                                <div className="text-sm font-black text-stone-900">92/100</div>
                              </div>
                              <div className="p-2 rounded-lg bg-stone-50 text-center">
                                <div className="text-[9px] text-stone-500">Voice AI</div>
                                <div className="text-sm font-black text-stone-900">Indic Native</div>
                              </div>
                              <div className="p-2 rounded-lg bg-stone-50 text-center">
                                <div className="text-[9px] text-stone-500">Placement Match</div>
                                <div className="text-sm font-black text-emerald-600">94% Fit</div>
                              </div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200/70 text-xs text-stone-700 flex items-center justify-between">
                              <span className="font-semibold flex items-center gap-1">
                                <Sparkles className="size-3.5 text-accent-600" />
                                SDE-1 Sarvam Voice Mock Practice
                              </span>
                              <span className="text-[10px] font-mono text-accent-700 font-bold">LIVE AUDIO</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentProduct.id === "rankmind" && (
                        <div className="space-y-3">
                          <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs space-y-3">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center text-[10px]">
                              <div className="p-2 rounded-lg bg-stone-50">
                                <div className="text-stone-500">ChatGPT</div>
                                <div className="font-bold text-stone-900">84% Cited</div>
                              </div>
                              <div className="p-2 rounded-lg bg-stone-50">
                                <div className="text-stone-500">Perplexity</div>
                                <div className="font-bold text-stone-900">91% Cited</div>
                              </div>
                              <div className="p-2 rounded-lg bg-stone-50">
                                <div className="text-stone-500">Claude</div>
                                <div className="font-bold text-stone-900">78% Cited</div>
                              </div>
                              <div className="p-2 rounded-lg bg-stone-50">
                                <div className="text-stone-500">Gemini</div>
                                <div className="font-bold text-stone-900">82% Cited</div>
                              </div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-950 text-white text-[11px] font-mono">
                              <span className="text-cyan-400 font-bold">Query GEO:</span> Brand cited in Top 3 slots across all evaluated LLMs.
                            </div>
                          </div>
                        </div>
                      )}

                      {currentProduct.id === "nyaya-draft" && (
                        <div className="space-y-3">
                          <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-xs font-semibold text-stone-900 pb-1 border-b border-stone-100">
                              <span>Bharatiya Nyaya Sanhita (BNS) Mapping</span>
                              <span className="text-[10px] font-mono text-purple-700 font-bold">HIGH COURT FORMAT</span>
                            </div>
                            <p className="text-[11px] text-stone-600 leading-relaxed">
                              Bilingual legal drafting with automated IPC-to-BNS conversion, party prayer labeling, and air-gapped data confidentiality.
                            </p>
                          </div>
                        </div>
                      )}

                      {currentProduct.id === "aivi-careos" && (
                        <div className="space-y-3">
                          <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-xs font-semibold text-stone-900 pb-1 border-b border-stone-100">
                              <span>ABDM M1/M2/M3 Clinic &amp; OPD Suite</span>
                              <span className="text-[10px] font-mono text-emerald-700 font-bold">PILOTING IN UP</span>
                            </div>
                            <p className="text-[11px] text-stone-600 leading-relaxed">
                              Instant ABHA digital health ID sync, doctor voice prescriptions in Hindi, and smart WhatsApp OPD queue management.
                            </p>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Bottom Status Strip */}
                    <div className="px-4 py-2.5 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-600 font-mono">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="size-3.5 text-emerald-600" />
                        Verified Production Build
                      </span>
                      <a
                        href={currentProduct.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 font-semibold hover:underline flex items-center gap-1"
                      >
                        <span>Open URL</span>
                        <ArrowUpRight className="size-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
