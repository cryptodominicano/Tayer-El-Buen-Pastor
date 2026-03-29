import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        iron: {
          DEFAULT: '#1A1A1A',
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#B0B0B0',
          300: '#808080',
          400: '#4A4A4A',
          500: '#1A1A1A',
          600: '#141414',
          700: '#0E0E0E',
          800: '#080808',
          900: '#030303',
        },
        gold: {
          DEFAULT: '#C89B2A',
          50: '#FCF7EA',
          100: '#F5EACC',
          200: '#EDDA99',
          300: '#DECA66',
          400: '#C89B2A',
          500: '#B08722',
          600: '#8A6A1B',
          700: '#644D14',
          800: '#3E300D',
          900: '#181306',
        },
        charcoal: '#2C2C2C',
        offwhite: '#FAFAFA',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'whatsapp-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '70%': { boxShadow: '0 0 0 16px rgba(37, 211, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
      },
      animation: {
        'whatsapp-pulse': 'whatsapp-pulse 1s ease-out 2',
      },
    },
  },
  plugins: [],
};
export default config;
