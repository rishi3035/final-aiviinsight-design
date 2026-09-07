"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  SiAnthropic,
  SiCloudflare,
  SiDocker,
  SiGithub,
  SiGooglegemini,
  SiMeta,
  SiPerplexity,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

import { cn } from "@/lib/utils";

// Custom High-Precision OpenAI Icon
function OpenAiIcon({ className, "aria-hidden": ariaHidden }: { className?: string; "aria-hidden"?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-4.9954a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1402-2.5164zM2.3424 8.5909a4.466 4.466 0 0 1 2.343-1.9702v5.6725a.7759.7759 0 0 0 .3879.6766l5.8144 3.3543-2.02 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3424 8.5909zm16.5985 3.8696-5.838-3.3732 2.02-1.1635a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4947 4.4947 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4068-.6816zm2.0107-3.0231-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.4079 9.9388V7.6064a.0804.0804 0 0 1 .0332-.0615l4.8824-2.8198a4.4992 4.4992 0 0 1 6.6305 4.0227v.02zm-12.464 4.0085-2.02-1.1682a.0804.0804 0 0 1-.038-.052V6.6439a4.504 4.504 0 0 1 7.371-3.4539l-.142.0805-4.783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369zm1.487-1.4005 2.6074-1.5047 2.6074 1.5047v3.0141l-2.6074 1.5048-2.6074-1.5048z" />
    </svg>
  );
}

export interface ResearchBentoBrand {
  name: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

export interface ResearchBentoGridCopy {
  showcaseTitle: React.ReactNode;
  showcaseDescription: React.ReactNode;
  pricingTitle: React.ReactNode;
  pricingDescription: React.ReactNode;
  pauseTitle: React.ReactNode;
  activeDescription: React.ReactNode;
  pausedDescription: React.ReactNode;
}

export interface ResearchBentoGridProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  monthlyPrice?: number;
  previousPrice?: number;
  currency?: string;
  locale?: string;
  paused?: boolean;
  defaultPaused?: boolean;
  selectedBrand?: number;
  defaultSelectedBrand?: number;
  brands?: readonly ResearchBentoBrand[];
  copy?: Partial<ResearchBentoGridCopy>;
  autoPlay?: boolean;
  brandRotationInterval?: number;
  spotlightInterval?: number;
  userLabel?: string;
  collaboratorLabel?: string;
  onPausedChange?: (paused: boolean) => void;
  onSelectedBrandChange?: (index: number) => void;
}

const spring = { type: "spring", stiffness: 230, damping: 24 } as const;
const LIFTED_TILES = new Set([5, 14, 23, 34, 41, 53, 62, 71, 79, 88, 97, 108, 119, 131, 146, 157, 169, 184, 199, 213, 226, 241]);
const BRIGHT_TILES = new Set([17, 45, 76, 103, 138, 176, 205, 234]);
const INVOICE_BARS = [62, 44, 70, 36, 56];

const DEFAULT_COPY: ResearchBentoGridCopy = {
  showcaseTitle: "Autonomous multi-model intelligence ingestion",
  showcaseDescription: "Continuous neural query evaluations across ChatGPT 4o, Claude 3.7, Perplexity Pro, and Gemini to secure Tier-1 generative citations.",
  pricingTitle: (
    <>
      Deterministic ROI.<br />Sub-second telemetry.
    </>
  ),
  pricingDescription: "Replace unpredictable manual PR spend with automated, 24/7 Generative Engine Optimization and verified citation authority.",
  pauseTitle: (
    <>
      Autonomous monitoring.<br />Control on your terms.
    </>
  ),
  activeDescription: "Real-time AI crawler interception active. Continuous multi-engine citation probing and displacement alerting 24/7.",
  pausedDescription: "Probes paused. Telemetry frozen until you trigger the next automated GEO audit cycle.",
};

function ArrowCursor({
  className,
  label,
  inverted = false,
  delay = 0,
  active,
  targetLeft,
  targetTop,
}: {
  className?: string;
  label: string;
  inverted?: boolean;
  delay?: number;
  active?: boolean;
  targetLeft?: string;
  targetTop?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={cn("absolute z-30 flex flex-col items-start pointer-events-none", className)}
      animate={
        reduceMotion
          ? undefined
          : active !== undefined
            ? active
              ? { x: -3, y: -36, rotate: -1.5 }
              : { x: 0, y: 0, rotate: 0 }
            : targetLeft
              ? { left: targetLeft, top: targetTop, x: 0, y: [0, -3, 0], rotate: [0, 1.5, 0] }
              : { x: 0, y: [0, -3, 0], rotate: [0, 1.5, 0] }
      }
      transition={
        active !== undefined
          ? {
              duration: active ? 0.68 : 0.82,
              ease: active ? [0.16, 1, 0.3, 1] : [0.22, 1, 0.36, 1],
            }
          : targetLeft
            ? {
                left: spring,
                top: spring,
                y: { duration: 4.6, delay, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4.6, delay, repeat: Infinity, ease: "easeInOut" },
              }
            : { duration: 4.6, delay, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <svg width="26" height="30" viewBox="0 0 26 30" fill="none" className="h-auto w-[18px] drop-shadow-md sm:w-[22px] lg:w-[26px]">
        <path
          d="M2.2 2.5 22 15.1l-9.4 2.1-4.1 9.1L2.2 2.5Z"
          className={cn(
            inverted
              ? "fill-zinc-950 stroke-white dark:fill-white dark:stroke-[#080808]"
              : "fill-[#C8102E] stroke-white dark:stroke-white/80",
          )}
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={cn(
          "ml-2.5 -mt-1 px-2.5 py-1 text-[12px] font-semibold tracking-[-0.04em] sm:ml-3 sm:px-3 sm:text-[14px] lg:ml-4 lg:px-4 lg:py-1.5 lg:text-[16px]",
          inverted
            ? "rounded-full bg-[#f2f2f2] text-black shadow-[0_5px_18px_rgba(0,0,0,0.28)]"
            : cn(
                "rounded-[22px] border border-white/60 bg-[#C8102E] text-white",
                active
                  ? "shadow-[0_5px_18px_rgba(200,16,46,0.45),0_0_14px_rgba(200,16,46,0.35)]"
                  : "shadow-[0_5px_18px_rgba(0,0,0,0.25)]",
              ),
        )}
      >
        {label}
      </span>
    </motion.div>
  );
}

export const DEFAULT_BRANDS: readonly ResearchBentoBrand[] = [
  { name: "ChatGPT 4o", icon: OpenAiIcon },
  { name: "Claude 3.7", icon: SiAnthropic },
  { name: "Perplexity Pro", icon: SiPerplexity },
  { name: "Google Gemini", icon: SiGooglegemini },
  { name: "Meta Llama", icon: SiMeta },
];

function BrandMark({ brand }: { brand: ResearchBentoBrand }) {
  const Icon = brand.icon;
  return <Icon className="size-[58%]" aria-hidden />;
}

function Panel({ className, children, ...props }: React.ComponentProps<"section">) {
  const grainId = React.useId().replace(/:/g, "");

  return (
    <section
      {...props}
      className={cn(
        "relative isolate overflow-hidden rounded-[22px] border border-black/10 bg-[#f7f7f5]",
        "shadow-[inset_0_1px_rgba(255,255,255,0.9),0_12px_32px_rgba(24,24,27,0.08)]",
        "dark:border-white/10 dark:bg-[#0E121B] dark:shadow-[inset_0_1px_rgba(255,255,255,0.03),0_12px_32px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.88),transparent_45%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(200,16,46,0.04),transparent_50%)]" />
      {children}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-50 size-full opacity-[0.05] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-soft-light"
      >
        <filter id={grainId} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" seed="11" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.55" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter={`url(#${grainId})`} />
      </svg>
    </section>
  );
}

function FeatureCopy({ title, children, className }: { title: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("absolute inset-x-0 bottom-0 z-20 px-5 pb-5 sm:px-7 sm:pb-7", className)}>
      <h3 className="text-[17px] font-bold leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-[20px] dark:text-[#f1f1f1] font-jakarta">
        {title}
      </h3>
      <p className="mt-2.5 max-w-[360px] text-[12px] leading-[1.4] tracking-[-0.015em] text-zinc-600 sm:mt-3 sm:text-[13px] dark:text-[#999ca3] font-sans">
        {children}
      </p>
    </div>
  );
}

interface DesignsPanelProps {
  brands: readonly ResearchBentoBrand[];
  selectedBrand?: number;
  defaultSelectedBrand: number;
  autoPlay: boolean;
  rotationInterval: number;
  userLabel: string;
  collaboratorLabel: string;
  title: React.ReactNode;
  description: React.ReactNode;
  onSelectedBrandChange?: (index: number) => void;
}

function DesignsPanel({
  brands,
  selectedBrand,
  defaultSelectedBrand,
  autoPlay,
  rotationInterval,
  userLabel,
  collaboratorLabel,
  title,
  description,
  onSelectedBrandChange,
}: DesignsPanelProps) {
  const [internalSelected, setInternalSelected] = React.useState(defaultSelectedBrand);
  const reduceMotion = useReducedMotion();
  const isControlled = selectedBrand !== undefined;
  const selected = Math.min(Math.max(isControlled ? selectedBrand : internalSelected, 0), brands.length - 1);
  const cursorStops = brands.map((_, index) => `${15 + (70 * index) / Math.max(brands.length - 1, 1)}%`);

  const selectBrand = React.useCallback(
    (index: number) => {
      if (!isControlled) setInternalSelected(index);
      onSelectedBrandChange?.(index);
    },
    [isControlled, onSelectedBrandChange],
  );

  React.useEffect(() => {
    if (!autoPlay || reduceMotion || brands.length < 2) return;
    const interval = setInterval(() => {
      const next = (selected + 1) % brands.length;
      selectBrand(next);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [autoPlay, brands.length, reduceMotion, rotationInterval, selectBrand, selected]);

  return (
    <Panel className="min-h-[350px] sm:min-h-[320px] @min-[840px]:col-span-12 @min-[840px]:min-h-[302px] @min-[840px]:row-span-1">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 grid h-[78%] grid-cols-[repeat(28,minmax(0,1fr))] grid-rows-[repeat(9,minmax(0,1fr))] gap-px overflow-hidden"
        style={{ maskImage: "linear-gradient(to bottom,black 0%,black 62%,transparent 100%)" }}
      >
        {Array.from({ length: 252 }, (_, index) => (
          <span
            key={index}
            className={cn(
              "border border-black/[0.035] bg-[#ededeb] dark:border-white/[0.018] dark:bg-[#07090f]",
              LIFTED_TILES.has(index) && "bg-[#e4e4e1] dark:bg-[#121622]",
              BRIGHT_TILES.has(index) && "bg-[#dadad6] dark:bg-[#181f2f]",
            )}
          />
        ))}
      </div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-[8%] z-[1] hidden h-[66%] w-[24%] rounded-full bg-[#C8102E]/[0.08] blur-[48px] dark:block"
        animate={reduceMotion ? undefined : { x: ["-120%", "520%"] }}
        transition={{ duration: 14, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[76%] bg-[radial-gradient(ellipse_at_50%_18%,transparent_12%,rgba(247,247,245,.12)_58%,#f7f7f5_100%)] dark:bg-[radial-gradient(ellipse_at_50%_18%,transparent_12%,rgba(14,18,27,.1)_58%,#0E121B_100%)]"
      />

      <div className="absolute inset-x-4 top-[9%] z-10 mx-auto flex max-w-[760px] items-center gap-2 sm:inset-x-7 sm:top-[12%] sm:gap-3">
        {brands.map((brand, index) => (
          <motion.button
            type="button"
            key={brand.name}
            onClick={() => selectBrand(index)}
            aria-label={`Select ${brand.name}`}
            aria-pressed={selected === index}
            className={cn(
              "relative flex aspect-square min-w-0 flex-1 items-center justify-center overflow-hidden rounded-[12px] border bg-[linear-gradient(145deg,#f2f2f0_0%,#e7e7e4_46%,#dcdcd8_100%)] shadow-[inset_0_1px_rgba(255,255,255,.9),0_12px_24px_rgba(24,24,27,.12)] sm:rounded-[14px] dark:bg-[linear-gradient(145deg,#161b26_0%,#10141f_48%,#0a0d14_100%)] dark:shadow-[inset_0_1px_rgba(255,255,255,.03),0_10px_22px_rgba(0,0,0,.32)] transition-colors cursor-pointer",
              selected === index
                ? "border-[#C8102E]/70 text-[#E02444] shadow-[inset_0_1px_rgba(255,255,255,.8),0_12px_28px_rgba(200,16,46,.18),0_0_22px_rgba(200,16,46,.25)] dark:border-[#C8102E]/80 dark:text-rose-400 dark:shadow-[inset_0_1px_rgba(255,255,255,.05),0_10px_24px_rgba(200,16,46,.3),0_0_20px_rgba(200,16,46,.25)]"
                : "border-black/[0.11] text-zinc-700 hover:text-zinc-950 dark:border-white/[0.08] dark:text-[#a0a5b0] dark:hover:text-white",
            )}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: selected === index ? -3 : [0, index % 2 ? 1.5 : -1.5, 0],
                    scale: selected === index ? 1.02 : 1,
                  }
            }
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ y: { duration: 5 + index * 0.3, delay: index * 0.2, repeat: Infinity, ease: "easeInOut" }, scale: spring }}
          >
            {selected === index && (
              <motion.span
                aria-hidden
                className="absolute inset-[10%] rounded-full bg-[#C8102E]/25 blur-xl dark:bg-[#C8102E]/35"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.9, 1.08, 0.9] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            <motion.span
              className="relative flex size-full items-center justify-center"
              animate={{ scale: selected === index ? 1.08 : 1 }}
              transition={spring}
            >
              <BrandMark brand={brand} />
            </motion.span>
          </motion.button>
        ))}
      </div>

      <ArrowCursor
        label={userLabel}
        className="left-[35%] top-[40%]"
        targetLeft={cursorStops[selected]}
        targetTop="40%"
        delay={0.2}
      />
      <ArrowCursor label={collaboratorLabel} inverted className="left-[58%] top-[54%] sm:left-[62%] sm:top-[56%]" delay={0.9} />

      <FeatureCopy title={title}>{description}</FeatureCopy>
    </Panel>
  );
}

interface InvoicePanelProps {
  monthlyPrice: number;
  previousPrice: number;
  currency: string;
  locale: string;
  autoPlay: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
}

function InvoicePanel({ monthlyPrice, previousPrice, currency, locale, autoPlay, title, description }: InvoicePanelProps) {
  const reduceMotion = useReducedMotion();
  const [invoiceIndex, setInvoiceIndex] = React.useState(0);
  const formatPrice = React.useMemo(
    () => new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }),
    [currency, locale],
  );
  const invoices = [
    { label: "Legacy PR & Manual Agency", price: previousPrice, previousPrice: null, accent: false },
    { label: "AIVI Autonomous GEO Engine", price: monthlyPrice, previousPrice, accent: true },
  ];

  React.useEffect(() => {
    if (!autoPlay || reduceMotion) return;
    const interval = setInterval(() => {
      setInvoiceIndex((current) => (current + 1) % invoices.length);
    }, 3900);
    return () => clearInterval(interval);
  }, [autoPlay, invoices.length, reduceMotion]);

  const invoice = invoices[invoiceIndex];

  return (
    <Panel className="min-h-[420px] [container-type:inline-size] sm:min-h-[360px] @min-[840px]:col-span-7 @min-[840px]:min-h-[302px] @min-[840px]:row-span-1">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055] dark:opacity-[0.045]"
        style={{ backgroundImage: "radial-gradient(circle,currentColor .65px,transparent .75px)", backgroundSize: "11px 11px" }}
      />
      <div className="absolute inset-x-0 top-0 h-[58%] overflow-hidden sm:inset-y-0 sm:left-auto sm:right-0 sm:h-auto sm:w-[53%]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={invoiceIndex}
            className="absolute left-[21%] top-5 h-[225px] w-[58%] overflow-hidden rounded-[14px] border border-black/[0.16] bg-[linear-gradient(145deg,#f5f5f2_0%,#eaeae6_46%,#dededa_100%)] p-3.5 shadow-[inset_0_1px_rgba(255,255,255,.9),0_18px_42px_rgba(24,24,27,.14),0_3px_8px_rgba(24,24,27,.08)] sm:left-auto sm:right-4 sm:h-[250px] sm:w-[89%] dark:border-[#2b3345] dark:bg-[linear-gradient(145deg,#151a27_0%,#0f131d_48%,#0a0d14_100%)] dark:shadow-[inset_0_1px_rgba(255,255,255,.03),0_16px_36px_rgba(0,0,0,.45),0_3px_8px_rgba(0,0,0,.25)] @min-[520px]:right-7 @min-[520px]:p-5"
            initial={reduceMotion ? false : { y: 270, opacity: 0, rotate: -1.25 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { y: 285, opacity: 0, rotate: 1.1 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between text-zinc-500 dark:text-[#a0a5b2]">
              <span className="text-[11px] font-mono font-medium truncate pr-2">{invoice.label}</span>
              <span className="relative mt-0.5 size-4 rounded-full bg-zinc-500 dark:bg-rose-500/80 shrink-0">
                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-l-full bg-[#e7e7e3] dark:bg-[#07090f]" />
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2 whitespace-nowrap">
              <span
                className={cn(
                  "text-[26px] font-bold tracking-[-0.055em] @min-[520px]:text-[30px] font-jakarta",
                  invoice.accent ? "text-[#C8102E] dark:text-[#FF4D6D]" : "text-zinc-500 dark:text-[#7f8494]",
                )}
              >
                {formatPrice.format(invoice.price)}
              </span>
              {invoice.previousPrice && (
                <span className="text-[13px] text-zinc-500 line-through @min-[520px]:text-[15px] dark:text-[#616675]">
                  {formatPrice.format(invoice.previousPrice)}
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-1.5 w-[45%] rounded-full bg-black/[0.08] dark:bg-white/[0.09]" />
              <div className="h-1.5 w-[30%] rounded-full bg-black/[0.055] dark:bg-white/[0.05]" />
            </div>
            <div className="mt-4 space-y-2.5">
              {INVOICE_BARS.map((width, index) => (
                <div key={index} className="flex items-center justify-between gap-4">
                  <motion.span
                    className={cn(
                      "h-2.5 rounded-[3px]",
                      invoice.accent ? "bg-[#C8102E]/25 dark:bg-[#C8102E]/35" : "bg-black/[0.055] dark:bg-white/[0.045]",
                    )}
                    style={{ width: `${width}%` }}
                    animate={reduceMotion ? undefined : { opacity: [0.35, 0.7, 0.35] }}
                    transition={{ duration: 3.5, delay: index * 0.28, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="h-3 w-[26%] rounded-[4px] bg-black/[0.08] dark:bg-white/[0.08]" />
                </div>
              ))}
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(to_bottom,transparent,rgba(222,222,218,.55)_52%,#dededa_100%)] dark:bg-[linear-gradient(to_bottom,transparent,rgba(10,13,20,.6)_52%,#0a0d14_100%)]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Foreground fog */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] bg-[linear-gradient(to_bottom,rgba(247,247,245,0)_0%,rgba(247,247,245,.12)_24%,rgba(247,247,245,.48)_58%,rgba(247,247,245,.88)_86%,#f7f7f5_100%)] dark:bg-[linear-gradient(to_bottom,rgba(14,18,27,0)_0%,rgba(14,18,27,.12)_24%,rgba(14,18,27,.48)_58%,rgba(14,18,27,.88)_86%,#0E121B_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-8%] -bottom-[24%] z-10 h-[48%] rounded-[50%] bg-[#f7f7f5]/75 blur-[38px] dark:bg-[#0E121B]/80"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-black/[0.04] dark:bg-white/[0.025]" />

      <FeatureCopy className="sm:right-1/2 sm:pr-3" title={title}>
        {description}
      </FeatureCopy>
    </Panel>
  );
}

interface PausePanelProps {
  paused?: boolean;
  defaultPaused: boolean;
  autoPlay: boolean;
  spotlightInterval: number;
  userLabel: string;
  title: React.ReactNode;
  activeDescription: React.ReactNode;
  pausedDescription: React.ReactNode;
  onPausedChange?: (paused: boolean) => void;
}

function PausePanel({
  paused: controlledPaused,
  defaultPaused,
  autoPlay,
  spotlightInterval,
  userLabel,
  title,
  activeDescription,
  pausedDescription,
  onPausedChange,
}: PausePanelProps) {
  const [internalPaused, setInternalPaused] = React.useState(defaultPaused);
  const [demoLit, setDemoLit] = React.useState(true);
  const reduceMotion = useReducedMotion();
  const isControlled = controlledPaused !== undefined;
  const paused = isControlled ? controlledPaused : internalPaused;
  const arrowLit = autoPlay && demoLit && !reduceMotion;

  React.useEffect(() => {
    if (!autoPlay || reduceMotion) return;

    let offTimer: ReturnType<typeof setTimeout> | undefined;
    const illuminate = () => {
      setDemoLit(true);
      offTimer = setTimeout(() => setDemoLit(false), 1500);
    };

    const firstTimer = setTimeout(() => setDemoLit(false), 1500);
    const loopTimer = setInterval(illuminate, spotlightInterval);

    return () => {
      clearTimeout(firstTimer);
      if (offTimer) clearTimeout(offTimer);
      clearInterval(loopTimer);
    };
  }, [autoPlay, reduceMotion, spotlightInterval]);

  const toggle = () => {
    const next = !paused;
    if (!isControlled) setInternalPaused(next);
    onPausedChange?.(next);
  };

  return (
    <Panel className="min-h-[340px] sm:min-h-[320px] @min-[840px]:col-span-5 @min-[840px]:min-h-[302px] @min-[840px]:row-span-1">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply dark:opacity-[0.09] dark:mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%,currentColor 0 .45px,transparent .7px),radial-gradient(circle at 70% 65%,currentColor 0 .45px,transparent .75px)",
          backgroundSize: "4px 4px,5px 5px",
        }}
      />
      <div className="absolute inset-x-0 top-0 flex h-[66%] items-center justify-center">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((ring) => (
          <motion.div
            key={ring}
            aria-hidden
            className="absolute border border-black/[0.07] dark:border-rose-500/[0.06]"
            style={{
              width: 190 + ring * 23,
              height: 100 + ring * 16,
              borderRadius: 23 + ring * 3,
              opacity: Math.max(0.18, 0.72 - ring * 0.045),
            }}
            animate={reduceMotion ? undefined : { scale: [0.995, 1.008, 0.995] }}
            transition={{ duration: 5.2, delay: ring * 0.11, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <motion.button
          type="button"
          onClick={toggle}
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.97 }}
          transition={spring}
          animate={{ scale: arrowLit ? 1.012 : 1 }}
          className={cn(
            "relative z-10 flex h-[76px] min-w-[174px] items-center justify-center overflow-hidden rounded-[20px] border px-8 text-[26px] font-bold tracking-[-0.045em] transition-[border-color,color,box-shadow] duration-500 font-jakarta cursor-pointer",
            arrowLit
              ? "border-[#C8102E] text-white shadow-[0_10px_24px_rgba(200,16,46,.35)] dark:border-[#C8102E] dark:text-white dark:shadow-[0_10px_24px_rgba(200,16,46,.45)]"
              : "border-black/[0.18] bg-gradient-to-br from-white to-[#deded9] text-zinc-950 shadow-[inset_0_1px_rgba(255,255,255,.9),0_12px_38px_rgba(24,24,27,.14)] dark:border-white/[0.14] dark:from-[#181e2b] dark:to-[#0e121b] dark:text-[#f1f1f1] dark:shadow-[inset_0_1px_rgba(255,255,255,.035),0_10px_30px_rgba(0,0,0,.32)]",
          )}
          aria-pressed={paused}
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-[#C8102E] to-[#E02444]"
            animate={{ opacity: arrowLit ? 1 : 0 }}
            transition={{ duration: arrowLit ? 0.64 : 0.76, ease: arrowLit ? [0.16, 1, 0.3, 1] : [0.22, 1, 0.36, 1] }}
          />
          <span className="relative z-10">{paused ? "Resume Probes" : "Pause Probes"}</span>
        </motion.button>
        <ArrowCursor label={userLabel} className="left-[57%] top-[70%]" delay={0.5} active={arrowLit} />
      </div>

      <FeatureCopy title={title}>{paused ? pausedDescription : activeDescription}</FeatureCopy>
    </Panel>
  );
}

export function ResearchBentoGrid({
  monthlyPrice = 1990,
  previousPrice = 32000,
  currency = "USD",
  locale = "en-US",
  paused,
  defaultPaused = false,
  selectedBrand,
  defaultSelectedBrand = 0,
  brands = DEFAULT_BRANDS,
  copy,
  autoPlay = true,
  brandRotationInterval = 2600,
  spotlightInterval = 4400,
  userLabel = "You",
  collaboratorLabel = "AIVI Bot",
  className,
  onPausedChange,
  onSelectedBrandChange,
  ...props
}: ResearchBentoGridProps) {
  const content = { ...DEFAULT_COPY, ...copy };

  if (brands.length === 0) {
    throw new Error("ResearchBentoGrid requires at least one brand.");
  }

  return (
    <div
      {...props}
      className={cn(
        "flex h-full w-full overflow-y-auto bg-transparent p-2 text-zinc-950 [--bento-tile-cutout:#e4e4e1] [container-type:inline-size] sm:p-3",
        "dark:bg-transparent dark:text-white dark:[--bento-tile-cutout:#171717]",
        className,
      )}
    >
      <div className="m-auto grid w-full max-w-[1160px] grid-cols-1 gap-3 sm:gap-4 @min-[840px]:h-[min(100%,660px)] @min-[840px]:grid-cols-12 @min-[840px]:grid-rows-2">
        <DesignsPanel
          brands={brands}
          selectedBrand={selectedBrand}
          defaultSelectedBrand={defaultSelectedBrand}
          autoPlay={autoPlay}
          rotationInterval={brandRotationInterval}
          userLabel={userLabel}
          collaboratorLabel={collaboratorLabel}
          title={content.showcaseTitle}
          description={content.showcaseDescription}
          onSelectedBrandChange={onSelectedBrandChange}
        />
        <InvoicePanel
          monthlyPrice={monthlyPrice}
          previousPrice={previousPrice}
          currency={currency}
          locale={locale}
          autoPlay={autoPlay}
          title={content.pricingTitle}
          description={content.pricingDescription}
        />
        <PausePanel
          paused={paused}
          defaultPaused={defaultPaused}
          autoPlay={autoPlay}
          spotlightInterval={spotlightInterval}
          userLabel={userLabel}
          title={content.pauseTitle}
          activeDescription={content.activeDescription}
          pausedDescription={content.pausedDescription}
          onPausedChange={onPausedChange}
        />
      </div>
    </div>
  );
}

export default ResearchBentoGrid;
