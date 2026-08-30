"use client";

import React from "react";
import ScrollFAQAccordion, { type FAQItem } from "@/components/ui/scroll-faqaccordion";

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "How is Generative Engine Optimization (GEO) different from traditional Google SEO?",
    answer:
      "Traditional SEO optimizes for keyword rank positions in a list of 10 blue links. Generative Engine Optimization (GEO) optimizes for direct brand recommendations, authoritative citation weight, and factual accuracy inside LLM synthesis engines like ChatGPT Search, Perplexity Pro, Claude 3.7, and Google Gemini.",
  },
  {
    id: 2,
    question: "What is the Bharat Visibility Index™ (BVI) and why does language change AI answers?",
    answer:
      "BVI is our proprietary framework that audits how AI models recommend your brand across English, Hindi, and Hinglish queries. When queries shift to conversational Hinglish or Hindi, AI models rely on different grounding sources, often dropping English-dominant brands in favor of local competitors.",
  },
  {
    id: 3,
    question: "Which generative search engines and LLM models does AIVI monitor?",
    answer:
      "AIVI continuously tracks and benchmarks citation footprints across ChatGPT Search (GPT-4o), Anthropic Claude 3.7 Sonnet & Opus, Perplexity Pro & Indic models, Google Gemini 3.5 Flash & AI Overviews, and Microsoft Copilot across desktop and mobile context windows.",
  },
  {
    id: 4,
    question: "How does the DAST Security Audit and 1-Click Cursor Fix Prompt work?",
    answer:
      "AIVI conducts 200+ automated non-destructive DAST checks on your public domains (scanning TLS ciphers, Content Security Policy headers, unauthenticated endpoints, and DNS records). When an issue is detected, AIVI synthesizes deterministic, copy-paste prompts formatted specifically for Cursor IDE and Claude Code for instant remediation.",
  },
  {
    id: 5,
    question: "Can AIVI detect when AI engines hallucinate incorrect pricing or features about my brand?",
    answer:
      "Yes. AIVI's Displacement & Grounding Inspector continuously monitors generated summaries for outdated pricing, non-existent features, or hallucinated claims. The system generates authoritative schema blueprints and publisher grounding recommendations to correct the LLM knowledge graph.",
  },
];

export interface FAQSectionProps {
  onOpenDemo?: (category?: string) => void;
}

export function FAQSection({ onOpenDemo }: FAQSectionProps) {
  return (
    <section
      id="faq"
      className="relative w-full bg-white text-neutral-900 overflow-hidden border-t border-neutral-200 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <ScrollFAQAccordion data={FAQ_DATA} />
      </div>
    </section>
  );
}

export default FAQSection;
