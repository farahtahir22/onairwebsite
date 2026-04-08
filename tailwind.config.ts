import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom brand colors from logo
        brand: {
          black: "rgb(10, 10, 10)",
          orange: "rgb(212, 53, 40)",
          blue: "rgb(8, 21, 49)",
        },
        primary: {
          50: "rgba(232, 73, 60, 0.1)",
          100: "rgba(232, 73, 60, 0.2)",
          200: "rgba(232, 73, 60, 0.3)",
          300: "rgba(232, 73, 60, 0.4)",
          400: "rgba(232, 73, 60, 0.6)",
          500: "rgb(232, 73, 60)", // Brighter orange
          600: "rgba(232, 73, 60, 0.8)",
          700: "rgba(212, 53, 40, 0.9)",
          800: "rgba(212, 53, 40, 0.95)",
          900: "rgb(212, 53, 40)",
        },
        purple: {
          500: "rgb(139, 92, 246)", // Purple for gradients
          600: "rgba(139, 92, 246, 0.8)",
        },
        secondary: {
          50: "rgba(255, 255, 255, 0.05)",
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.2)",
          300: "rgba(255, 255, 255, 0.3)",
          400: "rgba(255, 255, 255, 0.4)",
          500: "rgba(255, 255, 255, 0.5)",
          600: "rgba(255, 255, 255, 0.6)",
          700: "rgba(255, 255, 255, 0.7)",
          800: "rgba(255, 255, 255, 0.8)",
          900: "rgba(255, 255, 255, 0.9)",
        },
        dark: {
          50: "rgb(20, 20, 20)",
          100: "rgb(30, 30, 30)",
          200: "rgb(40, 40, 40)",
          300: "rgb(50, 50, 50)",
          400: "rgb(60, 60, 60)",
          500: "rgb(70, 70, 70)",
          600: "rgb(80, 80, 80)",
          700: "rgb(90, 90, 90)",
          800: "rgb(100, 100, 100)",
          900: "rgb(10, 10, 10)",
        },
        accent: {
          500: "rgb(8, 21, 49)",
          600: "rgba(8, 21, 49, 0.8)",
          700: "rgba(8, 21, 49, 0.9)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "gradient-conic(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-orange": "linear-gradient(135deg, rgba(212, 53, 40, 0.1) 0%, rgba(212, 53, 40, 0.05) 100%)",
        "gradient-dark": "linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(8, 21, 49) 100%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        geomanist: ["Geomanist", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
