/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05080b',
          900: '#080d12',
          850: '#0b1218',
          800: '#101922',
          700: '#1a2632',
        },
        accent: {
          DEFAULT: '#34d399',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(52, 211, 153, 0.12)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(52, 211, 153, 0.16), transparent 65%)',
      },
    },
  },
  plugins: [],
}
