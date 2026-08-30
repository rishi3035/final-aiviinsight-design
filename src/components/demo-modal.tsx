"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle, Sparkles, Send, Calendar, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/data";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export function DemoModal({ isOpen, onClose, initialCategory }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    category: initialCategory || "Hack My Website (Cybersecurity)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#F97316", "#10B981", "#3B82F6", "#8B5CF6"],
        });
      } catch (err) {
        // graceful fallback if canvas not available
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white border border-stone-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.15)] text-left">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 bg-stone-50/50">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-accent-600">
              <Calendar className="size-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900">Book a Founder Demo</h3>
              <p className="text-xs text-stone-500">Direct 30-min strategy &amp; technical walkthrough</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="size-14 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#C8102E] mx-auto">
                <CheckCircle className="size-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-stone-900">Founder Demo Request Received!</h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-stone-900">{formData.name}</strong>. Rishi (Founder) and our engineering team will connect with you at <strong className="text-stone-900">{formData.email}</strong> within 4 business hours.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs text-stone-600 flex items-center justify-center gap-2">
                <ShieldCheck className="size-4 text-[#C8102E]" />
                <span>Direct calendar invite will be sent to your inbox.</span>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-colors shadow-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-stone-700 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-stone-700 uppercase tracking-wide">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ananya@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-stone-700 uppercase tracking-wide">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-stone-700 uppercase tracking-wide">
                    Organization / College
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or Institute"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-stone-700 uppercase tracking-wide">
                  Platform of Interest *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                >
                  <option value="Hack My Website (Cybersecurity)">Hack My Website (Cybersecurity Scanner &amp; AI Fixes)</option>
                  <option value="AIVI Campus & Career OS">AIVI Campus &amp; Career OS (Placement Cells &amp; Students)</option>
                  <option value="RankMind AI">RankMind AI (Generative Engine Optimization &amp; AI Search)</option>
                  <option value="NYAYA-DRAFT (Legal Tech)">NYAYA-DRAFT (Bilingual Legal Tech Suite)</option>
                  <option value="AIVI CareOS (Healthcare)">AIVI CareOS (ABDM Hospital Management System)</option>
                  <option value="Full Portfolio Enterprise Walkthrough">Full Portfolio / Custom AI Workflow</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-stone-700 uppercase tracking-wide">
                  Specific Requirements or Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any key goals, timelines, or questions..."
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-stone-50/50 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3 border-t border-stone-100">
                <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                  <Clock className="size-3.5 text-accent-500" />
                  <span>30 mins via Google Meet</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white text-xs font-bold transition-all shadow-[0_2px_10px_rgba(200,16,46,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                >
                  <span>{loading ? "Confirming..." : "Confirm Demo Call"}</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
