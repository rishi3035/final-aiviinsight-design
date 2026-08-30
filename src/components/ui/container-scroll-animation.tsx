"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Display tilts smoothly from angled back to upright on scroll
  const macRotate = useTransform(scrollYProgress, [0, 0.45], [18, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.05, 0.45], [0.3, 1]);
  const macScale = useTransform(
    scrollYProgress,
    [0, 0.45],
    isMobile ? [0.88, 1] : [0.94, 1]
  );
  const titleTranslate = useTransform(scrollYProgress, [0, 0.45], [0, -25]);

  return (
    <div
      className="min-h-[52rem] md:min-h-[66rem] flex items-center justify-center relative p-2 md:p-8"
      ref={containerRef}
    >
      <div
        className="py-6 md:py-12 w-full relative"
        style={{ perspective: "1400px" }}
      >
        {/* Title header */}
        <motion.div
          style={{ translateY: titleTranslate }}
          className="max-w-5xl mx-auto text-center mb-8 sm:mb-12"
        >
          {titleComponent}
        </motion.div>

        {/* Mac Desktop hardware enclosure */}
        <motion.div
          style={{
            rotateX: macRotate,
            scale: macScale,
            transformOrigin: "bottom center",
            transformStyle: "preserve-3d",
          }}
          className="max-w-6xl mx-auto w-full relative select-none"
        >
          {/* ── Display Housing (Bezel, Screen, Chin) ── */}
          <div className="relative w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border-[10px] sm:border-[14px] md:border-[16px] border-[#eeeeef] ring-1 ring-neutral-300 bg-[#0B0E14] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.2)]">
            
            {/* Top Center Camera */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center size-2.5 sm:size-3 rounded-full bg-[#414042] z-30 shadow-inner">
              <span className="size-1 sm:size-1.5 rounded-full bg-[#262262]" />
            </div>

            {/* Inner Active Screen Area (houses children) */}
            <div className="w-full overflow-hidden bg-[#0B0E14] text-white">
              <motion.div
                style={{ opacity: contentOpacity }}
                className="w-full h-full"
              >
                {children}
              </motion.div>
            </div>

            {/* Bottom Metallic Chin Bar */}
            <div className="h-8 sm:h-12 md:h-14 w-full bg-[#d9d9db] border-t border-[#c7c8cb] flex items-center justify-center relative shadow-inner">
              {/* Subtle Apple Metallic Reflection Accent */}
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#c0c1c4] opacity-40 blur-[0.5px]" />
            </div>
          </div>

          {/* ── Desktop Stand Neck & Foot Base ── */}
          <div className="relative flex flex-col items-center -mt-0.5 pointer-events-none">
            {/* Stand Neck */}
            <div className="w-28 sm:w-36 md:w-44 h-14 sm:h-18 md:h-22 bg-gradient-to-b from-[#a7a9ac] via-[#d1d3d4] to-[#e6e7e8] shadow-inner border-x border-[#c2c4c7]" />
            
            {/* Stand Foot Base */}
            <div className="relative w-36 sm:w-48 md:w-56 h-2.5 sm:h-3 bg-[#dedfe1] rounded-b-lg border-t border-[#c5c6c9] shadow-[0_12px_24px_rgba(0,0,0,0.25)] flex items-center justify-between px-3">
              {/* Left Rubber Foot Pad */}
              <div className="w-3.5 sm:w-5 h-0.5 bg-[#dedfe2] rounded-xs" />
              {/* Right Rubber Foot Pad */}
              <div className="w-3.5 sm:w-5 h-0.5 bg-[#dedfe2] rounded-xs" />
            </div>

            {/* Desk Shadow */}
            <div className="w-56 sm:w-72 md:w-96 h-3 bg-black/20 rounded-full blur-md -mt-1" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContainerScroll;
