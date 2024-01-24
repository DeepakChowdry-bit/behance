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
      height: {
        '95': '95%',
      },
      width: {
        '88': '88%',
        '95': '95%',
        '98': '98%',
        '75': '300px',
        '100': '45%',
        '101': '60%',
      },
      boxShadow: {
        '3xl': '0px 4px 3px 1px rgba(0, 0, 0, 0.2)',
      },
      fontSize: {
        '25': '26px'
      }
    },
  },
  plugins: [],
};
export default config;
