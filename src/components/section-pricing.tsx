"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  PlusIcon, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  HelpCircle,
  Building2,
  Rocket,
  Layers
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderTrail } from "@/components/ui/border-trail";
import { cn } from "@/lib/utils";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaVariant: "default" | "outline" | "emerald";
  badge?: string;
  icon: any;
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Founders & Small Teams",
    description: "For founders and small teams beginning their AI search measurement journey.",
    monthlyPrice: 149,
    annualPrice: 119,
    isPopular: false,
    features: [
      "1 Verified enterprise domain",
      "Core prompt monitoring (250 queries/mo)",
      "English + Hindi/Hinglish visibility",
      "Citation evidence & source ranking",
      "Monthly executive PDF reporting",
      "Daily displacement alerts",
    ],
    ctaText: "Start Free Snapshot",
    ctaVariant: "outline",
    icon: Rocket,
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Fast-Growing Brands",
    description: "For brands building an ongoing AI search program and outpacing competitors.",
    monthlyPrice: 399,
    annualPrice: 319,
    isPopular: true,
    badge: "Most Recommended",
    features: [
      "Multiple domains and competitors (Up to 5)",
      "Expanded model coverage (ChatGPT, Claude, Perplexity, Gemini)",
      "Prompt and source intelligence graph",
      "Priority recommendations & action plans",
      "Weekly team reporting & Slack sync",
      "Autonomous llms.txt index generation",
      "Multilingual Hindi/Hinglish deep scans",
    ],
    ctaText: "Launch Growth Suite",
    ctaVariant: "default",
    icon: Layers,
  },
  {
    id: "agency",
    name: "Agency",
    tagline: "Agencies & Enterprises",
    description: "For teams managing AI visibility across multiple clients and global portfolios.",
    monthlyPrice: 899,
    annualPrice: 719,
    isPopular: false,
    features: [
      "Multi-client sovereign workspace (15+ clients)",
      "White-label reporting with custom domain",
      "Advanced CSV/API exports & raw telemetry",
      "Granular collaboration and role permissions",
      "Dedicated account strategist & SLA",
      "Custom prompt cluster training",
      "Quarterly executive strategy audit",
    ],
    ctaText: "Talk to Enterprise Team",
    ctaVariant: "outline",
    icon: Building2,
  },
];

interface PricingSectionProps {
  onOpenDemo?: () => void;
}

export function PricingSection({ onOpenDemo }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  return (
    <section id="pricing" className="relative w-full bg-[#FAF9F6] py-24 sm:py-32 lg:py-36 px-4 sm:px-8 lg:px-12 overflow-hidden text-neutral-900">
      
      {/* Background Subtle Grid Texture */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 size-full -z-0",
          "bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]",
          "bg-[size:36px_36px]",
          "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        )}
      />

      <div className="max-w-[1340px] mx-auto relative z-10 space-y-16">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 shadow-xs"
          >
            <span className="size-2 rounded-full bg-[#FF7A1A]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-800">
              Clear pricing. Clear scope.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-neutral-900 leading-[1.12]"
          >
            Start with the visibility questions that matter most.
          </motion.h2>

          {/* Billing Switcher Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="flex items-center justify-center gap-3 pt-3"
          >
            <div className="inline-flex items-center p-1 rounded-full bg-neutral-200/80 border border-neutral-300/80 text-xs font-sans">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-4 py-1.5 rounded-full font-semibold transition-all duration-200",
                  billingCycle === "monthly"
                    ? "bg-white text-neutral-900 shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                Monthly billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={cn(
                  "px-4 py-1.5 rounded-full font-semibold transition-all duration-200 flex items-center gap-1.5",
                  billingCycle === "annual"
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                <span>Annual billing</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#C8102E] text-white">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ================= THREE PRICING CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const isGrowth = plan.isPopular;
            const price = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
            const PlanIcon = plan.icon;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={cn(
                  "relative flex flex-col justify-between p-7 sm:p-9 rounded-[30px] transition-all duration-300",
                  isGrowth
                    ? "bg-[#0E121A] text-white border-2 border-neutral-700 shadow-2xl scale-[1.02] lg:-translate-y-2"
                    : "bg-white text-neutral-900 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-neutral-300"
                )}
              >
                {/* Luminous Border Trail Effect on Recommended Growth Plan */}
                {isGrowth && (
                  <BorderTrail
                    style={{
                      boxShadow:
                        "0px 0px 60px 30px rgba(200, 16, 46, 0.4), 0 0 100px 60px rgba(224, 36, 68, 0.3)",
                    }}
                    size={90}
                  />
                )}

                {/* Corner Cross Markers (from single-pricing-card-1) */}
                <PlusIcon className={cn("absolute -top-2.5 -left-2.5 size-5", isGrowth ? "text-neutral-600" : "text-neutral-300")} />
                <PlusIcon className={cn("absolute -top-2.5 -right-2.5 size-5", isGrowth ? "text-neutral-600" : "text-neutral-300")} />
                <PlusIcon className={cn("absolute -bottom-2.5 -left-2.5 size-5", isGrowth ? "text-neutral-600" : "text-neutral-300")} />
                <PlusIcon className={cn("absolute -bottom-2.5 -right-2.5 size-5", isGrowth ? "text-neutral-600" : "text-neutral-300")} />

                <div className="space-y-6">
                  {/* Top Header & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={cn(
                        "size-10 rounded-xl flex items-center justify-center",
                        isGrowth ? "bg-white/10 text-rose-400" : "bg-neutral-100 text-neutral-900"
                      )}>
                        <PlanIcon className="size-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="font-jakarta text-2xl font-bold tracking-tight">
                          {plan.name}
                        </h3>
                        <p className={cn("text-xs font-mono font-medium", isGrowth ? "text-neutral-400" : "text-neutral-500")}>
                          {plan.tagline}
                        </p>
                      </div>
                    </div>

                    {isGrowth && (
                      <Badge className="bg-gradient-to-r from-[#C8102E] to-[#E02444] text-white font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 border-0">
                        {plan.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className={cn("text-sm leading-relaxed", isGrowth ? "text-neutral-300" : "text-neutral-600")}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="pt-2 pb-4 border-b border-neutral-200/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold font-sans">$</span>
                      <span className="font-jakarta text-5xl font-extrabold tracking-tight">
                        {price}
                      </span>
                      <span className={cn("text-sm font-medium", isGrowth ? "text-neutral-400" : "text-neutral-500")}>
                        /month
                      </span>
                    </div>
                    <p className={cn("text-xs mt-1 font-mono", isGrowth ? "text-rose-400" : "text-neutral-500")}>
                      {billingCycle === "annual" ? "Billed annually ($" + price * 12 + "/yr)" : "Billed monthly"}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <div className={cn("text-xs font-mono font-semibold uppercase tracking-wider", isGrowth ? "text-neutral-400" : "text-neutral-500")}>
                      Included in {plan.name}:
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className={cn("size-4 shrink-0 mt-0.5", isGrowth ? "text-rose-400" : "text-[#C8102E]")} />
                          <span className={isGrowth ? "text-neutral-200" : "text-neutral-700"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-8 mt-6">
                  <Button
                    onClick={onOpenDemo}
                    className={cn(
                      "w-full h-12 rounded-2xl font-sans font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer",
                      isGrowth
                        ? "bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white hover:scale-[1.02]"
                        : "bg-neutral-900 text-white hover:bg-black"
                    )}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ================= FOOTER TRUST & COMPARE PLANS ACTION ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 font-sans">
            <ShieldCheck className="size-4.5 text-[#C8102E] shrink-0" />
            <span>30-day money-back guarantee • No multi-year lock-in • SOC-2 Type II certified</span>
          </div>

          {/* Visible "Compare Plans" & "See all plans and limits" Actions */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenDemo}
              className="font-mono text-xs sm:text-sm font-semibold text-neutral-800 hover:text-black underline underline-offset-4 flex items-center gap-1.5 transition-colors"
            >
              <span>See all plans and limits</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default PricingSection;
