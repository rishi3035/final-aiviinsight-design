"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";
import { Briefcase, Code, Sparkles, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/data";

const OPENINGS = [
  {
    title: "Senior AI / Backend Engineer (FastAPI & Celery)",
    team: "Core Infrastructure",
    location: "Gorakhpur / Hybrid (UP) / Remote",
    type: "Full-Time",
    description:
      "Design and optimize high-throughput asynchronous security audit pipelines, LLM prompt tracking engines, and Celery task workers.",
  },
  {
    title: "Full-Stack Engineer (Next.js 15 & React 19)",
    team: "Platform Engineering",
    location: "Gorakhpur / Hybrid (UP) / Remote",
    type: "Full-Time",
    description:
      "Craft high-performance, accessible frontend interfaces for HackMyWebsite, Campus OS, and specialized legal/health suites.",
  },
  {
    title: "Applied LLM & Indic NLP Researcher",
    team: "AI Research",
    location: "Gorakhpur / Remote",
    type: "Full-Time",
    description:
      "Train, fine-tune, and evaluate vernacular voice pipelines, legal domain SLMs, and prompt-influence classifiers.",
  },
];

export default function CareersPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12 text-left">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-accent-700 text-xs font-semibold uppercase tracking-wider">
            <span>Join Our Engineering Mission</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950">
            Build Foundational AI for 1.4 Billion People
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl font-normal">
            We are hiring ambitious engineers, researchers, and systems thinkers passionate about building real, deployed software for Bharat.
          </p>
        </div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-2">
            <h3 className="text-base font-bold text-stone-900">01. Zero Vanity Metrics</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We judge work by live production deployments, customer satisfaction, and engineering stability.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-2">
            <h3 className="text-base font-bold text-stone-900">02. Modern Tech Stack</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Next.js 15, React 19, Python FastAPI, Docker, Celery, PostgreSQL, Sarvam Indic AI, and NVIDIA GPU acceleration.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-card space-y-2">
            <h3 className="text-base font-bold text-stone-900">03. High Ownership</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Work directly alongside founders with substantial equity opportunities and rapid promotion tracks.
            </p>
          </div>
        </div>

        {/* Current Openings */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-stone-950">Active Engineering Positions</h2>
          <div className="space-y-4">
            {OPENINGS.map((job, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/80 shadow-card hover:shadow-card-hover transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-orange-50 text-accent-700 border border-orange-200">
                      {job.team}
                    </span>
                    <span className="text-xs text-stone-500">• {job.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">{job.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{job.description}</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500 pt-1">
                    <MapPin className="size-3 text-accent-500" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <a
                  href={`mailto:${COMPANY_DETAILS.email}?subject=Application for ${encodeURIComponent(
                    job.title
                  )}`}
                  className="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-accent-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 self-start sm:self-center shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
