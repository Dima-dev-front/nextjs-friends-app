import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray100: '#f3f4f6',
        gray200: '#e5e7eb',
        gray300: '#d1d5db',
        gray500: '#6b7280',
        gray700: '#374151',
        pinkish: '#dc4a85',
        pink600: '#d61f69',
        nightblue: '#383874',
        indigo100: '#e5edff',
        social: '#35518d',
        darkblue: '#1e1f39',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards 0.3s',
      },
    },
  },
  plugins: [],
};

export default config;
