"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  ArrowRight,
  Sparkles,
  Search,
  ShieldCheck,
  Globe,
  Plus,
  Menu,
  MoreVertical,
  Pin,
  Edit3,
  Image as ImageIcon,
  Video,
  Library,
  BookOpen,
  Mic,
  Settings,
  Send,
  ChevronDown,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
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
  type Prompt,
} from "@/components/ui/prompt-library";

/* ─────────────────────────── shared data ─────────────────────────── */

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
    iconColor: "text-[#C8102E]",
    timestamp: "Live Audit • 2 mins ago • Mumbai, IN",
    brandStatus: "Cited & Recommended",
    statusColor: "bg-[#C8102E]/10 text-rose-300 border-[#C8102E]/30",
    citedSources: [
      { name: "TechCrunch Benchmark Report", type: "Editorial", weight: "42%" },
      { name: "G2 Enterprise Grid (Q1 2026)", type: "Peer Review", weight: "31%" },
      { name: "aivilabs.com/research", type: "Primary Domain", weight: "27%" },
    ],
    aiResponse:
      "Based on recent benchmark data, AI Visibility Insights (AIVI) and Brand24 are frequently recommended. AIVI specifically stands out for multi-engine tracking across Perplexity, ChatGPT, and Gemini.",
    insight:
      "Your primary domain was cited alongside 2 tier-one publishers, giving you the #1 recommendation slot in 84% of high-intent enterprise prompts.",
  },
  "Claude 3.7": {
    engineName: "Claude 3.7 Sonnet (Anthropic)",
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
      "For strict enterprise governance, competitors X and Y are often evaluated due to their heavy citation in developer forums. While AIVI offers granular multilingual citation indexes, community sentiment currently favors legacy suites.",
    insight:
      "Competitors are dominating Reddit & Capterra citations. Deploying autonomous llms.txt and community citation hubs will recapture 35% displacement.",
  },
  "Perplexity Pro": {
    engineName: "Perplexity Pro (Sonar Deep)",
    iconColor: "text-cyan-400",
    timestamp: "Live Audit • 1 hour ago • Bengaluru, IN",
    brandStatus: "Cited & Recommended",
    statusColor: "bg-[#C8102E]/10 text-rose-300 border-[#C8102E]/30",
    citedSources: [
      { name: "YourBrand Documentation", type: "Direct API", weight: "62%" },
      { name: "Inc42 Startup Index", type: "Media", weight: "24%" },
      { name: "GitHub Sovereign Schema", type: "Repository", weight: "14%" },
    ],
    aiResponse:
      "According to Inc42 and official documentation, AI Visibility Insights (by AIVI Intelligence) is currently the sole platform offering native Hinglish and Hindi GEO models with full audit verification.",
    insight:
      "Dominant 62% direct domain attribution. Vernacular query market share is currently uncontested by global competitors.",
  },
  "Gemini 3.5 Flash": {
    engineName: "Google AI Overviews (Gemini 3.5)",
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
      "Brand visibility in AI search is typically tracked using third-party crawler platforms, LLM log extractors, and generative brand indexers. Common steps include monitoring prompt outputs.",
    insight:
      "Google AI Overview relies 100% on publisher listicles. Ranking on page 1 of Google didn't trigger a single AI citation.",
  },
  "Composer 2.5": {
    engineName: "Composer 2.5 / Security AI",
    iconColor: "text-[#C8102E]",
    timestamp: "Live Audit • Real-Time Pipeline",
    brandStatus: "Cited & Recommended",
    statusColor: "bg-[#C8102E]/10 text-rose-300 border-[#C8102E]/30",
    citedSources: [
      { name: "OWASP ZAP DAST Engine", type: "DAST Scanner", weight: "50%" },
      { name: "Nuclei CVE v3 Database", type: "Vulnerability Feed", weight: "35%" },
      { name: "Semgrep SAST Ruleset", type: "Code Analysis", weight: "15%" },
    ],
    aiResponse:
      "Evaluated 200+ automated DAST and CVE vectors. Computed objective 92/100 AI Launch Score. Identified missing Content-Security-Policy header with 1-click IDE remediation prompts.",
    insight:
      "Zero critical vulnerabilities detected. 1 High and 3 Medium findings can be fixed in 15 minutes using generated IDE prompts.",
  },
};

/* ─────────────────────────── component ─────────────────────────── */

interface HeroMockupProps {
  onOpenDemo?: () => void;
}

export function HeroMockup({ onOpenDemo }: HeroMockupProps) {
  /* ── legacy chat state ── */
  const [promptInput, setPromptInput] = useState(
    "Audit citation authority for our enterprise domain across ChatGPT, Perplexity Pro & Claude..."
  );
  const [selectedEngine, setSelectedEngine] = useState<"chatgpt" | "claude" | "perplexity">("chatgpt");

  /* ── evidence suite state ── */
  const [isEvidenceMode, setIsEvidenceMode] = useState(false);
  const [prompts, setPrompts] = useState<Prompt[]>(DEFAULT_PROMPTS);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [currentPromptText, setCurrentPromptText] = useState(
    "Audit citation authority for our enterprise domain across ChatGPT, Perplexity Pro & Claude..."
  );
  const [selectedModel, setSelectedModel] = useState<string>("GPT-4o Search");
  const [activeTab, setActiveTab] = useState<"chat" | "spark">("chat");

  /* ── debounced hover timer for evidence suite ── */
  const evidenceHoverTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEvidenceEnter = () => {
    if (evidenceHoverTimer.current) clearTimeout(evidenceHoverTimer.current);
    evidenceHoverTimer.current = setTimeout(() => {
      setIsEvidenceMode(true);
    }, 400);
  };

  const handleEvidenceLeave = () => {
    if (evidenceHoverTimer.current) clearTimeout(evidenceHoverTimer.current);
    setIsEvidenceMode(false);
  };

  const activeResult = MODEL_RESULTS[selectedModel] ?? MODEL_RESULTS["GPT-4o Search"];

  const handleSelectPromptFromLibrary = (p: Prompt) => {
    setCurrentPromptText(p.prompt);
    setPromptInput(p.prompt);
    if (p.model) setSelectedModel(p.model);
  };

  const handlePromptSubmit = (
    value: string,
    meta: { model: string; effort: string; attachments: File[] }
  ) => {
    setCurrentPromptText(value);
    setPromptInput(value);
    setSelectedModel(meta.model);
  };

  const recentChats = [
    { title: "Enterprise Citation (GPT-4o)", pinned: true },
    { title: "Perplexity Displacement Map", active: true },
    { title: "Bharat Visibility Index™ v4.2" },
    { title: "Autonomous llms.txt Sync" },
    { title: "Fintech MSME Vernacular AI Queries" },
    { title: "Hindi & Hinglish Grounding Footprint" },
    { title: "DAST 200+ Security Scan" },
    { title: "Sovereign Prompt Library & Schema" },
  ];

  return (
    <section
      id="audit"
      className="relative w-full bg-[#FAF9F6] pt-12 pb-24 sm:pb-32 px-2 sm:px-6 lg:px-8 overflow-hidden text-neutral-900 scroll-mt-20"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-cyan-100/40 via-emerald-50/40 to-amber-50/40 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Prompt Library modal */}
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
              {prompts.filter((p) => p.category === "GEO & AI Search").map((p) => (
                <PromptLibraryItem key={p.id} prompt={p} />
              ))}
            </PromptLibraryGroup>
            <PromptLibraryGroup heading="Cybersecurity">
              {prompts.filter((p) => p.category === "Cybersecurity").map((p) => (
                <PromptLibraryItem key={p.id} prompt={p} />
              ))}
            </PromptLibraryGroup>
            <PromptLibraryGroup heading="Legal & Health">
              {prompts.filter((p) => p.category === "Legal & Health").map((p) => (
                <PromptLibraryItem key={p.id} prompt={p} />
              ))}
            </PromptLibraryGroup>
            <PromptLibraryGroup heading="Custom">
              {prompts.filter((p) => p.isCustom).map((p) => (
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

      <ContainerScroll
        titleComponent={
          <div className="space-y-4 px-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Interactive Generative Engine Workspace
              </span>
            </div>
            <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.12]">
              Inspect your real-time <br />
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent">
                AI citation footprint.
              </span>
            </h2>
            <p className="font-jakarta text-sm sm:text-base md:text-lg text-neutral-600 max-w-xl mx-auto pt-1 font-normal">
              Test how enterprise models analyze your brand, measure competitor citations, and generate live recommendation graphs.
            </p>
          </div>
        }
      >
        {/* ════════════════════ GEMINI-STYLE INTERFACE FRAMEWORK ════════════════════ */}
        <div className="w-full flex h-[580px] sm:h-[620px] bg-[#131314] text-[#E3E3E3] font-sans antialiased overflow-hidden select-text">

          {/* ── Left Sidebar (Gemini Style) ── */}
          <div className="hidden lg:flex w-[260px] xl:w-[280px] flex-col justify-between bg-[#1E1F20] border-r border-[#28292A] p-3 text-xs shrink-0 select-none">
            <div className="space-y-3 overflow-hidden flex flex-col">
              {/* Top Header / Mode Switcher */}
              <div className="flex items-center justify-between px-1.5 pt-1">
                <div className="flex items-center gap-2.5">
                  <button type="button" className="text-neutral-400 hover:text-white p-1 rounded-md hover:bg-neutral-800 transition-colors">
                    <Menu className="size-4" />
                  </button>
                  <span className="font-semibold text-white text-sm tracking-tight">
                    AIVI Workspace
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#131314] p-0.5 rounded-full border border-neutral-800 text-[10px]">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={cn(
                      "px-2.5 py-0.5 rounded-full font-medium transition-colors",
                      activeTab === "chat" ? "bg-[#282A2C] text-white" : "text-neutral-400 hover:text-white"
                    )}
                  >
                    Chat
                  </button>
                  <button
                    onClick={() => setActiveTab("spark")}
                    className={cn(
                      "px-2 py-0.5 rounded-full font-medium flex items-center gap-1 transition-colors",
                      activeTab === "spark" ? "bg-[#282A2C] text-white" : "text-neutral-400 hover:text-white"
                    )}
                  >
                    <span>Spark</span>
                    <span className="text-[8px] bg-blue-500/30 text-blue-300 px-1 rounded font-mono">BETA</span>
                  </button>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="space-y-0.5 pt-1">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-300 hover:text-white hover:bg-[#282A2C] transition-colors cursor-pointer"
                >
                  <Edit3 className="size-3.5 text-neutral-400" />
                  <span className="font-medium">New audit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsLibraryOpen(true)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-300 hover:text-white hover:bg-[#282A2C] transition-colors cursor-pointer"
                >
                  <Search className="size-3.5 text-neutral-400" />
                  <span>Search audits</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsLibraryOpen(true)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-300 hover:text-white hover:bg-[#282A2C] transition-colors cursor-pointer"
                >
                  <ImageIcon className="size-3.5 text-neutral-400" />
                  <span>Citations &amp; Evidence</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsLibraryOpen(true)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-300 hover:text-white hover:bg-[#282A2C] transition-colors cursor-pointer"
                >
                  <Library className="size-3.5 text-neutral-400" />
                  <span>Prompt Library</span>
                </button>
              </div>

              {/* Notebooks Section */}
              <div className="pt-2 border-t border-[#28292A]">
                <div className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider px-3 mb-1">
                  Notebooks
                </div>
                <button
                  type="button"
                  onClick={() => setIsLibraryOpen(true)}
                  className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-neutral-300 hover:text-white hover:bg-[#282A2C] transition-colors text-left cursor-pointer"
                >
                  <Plus className="size-3.5 text-neutral-400" />
                  <span>New notebook</span>
                </button>
              </div>

              {/* Recents Chat Stream */}
              <div className="flex-1 overflow-y-auto space-y-0.5 pr-1 scrollbar-none pt-1">
                <div className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider px-3 mb-1">
                  Recents
                </div>
                {recentChats.map((chat, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "px-3 py-1.5 rounded-xl flex items-center justify-between text-[11px] cursor-pointer transition-colors group",
                      chat.active
                        ? "bg-[#282A2C] text-white font-medium"
                        : "text-neutral-400 hover:text-neutral-200 hover:bg-[#282A2C]/60"
                    )}
                  >
                    <span className="truncate pr-1">{chat.title}</span>
                    {chat.pinned ? (
                      <Pin className="size-3 text-neutral-400 shrink-0" />
                    ) : chat.active ? (
                      <MoreVertical className="size-3 text-neutral-400 shrink-0" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Profile Pill */}
            <div className="pt-2 border-t border-[#28292A] flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-gradient-to-br from-[#C8102E] to-[#FF7A1A] flex items-center justify-center text-[10px] font-bold text-white">
                  R
                </div>
                <span className="text-neutral-300 text-xs font-medium truncate">Rishi</span>
              </div>
              <Settings className="size-3.5 text-neutral-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* ── Main Conversation Area (Gemini Style) ── */}
          <div
            className="flex-1 flex flex-col justify-between overflow-hidden bg-[#131314] relative"
            onMouseLeave={handleEvidenceLeave}
          >
            {/* Top Workspace Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-b border-[#28292A] bg-[#131314] shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-[#1E1F20] p-1 rounded-xl border border-[#333537] text-xs font-mono">
                  {(["chatgpt", "claude", "perplexity"] as const).map((engine) => (
                    <button
                      key={engine}
                      type="button"
                      onClick={() => setSelectedEngine(engine)}
                      className={cn(
                        "px-3 py-1 rounded-lg transition-all cursor-pointer",
                        selectedEngine === engine
                          ? "bg-white text-black font-semibold shadow-xs"
                          : "text-neutral-400 hover:text-white"
                      )}
                    >
                      {engine === "chatgpt" ? "GPT-4o Search" : engine === "claude" ? "Claude 3.7" : "Perplexity Pro"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsLibraryOpen(true)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E1F20] hover:bg-[#282A2C] border border-[#333537] text-xs font-medium text-neutral-300 transition-colors cursor-pointer"
                >
                  <Sparkles className="size-3 text-[#FF7A1A]" />
                  <span>Prompt Library</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="size-7 rounded-full bg-[#1E1F20] border border-[#333537] flex items-center justify-center text-neutral-400 hover:text-white cursor-pointer"
                >
                  <MoreVertical className="size-3.5" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {/* ════ DEFAULT VIEW: RETAINED ORIGINAL CONTENT IN GEMINI WORKSPACE ════ */}
              {!isEvidenceMode && (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1 flex flex-col justify-between p-4 sm:p-6 overflow-hidden"
                >
                  {/* Chat Content Stream */}
                  <div className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-none text-left">

                    {/* User Prompt (Top Right rounded bubble) */}
                    <div className="flex justify-end">
                      <div className="max-w-xl rounded-3xl bg-[#282A2C] p-4 sm:p-5 text-xs sm:text-sm text-[#E3E3E3] leading-relaxed border border-[#3A3C3E] shadow-md">
                        <p>{promptInput}</p>
                      </div>
                    </div>

                    {/* Model Response Stream (Live Citation Footprint with BVI Score) */}
                    <div className="space-y-4 max-w-3xl">
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#1E1F20] border border-[#2D2E30] space-y-3.5 shadow-lg">
                        <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-[#2D2E30]">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono uppercase text-[#C8102E] font-bold tracking-wider">
                              Live Citation Footprint
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#C8102E]/10 text-rose-300 border border-[#C8102E]/20">
                              Rank #1 Recommended
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-neutral-400">
                            BVI Authority Score:{" "}
                            <strong className="text-white">94.8%</strong>
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">
                          Across 124 evaluated B2B query prompts, your primary domain was cited
                          in <strong>88%</strong> of ChatGPT and Perplexity recommendations.
                          Competitor displacement remains low (12%) and concentrated in
                          third-party review listicles.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                          {[
                            { label: "Primary Domain", name: "yourbrand.com/platform", weight: "48% weight" },
                            { label: "Editorial Benchmark", name: "TechCrunch Enterprise", weight: "32% weight" },
                            { label: "Community Citations", name: "Reddit r/SaaS Grid", weight: "20% weight" },
                          ].map(({ label, name, weight }) => (
                            <div key={label} className="p-3 rounded-xl bg-[#131314] border border-[#2D2E30] text-xs space-y-1">
                              <div className="text-neutral-400 text-[10px] font-mono uppercase">{label}</div>
                              <div className="font-semibold text-white truncate text-xs">{name}</div>
                              <div className="text-[#C8102E] font-mono text-[11px] font-bold">{weight}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Bottom Floating Gemini Input Console ── */}
                  <div
                    className="pt-3 shrink-0 cursor-pointer"
                    onMouseEnter={handleEvidenceEnter}
                    onClick={() => setIsEvidenceMode(true)}
                  >
                    <div className="relative rounded-3xl bg-[#1E1F20] border border-[#333537] hover:border-neutral-500 shadow-xl px-4 py-3 sm:py-3.5 flex items-center justify-between gap-3 transition-all group">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <button
                          type="button"
                          className="size-7 rounded-full bg-[#282A2C] hover:bg-[#333537] flex items-center justify-center text-neutral-300 shrink-0 transition-colors"
                        >
                          <Plus className="size-4" />
                        </button>
                        <span className="text-xs sm:text-sm text-neutral-400 font-sans truncate">
                          {promptInput}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#131314] text-[11px] font-medium text-neutral-300 border border-neutral-700">
                          <span>Flash</span>
                          <ChevronDown className="size-3 text-neutral-500" />
                        </div>
                        <button type="button" className="size-8 rounded-full hover:bg-[#282A2C] flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                          <Mic className="size-4" />
                        </button>
                        <button
                          type="button"
                          className="size-8 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white flex items-center justify-center shadow-md shadow-red-950/20 transition-all hover:scale-105"
                        >
                          <ArrowRight className="size-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-[10px] text-neutral-500 text-center pt-2 font-sans">
                      AIVI is enterprise generative search intelligence and can make mistakes.
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ════ LIVE MULTI-ENGINE EVIDENCE SUITE VIEW (When Interacted) ════ */}
              {isEvidenceMode && (
                <motion.div
                  key="evidence"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="flex-1 flex flex-col h-full p-4 sm:p-5 space-y-3 overflow-y-auto scrollbar-none text-left"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#28292A] shrink-0">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[#C8102E] animate-pulse" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                          Live Multi-Engine Evidence Suite
                        </span>
                      </div>
                      <h4 className="font-sans text-sm sm:text-base font-bold text-white tracking-tight">
                        Authentic LLM Citation &amp; Displacement Inspector
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsLibraryOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E1F20] hover:bg-[#282A2C] border border-[#333537] text-xs font-semibold text-neutral-200 hover:text-white transition-all shrink-0 cursor-pointer"
                    >
                      <Sparkles className="size-3 text-[#FF7A1A]" />
                      <span>Prompt Library</span>
                    </button>
                  </div>

                  {/* Interactive Prompt Input */}
                  <div className="space-y-1 shrink-0">
                    <div className="text-[10px] font-mono text-neutral-400 font-medium flex items-center justify-between px-1">
                      <span>Interactive Audit Command Console</span>
                      <span className="text-neutral-500">Press Enter to execute</span>
                    </div>
                    <PromptInput
                      value={currentPromptText}
                      onChange={setCurrentPromptText}
                      onSubmit={handlePromptSubmit}
                      selectedModel={selectedModel}
                      onSelectModel={setSelectedModel}
                      onOpenPromptLibrary={() => setIsLibraryOpen(true)}
                    />
                  </div>

                  {/* Engine Inspection Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#1E1F20] border border-[#2D2E30] space-y-3 text-left">
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-[#2D2E30]">
                      <div className="flex items-center gap-2">
                        <span className={cn("text-xs font-mono font-bold tracking-wider", activeResult.iconColor)}>
                          {activeResult.engineName}
                        </span>
                        <span className={cn("px-2 py-0.5 rounded text-[10px] font-mono border", activeResult.statusColor)}>
                          {activeResult.brandStatus}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {activeResult.timestamp}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">
                      {activeResult.aiResponse}
                    </p>

                    {/* Sources Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      {activeResult.citedSources.map((src, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-[#131314] border border-[#2D2E30] text-xs space-y-1">
                          <div className="text-neutral-400 text-[10px] font-mono uppercase">{src.type}</div>
                          <div className="font-semibold text-white truncate text-xs">{src.name}</div>
                          <div className="text-[#C8102E] font-mono text-[11px] font-bold">{src.weight}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </ContainerScroll>
    </section>
  );
}

export default HeroMockup;
