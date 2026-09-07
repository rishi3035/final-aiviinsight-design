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

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.98] : [1.02, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.45], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.45], [0, -30]);

  return (
    <div
      className="min-h-[50rem] md:min-h-[64rem] flex items-center justify-center relative p-2 md:p-12"
      ref={containerRef}
    >
      <div
        className="py-8 md:py-16 w-full relative"
        style={{
          perspective: "1200px",
        }}
      >
        {/* Title Header */}
        <motion.div
          style={{
            translateY: translate,
          }}
          className="max-w-5xl mx-auto text-center mb-8 sm:mb-12"
        >
          {titleComponent}
        </motion.div>

        {/* iPad / Tablet Hardware Enclosure */}
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            transformStyle: "preserve-3d",
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
          }}
          className="max-w-5xl -mt-6 sm:-mt-10 mx-auto w-full border-[6px] sm:border-[8px] md:border-[10px] border-[#3F3F46] p-1.5 sm:p-3 md:p-4 bg-[#18181B] rounded-[28px] sm:rounded-[36px] md:rounded-[40px] shadow-2xl relative select-none ring-1 ring-white/10"
        >
          {/* Top Camera Dot on Bezel */}
          <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 size-2 sm:size-2.5 rounded-full bg-[#27272A] border border-white/10 flex items-center justify-center z-20">
            <span className="size-1 rounded-full bg-[#18181B]" />
          </div>

          {/* Inner iPad Active Screen */}
          <div className="h-full w-full overflow-hidden rounded-[20px] sm:rounded-[26px] md:rounded-[28px] bg-[#131314] shadow-inner border border-white/5">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContainerScroll;
