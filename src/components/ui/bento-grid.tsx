import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ComponentType<{ className?: string }>;
  description: string;
  href?: string;
  cta?: string;
  badge?: string;
  badgeColor?: string;
  meta?: string;
  onCtaClick?: () => void;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
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
  background,
  Icon,
  description,
  href,
  cta = "Read Research",
  badge,
  badgeColor = "bg-[#C8102E]/20 text-rose-300 border-[#C8102E]/30",
  meta,
  onCtaClick,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300",
      // Dark theme styling
      "bg-[#0E121B] border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-red-950/20",
      "shadow-[inset_0_1px_rgba(255,255,255,0.03),0_12px_32px_rgba(0,0,0,0.35)]",
      className,
    )}
    {...props}
  >
    {/* Dynamic Background Visual Area */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">{background}</div>

    {/* Subtle gradient overlay to ensure text readability */}
    <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0E121B] via-[#0E121B]/80 to-transparent pointer-events-none" />

    {/* Top Badges & Meta Info */}
    <div className="relative z-10 p-6 sm:p-7 flex items-center justify-between gap-2">
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

    {/* Content Area */}
    <div className="relative z-10 p-6 sm:p-7 space-y-3">
      <div className="flex transform-gpu flex-col gap-2 transition-all duration-300 group-hover:-translate-y-2">
        {Icon && (
          <div className="size-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:border-[#C8102E]/50 group-hover:bg-[#C8102E]/15">
            <Icon className="size-5 text-rose-300" />
          </div>
        )}
        <h3 className="font-jakarta text-xl font-bold tracking-tight text-white group-hover:text-rose-100 transition-colors">
          {name}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl line-clamp-3">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="pt-2 flex items-center justify-between border-t border-white/5">
        {onCtaClick ? (
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C8102E] hover:text-white transition-colors cursor-pointer group/btn"
          >
            <span>{cta}</span>
            <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        ) : href ? (
          <a
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C8102E] hover:text-white transition-colors cursor-pointer group/btn"
          >
            <span>{cta}</span>
            <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C8102E]">
            <span>{cta}</span>
            <ArrowRight className="size-3.5" />
          </span>
        )}
      </div>
    </div>

    {/* Ambient Red Glow on hover */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#C8102E]/5 via-transparent to-[#C8102E]/10" />
  </div>
);

export { BentoCard, BentoGrid };
