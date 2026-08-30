export interface Platform {
  id: string;
  name: string;
  tagline: string;
  category: string;
  stage: "live" | "pilot";
  stageLabel: string;
  url: string;
  ctaText: string;
  isExternal: boolean;
  challenge: string;
  execution: string;
  impact: string;
  stats: { label: string; value: string }[];
  tags: string[];
  mockupType: "hackmywebsite" | "campusos" | "rankmind";
}

export interface Vertical {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  route: string;
  features: string[];
  locationNote?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  product: string;
  quote: string;
}

export interface WhyAiviItem {
  icon: string;
  title: string;
  description: string;
}

export interface ArchiveProduct {
  name: string;
  badge: string;
  description: string;
  type: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const NAV_LINKS = [
  { label: "Platforms", href: "/#platforms" },
  { label: "Legal & Health", href: "/#verticals" },
  { label: "Why AIVI", href: "/#why-aivi" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const CATEGORY_CHIPS = [
  { label: "Cybersecurity", targetId: "hackmywebsite", badge: "Live" },
  { label: "AI Search / GEO", targetId: "rankmind", badge: "Live" },
  { label: "Career Tech", targetId: "campus-career-os", badge: "Live" },
  { label: "Legal AI", targetId: "nyaya-draft", badge: "Pilot" },
  { label: "Healthcare HMS", targetId: "aivi-careos", badge: "Pilot" },
];

export const TRUST_BADGES = [
  {
    title: "DPIIT Recognized",
    subtitle: "Govt. of India Startup (DIPP162791)",
    icon: "ShieldCheck",
  },
  {
    title: "NVIDIA Inception",
    subtitle: "Official Global Program Member",
    icon: "Cpu",
  },
  {
    title: "Sarvam AI Powered",
    subtitle: "Indic Vernacular Models",
    icon: "Sparkles",
  },
  {
    title: "Zoho for Startups",
    subtitle: "Ecosystem Partner",
    icon: "Layers",
  },
];

export const TECH_STACK = [
  "Next.js 15",
  "React 19",
  "Python FastAPI",
  "Docker & Celery",
  "PostgreSQL",
  "Razorpay",
];

export const CORE_PLATFORMS: Platform[] = [
  {
    id: "hackmywebsite",
    name: "Hack My Website",
    tagline: "Automated Website Security Scanner & AI Fix Generator",
    category: "Cybersecurity SaaS",
    stage: "live",
    stageLabel: "LIVE IN PRODUCTION",
    url: "https://hackmywebsite.io/",
    ctaText: "Launch Platform",
    isExternal: true,
    challenge:
      "Modern teams deploy web apps rapidly, leaving security audits as an afterthought. Hidden misconfigurations, missing security headers, and secret leaks expose companies to automated crawler exploits before traditional penetration testing even begins.",
    execution:
      "Engineered an automated multi-engine scanning pipeline combining OWASP ZAP (DAST), Nuclei (CVEs), and Semgrep (SAST). Verifies domain DNS ownership in seconds, evaluates 200+ checks non-destructively in 3–8 minutes, and synthesizes results.",
    impact:
      "Delivers an objective 0–100 AI Launch Score with 1-click copy-paste remediation prompts formatted specifically for Cursor, Claude Code, and Windsurf, enabling engineering teams to fix vulnerabilities in minutes.",
    stats: [
      { label: "Automated Checks", value: "200+" },
      { label: "Audit Pipeline", value: "3–8 Min" },
      { label: "Launch Score", value: "0–100" },
    ],
    tags: ["OWASP ZAP", "Nuclei v3", "Semgrep", "AI Remediation", "DNS Verification"],
    mockupType: "hackmywebsite",
  },
  {
    id: "campus-career-os",
    name: "AIVI Campus & Career OS",
    tagline: "AI-Powered Career Intelligence & Placement Operating System",
    category: "Career Tech AI",
    stage: "live",
    stageLabel: "LIVE IN PRODUCTION",
    url: "https://aivilabs.com/",
    ctaText: "Launch Platform",
    isExternal: true,
    challenge:
      "Millions of fresh engineering and commerce graduates across India struggle with generic ATS resumes, lack of structured interview preparation, and severe language barriers during corporate hiring rounds.",
    execution:
      "Built a comprehensive career intelligence ecosystem powered by Resume Studio v2, real-time Job Fit scoring, Sarvam AI-driven Vernacular Voice AI mock interviews, and automated Placement Cell cohort analytics.",
    impact:
      "Empowers Tier-2 and Tier-3 college students with elite-level interview coaching in regional languages and gives university placement cells 360° visibility into batch hiring readiness.",
    stats: [
      { label: "AI Career Modules", value: "6 Engines" },
      { label: "Vernacular Voice AI", value: "Indic Native" },
      { label: "Resume Parsing", value: "< 2.5s" },
    ],
    tags: ["Resume Intelligence v2", "Vernacular Voice AI", "Job Fit Analysis", "Campus Analytics"],
    mockupType: "campusos",
  },
  {
    id: "rankmind",
    name: "RankMind AI",
    tagline: "Generative Engine Optimization (GEO) & AI Search Intelligence",
    category: "AI Search & GEO",
    stage: "live",
    stageLabel: "LIVE IN PRODUCTION",
    url: "https://aivisibilityinsights.com/",
    ctaText: "Launch Platform",
    isExternal: true,
    challenge:
      "Users are shifting from Google Search to ChatGPT, Perplexity, Claude, and Google AI Overviews. Traditional SEO tools are completely blind to whether generative models recommend or omit your product.",
    execution:
      "Continuously monitors brand prompt citations across all leading LLMs, audits semantic brand authority, and reverse-engineers the contextual knowledge graphs driving generative recommendations.",
    impact:
      "Provides actionable content engineering and citation optimization blueprints so high-growth brands capture primary recommendation slots in AI synthesized answers.",
    stats: [
      { label: "LLM Engines Monitored", value: "5+ Models" },
      { label: "Prompt Queries Audited", value: "10,000+" },
      { label: "Share of Voice Metric", value: "Real-time" },
    ],
    tags: ["Generative Engine Optimization", "LLM Citation Tracking", "Brand Share of Voice", "Perplexity & ChatGPT"],
    mockupType: "rankmind",
  },
];

export const SPECIALIZED_VERTICALS: Vertical[] = [
  {
    id: "nyaya-draft",
    name: "NYAYA-DRAFT",
    badge: "PILOT READY",
    headline: "Bilingual Indian Legal Intelligence & Pleadings Studio",
    description:
      "High-precision AI drafting suite for Indian advocates, law firms, and in-house legal counsel. Built with deep understanding of Bharatiya Nyaya Sanhita (BNS), CPC, CrPC, and High Court citation formats.",
    route: "/products/nyaya-draft/",
    features: [
      "BNS / BNSS / BSS statutory translation & mapping",
      "Format-accurate bail applications, writ petitions & affidavits",
      "Vernacular legal speech-to-text dictation",
      "Private air-gapped case file intelligence",
    ],
    locationNote: "Active pilots with District & High Court advocates in North India",
  },
  {
    id: "aivi-careos",
    name: "AIVI CareOS",
    badge: "PILOTING IN KANPUR & UP",
    headline: "Lightweight ABDM-Compliant Hospital & Clinical Operating System",
    description:
      "Next-generation digital health suite built specifically for Tier-2/3 Indian nursing homes and polyclinics. Bridges electronic health records (EHR), ABDM M1/M2/M3 compliance, and doctor voice prescription workflows.",
    route: "/products/aivi-careos/",
    features: [
      "Instant ABHA card generation & digital health locker sync",
      "Vernacular doctor voice prescription to structured Rx",
      "OPD smart queue & WhatsApp appointment bridge",
      "Low-bandwidth offline-first clinic architecture",
    ],
    locationNote: "Clinical trials across healthcare facilities in Kanpur, Gorakhpur, and UP",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajeshwar Verma",
    role: "Principal Security Architect",
    company: "FinScale Labs",
    initials: "RV",
    product: "Hack My Website",
    quote:
      "Hack My Website's AI Launch Score caught two missing security headers and an unauthenticated staging API endpoint right before our client audit. The 1-click Cursor fix prompt solved in 15 minutes what usually takes half a day.",
  },
  {
    name: "Priyanshu Sharma",
    role: "Head of Organic Growth",
    company: "HyperCart Technologies",
    initials: "PS",
    product: "RankMind AI",
    quote:
      "RankMind gave our marketing team the first clear, quantitative picture of how Perplexity and ChatGPT recommend us vs competitors. Our AI Search Share-of-Voice jumped 42% after implementing its GEO citation roadmap.",
  },
  {
    name: "Dr. Ananya Sengupta",
    role: "Head of Training & Placements",
    company: "Regional Engineering Institute",
    initials: "AS",
    product: "AIVI Campus OS",
    quote:
      "The Vernacular Voice AI mock interview module transformed confidence levels for our Tier-2 students who struggled with corporate English. Batch interview clearance rate rose significantly within the first semester.",
  },
];

export const WHY_AIVI_ITEMS: WhyAiviItem[] = [
  {
    icon: "Rocket",
    title: "Product-First Engineering",
    description:
      "We do not build slide decks or speculative prototypes. Every AIVI platform is deployed, stress-tested in live environments, and proven before it is promised.",
  },
  {
    icon: "Globe",
    title: "India-Specific Workflows",
    description:
      "From Indic vernacular speech models (Sarvam AI) to ABDM health protocols and BNS legal frameworks, our software is architected natively for Bharat.",
  },
  {
    icon: "ShieldCheck",
    title: "Trust Infrastructure",
    description:
      "DPIIT-recognized governance (DIPP162791), enterprise data privacy guarantees, zero-training-on-user-data policies, and sovereign infrastructure compliance.",
  },
  {
    icon: "Cpu",
    title: "Commercial Readiness",
    description:
      "Production-grade Python FastAPI, asynchronous Celery workers, PostgreSQL, and seamless Razorpay payment rails built to scale from day one.",
  },
];

export const ARCHIVE_PRODUCTS: ArchiveProduct[] = [
  {
    name: "DocuGen AI",
    badge: "Free Utility",
    description: "Rapid multilingual document generation, OCR extraction, and legal template generator.",
    type: "Public Tool",
  },
  {
    name: "AIVI DMS",
    badge: "Enterprise Archive",
    description: "Role-based document management repository with audit logs and version control.",
    type: "Internal / Dedicated",
  },
  {
    name: "Pulse CRM",
    badge: "MSME Archive",
    description: "Lightweight conversational CRM for regional distributors and service businesses.",
    type: "Specialized Suite",
  },
  {
    name: "NoticeKavach",
    badge: "Compliance Suite",
    description: "Automated GST and statutory legal notice categorization and response drafting engine.",
    type: "Compliance Archive",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is AIVI Intelligence Private Limited?",
    answer:
      "AIVI Intelligence Private Limited is a DPIIT-recognized (DIPP162791) technology company headquartered in Gorakhpur, Uttar Pradesh. We engineer purpose-built, production-ready AI platforms spanning Cybersecurity (Hack My Website), AI Search Visibility (RankMind AI), Career Tech (Campus & Career OS), Legal Intelligence (NYAYA-DRAFT), and Healthcare (AIVI CareOS).",
  },
  {
    question: "Are the flagship platforms live and accessible right now?",
    answer:
      "Yes. Hack My Website (hackmywebsite.io), AIVI Campus & Career OS (aivilabs.com & campus.aivilabs.com), and RankMind AI (aivisibilityinsights.com) are live in production. You can launch them immediately using their direct links or test live audits on their respective portals.",
  },
  {
    question: "How does Hack My Website generate instant AI fix prompts?",
    answer:
      "After executing 200+ automated DAST, SAST, and CVE checks via OWASP ZAP, Nuclei, and Semgrep, our engine identifies exact vulnerable code paths and generates copy-paste ready remediation instructions formatted specifically for AI coding assistants like Cursor, Claude Code, and Windsurf.",
  },
  {
    question: "How can educational institutions or universities pilot Campus OS?",
    answer:
      "University placement cells and colleges can request a Founder Demo directly through our contact form or by clicking 'Book a Founder Demo'. We provide dedicated institutional onboarding, student cohort analytics, and custom vernacular interview modules.",
  },
  {
    question: "What is Generative Engine Optimization (GEO) in RankMind AI?",
    answer:
      "GEO is the practice of optimizing digital authority and brand citations so that generative AI engines (such as ChatGPT, Perplexity, Claude, and Google AI Overviews) accurately cite and recommend your business when prospective customers ask conversational queries.",
  },
  {
    question: "What are the legal compliance credentials of AIVI Intelligence?",
    answer:
      "AIVI Intelligence Private Limited is recognized by the Department for Promotion of Industry and Internal Trade (DPIIT - DIPP162791), registered under UDYAM & MCA, is an active NVIDIA Inception member, and operates with full data sovereignty within India.",
  },
];

export const COMPANY_DETAILS = {
  name: "AIVI Intelligence Private Limited",
  brandName: "AIVI Intelligence",
  tagline: "Built for Bharat. Proven Before It's Promised.",
  email: "contact@aivilabs.com",
  founderEmail: "rishi@aivilabs.com",
  phone: "+91 94508 81223",
  whatsappNumber: "+919450881223",
  address: "Medical College Road, Basharatpur, Gorakhpur, Uttar Pradesh 273004, India",
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  dpiitNumber: "DIPP162791",
  cin: "U72900UP2024PTC198421",
  udyam: "UDYAM-UP-30-0089123",
  socials: {
    linkedin: "https://www.linkedin.com/company/aivi-intelligence",
    twitter: "https://x.com/aivilabs",
    instagram: "https://instagram.com/aivilabs",
    github: "https://github.com/aivi-labs",
  },
};
