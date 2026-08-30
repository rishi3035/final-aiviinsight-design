"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import {
  Scale,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  BookOpen,
  FileText,
  Mic,
  Cpu,
  ArrowLeft,
} from "lucide-react";

export default function NyayaDraftPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
        {/* Back navigation */}
        <div>
          <Link
            href="/#verticals"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-accent-600 transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Platforms &amp; Verticals</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
            <Scale className="size-3.5 text-amber-600" />
            <span>PILOT STAGE · LEGAL TECH SUITE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950">
            NYAYA-DRAFT: Bilingual Legal Intelligence &amp; Pleadings Studio
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-3xl">
            A specialized Indian legal drafting engine architected natively for the Bharatiya Nyaya Sanhita (BNS), CPC, CrPC, and High Court petition conventions.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-6 py-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
            >
              Request Legal Tech Pilot Access
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-all shadow-xs"
            >
              Contact Legal Practice Lead
            </Link>
          </div>
        </div>

        {/* Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-3">
            <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center text-accent-600">
              <BookOpen className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">BNS Statutory Translation</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Automated dual-mapping between legacy IPC/CrPC sections and current Bharatiya Nyaya Sanhita provisions with authoritative case law citations.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-3">
            <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center text-accent-600">
              <FileText className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">Format-Accurate Pleadings</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Produces verified legal drafts—bail applications, writ petitions, matrimonial pleadings, and commercial notices—conforming to High Court formatting rules.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-3">
            <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center text-accent-600">
              <Mic className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">Vernacular Legal Dictation</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Hindi, Hinglish, and regional voice-to-text dictation with automatic legal punctuation, party labeling, and prayer section structuring.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-3">
            <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center text-accent-600">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">Sovereign Data Governance</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Air-gapped privacy mode guarantees client privilege and ensures zero legal briefs or case facts are used for model training.
            </p>
          </div>
        </div>

        {/* Current Pilot Deployment Status */}
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-white space-y-4 text-left">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Active Pilot Phase</h3>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
              INVITATION ONLY
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
            Currently deployed in controlled pilot programs with senior advocates and corporate legal teams across Allahabad High Court, Lucknow Bench, and Delhi NCR courts.
          </p>
          <button
            onClick={() => setIsDemoOpen(true)}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent-400 hover:text-accent-300 transition-colors"
          >
            <span>Schedule Institutional Legal Demo</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </main>

      <Footer />
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        initialCategory="NYAYA-DRAFT (Legal Tech)"
      />
    </div>
  );
}
