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
  ArrowUpRight,
  Radio,
  Play,
  Pause,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

interface MockupProps {
  type?: "hackmywebsite" | "campusos" | "rankmind";
  url?: string;
  allowTabSwitch?: boolean;
}

export function ProductMockup({
  type = "hackmywebsite",
  url = "https://hackmywebsite.io",
  allowTabSwitch = false,
}: MockupProps) {
  const [selectedType, setSelectedType] = useState<"hackmywebsite" | "campusos" | "rankmind">(type);
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [simulatedDomain, setSimulatedDomain] = useState("acme-ecommerce.com");
  const [auditScore, setAuditScore] = useState(92);
  const [isScanning, setIsScanning] = useState(false);

  const activeUrl =
    selectedType === "hackmywebsite"
      ? "https://hackmywebsite.io"
      : selectedType === "campusos"
      ? "https://campus.aivilabs.com"
      : "https://aivisibilityinsights.com";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDomainChange = (domain: string, score: number) => {
    setIsScanning(true);
    setSimulatedDomain(domain);
    setTimeout(() => {
      setAuditScore(score);
      setIsScanning(false);
    }, 400);
  };

  return (
    <div className="relative group w-full">
      {/* Decorative ambient backdrop */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-accent-500/15 via-stone-200/40 to-accent-500/10 rounded-[32px] blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

      {/* Browser / Application Frame */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-stone-200/90 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] transition-all duration-300">
        
        {/* Mintlify-inspired Hero Product Tab Bar (when tab switch is enabled) */}
        {allowTabSwitch && (
          <div className="flex items-center justify-center p-2 bg-stone-100/90 border-b border-stone-200/80 gap-1.5 sm:gap-2">
            <button
              onClick={() => setSelectedType("hackmywebsite")}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedType === "hackmywebsite"
                  ? "bg-white text-stone-950 shadow-xs border border-stone-200/80"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
              }`}
            >
              <ShieldCheck className="size-3.5 text-emerald-600" />
              <span>Hack My Website</span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] bg-emerald-50 text-emerald-700 font-mono">
                LIVE
              </span>
            </button>

            <button
              onClick={() => setSelectedType("campusos")}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedType === "campusos"
                  ? "bg-white text-stone-950 shadow-xs border border-stone-200/80"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
              }`}
            >
              <Award className="size-3.5 text-accent-600" />
              <span>Campus &amp; Career OS</span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] bg-orange-50 text-accent-700 font-mono">
                LIVE
              </span>
            </button>

            <button
              onClick={() => setSelectedType("rankmind")}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedType === "rankmind"
                  ? "bg-white text-stone-950 shadow-xs border border-stone-200/80"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
              }`}
            >
              <Search className="size-3.5 text-accent-600" />
              <span>RankMind AI</span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] bg-emerald-50 text-emerald-700 font-mono">
                GEO
              </span>
            </button>
          </div>
        )}

        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50/90 border-b border-stone-200/80 backdrop-blur-sm select-none">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-rose-400 inline-block" />
            <span className="size-2.5 rounded-full bg-amber-400 inline-block" />
            <span className="size-2.5 rounded-full bg-emerald-400 inline-block" />
          </div>

          {/* Realistic URL Bar */}
          <div className="flex items-center gap-2 px-3 py-1 bg-white border border-stone-200/90 rounded-full text-[11px] text-stone-700 font-mono max-w-[280px] sm:max-w-[360px] truncate shadow-2xs">
            <Lock className="size-3 text-emerald-600 shrink-0" />
            <span className="truncate">{activeUrl}</span>
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse ml-auto shrink-0" />
          </div>

          <a
            href={activeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-stone-400 hover:text-accent-600 hover:bg-stone-200/60 rounded-md transition-colors"
            title="Open live instance"
          >
            <ExternalLink className="size-3.5" />
          </a>
        </div>

        {/* Dynamic Live Mockup Canvas with Animation Transitions */}
        <div className="p-4 sm:p-6 bg-[#FAFAF9]">
          <AnimatePresence mode="wait">
            {selectedType === "hackmywebsite" && (
              <motion.div
                key="hackmywebsite"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 text-left"
              >
                {/* Cybersecurity Dark Cockpit Frame */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#070A10] text-white border border-slate-800 shadow-xl space-y-4">
                  {/* Cockpit Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <ShieldCheck className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-mono font-bold text-white flex items-center gap-2">
                          <span>{simulatedDomain}</span>
                          <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                            DNS VERIFIED
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400">
                          OWASP ZAP • Nuclei v3.3 • Semgrep SAST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      <Radio className="size-3 animate-pulse" />
                      <span>200+ CHECKS EVALUATED</span>
                    </div>
                  </div>

                  {/* Interactive Domain Audit Simulator Buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {[
                      { domain: "acme-ecommerce.com", score: 92, tag: "SaaS App", color: "emerald" },
                      { domain: "cloud-crm-portal.io", score: 76, tag: "Full-Stack", color: "amber" },
                      { domain: "ai-prompt-generator.app", score: 62, tag: "Agent App", color: "orange" },
                      { domain: "legacy-vibe-demo.site", score: 38, tag: "Prototype", color: "rose" },
                    ].map((item) => (
                      <button
                        key={item.domain}
                        type="button"
                        onClick={() => handleDomainChange(item.domain, item.score)}
                        className={`p-2 rounded-xl border text-left transition-all text-[11px] ${
                          simulatedDomain === item.domain
                            ? "bg-slate-900 border-emerald-500 text-white shadow-md shadow-emerald-500/10"
                            : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <div className="font-bold truncate text-[10px] sm:text-[11px]">{item.domain}</div>
                        <div className="flex items-center justify-between mt-0.5 text-[9px] font-mono">
                          <span className="text-slate-500">{item.tag}</span>
                          <span
                            className={`font-bold ${
                              item.score >= 85
                                ? "text-emerald-400"
                                : item.score >= 70
                                ? "text-amber-400"
                                : item.score >= 50
                                ? "text-orange-400"
                                : "text-rose-400"
                            }`}
                          >
                            {item.score}/100
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Score & Vulnerability Severity Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-5 p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/90 flex items-center gap-3">
                      <div className="relative size-14 rounded-full border-[3px] border-emerald-400 flex flex-col items-center justify-center shrink-0 bg-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                        {isScanning ? (
                          <RefreshCw className="size-4 text-emerald-400 animate-spin" />
                        ) : (
                          <>
                            <span className="text-base font-black font-mono text-white leading-none">
                              {auditScore}
                            </span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">/100</span>
                          </>
                        )}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white">AI Launch Score</div>
                        <div className="text-[10px] text-emerald-400 font-semibold">
                          {auditScore >= 85
                            ? "Launch Ready (Safe)"
                            : auditScore >= 70
                            ? "Action Recommended"
                            : "Risk Detected"}
                        </div>
                        <div className="text-[9px] text-slate-400">Non-Destructive Audit</div>
                      </div>
                    </div>

                    <div className="sm:col-span-7 p-3 rounded-xl bg-slate-950/90 border border-slate-800/90 grid grid-cols-4 gap-1.5 text-center">
                      <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                        <div className="text-xs font-black font-mono text-slate-400">0</div>
                        <div className="text-[8px] font-mono text-slate-500 uppercase">Crit</div>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-900/80 border border-amber-500/20">
                        <div className="text-xs font-black font-mono text-amber-400">1</div>
                        <div className="text-[8px] font-mono text-amber-400 uppercase">High</div>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-900/80 border border-emerald-500/20">
                        <div className="text-xs font-black font-mono text-emerald-400">3</div>
                        <div className="text-[8px] font-mono text-emerald-400 uppercase">Med</div>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                        <div className="text-xs font-black font-mono text-slate-400">4</div>
                        <div className="text-[8px] font-mono text-slate-500 uppercase">Low</div>
                      </div>
                    </div>
                  </div>

                  {/* 1-Click IDE Fix Prompt */}
                  <div className="p-3 rounded-xl bg-black/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <Bot className="size-3" />
                        1-Click Cursor / Claude Remediation Prompt
                      </span>
                      <button
                        onClick={() =>
                          handleCopy(
                            `Add Strict-Transport-Security: max-age=63072000; includeSubDomains; preload in next.config.js security headers.`
                          )
                        }
                        className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-0.5 rounded bg-slate-800 transition-colors font-semibold"
                      >
                        {copied ? <Check className="size-2.5 text-emerald-400" /> : <Copy className="size-2.5" />}
                        <span>{copied ? "Copied" : "Copy Prompt"}</span>
                      </button>
                    </div>
                    <code className="block text-[10px] font-mono text-emerald-300/90 bg-slate-950 p-2 rounded border border-slate-800/80 truncate">
                      // Fix HSTS Header: Set max-age=63072000; includeSubDomains in security headers
                    </code>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedType === "campusos" && (
              <motion.div
                key="campusos"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 text-left"
              >
                {/* Career Intelligence Cockpit */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-100">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-accent-600">
                        <Award className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-2">
                          <span>AIVI Career OS · Student Placement Suite</span>
                          <span className="px-1.5 py-0.5 rounded text-[9px] bg-orange-100 text-accent-700 font-semibold font-mono">
                            ATS v2
                          </span>
                        </div>
                        <p className="text-[10px] text-stone-500">6 AI Career Modules · Sarvam Voice Engine</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-medium">
                      <CircleCheck className="size-3 text-emerald-600" />
                      <span>94% Job Fit Match</span>
                    </div>
                  </div>

                  {/* Modules Metric Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1">
                      <div className="flex items-center justify-between text-stone-500 text-[10px]">
                        <span>Resume ATS Score</span>
                        <FileText className="size-3 text-accent-500" />
                      </div>
                      <div className="text-lg font-black text-stone-900">
                        92<span className="text-xs text-stone-400 font-normal">/100</span>
                      </div>
                      <div className="text-[9px] text-emerald-600 font-medium">Top 5% ATS Cleared</div>
                    </div>

                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1">
                      <div className="flex items-center justify-between text-stone-500 text-[10px]">
                        <span>Indic Mock AI</span>
                        <Mic className="size-3 text-accent-500" />
                      </div>
                      <div className="text-lg font-black text-stone-900">Voice AI</div>
                      <div className="text-[9px] text-stone-600 font-medium">Hindi · Hinglish · English</div>
                    </div>

                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1">
                      <div className="flex items-center justify-between text-stone-500 text-[10px]">
                        <span>Placement Cohort</span>
                        <Users className="size-3 text-accent-500" />
                      </div>
                      <div className="text-lg font-black text-stone-900">1,240+</div>
                      <div className="text-[9px] text-accent-700 font-medium">Candidates In Training</div>
                    </div>
                  </div>

                  {/* Interactive Voice Waveform Simulator */}
                  <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-200/70 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                        <Sparkles className="size-3 text-accent-600" />
                        Live Interview Practice: SDE-1 Technical Round
                      </span>
                      <button
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="px-2 py-0.5 rounded-full bg-white border border-orange-200 text-[10px] font-semibold text-accent-700 hover:bg-orange-100 flex items-center gap-1 transition-colors"
                      >
                        {isPlayingAudio ? <Pause className="size-2.5" /> : <Play className="size-2.5" />}
                        <span>{isPlayingAudio ? "Pause Audio" : "Play Mock Voice"}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-1 h-7 px-2 bg-white rounded-lg border border-orange-200/60">
                      {[40, 80, 35, 95, 60, 100, 50, 85, 45, 90, 30, 75, 90, 45, 65, 95, 55, 80, 40, 70].map(
                        (h, i) => (
                          <span
                            key={i}
                            className={`flex-1 rounded-full transition-all duration-200 ${
                              isPlayingAudio ? "bg-accent-500 animate-pulse" : "bg-accent-300"
                            }`}
                            style={{ height: `${isPlayingAudio ? (h * 1.1) % 100 : h * 0.7}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedType === "rankmind" && (
              <motion.div
                key="rankmind"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 text-left"
              >
                {/* RankMind GEO Cockpit */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-100">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-accent-600">
                        <Search className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-2">
                          <span>RankMind AI · Generative Engine GEO</span>
                          <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-100 text-emerald-800 font-semibold font-mono">
                            LIVE ENGINE
                          </span>
                        </div>
                        <p className="text-[10px] text-stone-500">LLM Prompt Audits · Citation Knowledge Graph</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-accent-700 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full font-medium">
                      <TrendingUp className="size-3 text-accent-600" />
                      <span>+42% AI Share of Voice</span>
                    </div>
                  </div>

                  {/* LLM Citation Coverage Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 text-center">
                      <div className="text-[10px] text-stone-500">ChatGPT 4o</div>
                      <div className="text-sm font-black text-stone-900 mt-0.5">84% Cited</div>
                      <div className="text-[9px] text-emerald-600 font-medium">Rank #1 Slot</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 text-center">
                      <div className="text-[10px] text-stone-500">Perplexity AI</div>
                      <div className="text-sm font-black text-stone-900 mt-0.5">91% Cited</div>
                      <div className="text-[9px] text-emerald-600 font-medium">Primary Source</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 text-center">
                      <div className="text-[10px] text-stone-500">Claude 3.5</div>
                      <div className="text-sm font-black text-stone-900 mt-0.5">78% Cited</div>
                      <div className="text-[9px] text-accent-600 font-medium">Authoritative</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 text-center">
                      <div className="text-[10px] text-stone-500">Google Gemini</div>
                      <div className="text-sm font-black text-stone-900 mt-0.5">82% Cited</div>
                      <div className="text-[9px] text-emerald-600 font-medium">AI Overview</div>
                    </div>
                  </div>

                  {/* Real-time Query Prompt Simulation */}
                  <div className="p-3 rounded-xl bg-stone-900 text-white space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono">
                      <span>Target Prompt Evaluation</span>
                      <span className="text-emerald-400 font-semibold">10,000+ Queries Audited</span>
                    </div>
                    <div className="p-2 rounded bg-black/60 border border-stone-800 text-[10px] font-mono text-stone-300">
                      <span className="text-accent-400">Prompt:</span> &quot;What are the best automated security &amp; career AI tools in India?&quot;
                    </div>
                    <div className="text-[10px] text-stone-400 flex items-center gap-1.5">
                      <CircleCheck className="size-3 text-emerald-400" />
                      <span>AIVI platforms cited in top 3 generative answers across 4/4 LLMs.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Status Ribbon */}
        <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span className="font-medium text-stone-700">Real-time Deployed Instance</span>
          </div>
          <a
            href={activeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent-600 hover:text-accent-700 flex items-center gap-1 hover:underline"
          >
            <span>Visit Live URL</span>
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
