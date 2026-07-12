import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bcpl: {
          surface: '#0F172A',
          surface2: '#111827',
          card: '#111827',
          text: '#F8FAFC',
          muted: '#94A3B8',
          primary: '#6D28D9',
          primaryLight: '#8B5CF6',
          accent: '#F59E0B',
          success: '#22C55E',
          info: '#60A5FA',
          border: '#1E293B',
        },
      },
      boxShadow: {
        premium: '0 20px 60px rgba(15, 23, 42, 0.35)',
        card: '0 10px 30px rgba(15, 23, 42, 0.22)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
