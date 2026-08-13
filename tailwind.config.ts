import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { xl: "1240px", "2xl": "1240px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0D13",
          50: "#F4F5F7",
          100: "#E6E8EC",
          200: "#C7CBD4",
          300: "#9BA1AF",
          400: "#6E7585",
          500: "#4B515F",
          600: "#343945",
          700: "#20242D",
          800: "#141821",
          900: "#0D1017",
          950: "#0A0D13",
        },
        surface: {
          DEFAULT: "#10131B",
          raised: "#161A24",
          border: "#242938",
        },
        signal: {
          DEFAULT: "#FF6A39",
          soft: "#FF8C5F",
          dim: "#7A3A24",
        },
        cyan: {
          DEFAULT: "#7DD3E0",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.2vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 2.8vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "22px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(255,106,57,0.4), 0 0 40px -8px rgba(255,106,57,0.35)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        blink: { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        blink: "blink 1.1s step-start infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
