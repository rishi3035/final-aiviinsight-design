"use client";

import React, { useState, useRef, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { 
  ArrowUp, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  ShieldCheck 
} from "lucide-react";

export function Footer() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(bannerRef, { once: true, margin: "-40px" });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const letterVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 110,
        damping: 12,
        delay: i * 0.03,
      },
    }),
    hidden: { y: 60, opacity: 0, scale: 0.9 },
  };

  const wordAIVI = ["A", "I", "V", "I"];
  const wordIntelligence = ["I", "N", "T", "E", "L", "L", "I", "G", "E", "N", "C", "E"];

  return (
    <footer id="footer" className="relative w-full bg-[#080B10] text-white pt-20 pb-12 border-t border-neutral-800 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-gradient-to-t from-[#C8102E]/12 via-[#FF7A1A]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 space-y-12">
        
        {/* Top Section: Brand Statement & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-10 border-b border-neutral-800/70">
          
          {/* Brand Mission */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="bg-white/95 px-4 py-2 rounded-2xl border border-white/20 shadow-sm transition-all hover:bg-white hover:shadow-md">
                <Image
                  src="/logos/aivi-logo-white.png"
                  alt="AI Visibility - Analyze • Track • Grow"
                  width={220}
                  height={55}
                  className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="font-sans text-sm sm:text-base text-neutral-300 max-w-lg leading-relaxed">
              AI Visibility Insights helps brands understand, improve, and prove how they appear in AI search.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/aivi-intelligence"
                target="_blank"
                rel="noreferrer noopener"
                className="size-9 rounded-full bg-neutral-900 hover:bg-[#C8102E] text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://x.com/aivi_intel"
                target="_blank"
                rel="noreferrer noopener"
                className="size-9 rounded-full bg-neutral-900 hover:bg-[#C8102E] text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 shadow-xs"
                aria-label="Twitter / X"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href="https://github.com/aivilabs"
                target="_blank"
                rel="noreferrer noopener"
                className="size-9 rounded-full bg-neutral-900 hover:bg-[#C8102E] text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 shadow-xs"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>
              <a
                href="mailto:contact@aivilabs.com"
                className="size-9 rounded-full bg-neutral-900 hover:bg-[#C8102E] text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 shadow-xs"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 space-y-3 text-left lg:text-right flex flex-col justify-center lg:items-end">
            <h3 className="font-sora font-semibold text-lg text-white">
              Stay ahead of the generative shift
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-md">
              Receive weekly updates on GEO algorithms, LLM updates, and AI citation benchmarks.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full max-w-md pt-1">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full pl-4 pr-3 py-2.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-sm text-white placeholder:text-neutral-500 font-sans focus:outline-none focus:border-[#C8102E] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C8102E] hover:bg-[#B00D27] text-white text-xs sm:text-sm font-sora font-semibold transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] shrink-0"
              >
                <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                <ArrowRight className="size-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Middle Navigation Columns (Product, Resources, Company) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          
          {/* Column 1: Product */}
          <div className="space-y-3">
            <h4 className="font-sora font-semibold text-xs uppercase tracking-wider text-neutral-400">
              Product
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-neutral-300">
              <li>
                <Link href="/#overview" className="hover:text-white transition-colors py-1 inline-block">
                  Product overview
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors py-1 inline-block">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#methodology" className="hover:text-white transition-colors py-1 inline-block">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors py-1 inline-block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#snapshot" className="text-[#FF7A1A] hover:underline transition-colors py-1 inline-block font-medium">
                  Free visibility snapshot →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-3">
            <h4 className="font-sora font-semibold text-xs uppercase tracking-wider text-neutral-400">
              Resources
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-neutral-300">
              <li>
                <Link href="/#guide" className="hover:text-white transition-colors py-1 inline-block">
                  AI Search guide
                </Link>
              </li>
              <li>
                <Link href="/#glossary" className="hover:text-white transition-colors py-1 inline-block">
                  GEO glossary
                </Link>
              </li>
              <li>
                <Link href="/#methodology" className="hover:text-white transition-colors py-1 inline-block">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="hover:text-white transition-colors py-1 inline-block">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="hover:text-white transition-colors py-1 inline-block">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="font-sora font-semibold text-xs uppercase tracking-wider text-neutral-400">
              Company
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-neutral-300">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors py-1 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors py-1 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#privacy" className="hover:text-white transition-colors py-1 inline-block">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/#terms" className="hover:text-white transition-colors py-1 inline-block">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/#security" className="hover:text-white transition-colors py-1 inline-block">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/#refund" className="hover:text-white transition-colors py-1 inline-block">
                  Refund policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust Note & Back to Top */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-2 text-left">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-sora font-semibold">
                <ShieldCheck className="size-4" />
                <span>Verified Trust</span>
              </div>
              <p className="font-raleway text-xs text-neutral-400 leading-relaxed font-medium">
                Built for transparent AI search measurement across global and Indian markets.
              </p>
            </div>

            {/* Back to Top Control */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-between p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-sora font-semibold text-neutral-300 hover:text-white transition-all group"
            >
              <span>Back to top</span>
              <ArrowUp className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 text-[#FF7A1A]" />
            </button>
          </div>

        </div>

        {/* ================= ANIMATED "AIVI INTELLIGENCE" TYPOGRAPHIC BANNER ================= */}
        <div className="pt-10 pb-4 border-t border-neutral-800/80 overflow-hidden text-center">
          <motion.div
            ref={bannerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 select-none"
          >
            {/* Word 1: AIVI */}
            <div className="flex items-center gap-1 sm:gap-2">
              {wordAIVI.map((char, index) => (
                <motion.span
                  key={`aivi-${index}`}
                  custom={index}
                  variants={letterVariants}
                  className="font-sora text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter bg-gradient-to-b from-white via-neutral-100 to-[#C8102E] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(200,16,46,0.35)]"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Word 2: INTELLIGENCE */}
            <div className="flex items-center gap-1 sm:gap-2">
              {wordIntelligence.map((char, index) => (
                <motion.span
                  key={`intel-${index}`}
                  custom={index + 4}
                  variants={letterVariants}
                  className="font-sora text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent hover:to-[#C8102E] transition-colors"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-4 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-sans">
          <span>&copy; {new Date().getFullYear()} AI Visibility Insights (AIVI Intelligence Pvt. Ltd.). All Rights Reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/#privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link href="/#terms" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>

    </footer>
  );
}
