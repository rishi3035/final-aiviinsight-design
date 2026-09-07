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
  Icon: React.ComponentType<{ className?: string }>;
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
        "grid w-full auto-rows-[22rem] sm:auto-rows-[23rem] grid-cols-1 md:grid-cols-3 gap-5",
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
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl",
      // Obsidian glass styling
      "bg-[#0E121B] border border-white/10 hover:border-white/20 transform-gpu shadow-2xl transition-all duration-300",
      "shadow-[inset_0_1px_rgba(255,255,255,0.03),0_12px_32px_rgba(0,0,0,0.35)]",
      className,
    )}
    {...props}
  >
    {/* Dynamic Background Visual Area */}
    <div className="absolute inset-0 z-0 overflow-hidden">{background}</div>

    {/* Subtle gradient scrim to protect typography */}
    <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0E121B] via-[#0E121B]/80 to-transparent pointer-events-none" />

    {/* Top Badges & Meta Info */}
    <div className="relative z-10 p-6 sm:p-7 flex items-center justify-between gap-2 pointer-events-none">
      {badge && (
        <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-semibold pointer-events-auto", badgeColor)}>
          {badge}
        </span>
      )}
      {meta && (
        <span className="text-[11px] font-mono text-neutral-400">
          {meta}
        </span>
      )}
    </div>

    {/* Content Area with MagicUI Signature Hover Animation */}
    <div className="pointer-events-none z-10 p-6 sm:p-7 flex flex-col justify-end">
      <div className="flex transform-gpu flex-col gap-1.5 transition-all duration-300 lg:group-hover:-translate-y-10">
        <div className="size-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:border-[#C8102E]/50 group-hover:bg-[#C8102E]/20 mb-1">
          <Icon className="size-5.5 text-rose-300" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold font-jakarta text-white tracking-tight group-hover:text-rose-100 transition-colors">
          {name}
        </h3>
        <p className="max-w-xl text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Mobile CTA */}
      <div
        className={cn(
          "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center pt-3 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden",
        )}
      >
        {onCtaClick ? (
          <Button
            variant="link"
            size="sm"
            onClick={onCtaClick}
            className="pointer-events-auto p-0 text-[#C8102E] font-mono text-xs font-bold hover:text-white flex items-center gap-1 cursor-pointer"
          >
            <span>{cta}</span>
            <ArrowRight className="ms-1 size-3.5" />
          </Button>
        ) : (
          <Button
            variant="link"
            asChild
            size="sm"
            className="pointer-events-auto p-0 text-[#C8102E] font-mono text-xs font-bold hover:text-white flex items-center gap-1 cursor-pointer"
          >
            <a href={href || "#"}>
              {cta}
              <ArrowRight className="ms-1 size-3.5" />
            </a>
          </Button>
        )}
      </div>
    </div>

    {/* Desktop Floating CTA: Slides up smoothly on hover */}
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-6 sm:p-7 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex z-20",
      )}
    >
      {onCtaClick ? (
        <Button
          variant="link"
          size="sm"
          onClick={onCtaClick}
          className="pointer-events-auto p-0 text-[#C8102E] font-mono text-xs font-bold hover:text-white flex items-center gap-1 cursor-pointer"
        >
          <span>{cta}</span>
          <ArrowRight className="ms-1 size-3.5 transition-transform group-hover:translate-x-1" />
        </Button>
      ) : (
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0 text-[#C8102E] font-mono text-xs font-bold hover:text-white flex items-center gap-1 cursor-pointer"
        >
          <a href={href || "#"}>
            {cta}
            <ArrowRight className="ms-1 size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      )}
    </div>

    {/* Ambient Glow Scrim */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#C8102E]/[0.04]" />
  </div>
);

export { BentoCard, BentoGrid };
