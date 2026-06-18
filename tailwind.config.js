/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        awsOrange: {
          DEFAULT: '#FF1F1F',
          glow: '#FF4D4D',
        },
        electricBlue: {
          DEFAULT: '#FF1F1F',
          glow: '#FF4D4D',
        },
        darkBg: {
          DEFAULT: '#050505',
          card: '#080808',
          cardHover: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
