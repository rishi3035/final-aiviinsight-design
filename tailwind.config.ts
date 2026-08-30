import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",
        surface: "#FFFFFF",
        accent: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316", // AIVI Orange Accent
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
        neutral: {
          50: "#FDFCFB",
          100: "#F7F6F4",
          200: "#EFECE6",
          300: "#E2DDD5",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
          950: "#0C0A09",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Open Sans", "system-ui", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "Sora", "system-ui", "sans-serif"],
        sora: ["var(--font-sora)", "Sora", "system-ui", "sans-serif"],
        raleway: ["var(--font-raleway)", "Raleway", "system-ui", "sans-serif"],
        openSans: ["var(--font-open-sans)", "Open Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",     // 16px
        "3xl": "1.5rem",   // 24px
        "4xl": "2rem",     // 32px
      },
      boxShadow: {
        "subtle": "0 2px 10px rgba(0, 0, 0, 0.02), 0 1px 3px rgba(0, 0, 0, 0.04)",
        "card": "0 4px 20px -2px rgba(12, 10, 9, 0.04), 0 2px 6px -1px rgba(12, 10, 9, 0.02)",
        "card-hover": "0 12px 36px -4px rgba(12, 10, 9, 0.08), 0 4px 12px -2px rgba(12, 10, 9, 0.04)",
        "pill": "0 2px 8px rgba(249, 115, 22, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
