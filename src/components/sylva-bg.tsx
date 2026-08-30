"use client";

import React, { useState, useEffect, useRef } from "react";

export function SylvaBg({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleIframeLoad = () => {
    try {
      const doc = iframeRef.current?.contentDocument;
      if (!doc) return;

      // Inject custom presentation stylesheet into iframe to isolate the 3D living scene
      const style = doc.createElement("style");
      style.textContent = `
        html, body {
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
          background: #4a4d44 !important;
        }
        .hero {
          height: 100% !important;
          min-height: 0 !important;
        }
        /* Hide all marketing/text overlays inside iframe so our hero content shines on top */
        .dock-wrap,
        .guides,
        .ghost,
        .card,
        .knob-float,
        .headline,
        .lede,
        .pill-clip,
        .play-wrap,
        .stat,
        .scroll {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        #scene {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `;
      doc.head.appendChild(style);

      // Trigger resize inside iframe so Three.js renders to full viewport
      iframeRef.current?.contentWindow?.dispatchEvent(new Event("resize"));
    } catch (e) {
      console.warn("Sylva background stylesheet injection:", e);
    }
  };

  if (!mounted) {
    return <div className="absolute inset-0 size-full bg-[#4a4d44]" />;
  }

  return (
    <div className={`absolute inset-0 size-full overflow-hidden select-none pointer-events-auto -z-0 ${className}`}>
      <iframe
        ref={iframeRef}
        src="/landing-pages/inner-green-3d.html"
        title="Sylva Living World Background"
        loading="eager"
        sandbox="allow-scripts allow-same-origin"
        onLoad={handleIframeLoad}
        className="absolute inset-0 size-full border-0 bg-[#4a4d44]"
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

export default SylvaBg;
