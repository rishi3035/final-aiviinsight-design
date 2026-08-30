"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

export interface ScrollFAQAccordionProps {
  data?: FAQItem[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export default function ScrollFAQAccordion({
  data = [
    {
      id: 1,
      question: "How is Generative Engine Optimization (GEO) different from traditional Google SEO?",
      answer:
        "Traditional SEO optimizes for 10 blue links. Generative Engine Optimization (GEO) optimizes for direct AI brand recommendations and citation authority inside LLMs like ChatGPT, Perplexity, and Claude.",
    },
    {
      id: 2,
      question: "What is the Bharat Visibility Index™ (BVI) and why does language change AI answers?",
      answer:
        "BVI measures your brand presence across English, Hindi, and Hinglish queries. When Indian consumers ask in Hinglish or Hindi, AI uses different grounding sources, often displacing English-dominant brands.",
    },
    {
      id: 3,
      question: "Which generative search engines and LLM models does AIVI monitor?",
      answer:
        "AIVI continuously benchmarks ChatGPT Search (GPT-4o), Claude 3.7 Sonnet & Opus, Perplexity Pro & Indic models, Google Gemini 3.5 Flash, and Microsoft Copilot.",
    },
    {
      id: 4,
      question: "How does the DAST Security Audit and 1-Click Cursor Fix Prompt work?",
      answer:
        "AIVI conducts 200+ automated non-destructive DAST checks on your domains, then generates deterministic, copy-paste prompts formatted specifically for Cursor IDE to remediate vulnerabilities.",
    },
    {
      id: 5,
      question: "Can AIVI detect when AI engines hallucinate incorrect pricing or features?",
      answer:
        "Yes. AIVI's Displacement Inspector flags outdated pricing and false claims, generating authoritative schema blueprints to re-anchor LLM knowledge graphs.",
    },
  ],
  className,
  questionClassName,
  answerClassName,
}: ScrollFAQAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>("1");
  const hoverTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounced hover — waits 350ms before switching to avoid flicker when moving between rows
  const handleMouseEnter = (id: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setOpenItem(id);
    }, 350);
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  // Immediate click toggle
  const handleClick = (id: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setOpenItem((prev) => (prev === id ? null : id));
  };

  React.useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  return (
    <div className={cn("max-w-4xl mx-auto text-center py-16 sm:py-20", className)}>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 text-neutral-900">
        Frequently Asked Questions
      </h2>
      <p className="text-neutral-600 mb-10 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
        Hover over any question to instantly reveal the answer.
      </p>

      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(val) => setOpenItem(val)}
      >
        {data.map((item) => {
          const isOpen = openItem === item.id.toString();
          return (
            <Accordion.Item
              value={item.id.toString()}
              key={item.id}
              className="mb-5"
              onMouseEnter={() => handleMouseEnter(item.id.toString())}
              onMouseLeave={handleMouseLeave}
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className="flex w-full items-center justify-start gap-x-4 cursor-pointer text-left focus:outline-none"
                  onClick={() => handleClick(item.id.toString())}
                >
                  <div
                    className={cn(
                      "relative flex items-center space-x-2 rounded-2xl px-4 py-3 transition-all duration-200 border shadow-xs cursor-pointer",
                      isOpen
                        ? "bg-neutral-900 text-white border-neutral-900 font-semibold shadow-md"
                        : "bg-[#F4F4F5] text-neutral-800 border-neutral-200/80 hover:border-neutral-300 hover:bg-[#EAEAEA]",
                      questionClassName
                    )}
                  >
                    {item.icon && (
                      <span
                        className={cn(
                          "absolute bottom-6",
                          item.iconPosition === "right" ? "right-0" : "left-0"
                        )}
                        style={{
                          transform:
                            item.iconPosition === "right" ? "rotate(7deg)" : "rotate(-4deg)",
                        }}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span className="font-medium text-sm sm:text-base">{item.question}</span>
                  </div>

                  <span
                    className={cn(
                      "text-neutral-400 transition-colors shrink-0",
                      isOpen && "text-[#C8102E]"
                    )}
                  >
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content asChild forceMount>
                <motion.div
                  initial="collapsed"
                  animate={isOpen ? "open" : "collapsed"}
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: 12 },
                    collapsed: { opacity: 0, height: 0, marginTop: 0 },
                  }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex justify-end ml-7 md:ml-16 text-left">
                    <div
                      className={cn(
                        "relative max-w-lg rounded-2xl px-5 py-4 text-white text-sm sm:text-base bg-gradient-to-r from-[#C8102E] to-[#E02444] shadow-lg shadow-[#C8102E]/20 leading-relaxed font-sans",
                        answerClassName
                      )}
                    >
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}

export { ScrollFAQAccordion };
