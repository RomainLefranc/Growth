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
        primary: "var(--primary-color)",
        light: "var(--light-color)",
        dark: "var(--dark-color)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      gridTemplateColumns: {
        footer: "3fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
export default config;
