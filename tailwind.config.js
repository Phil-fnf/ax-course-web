/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        'bg-card': '#1A1A1A',
        lime: '#C8E632',
        'lime-dark': '#A8C220',
        'text-secondary': '#999999',
      },
      fontFamily: {
        pretendard: ['Pretendard Variable', 'Pretendard', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
