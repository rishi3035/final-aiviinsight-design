"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import {
  Activity,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  HeartPulse,
  QrCode,
  Mic,
  ArrowLeft,
  Hospital,
} from "lucide-react";

export default function AiviCareOsPage() {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
            <Activity className="size-3.5 text-emerald-600" />
            <span>PILOTING IN KANPUR &amp; UP · HEALTHCARE HMS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950">
            AIVI CareOS: Lightweight ABDM Hospital Management System
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-3xl">
            A frictionless digital health operating system built specifically for Tier-2/3 Indian nursing homes, polyclinics, and diagnostic centers with full Ayushman Bharat Digital Mission (ABDM) compliance.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-6 py-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
            >
              Request Hospital HMS Demo
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-all shadow-xs"
            >
              Speak with Healthcare Specialist
            </Link>
          </div>
        </div>

        {/* Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-3">
            <div className="size-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <QrCode className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">ABDM M1 / M2 / M3 Ready</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Instant ABHA address creation, OTP verification, and seamless electronic health record (EHR) synchronization with national health lockers.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-3">
            <div className="size-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Mic className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">Doctor Voice Prescriptions</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Doctors speak naturally in Hindi or English; CareOS extracts vitals, diagnosis codes, dosage schedules, and generates clean printable Rx PDFs.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-3">
            <div className="size-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <HeartPulse className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">OPD &amp; Token Queue Management</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Smart automated OPD queue allocation with direct WhatsApp notification updates for waiting patients, reducing clinic crowding.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-3">
            <div className="size-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Hospital className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">Low-Bandwidth Offline Sync</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Designed to work continuously during intermittent network outages, syncing automatically when connectivity is restored.
            </p>
          </div>
        </div>

        {/* Current Pilot Deployment Status */}
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-white space-y-4 text-left">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Regional Clinical Pilot</h3>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              ACTIVE IN UP
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
            Currently deployed in trials with multi-specialty nursing homes across Kanpur, Gorakhpur, and Eastern Uttar Pradesh.
          </p>
          <button
            onClick={() => setIsDemoOpen(true)}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent-400 hover:text-accent-300 transition-colors"
          >
            <span>Schedule Hospital Walkthrough</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </main>

      <Footer />
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        initialCategory="AIVI CareOS (Healthcare)"
      />
    </div>
  );
}
