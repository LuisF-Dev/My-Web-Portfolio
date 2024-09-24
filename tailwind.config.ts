
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        bounce:{
          "0%,100%":{transform: "translateX(0)"},
          "50%":{transform:"rotate(15deg)"}
        }
        
      },animation:{
        bounce:"bounce 3s infinite"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        jsYellow: '#F7DF1E', // Yellow js
        jsDark: '#323330',   // Dark background JS
        jsLight: '#ffffff',  // white
        jsGray: '#4d4d4d',   // Gray JS
      },
    },
  },
  plugins: [],
};
export default config;
