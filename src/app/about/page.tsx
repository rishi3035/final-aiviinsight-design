"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import { ShieldCheck, MapPin, Building2, Cpu, Rocket, Users, ArrowRight } from "lucide-react";
import { COMPANY_DETAILS, WHY_AIVI_ITEMS } from "@/lib/data";

export default function AboutPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-14 text-left">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-accent-700 text-xs font-semibold uppercase tracking-wider">
            <span>About AIVI Intelligence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950">
            Built for Bharat. Proven Before It&apos;s Promised.
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl font-normal">
            AIVI Intelligence Private Limited is an Indian deep-tech startup headquartered in Gorakhpur, Uttar Pradesh. We engineer and operate production-grade AI platforms that tackle foundational operational challenges in India.
          </p>
        </div>

        {/* Story & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-7 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-3">
            <h3 className="text-xl font-bold text-stone-900">Our Core Philosophy</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We reject vanity AI wrappers and speculative vaporware. Every single platform released under the AIVI brand is fully architected with production-grade backend pipelines (FastAPI, Celery, PostgreSQL), sovereign data governance, and rigorous automated testing.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-3">
            <h3 className="text-xl font-bold text-stone-900">Headquartered in Uttar Pradesh</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Based in Gorakhpur, UP, we understand the real-world operational challenges of Tier-2 and Tier-3 Bharat. Our vernacular voice models, hospital systems, and student intelligence tools are built from first principles for this ecosystem.
            </p>
          </div>
        </div>

        {/* Corporate Credentials Card */}
        <div className="rounded-3xl bg-white border border-stone-200/80 p-8 shadow-card space-y-6">
          <h3 className="text-xl font-bold text-stone-900">Corporate &amp; Government Credentials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
              <div className="text-stone-400 font-mono uppercase text-[10px]">DPIIT Recognition</div>
              <div className="font-bold text-stone-900 font-mono text-sm">{COMPANY_DETAILS.dpiitNumber}</div>
              <div className="text-emerald-600 font-medium">Govt. of India Certified</div>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
              <div className="text-stone-400 font-mono uppercase text-[10px]">Corporate CIN</div>
              <div className="font-bold text-stone-900 font-mono text-sm">{COMPANY_DETAILS.cin}</div>
              <div className="text-stone-500 font-medium">Ministry of Corporate Affairs</div>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
              <div className="text-stone-400 font-mono uppercase text-[10px]">MSME UDYAM</div>
              <div className="font-bold text-stone-900 font-mono text-sm">{COMPANY_DETAILS.udyam}</div>
              <div className="text-stone-500 font-medium">Govt. of India Registered</div>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
              <div className="text-stone-400 font-mono uppercase text-[10px]">Global Ecosystem</div>
              <div className="font-bold text-stone-900 font-mono text-sm">NVIDIA Inception</div>
              <div className="text-accent-600 font-medium">Official Program Member</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Collaborate with our Engineering Leadership</h3>
            <p className="text-xs sm:text-sm text-stone-400">
              Schedule a 30-minute founder conversation or explore custom AI infrastructure.
            </p>
          </div>
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-6 py-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shrink-0"
          >
            Book Founder Demo
          </button>
        </div>
      </main>

      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
