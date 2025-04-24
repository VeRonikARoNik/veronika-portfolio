/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        burgundy: '#2b1a17',
        deepBurgundy: '#431a1a',
        gold: '#D4AF37',
        cream: '#E5C07B',
        velvetBlack: '#0A0A0A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInDelay: 'fadeIn 0.5s ease-in-out 0.2s forwards',
        fadeInDelay2: 'fadeIn 0.5s ease-in-out 0.4s forwards',
        fadeInDelay3: 'fadeIn 0.5s ease-in-out 0.6s forwards',
        fadeInRight: 'fadeInRight 0.8s ease-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(2rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
