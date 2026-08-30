"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
  company?: string;
  metric?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={cn("overflow-hidden", props.className)}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 12,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role, company, metric }, i) => (
              <div
                className="p-7 sm:p-8 rounded-3xl bg-[#0C0C0C] border border-white/10 shadow-xl max-w-sm w-full space-y-4 hover:border-white/20 transition-all text-left"
                key={i}
              >
                {metric && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-semibold text-white">
                    <span>{metric}</span>
                  </div>
                )}
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="size-10 rounded-full border border-white/20 object-cover bg-neutral-800 shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <div className="font-sans text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                      {name}
                    </div>
                    <div className="font-sans text-[11px] text-neutral-400 truncate">
                      {role}{company ? ` • ${company}` : ""}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
