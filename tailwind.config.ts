import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0C6B6E",
          dark: "#094F52",
          light: "#4C9497",
        },
        offwhite: "#FAF7F2",
        navy: "#14181F",
        accent: "#8A6240",
      },
      fontFamily: {
        heading: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Palatino",
          "Georgia",
          "Cambria",
          "serif",
        ],
        body: [
          "Source Sans 3",
          "Source Sans Pro",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "grad-teal":
          "linear-gradient(135deg, rgba(12,107,110,0.08) 0%, rgba(76,148,151,0.03) 45%, rgba(250,247,242,0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
