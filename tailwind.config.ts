import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("daisyui"),

  ],
  daisyui: {
    themes: ["light", "dark", "forest", "corporate", {
      custom: {
        // "primary": "rgb(20, 83,137)",
        // "secondary": "#7dd3fc",
        // "accent": "#6ee7b7",
        // "neutral": "#ffffff",
        // "base-100": "#fef3c7",
        // "info": "#3498db",
        // "success": "#07bc0c",
        // "warning": "#f1c40f",
        // "error": "#e74c3c",
      }
    }]
  }
};
export default config;
