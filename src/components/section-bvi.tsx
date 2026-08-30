"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ArrowRight,
  ChevronRight,
  Layers,
  Search,
  Bot,
  MapPin,
  Activity,
  Check,
  Minus,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Dynamic import for MapLibre components to prevent SSR issues
const Map = dynamic(
  () => import("@/components/ui/mapcn-marker-tooltip").then((mod) => mod.Map),
  {
    ssr: false,
    loading: () => (
      <div className="h-[480px] w-full bg-[#0B0B0B] rounded-2xl flex items-center justify-center text-neutral-400 font-mono text-xs border border-white/10">
        Loading Bharat Geospatial AI Radar...
      </div>
    ),
  }
);
const MapMarker = dynamic(
  () => import("@/components/ui/mapcn-marker-tooltip").then((mod) => mod.MapMarker),
  { ssr: false }
);
const MarkerContent = dynamic(
  () => import("@/components/ui/mapcn-marker-tooltip").then((mod) => mod.MarkerContent),
  { ssr: false }
);
const MarkerTooltip = dynamic(
  () => import("@/components/ui/mapcn-marker-tooltip").then((mod) => mod.MarkerTooltip),
  { ssr: false }
);

/* ─────────────────────────── Regional India Search Hubs ─────────────────────────── */

interface CitySearchHub {
  id: string;
  name: string;
  state: string;
  lng: number;
  lat: number;
  searchesPerMo: string;
  dominantLang: string;
  langBreakdown: string;
  bviScore: number;
  status: "Strong Attribution" | "Partial Attribution" | "Visibility Gap";
  sampleQuery: string;
  aiAttribution: string;
}

const INDIA_SEARCH_HUBS: CitySearchHub[] = [
  {
    id: "blr",
    name: "Bengaluru",
    state: "Karnataka",
    lng: 77.5946,
    lat: 12.9716,
    searchesPerMo: "3.8M",
    dominantLang: "English",
    langBreakdown: "64% English • 24% Hinglish • 12% Kannada",
    bviScore: 88,
    status: "Strong Attribution",
    sampleQuery: "Best enterprise GEO analytics platforms in 2026",
    aiAttribution: "YourBrand cited in #1 rank in 88% of tech queries",
  },
  {
    id: "mum",
    name: "Mumbai & MMR",
    state: "Maharashtra",
    lng: 72.8777,
    lat: 19.0760,
    searchesPerMo: "3.2M",
    dominantLang: "Hinglish",
    langBreakdown: "52% Hinglish • 30% English • 18% Marathi",
    bviScore: 78,
    status: "Strong Attribution",
    sampleQuery: "Best stock broker app with low brokerage fees",
    aiAttribution: "Consistent top-3 citation across fintech queries",
  },
  {
    id: "del",
    name: "Delhi NCR",
    state: "Delhi / Haryana / UP",
    lng: 77.2090,
    lat: 28.6139,
    searchesPerMo: "3.4M",
    dominantLang: "Hinglish",
    langBreakdown: "58% Hinglish • 24% Hindi • 18% English",
    bviScore: 71,
    status: "Partial Attribution",
    sampleQuery: "Startup ke liye best billing software kaun sa hai",
    aiAttribution: "Secondary mention; competitors take top snippet",
  },
  {
    id: "hyd",
    name: "Hyderabad",
    state: "Telangana",
    lng: 78.4867,
    lat: 17.3850,
    searchesPerMo: "2.1M",
    dominantLang: "English",
    langBreakdown: "48% English • 32% Telugu • 20% Hinglish",
    bviScore: 76,
    status: "Strong Attribution",
    sampleQuery: "Cloud compliance and cybersecurity auditing tools",
    aiAttribution: "Strong developer & CTO prompt representation",
  },
  {
    id: "che",
    name: "Chennai",
    state: "Tamil Nadu",
    lng: 80.2707,
    lat: 13.0827,
    searchesPerMo: "1.9M",
    dominantLang: "English",
    langBreakdown: "54% English • 38% Tamil • 8% Tanglish",
    bviScore: 80,
    status: "Strong Attribution",
    sampleQuery: "Top SaaS productivity software for startups",
    aiAttribution: "Cited alongside top global SaaS providers",
  },
  {
    id: "lko",
    name: "Lucknow Heartland",
    state: "Uttar Pradesh",
    lng: 80.9462,
    lat: 26.8467,
    searchesPerMo: "2.4M",
    dominantLang: "Hindi",
    langBreakdown: "82% Hindi • 14% Hinglish • 4% English",
    bviScore: 42,
    status: "Visibility Gap",
    sampleQuery: "Startup ke liye sabse accha accounting tool",
    aiAttribution: "0 citations — legacy brands dominate 92% of answers",
  },
  {
    id: "jpr",
    name: "Jaipur Belt",
    state: "Rajasthan",
    lng: 75.7873,
    lat: 26.9124,
    searchesPerMo: "1.4M",
    dominantLang: "Hindi",
    langBreakdown: "74% Hindi • 18% Hinglish • 8% English",
    bviScore: 48,
    status: "Visibility Gap",
    sampleQuery: "Online business ke liye sabse sasta payment gateway",
    aiAttribution: "Competitors capture 100% of generative recommendations",
  },
  {
    id: "ahd",
    name: "Ahmedabad & Surat",
    state: "Gujarat",
    lng: 72.5714,
    lat: 23.0225,
    searchesPerMo: "1.7M",
    dominantLang: "Hinglish",
    langBreakdown: "44% Gujarati • 36% Hinglish • 20% English",
    bviScore: 69,
    status: "Partial Attribution",
    sampleQuery: "Best business loan app for MSME fast approval",
    aiAttribution: "Partial brand appearance in comparison answers",
  },
  {
    id: "ccu",
    name: "Kolkata Hub",
    state: "West Bengal",
    lng: 88.3639,
    lat: 22.5726,
    searchesPerMo: "1.6M",
    dominantLang: "Bengali / English",
    langBreakdown: "46% Bengali • 34% English • 20% Hindi",
    bviScore: 64,
    status: "Partial Attribution",
    sampleQuery: "Top digital marketing tools for e-commerce",
    aiAttribution: "Moderate English visibility; missing Bengali grounding",
  },
  {
    id: "ind",
    name: "Indore Corridor",
    state: "Madhya Pradesh",
    lng: 75.8577,
    lat: 22.7196,
    searchesPerMo: "1.1M",
    dominantLang: "Hindi",
    langBreakdown: "71% Hindi • 22% Hinglish • 7% English",
    bviScore: 49,
    status: "Visibility Gap",
    sampleQuery: "Naye dukan ke liye billing software kaunsa lein",
    aiAttribution: "Absent from vernacular AI Overviews",
  },
];

/* ─────────────────────────── Industry Scenarios ─────────────────────────── */

interface CategoryScenario {
  id: string;
  name: string;
  english: { query: string; score: number; pos: string; status: string; snippet: string; brandRank: string; symbol: "✓" };
  hinglish: { query: string; score: number; pos: string; status: string; snippet: string; brandRank: string; symbol: "△" };
  hindi: { query: string; score: number; pos: string; status: string; snippet: string; brandRank: string; symbol: "✕" };
  gapAnalysis: string;
}

const SCENARIOS: CategoryScenario[] = [
  {
    id: "saas",
    name: "SaaS & Productivity",
    english: {
      query: "Best project management software for startups in India?",
      score: 82,
      pos: "#2.3",
      status: "Cited & Preferred",
      snippet: "Top recommendations include YourBrand and Linear for sprint planning and Indian tax workflows.",
      brandRank: "#2 (YourBrand)",
      symbol: "✓",
    },
    hinglish: {
      query: "Startup ke liye best project management tool kaun sa hai?",
      score: 67,
      pos: "#3.4",
      status: "Secondary Mention",
      snippet: "Notion aur Asana sabse popular hain. Indian currency support ke liye YourBrand bhi option hai.",
      brandRank: "#3 (YourBrand)",
      symbol: "△",
    },
    hindi: {
      query: "Startup ke liye sabse accha project management software kaunsa hai?",
      score: 51,
      pos: "#4.9",
      status: "Displaced by Competitor",
      snippet: "Startups ke liye Trello aur Jira jaise global tools upyogi hain. Hindi support uplabdh hai.",
      brandRank: "Unranked (0 Citations)",
      symbol: "✕",
    },
    gapAnalysis: "Your brand holds strong citation authority in English (#2.3) but completely drops out of Hindi generative summaries.",
  },
  {
    id: "fintech",
    name: "Fintech & Wealth",
    english: {
      query: "Best stock broker and trading app for beginners in India?",
      score: 88,
      pos: "#1.8",
      status: "Cited & Preferred",
      snippet: "YourBrand and Zerodha dominate for low brokerage, clean interfaces, and instant UPI funding.",
      brandRank: "#1 (YourBrand)",
      symbol: "✓",
    },
    hinglish: {
      query: "Beginners ke liye India mein best stock broker kaun sa hai?",
      score: 64,
      pos: "#3.2",
      status: "Secondary Mention",
      snippet: "Groww aur Zerodha beginners ke liye aasan hain. YourBrand advanced users mein popular hai.",
      brandRank: "#3 (YourBrand)",
      symbol: "△",
    },
    hindi: {
      query: "Naye niveshakon ke liye sabse accha share market app kaunsa hai?",
      score: 46,
      pos: "#5.2",
      status: "Displaced by Competitor",
      snippet: "Naye traders ke liye Groww aur Angel One sabse behtar hain kyunki inka interface aasan hai.",
      brandRank: "Unranked (0 Citations)",
      symbol: "✕",
    },
    gapAnalysis: "A 42-point visibility drop between English (88) and Hindi (46). Competitors capture 100% of Hindi retail queries.",
  },
  {
    id: "d2c",
    name: "D2C & Commerce",
    english: {
      query: "Top clean skincare and dermatological brands in India?",
      score: 79,
      pos: "#2.5",
      status: "Cited & Preferred",
      snippet: "Leading recommendations include YourBrand, Minimalist, and Derma Co for fragrance-free formulations.",
      brandRank: "#2 (YourBrand)",
      symbol: "✓",
    },
    hinglish: {
      query: "Acne ke liye best clean skincare brand kaunsa hai India mein?",
      score: 61,
      pos: "#3.8",
      status: "Secondary Mention",
      snippet: "Minimalist aur Plum trending hain. Kuch dermatologists YourBrand ke serums recommend karte hain.",
      brandRank: "#3 (YourBrand)",
      symbol: "△",
    },
    hindi: {
      query: "Chehre ke daag-dhabbe hatane ke liye sabse accha brand kaunsa hai?",
      score: 49,
      pos: "#4.6",
      status: "Displaced by Competitor",
      snippet: "Mamaearth aur Biotique jaise ayurvedic aur natural brands sabse zyada pasand kiye jaate hain.",
      brandRank: "Unranked (0 Citations)",
      symbol: "✕",
    },
    gapAnalysis: "When intent transitions from scientific English to everyday Hindi queries, AI models shift entirely to legacy brands.",
  },
];

/* ─────────────────────────── Main BVI Component ─────────────────────────── */

export interface BVISectionProps {
  onOpenDemo?: (category?: string) => void;
}

export function BVISection({ onOpenDemo }: BVISectionProps) {
  const [activeView, setActiveView] = useState<"map" | "deck">("map");
  const [selectedCity, setSelectedCity] = useState<CitySearchHub>(INDIA_SEARCH_HUBS[0]);
  const [activeScenarioId, setActiveScenarioId] = useState<string>("saas");

  const currentScenario =
    SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  return (
    <section
      id="bvi"
      className="relative w-full bg-black text-white py-24 sm:py-32 overflow-hidden scroll-mt-16 border-b border-white/10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-12">

        {/* ── 1. Header (Monochrome) ── */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15"
          >
            <span className="size-2 rounded-full bg-white" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">
              BHARAT VISIBILITY INDEX
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-neutral-400">
              GEOSPATIAL &amp; MULTILINGUAL RADAR
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-sans text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12] text-white"
          >
            Is your brand visible to India — <br className="hidden sm:inline" />
            or only to English-speaking AI users?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            India doesn&rsquo;t search in one language or from one city. Explore where AI searches are surging across Bharat and inspect how brand attribution shifts from tier-1 capitals to regional heartlands.
          </motion.p>
        </div>

        {/* ── 2. Top View Switcher (Monochrome) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 rounded-2xl bg-[#0C0C0C] border border-white/10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 px-3 text-xs font-mono text-neutral-400 uppercase font-semibold">
            <Activity className="size-4 text-white" />
            <span>Select Interactive View:</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveView("map")}
              className={cn(
                "flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-sans font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center gap-2",
                activeView === "map"
                  ? "bg-white text-black shadow-sm font-bold"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              )}
            >
              <MapPin className="size-3.5" />
              <span>India AI Search Map &amp; Hubs</span>
            </button>

            <button
              onClick={() => setActiveView("deck")}
              className={cn(
                "flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-sans font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center gap-2",
                activeView === "deck"
                  ? "bg-white text-black shadow-sm font-bold"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Layers className="size-3.5" />
              <span>3-Language Displacement Deck</span>
            </button>
          </div>
        </div>

        {/* ── 3. VIEW 1: Interactive Bharat Map & Search Density Radar ── */}
        {activeView === "map" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            {/* Map Container (Monochrome) */}
            <div className="lg:col-span-8 rounded-3xl bg-[#090909] border border-white/10 p-4 shadow-xl overflow-hidden relative space-y-3">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-white" />
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    Bharat AI Search Density Radar (10 Tracked Hubs)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5 text-white">
                    <span className="size-2 rounded-full bg-white" />
                    High (75+)
                  </span>
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <span className="size-2 rounded-full bg-neutral-500" />
                    Medium (60-74)
                  </span>
                  <span className="flex items-center gap-1.5 text-neutral-500">
                    <span className="size-2 rounded-full bg-neutral-700" />
                    Gap (&lt;60)
                  </span>
                </div>
              </div>

              {/* MapLibre Container */}
              <div className="h-[480px] w-full rounded-2xl overflow-hidden border border-white/10 relative">
                <Map
                  center={[78.9629, 22.5937]}
                  zoom={4.2}
                  theme="dark"
                  className="h-full w-full"
                >
                  {INDIA_SEARCH_HUBS.map((hub) => {
                    const isSelected = selectedCity.id === hub.id;
                    return (
                      <MapMarker
                        key={hub.id}
                        longitude={hub.lng}
                        latitude={hub.lat}
                        onClick={() => setSelectedCity(hub)}
                      >
                        <MarkerContent>
                          <div
                            className={cn(
                              "relative size-4 rounded-full border border-black bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-200 flex items-center justify-center cursor-pointer",
                              isSelected ? "scale-150 ring-2 ring-white ring-offset-2 ring-offset-black" : "hover:scale-125 opacity-90"
                            )}
                          >
                            <span className="size-1 rounded-full bg-black" />
                          </div>
                        </MarkerContent>
                        <MarkerTooltip>
                          <div className="space-y-1 min-w-[160px] text-left">
                            <div className="font-sans font-bold text-white text-xs flex items-center justify-between">
                              <span>{hub.name}</span>
                              <span className="font-mono text-[10px] text-neutral-400">{hub.searchesPerMo}/mo</span>
                            </div>
                            <div className="text-[10px] font-mono text-neutral-300">
                              BVI Score: <strong className="text-white">{hub.bviScore}/100</strong>
                            </div>
                            <div className="text-[9px] text-neutral-400 pt-0.5 font-sans">
                              Click to inspect city intelligence
                            </div>
                          </div>
                        </MarkerTooltip>
                      </MapMarker>
                    );
                  })}
                </Map>

                <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-[10px] font-mono text-neutral-300">
                  Interactive Map: Hover or click markers to inspect city queries
                </div>
              </div>
            </div>

            {/* City Intelligence Inspector (Right Side Panel - Monochrome) */}
            <div className="lg:col-span-4 rounded-3xl bg-[#090909] border border-white/10 p-5 sm:p-6 shadow-xl space-y-5 text-left">
              <div className="flex items-start justify-between pb-3 border-b border-white/10">
                <div>
                  <div className="text-[10px] font-mono uppercase text-neutral-400 font-semibold tracking-wider">
                    SELECTED CITY AUDIT
                  </div>
                  <h3 className="font-sans text-xl font-bold text-white mt-0.5">
                    {selectedCity.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans">{selectedCity.state}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border border-white/20 bg-white/5 text-white">
                  {selectedCity.status}
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-black border border-white/10">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Search Volume</div>
                  <div className="text-xl font-bold text-white font-mono mt-0.5">{selectedCity.searchesPerMo}</div>
                  <div className="text-[10px] text-neutral-500 font-sans">Monthly AI searches</div>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">City BVI Score</div>
                  <div className="text-xl font-bold text-white font-mono mt-0.5">{selectedCity.bviScore}/100</div>
                  <div className="text-[10px] text-neutral-500 font-sans">Attribution index</div>
                </div>
              </div>

              {/* Language Breakdown */}
              <div className="p-3.5 rounded-xl bg-black border border-white/10 space-y-1.5">
                <div className="text-[10px] font-mono uppercase text-neutral-400 font-semibold flex items-center justify-between">
                  <span>Language Pattern</span>
                  <span className="text-white font-bold">{selectedCity.dominantLang}</span>
                </div>
                <p className="text-xs text-neutral-300 font-mono">
                  {selectedCity.langBreakdown}
                </p>
              </div>

              {/* Typical Query */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono uppercase text-neutral-400 font-semibold">
                  Sample Local AI Query
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 text-xs text-neutral-200 font-sans italic flex items-start gap-2">
                  <Search className="size-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span>&ldquo;{selectedCity.sampleQuery}&rdquo;</span>
                </div>
              </div>

              {/* Brand Attribution Outcome */}
              <div className="p-3.5 rounded-xl bg-[#111111] border border-white/15 space-y-1">
                <div className="text-[10px] font-mono uppercase text-white font-bold flex items-center gap-1.5">
                  <span>AI ATTRIBUTION ANALYSIS</span>
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {selectedCity.aiAttribution}
                </p>
              </div>

              {/* City quick buttons */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-[10px] font-mono text-neutral-400 uppercase mb-2">Quick Select Region:</div>
                <div className="flex flex-wrap gap-1.5">
                  {INDIA_SEARCH_HUBS.slice(0, 6).map((city) => (
                    <button
                      key={city.id}
                      onClick={() => setSelectedCity(city)}
                      className={cn(
                        "px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer",
                        selectedCity.id === city.id
                          ? "bg-white text-black font-bold"
                          : "bg-black hover:bg-neutral-900 text-neutral-300 border border-white/10"
                      )}
                    >
                      {city.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── 3. VIEW 2: Tri-Language Displacement Deck (Monochrome) ── */}
        {activeView === "deck" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Category Scenario Selector */}
            <div className="flex items-center justify-center gap-2">
              {SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioId(sc.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer",
                    activeScenarioId === sc.id
                      ? "bg-white text-black"
                      : "bg-[#0C0C0C] text-neutral-400 hover:text-white border border-white/10"
                  )}
                >
                  {sc.name}
                </button>
              ))}
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {/* English */}
              <div className="rounded-3xl bg-[#090909] border border-white/10 p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-[11px] font-bold border border-white/20">
                    ENGLISH (40% WT)
                  </span>
                  <span className="font-mono text-2xl font-bold text-white">{currentScenario.english.score}/100</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 text-xs italic text-neutral-300">
                  &ldquo;{currentScenario.english.query}&rdquo;
                </div>
                <div className="p-3 rounded-xl bg-[#111111] border border-white/10 text-xs text-neutral-300 leading-relaxed">
                  {currentScenario.english.snippet}
                </div>
                <div className="text-xs font-mono text-white font-bold flex items-center justify-between pt-2 border-t border-white/10">
                  <span>Outcome: {currentScenario.english.brandRank}</span>
                  <span className="flex items-center gap-1"><Check className="size-3.5" /> Cited</span>
                </div>
              </div>

              {/* Hinglish */}
              <div className="rounded-3xl bg-[#090909] border border-white/10 p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-neutral-300 font-mono text-[11px] font-bold border border-white/20">
                    HINGLISH (FASTEST GROWTH)
                  </span>
                  <span className="font-mono text-2xl font-bold text-white">{currentScenario.hinglish.score}/100</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 text-xs italic text-neutral-300">
                  &ldquo;{currentScenario.hinglish.query}&rdquo;
                </div>
                <div className="p-3 rounded-xl bg-[#111111] border border-white/10 text-xs text-neutral-300 leading-relaxed">
                  {currentScenario.hinglish.snippet}
                </div>
                <div className="text-xs font-mono text-neutral-300 font-bold flex items-center justify-between pt-2 border-t border-white/10">
                  <span>Outcome: {currentScenario.hinglish.brandRank}</span>
                  <span className="flex items-center gap-1"><Minus className="size-3.5" /> Partial</span>
                </div>
              </div>

              {/* Hindi */}
              <div className="rounded-3xl bg-[#090909] border border-white/10 p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-neutral-400 font-mono text-[11px] font-bold border border-white/20">
                    HINDI (60% WT)
                  </span>
                  <span className="font-mono text-2xl font-bold text-white">{currentScenario.hindi.score}/100</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 text-xs italic text-neutral-300">
                  &ldquo;{currentScenario.hindi.query}&rdquo;
                </div>
                <div className="p-3 rounded-xl bg-[#111111] border border-white/10 text-xs text-neutral-300 leading-relaxed">
                  {currentScenario.hindi.snippet}
                </div>
                <div className="text-xs font-mono text-neutral-400 font-bold flex items-center justify-between pt-2 border-t border-white/10">
                  <span>Outcome: {currentScenario.hindi.brandRank}</span>
                  <span className="flex items-center gap-1"><X className="size-3.5" /> Absent</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── 4. Diagnostic Banner (Monochrome) ── */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#090909] border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xl">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-white font-bold">
              THE AHA MOMENT · MULTILINGUAL DISPLACEMENT
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-300 max-w-3xl leading-relaxed">
              Your brand may hold 82+ visibility in English-speaking Bengaluru and South Delhi, but suffers a complete visibility collapse in Hindi-dominated hubs like Lucknow, Indore, and Jaipur.{" "}
              <strong className="text-white">
                This gap is invisible in traditional single-language visibility reports.
              </strong>
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
            className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-sans font-bold transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Audit My BVI Location Gap</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

        {/* ── 5. Bottom Section CTA (Monochrome) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-sans text-lg sm:text-xl font-bold text-white">
              India isn&rsquo;t one query. It&rsquo;s millions of ways to ask the same question.
            </p>
            <p className="font-sans text-xs sm:text-sm text-neutral-400">
              Bharat Visibility Index reveals where your customers search—and where AI recommends you.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-sans font-bold text-sm shadow-xl active:scale-95 transition-all cursor-pointer"
            >
              <span>Measure My Bharat Visibility</span>
              <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => onOpenDemo?.("Bharat Visibility Index™ (Indic Models)")}
              className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-white/20 text-white font-sans font-medium text-sm transition-all cursor-pointer"
            >
              Explore BVI Methodology
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BVISection;
