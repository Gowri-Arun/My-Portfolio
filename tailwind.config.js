/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#030611',
        panel: 'rgba(8, 13, 29, 0.72)',
        cyanpop: '#26f4ff',
        violetpop: '#9b5cff',
        limepop: '#b6ff6a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        neon: '0 0 32px rgba(38, 244, 255, 0.24)',
      },
    },
  },
  plugins: [],
};
