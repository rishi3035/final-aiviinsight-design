"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Library,
  Mic,
  Settings,
  Send,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  SlidersHorizontal,
  Bell,
  Play,
  Flame,
  Activity,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  FileText,
  AlertTriangle,
  RotateCw,
  Clock,
  ExternalLink,
  ChevronUp,
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { cn } from "@/lib/utils";

interface HeroMockupProps {
  onOpenDemo?: (category?: string) => void;
}

export function HeroMockup({ onOpenDemo }: HeroMockupProps) {
  const [viewMode, setViewMode] = useState<"prompt" | "dashboard">("prompt");
  const [isLockedDashboard, setIsLockedDashboard] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [activeSidebarItem, setActiveSidebarItem] = useState("Dashboard Overview");
  const [expandedAVS, setExpandedAVS] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fullPrompt = "show my company on top in AI search recommendations";

  // Typewriter effect on initial prompt screen
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    const interval = setInterval(() => {
      if (!isDeleting) {
        setTypedText(fullPrompt.slice(0, index + 1));
        index++;
        if (index === fullPrompt.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 3000);
        }
      } else {
        setTypedText(fullPrompt.slice(0, index - 1));
        index--;
        if (index === 0) {
          isDeleting = false;
        }
      }
    }, 75);

    return () => clearInterval(interval);
  }, []);

  const handlePromptHoverEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setViewMode("dashboard");
    }, 250);
  };

  const handlePromptHoverLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    if (!isLockedDashboard) {
      hoverTimer.current = setTimeout(() => {
        // keep dashboard if locked, else return to prompt
      }, 500);
    }
  };

  const toggleDashboardLock = () => {
    setIsLockedDashboard(true);
    setViewMode("dashboard");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F6] text-neutral-900 pb-16">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4 px-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs">
              <span className="size-2 rounded-full bg-[#C8102E] animate-pulse" />
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
              Hover over the live prompt to unlock the full AIVI Intelligence Dashboard.
            </p>
          </div>
        }
      >
        {/* ════════════════════ IPAD ACTIVE SCREEN CONTAINER ════════════════════ */}
        <div className="w-full flex flex-col h-[590px] sm:h-[630px] bg-[#07090E] text-[#E3E3E3] font-sans antialiased overflow-hidden select-text relative">
          
          {/* Top Mode Bar Switcher */}
          <div className="h-10 bg-[#0C1017] border-b border-[#1C2333] px-4 flex items-center justify-between text-xs z-30 shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-[#C8102E]" />
                <span className="font-mono font-bold text-white tracking-tight text-[11px]">
                  AI VISIBILITY INSIGHTS™
                </span>
              </div>
              <span className="hidden sm:inline font-mono text-[10px] text-neutral-500">|</span>
              <span className="hidden sm:inline font-mono text-[10px] text-neutral-400">
                {viewMode === "dashboard" ? "Live Production Dashboard" : "Prompt Command Console"}
              </span>
            </div>

            {/* Switcher Pill */}
            <div className="flex items-center gap-1 bg-[#141A24] p-0.5 rounded-full border border-neutral-700 text-[10px]">
              <button
                type="button"
                onClick={() => {
                  setViewMode("prompt");
                  setIsLockedDashboard(false);
                }}
                className={cn(
                  "px-3 py-1 rounded-full font-medium transition-all cursor-pointer",
                  viewMode === "prompt"
                    ? "bg-[#C8102E] text-white font-semibold shadow-xs"
                    : "text-neutral-400 hover:text-white"
                )}
              >
                Prompt Mode
              </button>
              <button
                type="button"
                onClick={() => {
                  setViewMode("dashboard");
                  setIsLockedDashboard(true);
                }}
                className={cn(
                  "px-3 py-1 rounded-full font-medium transition-all cursor-pointer flex items-center gap-1",
                  viewMode === "dashboard"
                    ? "bg-white text-black font-semibold shadow-xs"
                    : "text-neutral-400 hover:text-white"
                )}
              >
                <span>Live Dashboard</span>
                <span className="size-1.5 rounded-full bg-[#C8102E] animate-pulse" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* ════════════════════ VIEW 1: INITIAL PROMPT SCREEN ════════════════════ */}
            {viewMode === "prompt" && (
              <motion.div
                key="prompt-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col justify-between p-6 sm:p-10 bg-radial from-[#101622] to-[#07090E] relative overflow-hidden"
              >
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d10_1px,transparent_1px),linear-gradient(to_bottom,#1f293d10_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Top Status Header */}
                <div className="flex items-center justify-between text-xs text-neutral-400 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#C8102E] animate-ping" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-300">
                      Multi-LLM Real-Time Engine Listening
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-neutral-500">
                    Target: Enterprise GEO &amp; Citation Engine
                  </span>
                </div>

                {/* Center Main Prompt Inquiry Box */}
                <div className="max-w-2xl mx-auto w-full text-center space-y-6 relative z-10 my-auto">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                      <Sparkles className="size-3.5 text-[#C8102E]" />
                      <span>Natural Language Visibility Diagnostic</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-jakarta text-white tracking-tight">
                      What do you want AI to say about you?
                    </h3>
                  </div>

                  {/* ── Interactive Typing Prompt Trigger Bar ── */}
                  <div
                    onMouseEnter={handlePromptHoverEnter}
                    onMouseLeave={handlePromptHoverLeave}
                    onClick={toggleDashboardLock}
                    className="group relative rounded-3xl bg-[#0F141F] border-2 border-[#222B3D] hover:border-[#C8102E] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] text-left"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="size-9 rounded-2xl bg-[#C8102E]/10 border border-[#C8102E]/30 flex items-center justify-center text-[#C8102E] shrink-0">
                          <Bot className="size-5" />
                        </div>
                        <div className="flex-1 min-w-0 font-mono text-sm sm:text-base text-white">
                          <span>{typedText}</span>
                          <span className="inline-block w-2 h-4 bg-[#C8102E] ml-1 animate-pulse align-middle" />
                        </div>
                      </div>

                      <button
                        type="button"
                        className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] text-white text-xs font-bold font-sans flex items-center gap-2 shadow-lg shadow-red-950/40 group-hover:scale-105 transition-all shrink-0"
                      >
                        <span>Audit Now</span>
                        <ArrowRight className="size-3.5" />
                      </button>
                    </div>

                    {/* Hint Subtext */}
                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-sans text-neutral-400">
                      <span className="flex items-center gap-1.5 text-neutral-300">
                        <Flame className="size-3.5 text-[#C8102E]" />
                        <strong>Hover or click prompt</strong> to reveal your real-time AVS Dashboard
                      </span>
                      <span className="font-mono text-[#C8102E] font-semibold flex items-center gap-1">
                        Open Dashboard →
                      </span>
                    </div>
                  </div>

                  {/* Suggestion Pills */}
                  <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
                    {[
                      "Show my company on top",
                      "Why does Perplexity cite Competitor A?",
                      "Audit Hinglish search visibility in Mumbai",
                    ].map((sugg) => (
                      <button
                        key={sugg}
                        type="button"
                        onClick={toggleDashboardLock}
                        className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-xs font-sans transition-colors cursor-pointer"
                      >
                        {sugg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bottom Model Indicators */}
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-4 border-t border-white/5 relative z-10">
                  <span>Connected Engines: ChatGPT 4o • Claude 3.7 • Perplexity Pro • Gemini 3.5</span>
                  <span className="text-neutral-400">Hover trigger active</span>
                </div>
              </motion.div>
            )}

            {/* ════════════════════ VIEW 2: ACTUAL REDESIGNED AIVI DASHBOARD ════════════════════ */}
            {viewMode === "dashboard" && (
              <motion.div
                key="dashboard-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex-1 flex overflow-hidden bg-[#07090E]"
              >
                {/* ── 1. Left Navigation Sidebar ── */}
                <div
                  data-lenis-prevent
                  className="hidden md:flex w-[230px] lg:w-[250px] flex-col justify-between bg-[#0B0F17] border-r border-[#1B2232] p-3 text-xs shrink-0 select-none overflow-y-auto scrollbar-none overscroll-contain"
                >
                  <div className="space-y-4">
                    
                    {/* Brand in Sidebar */}
                    <div className="flex items-center gap-2.5 px-2 py-1">
                      <div className="size-7 rounded-xl bg-gradient-to-br from-[#C8102E] to-[#FF7A1A] flex items-center justify-center text-white font-bold text-xs shadow-md shadow-red-950/30">
                        <Activity className="size-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs tracking-tight">AI Visibility Insights</div>
                        <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">GEO PLATFORM</div>
                      </div>
                    </div>

                    {/* Navigation Groups */}
                    <div className="space-y-3">
                      {/* Overview */}
                      <div>
                        <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-500 px-2 mb-1">
                          Overview
                        </div>
                        <div className="space-y-0.5">
                          {[
                            { name: "Dashboard Overview", icon: LayoutDashboardIcon },
                            { name: "Quick Wins", icon: Zap },
                          ].map(({ name, icon: Icon }) => (
                            <button
                              key={name}
                              type="button"
                              onClick={() => setActiveSidebarItem(name)}
                              className={cn(
                                "w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors cursor-pointer text-left",
                                activeSidebarItem === name
                                  ? "bg-[#C8102E]/20 text-white border border-[#C8102E]/40 font-semibold"
                                  : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5"
                              )}
                            >
                              <Icon className={cn("size-3.5", activeSidebarItem === name ? "text-[#C8102E]" : "text-neutral-400")} />
                              <span>{name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Audits */}
                      <div>
                        <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-500 px-2 mb-1">
                          Audits
                        </div>
                        <div className="space-y-0.5">
                          {[
                            "Technical SEO",
                            "Crawler Issues",
                            "Performance & Speed",
                            "Search Readiness",
                            "Crawl Pages",
                            "Crawler Analytics",
                          ].map((audit) => (
                            <button
                              key={audit}
                              type="button"
                              onClick={() => setActiveSidebarItem(audit)}
                              className={cn(
                                "w-full flex items-center justify-between px-2.5 py-1 rounded-lg text-[11px] transition-colors cursor-pointer text-left",
                                activeSidebarItem === audit
                                  ? "bg-[#C8102E]/20 text-white font-semibold"
                                  : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5"
                              )}
                            >
                              <span>{audit}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* AI Visibility */}
                      <div>
                        <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-500 px-2 mb-1">
                          AI Visibility
                        </div>
                        <div className="space-y-0.5">
                          {[
                            { name: "AI Citation Probability", pro: false },
                            { name: "Real LLM Citations", pro: true },
                            { name: "AI Response Simulator", pro: false },
                            { name: "AI Traffic Risk Audit", pro: true },
                            { name: "AI Citation Gaps", pro: true },
                            { name: "Bharat Visibility Index™", pro: true },
                            { name: "AI Entity Strength", pro: false },
                            { name: "Multi-Model Perception", pro: false },
                            { name: "Visibility Monitoring", pro: false },
                            { name: "Prompt Library", pro: false },
                          ].map((item) => (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => setActiveSidebarItem(item.name)}
                              className={cn(
                                "w-full flex items-center justify-between px-2.5 py-1 rounded-lg text-[11px] transition-colors cursor-pointer text-left",
                                activeSidebarItem === item.name
                                  ? "bg-[#C8102E]/20 text-white font-semibold"
                                  : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5"
                              )}
                            >
                              <span className="truncate">{item.name}</span>
                              {item.pro && (
                                <span className="text-[8px] font-mono bg-[#C8102E]/20 text-rose-300 px-1 py-0.2 rounded border border-[#C8102E]/30 shrink-0">
                                  PRO
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Bottom Profile */}
                  <div className="pt-3 border-t border-[#1B2232] flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-gradient-to-tr from-[#C8102E] to-[#FF7A1A] flex items-center justify-center text-[10px] font-bold text-white">
                        R
                      </div>
                      <div className="leading-none truncate">
                        <div className="text-white text-[11px] font-semibold truncate">Rishikesh Raj</div>
                        <div className="text-neutral-500 text-[9px] font-mono">STARTER PLAN</div>
                      </div>
                    </div>
                    <Settings className="size-3.5 text-neutral-400 hover:text-white cursor-pointer" />
                  </div>
                </div>

                {/* ── 2. Main Scrollable Dashboard Content (Two Full Pages of Real App Data) ── */}
                <div className="flex-1 flex flex-col overflow-hidden bg-[#07090E]">
                  
                  {/* Dashboard Top Header Bar */}
                  <div className="h-12 bg-[#0A0E17] border-b border-[#1A2233] px-4 sm:px-6 flex items-center justify-between text-xs shrink-0">
                    <div className="flex items-center gap-2 text-neutral-400 font-mono text-[11px]">
                      <span className="text-neutral-200 font-semibold">Dashboard</span>
                      <span>/</span>
                      <span className="text-[#C8102E]">Overview</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* AVS Live Score Pill */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121824] border border-[#222E44] text-[11px] font-mono text-neutral-300">
                        <span className="size-1.5 rounded-full bg-[#C8102E]" />
                        <span>avs-1 • <strong className="text-white">78 AVS</strong></span>
                      </div>

                      {/* Run Analysis Job Action */}
                      <button
                        type="button"
                        onClick={() => onOpenDemo?.()}
                        className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white text-[11px] font-bold flex items-center gap-1.5 shadow-md shadow-red-950/30 transition-all cursor-pointer"
                      >
                        <Play className="size-3 fill-current" />
                        <span>RUN ANALYSIS JOB</span>
                      </button>

                      <button type="button" className="size-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer">
                        <Bell className="size-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* ── Scrollable Body Area ── */}
                  <div
                    data-lenis-prevent
                    className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent text-left overscroll-contain"
                  >
                    
                    {/* Greeting & Header */}
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold font-jakarta text-white tracking-tight flex items-center gap-2">
                          <span>Good morning, Rishikesh</span>
                          <span>👋</span>
                        </h2>
                        <p className="text-xs text-neutral-400 font-sans">
                          Here&rsquo;s your AI intelligence overview and canonical visibility score.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onOpenDemo?.()}
                        className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Plus className="size-3.5 text-[#C8102E]" />
                        <span>+ Add Domain</span>
                      </button>
                    </div>

                    {/* ════ HERO CARD: AIVI VISIBILITY SCORE (AVS 78) ════ */}
                    <div className="rounded-2xl bg-[#0D121D] border border-[#1E273A] p-5 sm:p-6 shadow-xl relative overflow-hidden space-y-4">
                      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none" />

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1.5 max-w-xl">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141B2A] text-neutral-300 border border-[#25324E]">
                              Scheme avs-1
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                              <span className="size-1.5 rounded-full bg-emerald-400" />
                              85% CONFIDENCE (75% MEASURED)
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold font-jakarta text-white tracking-tight flex items-center gap-2">
                            <Sparkles className="size-4 text-[#C8102E]" />
                            <span>AIVI Visibility Score (AVS)</span>
                          </h3>
                          <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                            Canonical 0-100 weighted index evaluating real citation rate, technical SEO, bot crawlability, and LLM search readiness across sovereign search engines.
                          </p>
                        </div>

                        {/* Circular Score Ring Gauge */}
                        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#080B11] border border-[#1A2335] shrink-0">
                          <div className="relative size-20 sm:size-24 flex items-center justify-center">
                            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-neutral-800"
                                strokeWidth="3.2"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-[#C8102E]"
                                strokeDasharray="78, 100"
                                strokeWidth="3.2"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute flex flex-col items-center justify-center">
                              <span className="text-2xl sm:text-3xl font-extrabold font-jakarta text-white">78</span>
                              <span className="text-[9px] font-mono text-neutral-400 -mt-0.5">AVS Index</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-3 border-t border-[#1C2538] flex items-center justify-between flex-wrap gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => setExpandedAVS(!expandedAVS)}
                          className="font-mono text-[11px] text-neutral-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <span>{expandedAVS ? "Collapse" : "Expand"} AVS Component Breakdown</span>
                          {expandedAVS ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                        </button>

                        <button
                          type="button"
                          onClick={() => onOpenDemo?.()}
                          className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-mono text-[11px] border border-white/10 transition-colors cursor-pointer"
                        >
                          Run Crash-Resumable Job
                        </button>
                      </div>

                      {/* Expanded Breakdown */}
                      {expandedAVS && (
                        <div className="pt-3 border-t border-[#1C2538] grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-sans">
                          <div className="p-2.5 rounded-xl bg-[#080B11] border border-white/5 space-y-1">
                            <div className="text-neutral-400 text-[10px] font-mono uppercase">Direct Citation Grounding</div>
                            <div className="text-sm font-bold text-white">88.4%</div>
                            <div className="text-[10px] text-emerald-400">+14% vs. industry benchmark</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#080B11] border border-white/5 space-y-1">
                            <div className="text-neutral-400 text-[10px] font-mono uppercase">Bharat Visibility Index™</div>
                            <div className="text-sm font-bold text-white">94.8%</div>
                            <div className="text-[10px] text-emerald-400">Dominant Indic model attribution</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#080B11] border border-white/5 space-y-1">
                            <div className="text-neutral-400 text-[10px] font-mono uppercase">DAST Security &amp; LLMs.txt</div>
                            <div className="text-sm font-bold text-white">92.0%</div>
                            <div className="text-[10px] text-[#C8102E]">1 High severity header remediation</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ════ SUB-SCORE MODULES (3 CARDS) ════ */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                        Sub-Score Modules (Part of your AIVI Visibility Score)
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          {
                            title: "AI Citation Score",
                            score: "84",
                            badge: "SIMULATED ESTIMATE",
                            desc: "PART OF YOUR AIVI VISIBILITY SCORE",
                            color: "text-[#C8102E]",
                          },
                          {
                            title: "Search Readiness",
                            score: "92",
                            badge: "SIMULATED ESTIMATE",
                            desc: "PART OF YOUR AIVI VISIBILITY SCORE",
                            color: "text-blue-400",
                          },
                          {
                            title: "Technical SEO",
                            score: "76",
                            badge: "SIMULATED ESTIMATE",
                            desc: "PART OF YOUR AIVI VISIBILITY SCORE",
                            color: "text-emerald-400",
                          },
                        ].map((module) => (
                          <div
                            key={module.title}
                            className="p-4 rounded-xl bg-[#0B0F17] border border-[#1C2538] hover:border-neutral-600 transition-all flex items-center justify-between cursor-pointer group"
                          >
                            <div className="flex items-center gap-3.5">
                              <div className="size-11 rounded-xl bg-[#07090E] border border-[#1F293D] flex items-center justify-center font-jakarta font-extrabold text-base text-white">
                                {module.score}
                              </div>
                              <div className="space-y-0.5">
                                <h4 className="text-xs font-bold text-white group-hover:text-[#C8102E] transition-colors">
                                  {module.title}
                                </h4>
                                <div className="text-[9px] font-mono text-neutral-500 uppercase">{module.desc}</div>
                                <div className="text-[8px] font-mono bg-[#141B29] text-amber-300 px-1 py-0.2 rounded inline-block border border-amber-500/20">
                                  ⚠️ {module.badge}
                                </div>
                              </div>
                            </div>
                            <ChevronRight className="size-4 text-neutral-600 group-hover:text-white transition-colors" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ════ MIDDLE ROW: DOMAINS + MONTHLY USAGE ════ */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                      
                      {/* Your Domains */}
                      <div className="lg:col-span-8 rounded-2xl bg-[#0B0F17] border border-[#1C2538] p-4 sm:p-5 space-y-3.5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                          <div className="flex items-center gap-2">
                            <Globe className="size-4 text-[#C8102E]" />
                            <h4 className="text-xs font-bold text-white font-jakarta">Your Domains</h4>
                          </div>
                          <button type="button" className="font-mono text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer">
                            Manage →
                          </button>
                        </div>

                        {/* Domain Active Item */}
                        <div className="p-3.5 rounded-xl bg-[#07090E] border border-[#1C2538] flex items-center justify-between flex-wrap gap-2">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-white font-mono">yourbrand.com</span>
                              <span className="px-2 py-0.2 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                                Live Monitored
                              </span>
                            </div>
                            <div className="text-[11px] text-neutral-400 font-sans">
                              124 evaluated search queries • BVI Indic Score: 94.8% • DAST Clean
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => onOpenDemo?.()}
                              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-neutral-200 border border-white/10 transition-colors"
                            >
                              Scan Details
                            </button>
                          </div>
                        </div>

                        {/* Add Domain Trigger */}
                        <button
                          type="button"
                          onClick={() => onOpenDemo?.()}
                          className="w-full py-2.5 rounded-xl border border-dashed border-[#222D42] hover:border-[#C8102E] text-neutral-400 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                          <Plus className="size-3.5 text-[#C8102E]" />
                          <span>Add your next domain to start analyzing</span>
                        </button>
                      </div>

                      {/* Monthly Usage */}
                      <div className="lg:col-span-4 rounded-2xl bg-[#0B0F17] border border-[#1C2538] p-4 sm:p-5 space-y-3 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="size-4 text-blue-400" />
                            <h4 className="text-xs font-bold text-white font-jakarta">Monthly Usage</h4>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/10 text-white">
                            Starter
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-neutral-400">AI Engine Calls</span>
                            <span className="font-bold text-white">38 / 50</span>
                          </div>
                          <div className="h-2 w-full bg-[#07090E] rounded-full overflow-hidden border border-white/5">
                            <div className="h-full bg-gradient-to-r from-[#C8102E] to-[#FF7A1A] w-[76%]" />
                          </div>
                          <div className="text-[10px] text-neutral-500 font-mono">
                            12 calls remaining this billing cycle
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => onOpenDemo?.()}
                          className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-sans font-semibold text-xs transition-colors cursor-pointer"
                        >
                          Upgrade Plan
                        </button>
                      </div>

                    </div>

                    {/* ════ LOWER ROW 1: UNIFIED ACTIONABLE ISSUES (FROM IMAGE 2) ════ */}
                    <div className="rounded-2xl bg-[#0B0F17] border border-[#1C2538] p-4 sm:p-5 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-white/5">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="size-4 text-amber-400" />
                          <h4 className="text-xs font-bold text-white font-jakarta">Unified Actionable Issues</h4>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">
                          3 priority recommendations
                        </span>
                      </div>

                      <div className="space-y-2">
                        {[
                          {
                            title: "Deploy standard llms.txt at domain root",
                            impact: "HIGH IMPACT",
                            impactColor: "bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30",
                            desc: "Enables autonomous token indexing for ChatGPT Search and Claude 3.7 without crawler blocks.",
                          },
                          {
                            title: "Fix Missing Content-Security-Policy (CSP) headers",
                            impact: "DAST SECURITY",
                            impactColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
                            desc: "DAST scanner identified unanchored CSP directives. Synthesize 1-click Cursor prompt.",
                          },
                          {
                            title: "Optimize Hinglish grounding entities for Bharat Visibility Index™",
                            impact: "INDIC GEO",
                            impactColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
                            desc: "Captures 35% uncontested vernacular queries across Tier-1 and Tier-2 Indian metro consumers.",
                          },
                        ].map((issue, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-[#07090E] border border-[#1A2233] flex items-start justify-between gap-3 text-xs"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-white font-sans text-xs">{issue.title}</span>
                                <span className={cn("px-1.5 py-0.2 rounded text-[8px] font-mono border", issue.impactColor)}>
                                  {issue.impact}
                                </span>
                              </div>
                              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                                {issue.desc}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => onOpenDemo?.()}
                              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-mono text-[10px] shrink-0 border border-white/10 transition-colors"
                            >
                              Fix Prompt →
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ════ LOWER ROW 2: QUICK ACCESS & RECENT ACTIVITY (FROM IMAGE 2) ════ */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                      
                      {/* Quick Access */}
                      <div className="lg:col-span-5 rounded-2xl bg-[#0B0F17] border border-[#1C2538] p-4 sm:p-5 space-y-2.5">
                        <div className="text-xs font-bold text-white font-jakarta pb-1 border-b border-white/5">
                          Quick Access
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { name: "Technical SEO", icon: Search },
                            { name: "AI Citation Probability", icon: Bot },
                            { name: "Growth Roadmap & llms.txt", icon: TrendingUp },
                            { name: "Search Readiness Score", icon: ShieldCheck },
                          ].map(({ name, icon: Icon }) => (
                            <button
                              key={name}
                              type="button"
                              onClick={() => onOpenDemo?.()}
                              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#07090E] border border-[#1A2233] hover:border-neutral-600 text-neutral-300 hover:text-white text-xs font-sans transition-all cursor-pointer"
                            >
                              <div className="flex items-center gap-2">
                                <Icon className="size-3.5 text-[#C8102E]" />
                                <span>{name}</span>
                              </div>
                              <ArrowRight className="size-3 text-neutral-500" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Recent Activity Timeline */}
                      <div className="lg:col-span-7 rounded-2xl bg-[#0B0F17] border border-[#1C2538] p-4 sm:p-5 space-y-2.5 flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-1 border-b border-white/5 text-xs">
                          <span className="font-bold text-white font-jakarta">Recent Activity</span>
                          <span className="font-mono text-[10px] text-neutral-400">Live stream</span>
                        </div>

                        <div className="space-y-2 text-xs font-sans">
                          {[
                            {
                              time: "2 mins ago",
                              title: "ChatGPT Search (GPT-4o) citation audit completed",
                              status: "Rank #1 Recommended",
                              color: "text-emerald-400",
                            },
                            {
                              time: "15 mins ago",
                              title: "Perplexity Pro Indic grounding indexed for Mumbai, IN",
                              status: "62% Direct Attribution",
                              color: "text-blue-400",
                            },
                            {
                              time: "1 hour ago",
                              title: "Bharat Visibility Index recalculated across Hindi & Hinglish",
                              status: "94.8% BVI Score",
                              color: "text-[#C8102E]",
                            },
                          ].map((act, i) => (
                            <div key={i} className="p-2.5 rounded-xl bg-[#07090E] border border-[#1A2233] flex items-center justify-between gap-2">
                              <div className="space-y-0.5 min-w-0">
                                <div className="text-white font-medium truncate text-xs">{act.title}</div>
                                <div className="text-[10px] text-neutral-500 font-mono">{act.time}</div>
                              </div>
                              <span className={cn("text-[10px] font-mono font-bold shrink-0", act.color)}>
                                {act.status}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                          <span>Real-time DAST &amp; GEO engine active</span>
                          <button
                            type="button"
                            onClick={() => {
                              setViewMode("prompt");
                              setIsLockedDashboard(false);
                            }}
                            className="text-[#C8102E] hover:underline cursor-pointer"
                          >
                            ← Back to Prompt Console
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </ContainerScroll>
    </section>
  );
}

function LayoutDashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

export default HeroMockup;
