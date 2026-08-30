"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  EyeOff, 
  Users2, 
  Layers, 
  Sparkles, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Globe, 
  ShieldCheck,
  BookOpen,
  SlidersHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PromptInput } from "@/components/ui/ai-chat-input";
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
  type Prompt 
} from "@/components/ui/prompt-library";

interface ProblemCard {
  id: string;
  icon: any;
  tag: string;
  title: string;
  description: string;
}

const problemCards: ProblemCard[] = [
  {
    id: "card-1",
    icon: EyeOff,
    tag: "01 / HIGH-INTENT DISPLACEMENT",
    title: "Invisible in high-intent prompts",
    description: "Your site may rank on Google and still be absent when buyers ask AI for recommendations.",
  },
  {
    id: "card-2",
    icon: Users2,
    tag: "02 / NARRATIVE HIJACK",
    title: "Competitors shape the narrative",
    description: "AI may cite review sites, comparison pages, communities, and third-party publishers before it cites your website.",
  },
  {
    id: "card-3",
    icon: Layers,
    tag: "03 / MULTI-DIMENSIONAL CONTEXT",
    title: "One score is not enough",
    description: "A useful visibility metric needs the prompt, model, date, location, response, and cited sources behind it.",
  },
];

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

interface EngineResult {
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

const MODEL_RESULTS: Record<string, EngineResult> = {
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

export function ProblemSection() {
  const [prompts, setPrompts] = useState<Prompt[]>(DEFAULT_PROMPTS);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [currentPromptText, setCurrentPromptText] = useState(
    "What are the most reliable AI search visibility and GEO platforms in 2026?"
  );
  const [selectedModel, setSelectedModel] = useState<string>("GPT-4o Search");
  const [submittedQuery, setSubmittedQuery] = useState(
    "What are the most reliable AI search visibility and GEO platforms in 2026?"
  );

  const activeResult = MODEL_RESULTS[selectedModel] || MODEL_RESULTS["GPT-4o Search"];

  const handleSelectPromptFromLibrary = (promptItem: Prompt) => {
    setCurrentPromptText(promptItem.prompt);
    setSubmittedQuery(promptItem.prompt);
    if (promptItem.model) {
      setSelectedModel(promptItem.model);
    }
  };

  const handlePromptSubmit = (
    value: string,
    meta: { model: string; effort: string; attachments: File[] }
  ) => {
    setSubmittedQuery(value);
    setSelectedModel(meta.model);
  };

  return (
    <section id="problem" className="relative w-full bg-[#F4F6F8] text-[#111827] py-20 sm:py-28 lg:py-32 overflow-hidden scroll-mt-20">
      
      {/* Ambient background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/40 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-100/30 via-orange-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Component 2: Sovereign Prompt Library Modal */}
      <PromptLibrary
        prompts={prompts}
        onPromptsChange={setPrompts}
        onSelect={handleSelectPromptFromLibrary}
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

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* ================= MERGED SIDE-BY-SIDE GRID LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: PROBLEM NARRATIVE & 3 CARDS ================= */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8 text-left">
            
            {/* Header Block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300/80 shadow-xs">
                <span className="size-2 rounded-full bg-[#FF7A1A]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-800">
                  Search has changed
                </span>
              </div>

              {/* Dominant Headline */}
              <h2 className="font-sans text-3xl sm:text-4xl xl:text-[42px] font-bold tracking-tight text-neutral-900 leading-[1.12]">
                Your buyers are no longer choosing from ten blue links.
              </h2>

              {/* Subtitle / Body Copy */}
              <div className="font-sans space-y-2.5 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                <p>
                  They ask AI which tools to trust, which provider to choose, and which brand is best for their situation.
                </p>
                <p className="font-semibold text-neutral-800">
                  If your brand is absent from that answer, traditional rankings alone cannot tell you why.
                </p>
                <p className="text-neutral-500 text-xs sm:text-sm">
                  AI Visibility Insights gives you a clear view of where you appear, where competitors win, and which sources influence the answer.
                </p>
              </div>
            </motion.div>

            {/* 3 Stacked Problem Cards */}
            <div className="space-y-3.5">
              {problemCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-md hover:border-neutral-300 transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="size-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-[#C8102E] group-hover:text-white transition-colors shrink-0 mt-0.5">
                        <Icon className="size-5 stroke-[1.8]" />
                      </div>

                      {/* Content */}
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono font-semibold tracking-wider text-neutral-400 uppercase">
                          {card.tag}
                        </div>
                        <h3 className="font-sans text-base font-bold text-neutral-900 group-hover:text-neutral-950 leading-snug">
                          {card.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE PROMPT INPUT + TEMPLATE LIBRARY + EXPANDED RESULT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 xl:col-span-7 rounded-[28px] sm:rounded-[34px] bg-[#07090E] p-4 sm:p-6 lg:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-neutral-800 text-white space-y-5 text-left"
          >
            
            {/* Top Bar with Live Badge & Quick Template Launcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800/80">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Live Multi-Engine Evidence Suite
                  </span>
                </div>
                <h4 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight">
                  Authentic LLM Citation &amp; Displacement Inspector
                </h4>
              </div>

              {/* Quick Launch Library Button */}
              <button
                type="button"
                onClick={() => setIsLibraryOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-200 hover:text-white transition-all shadow-xs self-start sm:self-auto hover:border-[#FF7A1A]/40 cursor-pointer"
              >
                <Sparkles className="size-3.5 text-[#FF7A1A]" />
                <span>Browse Prompt Library</span>
              </button>
            </div>

            {/* Component 1: Interactive AI Chat / Prompt Input Bar */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-neutral-400 font-medium flex items-center justify-between px-1">
                <span>Interactive Audit Command Console</span>
                <span className="text-[10px] text-neutral-500">Press Enter or click arrow to execute</span>
              </div>

              <PromptInput
                value={currentPromptText}
                onChange={setCurrentPromptText}
                onSubmit={handlePromptSubmit}
                selectedModel={selectedModel}
                onSelectModel={setSelectedModel}
                onOpenPromptLibrary={() => setIsLibraryOpen(true)}
                placeholder="Audit citation authority across ChatGPT, Claude, and Perplexity..."
                models={["GPT-4o Search", "Claude 3.7", "Perplexity Pro", "Gemini 3.5 Flash", "Composer 2.5"]}
                efforts={["Low", "Medium", "Max Effort"]}
              />
            </div>

            {/* Quick Prompt Suggestion Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
              <span className="text-[10px] font-mono uppercase text-neutral-500 font-semibold shrink-0">
                Templates:
              </span>
              {DEFAULT_PROMPTS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPromptFromLibrary(p)}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-[11px] font-sans font-medium whitespace-nowrap transition-all duration-150 border shrink-0 cursor-pointer select-none",
                    submittedQuery === p.prompt
                      ? "bg-neutral-800 text-white border-neutral-600 shadow-2xs"
                      : "bg-neutral-900/90 text-neutral-400 border-neutral-800 hover:text-white hover:bg-neutral-800"
                  )}
                >
                  {p.title}
                </button>
              ))}
            </div>

            {/* Expanded Live Result Details Area (Returned from Component 1 & 2 Execution) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedModel}-${submittedQuery}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 pt-1"
              >
                
                {/* 1. Simulated Search Prompt & Generated AI Recommendation */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0D111A] border border-neutral-800/90 space-y-3.5 shadow-inner">
                  
                  {/* Model Header */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span className="flex items-center gap-2 text-white font-semibold">
                      <Bot className={cn("size-4", activeResult.iconColor)} />
                      <span>{activeResult.engineName}</span>
                    </span>
                    <span className="text-[11px] text-neutral-500 truncate max-w-[200px]">
                      {activeResult.timestamp}
                    </span>
                  </div>

                  {/* Prompt Box */}
                  <div className="p-3 rounded-xl bg-black/60 border border-neutral-800 text-xs sm:text-sm text-neutral-200 font-sans flex items-start gap-2.5">
                    <Search className="size-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span className="italic font-medium text-neutral-300">
                      &ldquo;{submittedQuery}&rdquo;
                    </span>
                  </div>

                  {/* Generated Recommendation Box */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#121724] border border-neutral-800 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 font-semibold tracking-wider">
                        Generated AI Recommendation
                      </span>
                      <span className={cn("px-2 py-0.5 rounded text-[10px] font-mono font-bold border", activeResult.statusColor)}>
                        {activeResult.brandStatus}
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                      {activeResult.aiResponse}
                    </p>
                  </div>
                </div>

                {/* 2. Influential Source Footprint + Actionable Insight Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch">
                  
                  {/* Sources List (7 Cols on sm+) */}
                  <div className="sm:col-span-7 p-4 rounded-2xl bg-[#0D111A] border border-neutral-800/90 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase font-bold text-neutral-400">
                      <span>Influential Source Footprint</span>
                      <Globe className="size-3.5 text-neutral-400" />
                    </div>

                    <div className="space-y-1.5">
                      {activeResult.citedSources.map((source, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-neutral-800/70 text-xs font-sans"
                        >
                          <div className="flex items-center gap-2 truncate pr-2">
                            <span className="size-1.5 rounded-full bg-[#FF7A1A] shrink-0" />
                            <span className="text-white font-medium truncate text-[11px] sm:text-xs">
                              {source.name}
                            </span>
                            <span className="text-[9px] font-mono text-neutral-400 bg-neutral-800 px-1 py-0.2 rounded shrink-0">
                              {source.type}
                            </span>
                          </div>
                          <span className="font-mono text-emerald-400 font-bold text-[11px] shrink-0">
                            {source.weight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actionable Optimization Insight (5 Cols on sm+) */}
                  <div className="sm:col-span-5 p-4 rounded-2xl bg-gradient-to-br from-[#131929] to-[#0D111A] border border-blue-500/20 flex flex-col justify-between space-y-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-blue-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                        <Sparkles className="size-3.5 text-blue-400" />
                        <span>Actionable Insight</span>
                      </div>
                      <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                        {activeResult.insight}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span>BVI Engine v4.2</span>
                      <span className="text-emerald-400 font-semibold">Verified</span>
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ProblemSection;

