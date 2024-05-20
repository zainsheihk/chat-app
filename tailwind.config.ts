import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: "#2575e3",
      "text-color": "#231f20",
    },
    fontFamily: {
      sans: ["var(--font-poppins)", "sans-serif"],
      serif: ["var(--font-poppins)", "sans-serif"],
      body: ["var(--font-poppins)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "chat-bg": "url('/08.jpg')",
      },
    },
  },
  plugins: [],
});
export default config;
