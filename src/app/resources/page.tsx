"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import { BookOpen, FileText, ArrowRight, Download, ShieldCheck, Search, Award } from "lucide-react";

const RESOURCES = [
  {
    title: "The 2026 Bharat Web Security Benchmark",
    category: "Cybersecurity Whitepaper",
    icon: ShieldCheck,
    description: "An empirical audit of 500+ Indian SaaS and university web applications across OWASP Top 10 vulnerabilities.",
    link: "https://hackmywebsite.io/sample-report",
    isExternal: true,
  },
  {
    title: "Generative Engine Optimization (GEO) Technical Guide",
    category: "AI Search Guide",
    icon: Search,
    description: "How knowledge graphs and brand co-citations determine citation probabilities inside ChatGPT, Perplexity, and Claude.",
    link: "https://aivisibilityinsights.com",
    isExternal: true,
  },
  {
    title: "AI in Higher Education Placement Cells",
    category: "EdTech Research",
    icon: Award,
    description: "Case study on deploying vernacular voice interview practice to increase engineering batch placements by 35%.",
    link: "https://campus.aivilabs.com",
    isExternal: true,
  },
];

export default function ResourcesPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12 text-left">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-accent-700 text-xs font-semibold uppercase tracking-wider">
            <span>Research &amp; Engineering Reports</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950">
            AIVI Technical Library &amp; Publications
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl font-normal">
            Deep-dive whitepapers, security benchmarks, and generative AI research papers published by our core engineering team.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES.map((res, i) => {
            const Icon = res.icon;
            return (
              <div
                key={i}
                className="rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-50 text-accent-700 border border-orange-200">
                      {res.category}
                    </span>
                    <Icon className="size-4 text-accent-500" />
                  </div>
                  <h3 className="text-base font-bold text-stone-900 leading-snug">{res.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{res.description}</p>
                </div>

                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-stone-50 hover:bg-orange-50/80 border border-stone-200/80 text-xs font-semibold text-stone-900 hover:text-accent-700 transition-colors"
                >
                  <span>Access Report</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
