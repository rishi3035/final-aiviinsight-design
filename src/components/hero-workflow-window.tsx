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
  Play,
  Pause,
  Star,
  Layers,
  ArrowUpRight,
  Database,
  Terminal,
  Activity,
  Cpu,
  Globe,
  CheckCircle2,
} from "lucide-react";

export function HeroWorkflowWindow() {
  const [activeTab, setActiveTab] = useState<"hackmywebsite" | "campusos" | "rankmind">(
    "hackmywebsite"
  );
  const [selectedNode, setSelectedNode] = useState<number>(3); // default to AI Fix Prompts
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      {/* Outer ambient glow directly behind window */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-orange-500/25 to-purple-500/20 rounded-[36px] blur-2xl opacity-80 pointer-events-none" />

      {/* Hardware Frame with subtle metallic bezel border */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-white/20 bg-slate-950/95 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden backdrop-blur-2xl text-left">
        
        {/* Top Window Control & Tabs Header */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 bg-slate-900/90 border-b border-slate-800/80 gap-3">
          {/* Window dots */}
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-rose-500/80" />
            <span className="size-3 rounded-full bg-amber-500/80" />
            <span className="size-3 rounded-full bg-emerald-500/80" />
          </div>

          {/* Product Switcher Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-full border border-white/10">
            <button
              onClick={() => {
                setActiveTab("hackmywebsite");
                setSelectedNode(3);
              }}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "hackmywebsite"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <ShieldCheck className="size-3.5" />
              <span>Hack My Website</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] bg-white/20 text-white font-mono uppercase">
                Live
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab("campusos");
                setSelectedNode(2);
              }}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "campusos"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Award className="size-3.5" />
              <span>Campus &amp; Career OS</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] bg-white/20 text-white font-mono uppercase">
                Live
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab("rankmind");
                setSelectedNode(1);
              }}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "rankmind"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Search className="size-3.5" />
              <span>RankMind AI</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] bg-white/20 text-white font-mono uppercase">
                GEO
              </span>
            </button>
          </div>

          {/* Direct Live URL Link */}
          <a
            href={
              activeTab === "hackmywebsite"
                ? "https://hackmywebsite.io"
                : activeTab === "campusos"
                ? "https://campus.aivilabs.com"
                : "https://aivisibilityinsights.com"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-orange-400 transition-colors font-mono"
          >
            <span>Open Instance</span>
            <ExternalLink className="size-3" />
          </a>
        </div>

        {/* Interactive Canvas Body */}
        <div className="p-4 sm:p-7 space-y-6">
          <AnimatePresence mode="wait">
            {/* 1. HACK MY WEBSITE WORKFLOW & REVIEW */}
            {activeTab === "hackmywebsite" && (
              <motion.div
                key="hackmywebsite"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Workflow Builder Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                        <Radio className="size-3 animate-pulse" />
                        AUTOMATED VULNERABILITY &amp; FIX PIPELINE
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      From Target Domain Verification ➔ 1-Click Code Remediation
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
                    <div className="size-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center font-mono text-emerald-400 font-black text-xs">
                      92
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      AI Launch Score: <strong className="text-emerald-400">Launch Ready</strong>
                    </div>
                  </div>
                </div>

                {/* Workflow Node Graph (Celigo / Flow Builder Style) */}
                <div className="p-4 sm:p-6 rounded-2xl bg-[#070A10] border border-slate-800/90 relative overflow-x-auto">
                  {/* Subtle Grid Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <div className="flex items-center justify-between min-w-[620px] gap-3 relative z-10 py-2">
                    {/* Node 1: Target Domain */}
                    <div
                      onClick={() => setSelectedNode(1)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex-1 max-w-[170px] ${
                        selectedNode === 1
                          ? "bg-slate-900 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                          : "bg-slate-950/80 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 01</span>
                        <Lock className="size-3 text-emerald-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">Domain Ingest</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                        DNS TXT Verified
                      </div>
                    </div>

                    {/* Flow Connector 1 */}
                    <div className="flex items-center text-slate-600">
                      <span className="h-[2px] w-6 bg-slate-800" />
                      <ArrowRight className="size-3.5 -ml-1 text-slate-500" />
                    </div>

                    {/* Node 2: Multi-Engine Scan */}
                    <div
                      onClick={() => setSelectedNode(2)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex-1 max-w-[180px] ${
                        selectedNode === 2
                          ? "bg-slate-900 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                          : "bg-slate-950/80 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 02</span>
                        <Zap className="size-3 text-orange-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">200+ Multi-Audit</div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">
                        ZAP • Nuclei • Semgrep
                      </div>
                    </div>

                    {/* Flow Connector 2 */}
                    <div className="flex items-center text-slate-600">
                      <span className="h-[2px] w-6 bg-slate-800" />
                      <ArrowRight className="size-3.5 -ml-1 text-slate-500" />
                    </div>

                    {/* Node 3: AI Fix Prompt (Active) */}
                    <div
                      onClick={() => setSelectedNode(3)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex-1 max-w-[190px] ${
                        selectedNode === 3
                          ? "bg-slate-900 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                          : "bg-slate-950/80 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 03</span>
                        <Bot className="size-3 text-cyan-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">AI Fix Prompt</div>
                      <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
                        Cursor / Claude Ready
                      </div>
                    </div>

                    {/* Flow Connector 3 */}
                    <div className="flex items-center text-slate-600">
                      <span className="h-[2px] w-6 bg-slate-800" />
                      <ArrowRight className="size-3.5 -ml-1 text-slate-500" />
                    </div>

                    {/* Node 4: Hardened Deploy */}
                    <div
                      onClick={() => setSelectedNode(4)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex-1 max-w-[160px] ${
                        selectedNode === 4
                          ? "bg-slate-900 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                          : "bg-slate-950/80 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 04</span>
                        <CircleCheck className="size-3 text-emerald-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">Patch Verified</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                        100% Retested
                      </div>
                    </div>
                  </div>
                </div>

                {/* Node Detail & Interactive Fix Prompt Output */}
                <div className="p-4 rounded-xl bg-black/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <Terminal className="size-3.5" />
                      Generated AI Fix Prompt for Cursor / Claude Code
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          "Add Strict-Transport-Security: max-age=63072000; includeSubDomains; preload in next.config.js security headers."
                        )
                      }
                      className="flex items-center gap-1 text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800 border border-slate-700 transition-colors text-[11px] font-bold"
                    >
                      {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                      <span>{copied ? "Prompt Copied" : "Copy Fix Prompt"}</span>
                    </button>
                  </div>
                  <code className="block text-xs font-mono text-emerald-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 truncate">
                    // Fix HSTS Header: Add max-age=63072000; includeSubDomains; preload to Next.js headers()
                  </code>
                </div>

                {/* Real-time Customer Review / Verdict Strip */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-orange-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-md">
                      RV
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs text-slate-300 font-bold ml-1">5.0 / 5.0</span>
                      </div>
                      <p className="text-xs text-slate-300 italic">
                        &ldquo;Caught 2 critical missing security headers before client deployment. The Cursor fix prompt worked on the first try.&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 font-mono shrink-0 sm:text-right">
                    <div className="text-white font-bold">Rajeshwar Verma</div>
                    <div>Principal Architect · FinScale Labs</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. CAMPUS & CAREER OS WORKFLOW & REVIEW */}
            {activeTab === "campusos" && (
              <motion.div
                key="campusos"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Workflow Builder Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-orange-400 font-bold flex items-center gap-1.5">
                        <Radio className="size-3 animate-pulse" />
                        STUDENT CAREER INTELLIGENCE &amp; PLACEMENT PIPELINE
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      From Resume Parsing ➔ Sarvam Vernacular Voice Mock ➔ Corporate Offer
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
                    <div className="size-6 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center font-mono text-orange-400 font-black text-xs">
                      88%
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      Job Fit Match: <strong className="text-orange-400">SDE-1 Verified</strong>
                    </div>
                  </div>
                </div>

                {/* Workflow Node Graph */}
                <div className="p-4 sm:p-6 rounded-2xl bg-[#070A10] border border-slate-800/90 relative overflow-x-auto">
                  <div className="flex items-center justify-between min-w-[620px] gap-3 relative z-10 py-2">
                    {/* Node 1: Resume Studio */}
                    <div className="p-3.5 rounded-xl border bg-slate-900 border-orange-500 flex-1 max-w-[170px]">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 01</span>
                        <FileText className="size-3 text-orange-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">Resume Studio v2</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                        ATS Score 92/100
                      </div>
                    </div>

                    <div className="flex items-center text-slate-600">
                      <span className="h-[2px] w-6 bg-slate-800" />
                      <ArrowRight className="size-3.5 -ml-1 text-slate-500" />
                    </div>

                    {/* Node 2: Sarvam Voice Mock */}
                    <div className="p-3.5 rounded-xl border bg-slate-900 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)] flex-1 max-w-[180px]">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 02</span>
                        <Mic className="size-3 text-cyan-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">Indic Voice Mock</div>
                      <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
                        Hindi · Hinglish · English
                      </div>
                    </div>

                    <div className="flex items-center text-slate-600">
                      <span className="h-[2px] w-6 bg-slate-800" />
                      <ArrowRight className="size-3.5 -ml-1 text-slate-500" />
                    </div>

                    {/* Node 3: Placement Analytics */}
                    <div className="p-3.5 rounded-xl border bg-slate-950/80 border-slate-800 flex-1 max-w-[190px]">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 03</span>
                        <Users className="size-3 text-slate-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">Placement Cell</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        Cohort Analytics
                      </div>
                    </div>

                    <div className="flex items-center text-slate-600">
                      <span className="h-[2px] w-6 bg-slate-800" />
                      <ArrowRight className="size-3.5 -ml-1 text-slate-500" />
                    </div>

                    {/* Node 4: Candidate Placed */}
                    <div className="p-3.5 rounded-xl border bg-slate-950/80 border-slate-800 flex-1 max-w-[160px]">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 04</span>
                        <Award className="size-3 text-emerald-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">Corporate Offer</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                        35% Higher Yield
                      </div>
                    </div>
                  </div>
                </div>

                {/* Voice Simulation Waveform Player */}
                <div className="p-4 rounded-xl bg-black/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5 text-orange-400 font-semibold">
                      <Sparkles className="size-3.5" />
                      Sarvam AI Vernacular Voice Mock: Technical Interview Round
                    </span>
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold hover:bg-orange-500/30 transition-colors"
                    >
                      {isPlayingAudio ? <Pause className="size-3" /> : <Play className="size-3" />}
                      <span>{isPlayingAudio ? "Pause Stream" : "Test Live Audio"}</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-1 h-7 px-2 bg-slate-950 rounded-lg border border-slate-800">
                    {[40, 80, 35, 95, 60, 100, 50, 85, 45, 90, 30, 75, 90, 45, 65, 95, 55, 80, 40, 70].map(
                      (h, i) => (
                        <span
                          key={i}
                          className={`flex-1 rounded-full transition-all duration-200 ${
                            isPlayingAudio ? "bg-orange-400 animate-pulse" : "bg-orange-600"
                          }`}
                          style={{ height: `${isPlayingAudio ? (h * 1.1) % 100 : h * 0.7}%` }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Real-time Customer Review / Verdict Strip */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-cyan-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-md">
                      AS
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs text-slate-300 font-bold ml-1">5.0 / 5.0</span>
                      </div>
                      <p className="text-xs text-slate-300 italic">
                        &ldquo;The vernacular voice module removed interview anxiety for our Tier-2 students. Placement clearances jumped within 3 weeks.&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 font-mono shrink-0 sm:text-right">
                    <div className="text-white font-bold">Dr. Ananya Sengupta</div>
                    <div>Head of Training &amp; Placements · Regional Engineering Inst.</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. RANKMIND AI WORKFLOW & REVIEW */}
            {activeTab === "rankmind" && (
              <motion.div
                key="rankmind"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Workflow Builder Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                        <Radio className="size-3 animate-pulse" />
                        GENERATIVE ENGINE OPTIMIZATION (GEO) PIPELINE
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      From Prompt Audits ➔ Multi-LLM Citation Tracking ➔ Primary AI Citation
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
                    <div className="size-6 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center font-mono text-cyan-400 font-black text-xs">
                      +42%
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      Share of Voice: <strong className="text-cyan-400">Rank #1 Slot</strong>
                    </div>
                  </div>
                </div>

                {/* Workflow Node Graph */}
                <div className="p-4 sm:p-6 rounded-2xl bg-[#070A10] border border-slate-800/90 relative overflow-x-auto">
                  <div className="flex items-center justify-between min-w-[620px] gap-3 relative z-10 py-2">
                    <div className="p-3.5 rounded-xl border bg-slate-900 border-cyan-500 flex-1 max-w-[170px]">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 01</span>
                        <Search className="size-3 text-cyan-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">Prompt Scrape</div>
                      <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
                        10,000+ Queries
                      </div>
                    </div>

                    <div className="flex items-center text-slate-600">
                      <span className="h-[2px] w-6 bg-slate-800" />
                      <ArrowRight className="size-3.5 -ml-1 text-slate-500" />
                    </div>

                    <div className="p-3.5 rounded-xl border bg-slate-900 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)] flex-1 max-w-[180px]">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 02</span>
                        <Cpu className="size-3 text-purple-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">LLM Citations</div>
                      <div className="text-[10px] text-purple-400 font-mono mt-0.5">
                        GPT-4o • Perplexity • Claude
                      </div>
                    </div>

                    <div className="flex items-center text-slate-600">
                      <span className="h-[2px] w-6 bg-slate-800" />
                      <ArrowRight className="size-3.5 -ml-1 text-slate-500" />
                    </div>

                    <div className="p-3.5 rounded-xl border bg-slate-950/80 border-slate-800 flex-1 max-w-[190px]">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 03</span>
                        <TrendingUp className="size-3 text-slate-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">Knowledge Graph</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        GEO Content Roadmap
                      </div>
                    </div>

                    <div className="flex items-center text-slate-600">
                      <span className="h-[2px] w-6 bg-slate-800" />
                      <ArrowRight className="size-3.5 -ml-1 text-slate-500" />
                    </div>

                    <div className="p-3.5 rounded-xl border bg-slate-950/80 border-slate-800 flex-1 max-w-[160px]">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>STEP 04</span>
                        <CircleCheck className="size-3 text-emerald-400" />
                      </div>
                      <div className="text-xs font-bold text-white mt-1">AI Recommended</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                        84% Win Rate
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real-time Customer Review / Verdict Strip */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-purple-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-md">
                      PS
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs text-slate-300 font-bold ml-1">5.0 / 5.0</span>
                      </div>
                      <p className="text-xs text-slate-300 italic">
                        &ldquo;RankMind gave us the first clear picture of how Perplexity and ChatGPT cite our brand versus competitors. Our AI search share of voice jumped 42%.&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 font-mono shrink-0 sm:text-right">
                    <div className="text-white font-bold">Priyanshu Sharma</div>
                    <div>Head of Organic Growth · HyperCart</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Window Frame Bar */}
        <div className="px-5 py-3 bg-slate-900/80 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Live Production Telemetry</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Gorakhpur / India Cloud Datacenter</span>
          </div>

          <a
            href={
              activeTab === "hackmywebsite"
                ? "https://hackmywebsite.io"
                : activeTab === "campusos"
                ? "https://campus.aivilabs.com"
                : "https://aivisibilityinsights.com"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
          >
            <span>Launch Live Platform</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
