"use client";

import React from "react";
import {
  ShieldCheck,
  Search,
  Award,
  Scale,
  Activity,
  Sparkles,
  Zap,
  Lock,
  Cpu,
  Bot,
  Terminal,
  FileText,
  Mic,
  TrendingUp,
  Building2,
  CheckCircle2,
} from "lucide-react";

export function MarqueeTicker() {
  const row1 = [
    { label: "Hack My Website", tag: "Cyber SaaS", icon: <ShieldCheck className="size-3.5 text-emerald-400" /> },
    { label: "RankMind AI", tag: "GEO Intelligence", icon: <Search className="size-3.5 text-cyan-400" /> },
    { label: "Campus & Career OS", tag: "Career Tech", icon: <Award className="size-3.5 text-orange-400" /> },
    { label: "NYAYA-DRAFT", tag: "Legal Tech", icon: <Scale className="size-3.5 text-purple-400" /> },
    { label: "AIVI CareOS", tag: "Healthcare HMS", icon: <Activity className="size-3.5 text-emerald-400" /> },
    { label: "Sarvam AI Voice", tag: "Indic Speech", icon: <Sparkles className="size-3.5 text-amber-400" /> },
    { label: "200+ Automated Audits", tag: "Security", icon: <Zap className="size-3.5 text-orange-400" /> },
    { label: "DPIIT Recognized", tag: "Govt of India", icon: <Lock className="size-3.5 text-emerald-400" /> },
    { label: "NVIDIA Inception", tag: "Global Member", icon: <Cpu className="size-3.5 text-green-400" /> },
  ];

  const row2 = [
    { label: "OWASP ZAP (DAST)", tag: "Runtime Security" },
    { label: "Nuclei v3 CVEs", tag: "Vulnerability Engine" },
    { label: "Semgrep SAST", tag: "Static Analysis" },
    { label: "1-Click Cursor / Claude Fix Prompts", tag: "AI Remediation" },
    { label: "BNS / BNSS / BSS Mapping", tag: "Statutory Law" },
    { label: "ABDM M1 / M2 / M3", tag: "Ayushman Bharat" },
    { label: "ATS Resume Studio v2", tag: "Student Placement" },
    { label: "Perplexity & ChatGPT Citation Tracking", tag: "GEO SEO" },
    { label: "FastAPI & Celery Workers", tag: "Infrastructure" },
    { label: "Gorakhpur Headquarters", tag: "Uttar Pradesh" },
  ];

  return (
    <div className="w-full space-y-3 py-6 overflow-hidden select-none">
      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 35s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 30s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ticker Row 1: Left */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        <div className="animate-marquee-left gap-2.5 sm:gap-3">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div
              key={idx}
              className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 px-3.5 py-1.5 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-2xs hover:scale-105"
            >
              {item.icon}
              <span className="text-xs font-semibold text-white tracking-tight">
                {item.label}
              </span>
              <span className="text-[9px] font-mono text-slate-400 uppercase bg-black/40 px-1.5 py-0.2 rounded border border-white/5">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker Row 2: Right (Reversed) */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        <div className="animate-marquee-right gap-2 sm:gap-2.5">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div
              key={idx}
              className="flex shrink-0 items-center gap-2 rounded-xl border border-white/5 bg-black/40 hover:bg-white/5 hover:border-white/15 px-3 py-1.2 backdrop-blur-sm transition-all duration-200 cursor-pointer text-slate-300 hover:text-white text-[11px] font-mono hover:scale-102"
            >
              <span className="size-1.5 rounded-full bg-cyan-400/80" />
              <span>{item.label}</span>
              <span className="text-[8px] text-slate-500 uppercase">
                [{item.tag}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
