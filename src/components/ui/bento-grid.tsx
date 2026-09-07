import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  visual: ReactNode;
  Icon?: React.ComponentType<{ className?: string }>;
  description: string;
  href?: string;
  cta?: string;
  badge?: string;
  badgeColor?: string;
  meta?: string;
  onCtaClick?: () => void;
  layout?: "stacked" | "split";
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  visual,
  Icon,
  description,
  href,
  cta = "Read Research",
  badge,
  badgeColor = "bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30",
  meta,
  onCtaClick,
  layout = "stacked",
  ...props
}: BentoCardProps) => {
  if (layout === "split") {
    return (
      <div
        key={name}
        className={cn(
          "group relative flex flex-col lg:flex-row items-center justify-between overflow-hidden rounded-[28px] border transition-all duration-300 p-6 sm:p-8 gap-6 sm:gap-8",
          "bg-[#0E121B] border-white/10 hover:border-[#C8102E]/40 hover:shadow-2xl hover:shadow-red-950/20",
          "shadow-[inset_0_1px_rgba(255,255,255,0.03),0_12px_32px_rgba(0,0,0,0.35)]",
          className,
        )}
        {...props}
      >
        {/* Left Typography Area */}
        <div className="flex-1 space-y-4 text-left w-full">
          <div className="flex items-center gap-2 flex-wrap">
            {badge && (
              <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-semibold", badgeColor)}>
                {badge}
              </span>
            )}
            {meta && (
              <span className="text-[11px] font-mono text-neutral-400">
                {meta}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="font-jakarta text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-rose-100 transition-colors">
              {name}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-lg">
              {description}
            </p>
          </div>

          <div className="pt-2">
            {onCtaClick ? (
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white font-sans text-xs font-bold transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <span>{cta}</span>
                <ArrowRight className="size-3.5" />
              </button>
            ) : (
              <a
                href={href || "#"}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E02444] hover:from-[#B00D27] hover:to-[#C8102E] text-white font-sans text-xs font-bold transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <span>{cta}</span>
                <ArrowRight className="size-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Right Clean Visual Stage */}
        <div className="w-full lg:w-[48%] rounded-2xl bg-[#06080F] border border-white/10 p-5 overflow-hidden relative shadow-inner">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8102E]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">{visual}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      key={name}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-[28px] border transition-all duration-300 p-6 sm:p-7 space-y-6 text-left",
        "bg-[#0E121B] border-white/10 hover:border-[#C8102E]/40 hover:shadow-2xl hover:shadow-red-950/20",
        "shadow-[inset_0_1px_rgba(255,255,255,0.03),0_12px_32px_rgba(0,0,0,0.35)]",
        className,
      )}
      {...props}
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2">
        {badge && (
          <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-semibold", badgeColor)}>
            {badge}
          </span>
        )}
        {meta && (
          <span className="text-[11px] font-mono text-neutral-400">
            {meta}
          </span>
        )}
      </div>

      {/* Clean Dedicated Visual Stage (No Text Overlapping) */}
      <div className="w-full rounded-2xl bg-[#06080F] border border-white/10 p-4 min-h-[160px] flex flex-col justify-center overflow-hidden relative shadow-inner">
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#C8102E]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10">{visual}</div>
      </div>

      {/* Bottom Typography & Action Area */}
      <div className="space-y-4 pt-1">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            {Icon && (
              <div className="size-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Icon className="size-3.5 text-rose-300" />
              </div>
            )}
            <h3 className="font-jakarta text-lg font-bold tracking-tight text-white group-hover:text-rose-100 transition-colors line-clamp-2">
              {name}
            </h3>
          </div>
          <p className="font-sans text-xs text-neutral-400 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
          {onCtaClick ? (
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#C8102E] group-hover:text-white transition-colors cursor-pointer"
            >
              <span>{cta}</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 text-[#C8102E]" />
            </button>
          ) : (
            <a
              href={href || "#"}
              className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#C8102E] group-hover:text-white transition-colors cursor-pointer"
            >
              <span>{cta}</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 text-[#C8102E]" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export { BentoCard, BentoGrid };
