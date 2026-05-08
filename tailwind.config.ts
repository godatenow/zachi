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
        // Main backgrounds - warm off-white/creams
        'main-bg': '#FFF8F0',
        'secondary-bg': '#F7EFE5',
        'card-bg': '#FFFCF7',
        
        // Text colors
        'text-primary': '#2D241E',
        'text-secondary': '#6F6258',
        
        // Brand colors
        'brand-brown': '#8A5E3C',
        'soft-gold': '#C99A5A',
        'burgundy': '#6B1026',
        'burgundy-hover': '#4E0C1B',
        
        // Borders and accents
        'soft-border': '#E3D2BE',
        
        // Legacy colors for compatibility (can be removed after full migration)
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
