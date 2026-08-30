"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FaqAccordion } from "@/components/faq-accordion";
import { DemoModal } from "@/components/demo-modal";

export default function FaqPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />
      <main className="flex-1 py-12">
        <FaqAccordion />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
