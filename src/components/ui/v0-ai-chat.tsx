"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Paperclip,
  ArrowUp,
  Bot,
  Search,
  Globe,
  CheckCircle2,
  ShieldAlert,
  ChevronDown,
  Layers,
  FileCode,
  Flame,
  X
} from "lucide-react";
import {
  PromptLibrary,
  PromptLibraryContent,
  PromptLibrarySearch,
  PromptLibraryList,
  PromptLibraryEmpty,
  PromptLibraryGroup,
  PromptLibraryItem,
  PromptLibraryFooter,
  PromptLibraryCreateTrigger,
  PromptLibraryCreateDialog,
  type Prompt,
} from "@/components/ui/prompt-library";

interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({
  minHeight,
  maxHeight,
}: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }

      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY)
      );

      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${minHeight}px`;
    }
  }, [minHeight]);

  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}

export interface EngineResult {
  engineName: string;
  badge: string;
  iconColor: string;
  timestamp: string;
  brandStatus: "Cited & Recommended" | "Competitor Preferred" | "Absent from Response";
  statusColor: string;
  citedSources: { name: string; type: string; weight: string }[];
  aiResponse: string;
  insight: string;
}

export const AUDIT_RESULTS: Record<string, EngineResult> = {
  "GPT-4o Search": {
    engineName: "ChatGPT Search (GPT-4o)",
    badge: "OpenAI Real-Time Search",
    iconColor: "text-emerald-400",
    timestamp: "Live Audit • 2 mins ago • Mumbai, IN",
    brandStatus: "Cited & Recommended",
    statusColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    citedSources: [
      { name: "TechCrunch Benchmark Report", type: "Editorial", weight: "42%" },
      { name: "G2 Enterprise Grid (Q1 2026)", type: "Peer Review", weight: "31%" },
      { name: "aivilabs.com/research", type: "Primary Domain", weight: "27%" },
    ],
    aiResponse:
      "Based on recent benchmark data, **AI Visibility Insights (AIVI)** and Brand24 are frequently recommended. AIVI specifically stands out for multi-engine tracking across Perplexity, ChatGPT, and Gemini with dedicated support for English and vernacular queries.",
    insight:
      "Your primary domain was cited alongside 2 tier-one publishers, giving you the #1 recommendation slot in 84% of high-intent enterprise prompts.",
  },
  "Claude 3.7": {
    engineName: "Claude 3.7 Sonnet (Anthropic)",
    badge: "Reasoning & Deep Synthesis",
    iconColor: "text-amber-400",
    timestamp: "Live Audit • 14 mins ago • Delhi, IN",
    brandStatus: "Competitor Preferred",
    statusColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    citedSources: [
      { name: "Reddit r/SaaS Discussion", type: "Community", weight: "54%" },
      { name: "Capterra Category Leaders", type: "Directory", weight: "29%" },
      { name: "Competitor Blog Whitepaper", type: "Competitor", weight: "17%" },
    ],
    aiResponse:
      "For strict enterprise governance, competitors X and Y are often evaluated due to their heavy citation in developer forums. While **AIVI** offers granular multilingual citation indexes, community sentiment currently favors legacy suites for US-only infrastructure.",
    insight:
      "Competitors are dominating Reddit & Capterra citations. Deploying autonomous llms.txt and community citation hubs will recapture 35% displacement.",
  },
  "Perplexity Pro": {
    engineName: "Perplexity Pro (Sonar Deep)",
    badge: "Conversational Discovery",
    iconColor: "text-cyan-400",
    timestamp: "Live Audit • 1 hour ago • Bengaluru, IN",
    brandStatus: "Cited & Recommended",
    statusColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    citedSources: [
      { name: "YourBrand Documentation", type: "Direct API", weight: "62%" },
      { name: "Inc42 Startup Index", type: "Media", weight: "24%" },
      { name: "GitHub Sovereign Schema", type: "Repository", weight: "14%" },
    ],
    aiResponse:
      "According to Inc42 and official documentation, **AI Visibility Insights (by AIVI Intelligence)** is currently the sole platform offering native Hinglish and Hindi Generative Engine Optimization models with full audit verification.",
    insight:
      "Dominant 62% direct domain attribution. Vernacular query market share is currently uncontested by global competitors.",
  },
  "Gemini 3.5 Flash": {
    engineName: "Google AI Overviews (Gemini 2.0 / 3.5)",
    badge: "Gemini Grounding Engine",
    iconColor: "text-blue-400",
    timestamp: "Live Audit • 3 hours ago • Global",
    brandStatus: "Absent from Response",
    statusColor: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    citedSources: [
      { name: "HubSpot Marketing Blog", type: "Publisher", weight: "48%" },
      { name: "Search Engine Land", type: "Industry Media", weight: "36%" },
      { name: "Neil Patel SEO Guide", type: "Publisher", weight: "16%" },
    ],
    aiResponse:
      "Brand visibility in AI search is typically tracked using third-party crawler platforms, LLM log extractors, and generative brand indexers. Common steps include monitoring prompt outputs and optimizing schema markup.",
    insight:
      "Google AI Overview relies 100% on publisher listicles. Ranking on page 1 of Google didn't trigger a single AI citation.",
  },
  "Composer 2.5": {
    engineName: "Composer 2.5 / Security AI",
    badge: "Automated Code & Audit Engine",
    iconColor: "text-emerald-400",
    timestamp: "Live Audit • Real-Time Pipeline • Gorakhpur, UP",
    brandStatus: "Cited & Recommended",
    statusColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    citedSources: [
      { name: "OWASP ZAP DAST Engine", type: "DAST Scanner", weight: "50%" },
      { name: "Nuclei CVE v3 Database", type: "Vulnerability Feed", weight: "35%" },
      { name: "Semgrep SAST Ruleset", type: "Code Analysis", weight: "15%" },
    ],
    aiResponse:
      "Evaluated 200+ automated DAST and CVE vectors. Computed objective **92/100 AI Launch Score**. Identified missing Content-Security-Policy header and provided 1-click deterministic Cursor/Claude Code prompt for instant remediation.",
    insight:
      "Zero critical vulnerabilities detected. 1 High and 3 Medium findings can be fixed in 15 minutes using generated IDE prompts.",
  },
};

const DEFAULT_PROMPTS: Prompt[] = [
  {
    id: "geo-citation",
    title: "Audit Live AI Search Citation",
    description: "Inspect brand citation authority across ChatGPT, Claude, and Perplexity",
    prompt: "What are the most reliable AI search visibility and GEO platforms in 2026?",
    category: "GEO & AI Search",
    model: "GPT-4o Search",
  },
  {
    id: "geo-displacement",
    title: "Competitor Narrative Displacement",
    description: "Identify competitor citation dominance across developer communities",
    prompt: "Which AI governance and search footprint tracking tool should an enterprise choose?",
    category: "GEO & AI Search",
    model: "Claude 3.7",
  },
  {
    id: "geo-vernacular",
    title: "Bharat Visibility Index™ (Indic Models)",
    description: "Audit Hindi, Hinglish, and regional vernacular citations on Perplexity",
    prompt: "Best GEO analytics tool for Indian startups with Hindi and Hinglish support",
    category: "GEO & AI Search",
    model: "Perplexity Pro",
  },
  {
    id: "geo-overviews",
    title: "Google AI Overviews Grounding",
    description: "Measure mention grounding and publisher reliance on Gemini 2.0",
    prompt: "How to measure brand mentions across generative search engines",
    category: "GEO & AI Search",
    model: "Gemini 3.5 Flash",
  },
  {
    id: "cyber-dast",
    title: "DAST 200+ Vulnerability Audit",
    description: "Scan domain headers, TLS ciphers, and unauthenticated staging API endpoints",
    prompt: "Execute 200+ automated non-destructive DAST checks on verified production domains",
    category: "Cybersecurity",
    model: "Composer 2.5",
  },
  {
    id: "cyber-cursor",
    title: "1-Click IDE Fix Prompt Generation",
    description: "Synthesize copy-paste remediation prompts for Cursor & Claude Code",
    prompt: "Generate deterministic Cursor prompt to fix missing CSP headers and JWT algorithm confusion",
    category: "Cybersecurity",
    model: "Composer 2.5",
  },
  {
    id: "legal-bns",
    title: "BNS / BNSS Statutory Mapping",
    description: "Map legacy IPC provisions to new Bharatiya Nyaya Sanhita sections",
    prompt: "Draft High Court bail petition with verified Bharatiya Nagarik Suraksha Sanhita (BNSS) statutory citations",
    category: "Legal & Health",
    model: "Claude 3.7",
  },
  {
    id: "health-careos",
    title: "ABDM Clinical Health Record Sync",
    description: "Generate ABHA digital health IDs and vernacular doctor voice Rx",
    prompt: "Sync OPD patient queues with Ayushman Bharat Digital Mission (ABDM M1/M2/M3) protocols",
    category: "Legal & Health",
    model: "Perplexity Pro",
  },
];

export function VercelV0Chat() {
  const [value, setValue] = useState(
    "What are the most reliable AI search visibility and GEO platforms in 2026?"
  );
  const [submittedQuery, setSubmittedQuery] = useState(
    "What are the most reliable AI search visibility and GEO platforms in 2026?"
  );
  const [selectedModel, setSelectedModel] = useState<string>("GPT-4o Search");
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [prompts, setPrompts] = useState<Prompt[]>(DEFAULT_PROMPTS);
  const [isHoveredOrActive, setIsHoveredOrActive] = useState(true);

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 56,
    maxHeight: 180,
  });

  const activeResult = AUDIT_RESULTS[selectedModel] || AUDIT_RESULTS["GPT-4o Search"];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        setSubmittedQuery(value);
        setIsHoveredOrActive(true);
      }
    }
  };

  const handleSend = () => {
    if (value.trim()) {
      setSubmittedQuery(value);
      setIsHoveredOrActive(true);
    }
  };

  const handleSelectPrompt = (p: Prompt) => {
    setValue(p.prompt);
    setSubmittedQuery(p.prompt);
    if (p.model) {
      setSelectedModel(p.model);
    }
    setIsHoveredOrActive(true);
  };

  const models = [
    "GPT-4o Search",
    "Claude 3.7",
    "Perplexity Pro",
    "Gemini 3.5 Flash",
    "Composer 2.5",
  ];

  return (
    <div
      onMouseEnter={() => setIsHoveredOrActive(true)}
      className="relative flex flex-col items-center w-full max-w-5xl mx-auto space-y-6"
    >
      {/* Component 2: Sovereign Prompt Library Dialog */}
      <PromptLibrary
        prompts={prompts}
        onPromptsChange={setPrompts}
        onSelect={handleSelectPrompt}
        isOpen={isLibraryOpen}
        onOpenChange={setIsLibraryOpen}
      >
        <PromptLibraryContent>
          <PromptLibrarySearch />
          <PromptLibraryList>
            <PromptLibraryEmpty />
            <PromptLibraryGroup heading="GEO & AI Search">
              {prompts
                .filter((p) => p.category === "GEO & AI Search")
                .map((p) => (
                  <PromptLibraryItem key={p.id} prompt={p} />
                ))}
            </PromptLibraryGroup>
            <PromptLibraryGroup heading="Cybersecurity">
              {prompts
                .filter((p) => p.category === "Cybersecurity")
                .map((p) => (
                  <PromptLibraryItem key={p.id} prompt={p} />
                ))}
            </PromptLibraryGroup>
            <PromptLibraryGroup heading="Legal & Health">
              {prompts
                .filter((p) => p.category === "Legal & Health")
                .map((p) => (
                  <PromptLibraryItem key={p.id} prompt={p} />
                ))}
            </PromptLibraryGroup>
            <PromptLibraryGroup heading="Custom">
              {prompts
                .filter((p) => p.isCustom)
                .map((p) => (
                  <PromptLibraryItem key={p.id} prompt={p} />
                ))}
            </PromptLibraryGroup>
          </PromptLibraryList>
          <PromptLibraryFooter>
            <PromptLibraryCreateTrigger />
          </PromptLibraryFooter>
        </PromptLibraryContent>
        <PromptLibraryCreateDialog />
      </PromptLibrary>

      {/* Main Console Box */}
      <div className="w-full rounded-[28px] sm:rounded-[36px] bg-[#07090E] p-5 sm:p-7 lg:p-8 border border-neutral-800 shadow-[0_24px_70px_rgba(0,0,0,0.4)] text-white space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800/80">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                Live Multi-Engine Evidence Suite
              </span>
            </div>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">
              Authentic LLM Citation &amp; Displacement Inspector
            </h3>
          </div>

          <button
            type="button"
            onClick={() => setIsLibraryOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-200 hover:text-white transition-all shadow-xs self-start sm:self-auto hover:border-[#FF7A1A]/50 cursor-pointer"
          >
            <Sparkles className="size-3.5 text-[#FF7A1A]" />
            <span>Browse Prompt Library</span>
          </button>
        </div>

        {/* ================= V0 AI CHAT INPUT BOX ================= */}
        <div className="relative rounded-2xl bg-[#0E131E] border border-neutral-800 shadow-xl focus-within:border-emerald-500/50 focus-within:ring-1 focus-within:ring-emerald-500/20 transition-all">
          <div className="p-3 sm:p-4">
            <Textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                adjustHeight();
              }}
              onFocus={() => setIsHoveredOrActive(true)}
              onKeyDown={handleKeyDown}
              placeholder="Type an audit query, benchmark prompt, or domain name..."
              className={cn(
                "w-full resize-none bg-transparent border-none text-white text-sm sm:text-base focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-neutral-500 placeholder:text-sm min-h-[56px] leading-relaxed p-0 shadow-none font-sans"
              )}
              style={{ overflow: "hidden" }}
            />
          </div>

          {/* Bottom Bar Actions */}
          <div className="flex items-center justify-between p-3 pt-1 border-t border-neutral-800/60 bg-[#090D14]/80 rounded-b-2xl">
            <div className="flex items-center gap-2">
              {/* Model Dropdown Trigger */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                  className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Bot className="size-3.5 text-emerald-400" />
                  <span>{selectedModel}</span>
                  <ChevronDown className="size-3 text-neutral-500" />
                </button>

                {isModelDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 z-50 w-48 rounded-2xl border border-neutral-800 bg-[#0C1018] p-1.5 shadow-2xl backdrop-blur-md flex flex-col gap-1">
                    {models.map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => {
                          setSelectedModel(m);
                          setIsModelDropdownOpen(false);
                          setIsHoveredOrActive(true);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between cursor-pointer",
                          selectedModel === m
                            ? "bg-neutral-800 text-white font-semibold"
                            : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                        )}
                      >
                        <span>{m}</span>
                        {selectedModel === m && (
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Prompt Library Quick Trigger */}
              <button
                type="button"
                onClick={() => setIsLibraryOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkles className="size-3.5 text-[#FF7A1A]" />
                <span className="hidden sm:inline">Templates</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSend}
                className={cn(
                  "size-8 rounded-xl flex items-center justify-center transition-all cursor-pointer",
                  value.trim()
                    ? "bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-md shadow-emerald-500/20 scale-100"
                    : "bg-neutral-800 text-neutral-500 hover:text-neutral-300"
                )}
                aria-label="Execute prompt"
              >
                <ArrowUp className="size-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Action Chips (Cursor Pointer) */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
          <span className="text-[10px] font-mono uppercase text-neutral-500 font-bold shrink-0">
            PROMPT BENCHMARKS:
          </span>
          {DEFAULT_PROMPTS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => handleSelectPrompt(p)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-all duration-200 border shrink-0 cursor-pointer select-none",
                submittedQuery === p.prompt
                  ? "bg-white text-black font-semibold border-white shadow-sm scale-[1.02]"
                  : "bg-neutral-900/90 text-neutral-300 border-neutral-800 hover:text-white hover:bg-neutral-800 hover:border-neutral-700"
              )}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* ================= INSIDE-OUTSIDE REVEAL EVIDENCE INSPECTOR ================= */}
        <AnimatePresence>
          {isHoveredOrActive && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 15, scale: 0.97, filter: "blur(4px)" }}
              transition={{
                duration: 0.45,
                ease: [0.175, 0.885, 0.32, 1.275], // Spring inside-outside feel
              }}
              className="relative space-y-4 pt-3 border-t border-neutral-800/80 transform-gpu"
            >
              {/* 1. Simulated Search Prompt & Generated AI Recommendation */}
              <div className="p-5 rounded-2xl bg-[#0D111A] border border-neutral-800/90 space-y-4 shadow-inner">
                {/* Model Header */}
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span className="flex items-center gap-2 text-white font-semibold">
                    <Bot className={cn("size-4", activeResult.iconColor)} />
                    <span>{activeResult.engineName}</span>
                  </span>
                  <span className="text-[11px] text-neutral-500 truncate max-w-[240px]">
                    {activeResult.timestamp}
                  </span>
                </div>

                {/* Prompt Box */}
                <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 text-xs sm:text-sm text-neutral-200 font-sans flex items-start gap-3">
                  <Search className="size-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="italic font-medium text-neutral-300">
                    &ldquo;{submittedQuery}&rdquo;
                  </span>
                </div>

                {/* Generated Recommendation Box */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#121724] border border-neutral-800 space-y-2.5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 font-semibold tracking-wider">
                      Generated AI Recommendation
                    </span>
                    <span
                      className={cn(
                        "px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border",
                        activeResult.statusColor
                      )}
                    >
                      {activeResult.brandStatus}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                    {activeResult.aiResponse}
                  </p>
                </div>
              </div>

              {/* 2. Influential Source Footprint + Actionable Insight Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                {/* Sources List (7 Cols on lg+) */}
                <div className="lg:col-span-7 p-4 sm:p-5 rounded-2xl bg-[#0D111A] border border-neutral-800/90 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase font-bold text-neutral-400">
                    <span>Influential Source Footprint</span>
                    <Globe className="size-3.5 text-neutral-400" />
                  </div>

                  <div className="space-y-2">
                    {activeResult.citedSources.map((source, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-neutral-800/70 text-xs font-sans"
                      >
                        <div className="flex items-center gap-2.5 truncate pr-2">
                          <span className="size-2 rounded-full bg-[#FF7A1A] shrink-0" />
                          <span className="text-white font-medium truncate text-xs">
                            {source.name}
                          </span>
                          <span className="text-[9px] font-mono text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded shrink-0">
                            {source.type}
                          </span>
                        </div>
                        <span className="font-mono text-emerald-400 font-bold text-xs shrink-0">
                          {source.weight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actionable Optimization Insight (5 Cols on lg+) */}
                <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#131929] to-[#0D111A] border border-blue-500/20 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-blue-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <Sparkles className="size-3.5 text-blue-400" />
                      <span>Actionable Insight</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {activeResult.insight}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>BVI Engine v4.2</span>
                    <span className="text-emerald-400 font-semibold">Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
