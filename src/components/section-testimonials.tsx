"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn, type TestimonialItem } from "@/components/ui/testimonials-columns-1";
import { ArrowRight, MessageSquareQuote, Sparkles } from "lucide-react";

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    text: "AIVI revealed that while we ranked #1 on Google for enterprise fintech terms, Perplexity and ChatGPT were recommending our legacy competitor in 70% of prompts. Fixing our citation footprint boosted enterprise inbound by 4.2x.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Rohan Malhotra",
    role: "VP of Growth & Demand Gen",
    company: "Credix Financial",
    metric: "+320% AI Recommendation Share",
  },
  {
    text: "The Bharat Visibility Index (BVI) was an eye-opener. We had zero idea our SaaS platform was completely absent from Hindi and Hinglish queries across tier-2 tech hubs until we audited with AIVI.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Ananya Deshmukh",
    role: "Head of Marketing",
    company: "ZenoFlow Cloud",
    metric: "48 → 84 BVI Score in 60 Days",
  },
  {
    text: "Generative Engine Optimization is the new SEO. AIVI gave us the exact publisher grounding blueprint to displace competitor narratives on ChatGPT and Claude 3.7 within two release cycles.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    name: "Marcus Vance",
    role: "Chief Marketing Officer",
    company: "Apex Global Software",
    metric: "#1 Recommended AI Brand",
  },
  {
    text: "The automated DAST scan and copy-paste Cursor remediation prompts saved our engineering team dozens of hours. We closed all 14 missing CSP headers and TLS misconfigurations in one sprint.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Vikram Singhania",
    role: "Chief Information Security Officer",
    company: "KuberPay Technologies",
    metric: "Zero Open Vulnerabilities",
  },
  {
    text: "Tracking our Indic model visibility across Gemini and Perplexity has become our weekly executive marketing KPI. Essential tool for any Indian consumer brand navigating vernacular AI search.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    name: "Pooja Sundaram",
    role: "VP of Digital Strategy",
    company: "Bharat D2C Collective",
    metric: "3.4M Monthly Vernacular Impressions",
  },
  {
    text: "Before AIVI, we had no way of knowing when LLMs hallucinated outdated pricing or discontinued features about our software. AIVI's real-time alert system caught and corrected 6 major inaccuracies.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    name: "David Chen",
    role: "Director of Product Marketing",
    company: "Synthetix AI",
    metric: "99.4% AI Accuracy Grounding",
  },
  {
    text: "AIVI's multi-engine citation tracker helped our healthcare enterprise achieve full Ayushman Bharat ABDM compliance citation grounding across medical AI assistants in India.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "Dr. Arvind Nair",
    role: "Managing Director",
    company: "CareOS Health Systems",
    metric: "100% ABDM M1/M2/M3 Compliance",
  },
  {
    text: "The Sovereign Prompt Library and live displacement console give our agency the exact proof we need to show clients why old Google SEO agency retainers are becoming obsolete.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    name: "Simran Kapoor",
    role: "Founder & CEO",
    company: "Quantum GEO Agency",
    metric: "18 Enterprise Retainers Won",
  },
  {
    text: "We switched our entire competitive intelligence workflow to AIVI. Being able to see authoritative citation weights across Reddit, G2, and tech media in real-time is a massive unfair advantage.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    name: "Aman Tandon",
    role: "Head of Growth",
    company: "Sovereign Infra Labs",
    metric: "+54% Organic AI Traffic",
  },
];

const firstColumn = TESTIMONIALS_DATA.slice(0, 3);
const secondColumn = TESTIMONIALS_DATA.slice(3, 6);
const thirdColumn = TESTIMONIALS_DATA.slice(6, 9);

export interface TestimonialsSectionProps {
  onOpenDemo?: () => void;
}

export function TestimonialsSection({ onOpenDemo }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-black text-white py-24 sm:py-32 overflow-hidden border-b border-white/10 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-16">

        {/* ── Section Header (Monochrome) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15">
            <span className="size-2 rounded-full bg-white" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">
              PROVEN ENTERPRISE IMPACT
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-neutral-400">
              CLIENT TESTIMONIALS
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
            What leaders say about AI Visibility Insights
          </h2>

          <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
            See how forward-thinking CTOs, CMOs, and growth executives use AIVI to measure Bharat Visibility, displace competitor citations, and dominate AI search answers.
          </p>
        </motion.div>

        {/* ── 3-Column Infinite Vertical Testimonial Stream with Top/Bottom Fade Masks ── */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] max-h-[720px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={20} className="w-full max-w-sm" />
          <TestimonialsColumn testimonials={secondColumn} duration={25} className="hidden md:block w-full max-w-sm" />
          <TestimonialsColumn testimonials={thirdColumn} duration={22} className="hidden lg:block w-full max-w-sm" />
        </div>

        {/* ── Bottom Section Banner ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-[#0C0C0C] border border-white/10 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-sans text-lg sm:text-xl font-bold text-white">
              Ready to claim your brand&rsquo;s #1 AI recommendation slot?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-400">
              Audit your domain across ChatGPT, Perplexity, Claude, and Indic search engines today.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-sans font-bold text-sm shadow-xl active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <span>Book an Enterprise Audit</span>
            <ArrowRight className="size-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
