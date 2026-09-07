"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Box, 
  Layers, 
  LayoutGrid, 
  FileText, 
  Clock, 
  Tag, 
  HelpCircle, 
  ArrowRight, 
  Menu, 
  X, 
} from "lucide-react";

interface NavbarProps {
  onOpenDemo?: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("footer") || document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "0px" }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Live Audit", icon: Box, href: "/#audit", highlight: true },
    { label: "Bharat Index", icon: LayoutGrid, href: "/#bvi" },
    { label: "Pricing", icon: Tag, href: "/#pricing" },
    { label: "FAQ", icon: HelpCircle, href: "/#faq" },
    { label: "About", icon: FileText, href: "/about" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 lg:px-12 pt-6 pb-3 transition-all duration-400 ease-in-out pointer-events-none ${
        footerVisible 
          ? "opacity-0 -translate-y-12 pointer-events-none" 
          : "opacity-100 translate-y-0"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-5 pointer-events-auto">
        
        {/* Left: Brand Logo (Matching height and exact rounded-full curve) */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group shrink-0 h-[52px] px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md hover:border-neutral-300"
        >
          <Image
            src="/logos/aivi-logo-white.png"
            alt="AI Visibility - Analyze • Track • Grow"
            width={220}
            height={50}
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            priority
          />
        </Link>

        {/* Center: The Floating Pill Navigation (Matching height & exact rounded-full curve) */}
        <nav 
          className={`hidden xl:flex items-center gap-2 h-[52px] px-4 py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-[0_6px_28px_rgba(0,0,0,0.08)] border border-neutral-200/90"
              : "bg-white/90 backdrop-blur-md shadow-[0_3px_16px_rgba(0,0,0,0.05)] border border-neutral-200/75"
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            if (item.highlight) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold shadow-xs hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Icon className="size-4 text-[#C8102E]" />
                  <span>{item.label}</span>
                </Link>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-neutral-700 hover:text-black hover:bg-neutral-100/70 transition-all duration-150"
              >
                <Icon className="size-4 text-neutral-400 group-hover:text-neutral-700" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: Pricing Link + "Run Free Audit →" Button (Matching height & exact rounded-full curve) */}
        <div className="flex items-center gap-3.5 shrink-0">
          <Link
            href="/#pricing"
            className="hidden md:inline-block text-sm font-medium text-neutral-700 hover:text-black px-2.5 py-1.5 transition-colors"
          >
            Pricing
          </Link>

          <button
            onClick={() => onOpenDemo ? onOpenDemo() : window.location.href = "#audit"}
            className="group inline-flex items-center justify-center gap-2 h-[52px] rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-red-950/10"
          >
            <span>Run Free Audit</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden size-[52px] rounded-full bg-white border border-neutral-200 text-neutral-900 shadow-xs flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-3 pointer-events-auto rounded-3xl bg-white border border-neutral-200/90 p-4 space-y-3 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={item.label}
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
                >
                  <Icon className="size-4 text-neutral-500" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-neutral-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo?.();
              }}
              className="w-full py-2.5 rounded-full bg-[#C8102E] text-white text-sm font-semibold text-center shadow-sm hover:bg-[#B00D27] transition-colors flex items-center justify-center gap-2"
            >
              <span>Run Free Audit</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
