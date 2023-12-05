import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        jetstream: {
          50: "#F9FBFB",
          100: "#F3F7F6",
          200: "#E7EEEE",
          300: "#DBE6E5",
          400: "#CFDEDC",
          500: "#C1D4D2",
          600: "#93B4B0",
          700: "#64918C",
          800: "#43605D",
          900: "#21302F",
          950: "#111817",
        },
        thistle: {
          50: "#FBF9FB",
          100: "#F7F3F7",
          200: "#EEE7EE",
          300: "#E6DBE6",
          400: "#DECFDE",
          500: "#D4C1D4",
          600: "#B493B4",
          700: "#916491",
          800: "#604360",
          900: "#302130",
          950: "#181118",
        },
        graystel: {
          50: "#FBFBF9",
          100: "#F7F6F3",
          200: "#EEEEE7",
          300: "#E6E5DB",
          400: "#DEDCCF",
          500: "#D4D2C1",
          600: "#B4B093",
          700: "#918C64",
          800: "#605D43",
          900: "#302F21",
          950: "#181711",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
