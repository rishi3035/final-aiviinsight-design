"use client";

import React, { useEffect, useRef } from "react";
import { RIBBON_FIELD_FRAGMENT_SHADER, RIBBON_FIELD_VERTEX_SHADER } from "./ribbonFieldShaders";

export type RibbonFieldBackgroundProps = {
  speed?: number;
  pointerAmount?: number;
  smoothing?: number;
  brightness?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  className?: string;
};

export const RIBBON_FIELD_DEFAULTS = {
  speed: 2.37,
  pointerAmount: 1.30,
  smoothing: 0.095,
  brightness: 1.00,
  opacity: 1.00,
  hue: 105,
  saturation: 1.42,
} as const;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Unable to create Axiom shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? "Axiom shader compilation failed");
  }
  return shader;
}

export function RibbonFieldBackground({ className = "", ...props }: RibbonFieldBackgroundProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const optionsRef = useRef({ ...RIBBON_FIELD_DEFAULTS, ...props });
  optionsRef.current = { ...RIBBON_FIELD_DEFAULTS, ...props };

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
    });
    if (!gl) return undefined;

    let vertex: WebGLShader;
    let fragment: WebGLShader;
    let program: WebGLProgram;
    let buffer: WebGLBuffer;

    try {
      vertex = compile(gl, gl.VERTEX_SHADER, RIBBON_FIELD_VERTEX_SHADER);
      fragment = compile(gl, gl.FRAGMENT_SHADER, RIBBON_FIELD_FRAGMENT_SHADER);
      const prog = gl.createProgram();
      if (!prog) return undefined;
      program = prog;
      gl.attachShader(program, vertex);
      gl.attachShader(program, fragment);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) ?? "Axiom program link failed");
      }
      gl.useProgram(program);

      const buf = gl.createBuffer();
      if (!buf) return undefined;
      buffer = buf;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
      );
      const position = gl.getAttribLocation(program, "position");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    } catch (e) {
      console.warn("WebGL initialization failed in RibbonFieldBackground:", e);
      return undefined;
    }

    const resolution = gl.getUniformLocation(program, "resolution");
    const time = gl.getUniformLocation(program, "time");
    const pointerUniform = gl.getUniformLocation(program, "pointer");

    let mouseX = 0.72;
    let mouseY = 0.42;
    let targetX = 0.72;
    let targetY = 0.42;
    let frame = 0;
    let visible = true;
    const startedAt = performance.now();

    const pointer = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      targetX =
        0.72 +
        ((event.clientX - bounds.left) / Math.max(bounds.width, 1) - 0.72) *
          optionsRef.current.pointerAmount;
      targetY =
        0.42 +
        (1 - (event.clientY - bounds.top) / Math.max(bounds.height, 1) - 0.42) *
          optionsRef.current.pointerAmount;
    };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(bounds.width * ratio));
      canvas.height = Math.max(1, Math.floor(bounds.height * ratio));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolution, canvas.width, canvas.height);
    };

    const render = (now: number) => {
      const options = optionsRef.current;
      mouseX += (targetX - mouseX) * options.smoothing;
      mouseY += (targetY - mouseY) * options.smoothing;
      gl.uniform1f(time, (now - startedAt) * 0.001 * options.speed);
      gl.uniform2f(pointerUniform, mouseX, mouseY);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = visible && !document.hidden ? requestAnimationFrame(render) : 0;
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !frame) frame = requestAnimationFrame(render);
      if (!visible && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });

    resizeObserver.observe(host);
    intersection.observe(host);
    window.addEventListener("pointermove", pointer, { passive: true });
    resize();
    frame = requestAnimationFrame(render);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", pointer);
      if (buffer) gl.deleteBuffer(buffer);
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      if (program) gl.deleteProgram(program);
    };
  }, []);

  const options = optionsRef.current;
  return (
    <div
      ref={hostRef}
      className={`absolute inset-0 size-full overflow-hidden select-none pointer-events-auto -z-0 ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          opacity: options.opacity,
          filter: `hue-rotate(${options.hue}deg) saturate(${options.saturation}) brightness(${options.brightness})`,
        }}
      />
    </div>
  );
}

export default RibbonFieldBackground;
