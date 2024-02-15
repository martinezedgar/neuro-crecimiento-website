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
      colors: {
        'text': '#101828',
        'green100': '#AFEAE4',
        'primary': '#508FDA',
        'secondary': '#8D99AE',
        'success': '#06D6A0',
        'danger': '#EF476F',
        'warning': '#FFD166',
        'info': '#38A0C2',
        'bg-beige': '#F2F4F7',
        'bg-sky-blue': '#1D2939',
        'bg-blue': '#667085',
        'bg-green': '#98A2B3',
        'dark-green': '#006D77',
        'darkest-green': '#216066',
      },
      fontFamily: {
        sans: ['sans-serif'],
        chivo: ['Chivo', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif']
      },
      fontSize: {
        'body': '14px',
        'body-lg': '16px',
        'header-menu': ['16px', '20px'],
        'top-bar-title': ['14px', '22px'],
      }
    },
  },
  plugins: [],
};
export default config;
