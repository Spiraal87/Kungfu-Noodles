import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:        "#0d0d0d",
          bgWarm:    "#1a0a0a",
          bgAlt:     "#1a1a1a",
          red:       "#cc2200",
          redHover:  "#e02500",
          gold:      "#c9843a",
          goldLight: "#e8a55a",
          text:      "#f5efe6",
          muted:     "#a89888",
          border:    "#2a2a2a",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-sc)", "Noto Serif SC", "serif"],
        sans:  ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
