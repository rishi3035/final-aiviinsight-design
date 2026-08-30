"use client";

import * as React from "react";

export type FlipCardProps = {
  cardNumber?: number | string;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
  canFlip?: boolean;
  isFlipped?: boolean;
  defaultFlipped?: boolean;
  onFlipChange?: (cardNumber: number | string, isFlipped: boolean) => void;
  className?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function mapRange(
  value: number,
  minA: number,
  maxA: number,
  minB: number,
  maxB: number
) {
  return minB + ((value - minA) * (maxB - minB)) / (maxA - minA);
}

export function FlipCard({
  cardNumber = 1,
  frontContent,
  backContent,
  canFlip = true,
  isFlipped,
  defaultFlipped = false,
  onFlipChange,
  className,
}: FlipCardProps) {
  const [internalFlipped, setInternalFlipped] = React.useState(defaultFlipped);

  const cardRef = React.useRef<HTMLDivElement>(null);
  const frontRef = React.useRef<HTMLDivElement>(null);
  const backRef = React.useRef<HTMLDivElement>(null);

  const pointerPositionRef = React.useRef<{ x: number; y: number } | null>(null);
  const isPointerInsideRef = React.useRef(false);

  const isControlled = typeof isFlipped === "boolean";
  const flipped = isControlled ? isFlipped : internalFlipped;

  const resetTilt = React.useCallback(() => {
    if (frontRef.current) {
      frontRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }

    if (backRef.current) {
      backRef.current.style.transform = "rotateY(180deg)";
    }
  }, []);

  const applyTilt = React.useCallback(
    (clientX: number, clientY: number, targetFlipped = flipped) => {
      const card = cardRef.current;
      const activeSide = targetFlipped ? backRef.current : frontRef.current;

      if (!card || !activeSide) return;

      const rect = card.getBoundingClientRect();
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;

      const rotateY = mapRange(mouseX, 0, rect.width, -10, 10);
      const rotateX = mapRange(mouseY, 0, rect.height, 10, -10);

      activeSide.style.transform = targetFlipped
        ? `rotateY(180deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    [flipped]
  );

  React.useEffect(() => {
    const pointerPosition = pointerPositionRef.current;

    if (!isPointerInsideRef.current || !pointerPosition) {
      resetTilt();
      return;
    }

    requestAnimationFrame(() => {
      applyTilt(pointerPosition.x, pointerPosition.y, flipped);
    });
  }, [flipped, applyTilt, resetTilt]);

  const updateFlipped = React.useCallback(
    (nextValue: boolean) => {
      if (!isControlled) {
        setInternalFlipped(nextValue);
      }

      onFlipChange?.(cardNumber, nextValue);
    },
    [cardNumber, isControlled, onFlipChange]
  );

  const toggleFlip = React.useCallback(() => {
    if (!canFlip) return;
    updateFlipped(!flipped);
  }, [canFlip, flipped, updateFlipped]);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      pointerPositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      toggleFlip();
    },
    [toggleFlip]
  );

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      pointerPositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      isPointerInsideRef.current = true;

      applyTilt(event.clientX, event.clientY, flipped);
    },
    [applyTilt, flipped]
  );

  const handleMouseEnter = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      pointerPositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      isPointerInsideRef.current = true;

      applyTilt(event.clientX, event.clientY, flipped);
    },
    [applyTilt, flipped]
  );

  const handleMouseLeave = React.useCallback(() => {
    isPointerInsideRef.current = false;
    pointerPositionRef.current = null;
    resetTilt();
  }, [resetTilt]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;

      event.preventDefault();
      toggleFlip();
    },
    [toggleFlip]
  );

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={canFlip ? 0 : -1}
      aria-pressed={flipped}
      aria-disabled={!canFlip}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative h-[340px] sm:h-[350px] w-full cursor-pointer outline-none transition-transform duration-500 ease-in-out [perspective:1200px] select-none",
        !canFlip && "cursor-not-allowed opacity-70",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-2xl transition-transform duration-500 ease-in-out [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* Front Face */}
        <div
          ref={frontRef}
          className="absolute inset-0 flex h-full w-full flex-col justify-between rounded-2xl border border-neutral-800 bg-[#0E121A] text-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-[transform,filter] duration-[250ms] ease-out [backface-visibility:hidden] hover:border-neutral-700"
        >
          {frontContent}
        </div>

        {/* Back Face */}
        <div
          ref={backRef}
          className="absolute inset-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-[#C8102E]/40 bg-[#121722] text-white p-5 shadow-[0_16px_40px_rgba(200,16,46,0.15)] transition-[transform,filter] duration-[250ms] ease-out [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
