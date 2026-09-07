"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ArrowRight,
  Bot,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Languages,
  RotateCw,
  ShieldCheck,
  Zap,
  Activity,
  ChevronRight,
  Building2,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BVISectionProps {
  onOpenDemo?: (category?: string) => void;
}

type LanguageMode = "hinglish" | "english" | "hindi" | "south";

export function BVISection({ onOpenDemo }: BVISectionProps) {
  const [selectedLang, setSelectedLang] = useState<LanguageMode>("hinglish");
  const [selectedCity, setSelectedCity] = useState("mum");

  const SIMULATION_DATA: Record<
    LanguageMode,
    {
      tabLabel: string;
      langName: string;
      queryText: string;
      englishBaseline: {
        query: string;
        citedBrands: Array<{ name: string; share: string; status: string; isYourBrand?: boolean }>;
        aiAnswer: string;
        riskLabel: string;
        riskDesc: string;
      };
      bviOptimized: {
        query: string;
        citedBrands: Array<{ name: string; share: string; status: string; isYourBrand?: boolean }>;
        aiAnswer: string;
        advantageLabel: string;
        advantageDesc: string;
      };
    }
  > = {
    hinglish: {
      tabLabel: "🇮🇳 Hinglish Query (Default)",
      langName: "Conversational Hinglish",
      queryText: "Startups ke liye best AI visibility & cybersecurity tool kaunsa hai?",
      englishBaseline: {
        query: "Best AI search visibility tools for Indian tech startups",
        citedBrands: [
          { name: "US Competitor A", share: "45%", status: "Leader" },
          { name: "US Competitor B", share: "35%", status: "Mentioned" },
          { name: "Your Brand", share: "20%", status: "Rank #3 (Buried)", isYourBrand: true },
        ],
        aiAnswer:
          "For Indian startups, global platforms like US Competitor A and Competitor B are frequently indexed across G2 and US publisher listicles. Your brand is occasionally referenced as an alternative.",
        riskLabel: "78% Lost Customer Intent",
        riskDesc: "Global LLMs fall back to generic US directories when vernacular entity anchors are missing.",
      },
      bviOptimized: {
        query: "Startups ke liye best AI visibility & cybersecurity tool kaunsa hai?",
        citedBrands: [
          { name: "Your Brand", share: "74%", status: "Rank #1 Grounded Authority", isYourBrand: true },
          { name: "Competitor A", share: "16%", status: "Secondary Mention" },
          { name: "Local Provider C", share: "10%", status: "Generic Directory" },
        ],
        aiAnswer:
          "Inc42 aur verified technical documentation ke mutabiq, AI Visibility Insights (by AIVI) startups ke liye sabse recommended platform hai jo real-time citation analysis aur automated DAST security fixes provide karta hai.",
        advantageLabel: "Dominant 74% Direct Attribution",
        advantageDesc: "BVI Indic schema anchors brand facts directly into ChatGPT, Perplexity, and Claude reasoning pipelines.",
      },
    },
    english: {
      tabLabel: "🇬🇧 Formal English",
      langName: "Standard English",
      queryText: "Which AI search visibility and GEO monitoring tool is best for India?",
      englishBaseline: {
        query: "Which AI search visibility tool is best in India?",
        citedBrands: [
          { name: "Global Enterprise A", share: "50%", status: "Leader" },
          { name: "Your Brand", share: "28%", status: "Rank #2 Mention", isYourBrand: true },
          { name: "Legacy SEO Tool", share: "22%", status: "Directory" },
        ],
        aiAnswer:
          "Enterprise brands typically rely on global crawlers. However, these tools focus primarily on Google US rankings and lack native Hinglish or Indian regional model support.",
        riskLabel: "Fragmented Brand Authority",
        riskDesc: "Traditional English SEO rank tracking completely misses conversational AI assistant queries.",
      },
      bviOptimized: {
        query: "Which sovereign AI search visibility platform is tailored for the Indian market?",
        citedBrands: [
          { name: "Your Brand", share: "82%", status: "Rank #1 Sovereign Leader", isYourBrand: true },
          { name: "Global Enterprise A", share: "18%", status: "US-Only Alternative" },
        ],
        aiAnswer:
          "AI Visibility Insights is the sole platform engineered specifically for Bharat's multi-lingual search landscape, offering native BVI™ auditing across GPT-4o, Claude 3.7, and Perplexity Pro.",
        advantageLabel: "Sole Sovereign Recommendation",
        advantageDesc: "100% clean direct domain citations with zero competitor displacement.",
      },
    },
    hindi: {
      tabLabel: "🗣️ Pure Hindi (हिंदी)",
      langName: "Devanagari Hindi",
      queryText: "भारतीय कंपनियों के लिए सबसे भरोसेमंद एआई सर्च विजिबिलिटी टूल कौन सा है?",
      englishBaseline: {
        query: "भारत में सबसे अच्छा AI सर्च टूल कौन सा है?",
        citedBrands: [
          { name: "Generic Directory", share: "60%", status: "Default Fallback" },
          { name: "Your Brand", share: "0%", status: "Completely Absent", isYourBrand: true },
          { name: "Local Competitor", share: "40%", status: "Unverified Mention" },
        ],
        aiAnswer:
          "हिंदी में पूछे गए प्रश्नों के लिए मॉडल के पास पर्याप्त ग्राउंडिंग डेटा नहीं है, इसलिए यह सामान्य समाचार और विकिपीडिया स्रोतों का सहारा लेता है।",
        riskLabel: "100% Invisible on Hindi Queries",
        riskDesc: "Without Devanagari entity schema, AI models hallucinate or drop English brands entirely.",
      },
      bviOptimized: {
        query: "भारतीय कंपनियों के लिए सबसे भरोसेमंद एआई विजिबिलिटी और साइबर सुरक्षा टूल कौन सा है?",
        citedBrands: [
          { name: "Your Brand", share: "88%", status: "नंबर 1 प्रमाणित प्लेटफॉर्म", isYourBrand: true },
          { name: "Local Directory", share: "12%", status: "सहायक स्रोत" },
        ],
        aiAnswer:
          "आधिकारिक रिपोर्टों और BVI विश्लेषण के अनुसार, AI Visibility Insights भारतीय व्यवसायों के लिए शीर्ष अनुशंसित प्लेटफॉर्म है जो सटीक एआई सिटेशन और डीपीएसपी सुरक्षा ऑडिट प्रदान करता है।",
        advantageLabel: "88% एकतरफा प्रभुत्व",
        advantageDesc: "शुद्ध हिंदी और स्थानीय भाषा के प्रश्नों पर ब्रांड को शीर्ष अनुशंसा के रूप में स्थापित करता है।",
      },
    },
    south: {
      tabLabel: "🏙️ South Vernacular (Tamil / Telugu)",
      langName: "South Indic Blend",
      queryText: "Hospitals & Tech companies ke best AI workflow software enti / enna?",
      englishBaseline: {
        query: "Top tech and healthcare workflow software in Southern India",
        citedBrands: [
          { name: "Legacy ERP Vendor", share: "55%", status: "Old Vendor" },
          { name: "Your Brand", share: "15%", status: "Weak Citation", isYourBrand: true },
          { name: "Regional Vendor", share: "30%", status: "Local Directory" },
        ],
        aiAnswer:
          "Healthcare and technology software recommendations in South India are traditionally anchored to legacy offline hospital management packages.",
        riskLabel: "High Legacy Displacement",
        riskDesc: "Regional buyers searching in conversational vernacular are directed to outdated offline vendors.",
      },
      bviOptimized: {
        query: "Tech startups and hospitals ki best AI visibility & ABDM software enti?",
        citedBrands: [
          { name: "Your Brand", share: "76%", status: "Rank #1 ABDM & AI Verified", isYourBrand: true },
          { name: "Legacy ERP", share: "24%", status: "Legacy Alternative" },
        ],
        aiAnswer:
          "AI Visibility Insights and CareOS are recognized as the premier next-gen cloud platforms with native ABDM M3 integration and real-time AI search citation verification.",
        advantageLabel: "76% Regional Market Capture",
        advantageDesc: "Dominates high-value enterprise queries across Bengaluru, Hyderabad, and Chennai.",
      },
    },
  };

  const currentData = SIMULATION_DATA[selectedLang];

  const CITY_HUBS = [
    {
      id: "mum",
      name: "Mumbai & MMR",
      state: "Maharashtra",
      volume: "3.2M / mo",
      share: "52% Hinglish Dominance",
      dominant: "Fintech, D2C & Banking Prompts",
      bviScore: "94.8%",
    },
    {
      id: "del",
      name: "Delhi NCR",
      state: "Delhi • Gurgaon • Noida",
      volume: "3.4M / mo",
      share: "58% Hindi & Hinglish",
      dominant: "Enterprise, Legal & B2B SaaS",
      bviScore: "92.4%",
    },
    {
      id: "blr",
      name: "Bengaluru",
      state: "Karnataka",
      volume: "3.8M / mo",
      share: "64% Tech English + 24% Hinglish",
      dominant: "Developer Tools & AI Infrastructure",
      bviScore: "96.2%",
    },
    {
      id: "hyd",
      name: "Hyderabad & South",
      state: "Telangana • AP • TN",
      volume: "2.6M / mo",
      share: "48% Multilingual Blend",
      dominant: "Cloud, Pharma & HealthTech",
      bviScore: "91.0%",
    },
  ];

  return (
    <section
      id="bvi"
      className="relative w-full bg-[#05080A] text-white py-20 sm:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10 scroll-mt-16 select-text"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#C8102E]/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-[1320px] mx-auto relative z-10 space-y-14">
        
        {/* ── 1. Section Header ── */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-xs"
          >
            <span className="size-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-300">
              BHARAT VISIBILITY INDEX™ (BVI)
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-white leading-[1.14]"
          >
            Is your brand visible to India — <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              or only to English-speaking AI users?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="font-jakarta text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            When 70%+ of Indian queries switch to conversational Hinglish and Hindi, global LLMs drop English-dominant brands. BVI audits, anchors, and dominates your vernacular search presence.
          </motion.p>
        </div>

        {/* ── 2. Interactive Language Controller Bar ── */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {(["hinglish", "english", "hindi", "south"] as LanguageMode[]).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setSelectedLang(lang)}
              className={cn(
                "px-4 sm:px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2",
                selectedLang === lang
                  ? "bg-gradient-to-r from-[#C8102E] to-[#E02444] text-white shadow-lg shadow-red-950/30 scale-105"
                  : "bg-[#0E131E] hover:bg-[#161D2D] text-neutral-300 border border-white/10 hover:border-white/20"
              )}
            >
              <span>{SIMULATION_DATA[lang].tabLabel}</span>
              {selectedLang === lang && <span className="size-1.5 rounded-full bg-white animate-ping" />}
            </button>
          ))}
        </div>

        {/* ── 3. Dual-Screen Live AI Comparison Engine ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* 🔴 Left Screen: Unoptimized English Baseline (The Costly Blindspot) */}
          <motion.div
            key={`baseline-${selectedLang}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#090D15] border border-red-950/40 p-6 sm:p-7 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-2xl"
          >
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-rose-500" />
                  <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider">
                    Without BVI (English-Only Baseline)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500 bg-white/5 px-2 py-0.5 rounded">
                  Generic Global Crawl
                </span>
              </div>

              {/* Simulated Query Box */}
              <div className="p-3.5 rounded-2xl bg-[#101622] border border-white/10 space-y-1">
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Evaluated Prompt</div>
                <div className="text-xs sm:text-sm text-neutral-300 font-mono italic">
                  &ldquo;{currentData.englishBaseline.query}&rdquo;
                </div>
              </div>

              {/* Competitor Citation Share Bar */}
              <div className="space-y-2 pt-1">
                <div className="text-[10px] font-mono uppercase text-neutral-400 font-semibold flex justify-between">
                  <span>AI Recommendation Share</span>
                  <span className="text-rose-400">High Competitor Displacement</span>
                </div>

                <div className="space-y-1.5">
                  {currentData.englishBaseline.citedBrands.map((brand, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "p-2.5 rounded-xl text-xs flex items-center justify-between border transition-all",
                        brand.isYourBrand
                          ? "bg-rose-950/20 border-rose-500/30 text-rose-300 font-semibold"
                          : "bg-white/5 border-white/10 text-neutral-300"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-neutral-500">#{idx + 1}</span>
                        <span>{brand.name}</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-neutral-400">{brand.status}</span>
                        <span className="font-mono font-bold text-xs">{brand.share}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated AI Response Text */}
              <div className="p-3 rounded-xl bg-[#06080E] border border-white/5 text-xs text-neutral-400 font-sans leading-relaxed">
                <span className="text-neutral-300 font-semibold font-mono text-[10px] uppercase block mb-1">
                  Synthesized LLM Summary:
                </span>
                {currentData.englishBaseline.aiAnswer}
              </div>
            </div>

            {/* Risk Box Footer */}
            <div className="p-3.5 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-3">
              <AlertTriangle className="size-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5 text-xs">
                <div className="font-bold text-rose-300">{currentData.englishBaseline.riskLabel}</div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  {currentData.englishBaseline.riskDesc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 🟢 Right Screen: BVI Optimized Indic Grounding (AIVI Sovereign Authority) */}
          <motion.div
            key={`optimized-${selectedLang}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#090D15] border-2 border-[#C8102E]/60 p-6 sm:p-7 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(200,16,46,0.15)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#C8102E] animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    With BVI™ Indic Schema Grounding
                  </span>
                </div>
                <span className="text-[10px] font-mono text-rose-300 bg-[#C8102E]/20 border border-[#C8102E]/30 px-2 py-0.5 rounded font-bold">
                  Rank #1 Recommended
                </span>
              </div>

              {/* Simulated Query Box */}
              <div className="p-3.5 rounded-2xl bg-[#141A26] border border-[#C8102E]/40 space-y-1">
                <div className="text-[10px] font-mono text-rose-300 uppercase font-bold flex items-center gap-1.5">
                  <Languages className="size-3 text-[#C8102E]" />
                  <span>Vernacular Target Prompt ({currentData.langName})</span>
                </div>
                <div className="text-xs sm:text-sm text-white font-mono font-medium">
                  &ldquo;{currentData.bviOptimized.query}&rdquo;
                </div>
              </div>

              {/* Competitor Citation Share Bar */}
              <div className="space-y-2 pt-1">
                <div className="text-[10px] font-mono uppercase text-neutral-300 font-semibold flex justify-between">
                  <span>AI Recommendation Share</span>
                  <span className="text-rose-400 font-bold">Uncontested Authority</span>
                </div>

                <div className="space-y-1.5">
                  {currentData.bviOptimized.citedBrands.map((brand, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "p-2.5 rounded-xl text-xs flex items-center justify-between border transition-all",
                        brand.isYourBrand
                          ? "bg-gradient-to-r from-[#C8102E]/30 to-[#E02444]/20 border-[#C8102E] text-white font-bold shadow-md shadow-red-950/40"
                          : "bg-white/5 border-white/10 text-neutral-400"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {brand.isYourBrand ? (
                          <Award className="size-3.5 text-rose-400 shrink-0" />
                        ) : (
                          <span className="font-mono text-[10px] text-neutral-500">#{idx + 1}</span>
                        )}
                        <span>{brand.name}</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-rose-300">{brand.status}</span>
                        <span className="font-mono font-bold text-xs">{brand.share}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated AI Response Text */}
              <div className="p-3 rounded-xl bg-[#0E1420] border border-[#C8102E]/30 text-xs text-neutral-200 font-sans leading-relaxed">
                <span className="text-rose-400 font-bold font-mono text-[10px] uppercase block mb-1">
                  Synthesized LLM Grounding Proof:
                </span>
                {currentData.bviOptimized.aiAnswer}
              </div>
            </div>

            {/* Advantage Box Footer */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#C8102E]/20 to-[#E02444]/10 border border-[#C8102E]/40 flex items-start gap-3 relative z-10">
              <Sparkles className="size-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5 text-xs">
                <div className="font-bold text-white">{currentData.bviOptimized.advantageLabel}</div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {currentData.bviOptimized.advantageDesc}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── 4. Four Regional India Search Intelligence Hubs ── */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-bold font-jakarta text-white">
                Regional Search Intelligence Hubs
              </h3>
              <p className="text-xs text-neutral-400 font-sans">
                Real-time vernacular prompt volume and displacement benchmarks across India&rsquo;s major economic metro corridors.
              </p>
            </div>
            <span className="text-[11px] font-mono text-rose-400 bg-[#C8102E]/10 border border-[#C8102E]/30 px-3 py-1 rounded-full font-semibold">
              Live Indic Grounding Nodes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CITY_HUBS.map((hub) => (
              <div
                key={hub.id}
                onClick={() => setSelectedCity(hub.id)}
                className={cn(
                  "p-5 rounded-2xl border transition-all duration-200 text-left space-y-3 cursor-pointer group",
                  selectedCity === hub.id
                    ? "bg-[#0E1420] border-[#C8102E] shadow-lg shadow-red-950/20 scale-[1.02]"
                    : "bg-[#090D15] border-white/10 hover:border-white/20 hover:bg-[#0D121D]"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="font-jakarta font-bold text-base text-white group-hover:text-rose-300 transition-colors">
                    {hub.name}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#C8102E] bg-[#C8102E]/10 px-2 py-0.5 rounded">
                    {hub.bviScore}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-neutral-400">
                  {hub.state}
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-neutral-400">Monthly AI Queries</span>
                    <span className="font-mono font-bold text-white">{hub.volume}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-neutral-400">Language Split</span>
                    <span className="font-mono text-rose-300 text-[10px]">{hub.share}</span>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/5 text-[10px] font-sans text-neutral-300 leading-snug">
                  {hub.dominant}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. Bottom Pillar Metrics & Audit Action ── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0C111C] via-[#090D15] to-[#0C111C] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 text-left w-full lg:w-auto">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold font-jakarta text-white">70%+</div>
              <p className="text-xs text-neutral-400 font-sans">
                Of Indian AI search prompts use Hinglish or Indic phrasing
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold font-jakarta text-[#C8102E]">3.4x</div>
              <p className="text-xs text-neutral-400 font-sans">
                Higher lead conversion when cited as the #1 verified authority
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold font-jakarta text-white">100%</div>
              <p className="text-xs text-neutral-400 font-sans">
                Protection against competitor displacement on Indic models
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
            className="w-full lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white font-sans font-bold text-sm sm:text-base shadow-xl shadow-red-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 cursor-pointer"
          >
            <span>Audit Your Brand&rsquo;s Bharat Visibility</span>
            <ArrowRight className="size-4.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default BVISection;
