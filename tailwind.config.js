/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10B981", // Emerald
          glow: "rgba(16, 185, 129, 0.15)",
        },
        secondary: {
          DEFAULT: "#3B82F6", // Electric Blue
          glow: "rgba(59, 130, 246, 0.15)",
        },
        accent: {
          DEFAULT: "#8B5CF6", // Purple
          glow: "rgba(139, 92, 246, 0.15)",
        },
        darkBg: "#030712", // Deep dark background (zinc-950 equivalent)
        darkCard: "#0B0F19", // Dark sleek card bg
        darkBorder: "#1E293B", // Border styling
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Sora", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(16, 185, 129, 0.2)',
        'glow-secondary': '0 0 20px rgba(59, 130, 246, 0.2)',
        'glow-accent': '0 0 20px rgba(139, 92, 246, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'grid-scroll': 'gridScroll 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-12px) scale(1.02)' },
        },
        gridScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        }
      }
    },
  },
  plugins: [],
}
