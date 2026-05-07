import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C4A29',
        secondary: '#B38B62',
        accent: '#F0E2CF',
        light: '#FBF6EF',
        dark: '#35271F',
        cream: '#F6EEE4',
        bronze: '#A67C52',
      },
      boxShadow: {
        soft: '0 18px 50px -30px rgba(68, 44, 28, 0.24)',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
