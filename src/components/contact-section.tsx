"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Building2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/data";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#F97316", "#10B981", "#3B82F6", "#C8102E"],
        });
      } catch (err) {
        // graceful fallback
      }
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-accent-700 text-xs font-semibold uppercase tracking-wider">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Get in Touch with the Leadership Team
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-normal">
            Whether you are piloting Campus OS, scheduling an enterprise security audit, or exploring partner integrations, we respond within 4 hours.
          </p>
        </div>

        {/* Side-by-Side Layout (Form Left/Right + Company Details Block) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-8 shadow-card text-left">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="size-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle className="size-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-900">Message Dispatched Successfully</h3>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-900">{formData.name}</strong>. Our core team has received your note regarding <strong className="text-stone-900">{formData.category}</strong> and will reach out to <strong className="text-stone-900">{formData.email}</strong> shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      category: "General Inquiry",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-colors shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-800">
                      Your Name <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Mishra"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAFAF9] text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-800">
                      Work Email <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@organization.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAFAF9] text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-800">
                      Phone Number <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAFAF9] text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-800">
                      Project Category <span className="text-accent-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAFAF9] text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                    >
                      <option value="Hack My Website (Cybersecurity)">Hack My Website (Cybersecurity Audit)</option>
                      <option value="AIVI Campus & Career OS">AIVI Campus OS (Placement Cell / University)</option>
                      <option value="RankMind AI">RankMind AI (AI Search / GEO Optimization)</option>
                      <option value="NYAYA-DRAFT (Legal Suite)">NYAYA-DRAFT (Legal Tech Pilot)</option>
                      <option value="AIVI CareOS (Healthcare HMS)">AIVI CareOS (Hospital ABDM Pilot)</option>
                      <option value="Enterprise Custom Integration">Enterprise Custom Architecture</option>
                      <option value="General Inquiry">General Partnership Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-800">
                    Message / Project Context <span className="text-accent-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your organization, current workflow requirements, and target timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FAFAF9] text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold transition-all shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry to Founders"}</span>
                  <Send className="size-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Company Details Block (Side-by-Side) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-card space-y-6">
              
              <div className="space-y-1">
                <div className="text-xs font-bold font-mono text-accent-600 uppercase tracking-wider">
                  Corporate Headquarters
                </div>
                <h3 className="text-lg font-bold text-stone-900">
                  {COMPANY_DETAILS.name}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-accent-600 shrink-0">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900">Official Communication</div>
                    <a
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-stone-600 hover:text-accent-600 transition-colors"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900">Direct Founder WhatsApp</div>
                    <a
                      href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-emerald-700 transition-colors flex items-center gap-1"
                    >
                      <span>{COMPANY_DETAILS.phone}</span>
                      <span className="text-[10px] text-emerald-700 font-semibold">(Instant Chat)</span>
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 shrink-0">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900">Business Hours</div>
                    <div className="text-stone-600">{COMPANY_DETAILS.hours}</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 shrink-0">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900">Registered Office</div>
                    <div className="text-stone-600 leading-relaxed">
                      {COMPANY_DETAILS.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Badges */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="size-3.5" />
                  <span>DPIIT: {COMPANY_DETAILS.dpiitNumber}</span>
                </span>
                <span>Gorakhpur, UP</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
