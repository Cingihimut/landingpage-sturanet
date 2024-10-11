const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,md,mdx}",
    flowbite.content(),
  ],
  theme: {
    colors:{
      color: {
        primary: "#41C9E2",
        typography: "#4178E2",
        secondary: "#5A41E2",
        white: "#ffffff",
        lightGrey: "#d7d9d9",
        sky: "#0ea5e9",
        neutral: "#1d1e1f",
        gray: "#323333",
        green: "#39f21d",
        red: "#f50713",
        yellow: "#f5ed07",
        purple: "#bf07f7",
        red: "#f70c0c"
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
