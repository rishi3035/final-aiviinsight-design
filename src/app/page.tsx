"use client";

import React, { useState } from "react";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HeroMockup } from "@/components/hero-mockup";
// import { TrustStrip } from "@/components/trust-strip";
import { BVISection } from "@/components/section-bvi";
// import { TestimonialsSection } from "@/components/section-testimonials";
import { PricingSection } from "@/components/section-pricing";
import { AIAnswerRoomSection } from "@/components/section-ai-answer-room";
import { FAQSection } from "@/components/section-faq";

import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";

export default function HomePage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedDemoCategory, setSelectedDemoCategory] = useState<string>("Hack My Website (Cybersecurity)");

  const handleOpenDemo = (category?: string) => {
    if (category) {
      setSelectedDemoCategory(category);
    }
    setIsDemoOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col w-full bg-[#FAF9F6] text-[#171717] selection:bg-[#C8102E] selection:text-white">
        {/* Floating Pill Navbar */}
        <Navbar onOpenDemo={() => handleOpenDemo()} />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col w-full">
          {/* SECTION 1: FULL-PAGE LUXURY HERO WITH RIBBON FIELD WEBGL SHADER */}
          <Hero onOpenDemo={() => handleOpenDemo()} />

          {/* SECTION 1.5: DESKTOP / TABLET HARDWARE MOCKUP WITH MULTI-ENGINE INTERACTION */}
          <HeroMockup onOpenDemo={() => handleOpenDemo()} />

          {/* SECTION 2: BHARAT VISIBILITY INDEX (FLAGSHIP PRODUCT INNOVATION) */}
          <BVISection onOpenDemo={handleOpenDemo} />

          {/* SECTION 3: PRICING SECTION */}
          <PricingSection onOpenDemo={() => handleOpenDemo()} />

          {/* SECTION 3.5: THE AI ANSWER ROOM (COMPACT PRODUCT SHOWCASE) */}
          <AIAnswerRoomSection onOpenDemo={handleOpenDemo} />

          {/* SECTION 4: FREQUENTLY ASKED QUESTIONS (SCROLL ACCORDION - WHITE THEME) */}
          <FAQSection onOpenDemo={handleOpenDemo} />
        </main>

        {/* FOOTER WITH ANIMATED TYPOGRAPHY BANNER */}
        <Footer />

        {/* Interactive Booking / Audit Modal */}
        <DemoModal
          isOpen={isDemoOpen}
          onClose={() => setIsDemoOpen(false)}
          initialCategory={selectedDemoCategory}
        />
      </div>
    </SmoothScroll>
  );
}
