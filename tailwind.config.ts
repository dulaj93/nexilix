import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { base: '#121417', deep: '#0D0F12' },
        card: '#161A1E',
        border: '#242A31',
        primary: '#FF4D4F',
        primaryDark: '#E04344',
        blue: '#2F81F7',
        success: '#17C964',
        warn: '#F5A524',
        text: { base: '#F7F7F7', muted: '#B6B9BF', dim: '#7A8087' },
      },
      boxShadow: {
        glow: "0 0 24px rgba(255,77,79,0.25)",
      },
      backgroundImage: {
        'grid-faint': "linear-gradient(#242A3111 1px, transparent 1px), linear-gradient(90deg, #242A3111 1px, transparent 1px)",
        'diag-gradient': "linear-gradient(135deg, #E0434422 0%, #2F81F722 100%)",
      }
    },
  },
  plugins: [],
} satisfies Config;
