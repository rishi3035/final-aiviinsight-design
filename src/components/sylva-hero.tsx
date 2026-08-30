"use client";

import React, { useState, useEffect } from "react";

export interface SylvaHeroSectionProps {
  className?: string;
}

export function SylvaHeroSection({
  className = "",
}: SylvaHeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[880px] bg-[#4a4d44] flex items-center justify-center text-white/50 font-sans animate-pulse">
        Loading Sylva Living World...
      </div>
    );
  }

  return (
    <div className={`relative w-full h-[880px] overflow-hidden rounded-3xl shadow-2xl ${className}`}>
      <iframe
        src="/landing-pages/inner-green-3d.html"
        title="Sylva Living World"
        loading="eager"
        sandbox="allow-scripts allow-same-origin"
        className="w-full h-full border-0"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          border: 0,
        }}
      />
    </div>
  );
}

export default SylvaHeroSection;
