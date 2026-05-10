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
        // Premium restrained palette
        'primary': '#2c2418',      // deep brown
        'secondary': '#6b4a34',    // warm brown  
        'accent': '#d6b48a',       // subtle gold
        'background': '#fbf1e7',   // warm white
        
        // Text colors
        'text-primary': '#2c2418',
        'text-secondary': '#6b4a34',
        'text-muted': '#8b6e53',
        
        // Supporting colors
        'border': '#e6d5c2',
        'hover': '#a67c52',
        
        // Legacy colors for compatibility (can be removed after full migration)
        'main-bg': '#FFF8F0',
        'secondary-bg': '#F7EFE5',
        'card-bg': '#FFFCF7',
        'brand-brown': '#8A5E3C',
        'soft-gold': '#C99A5A',
        'burgundy': '#6B1026',
        'burgundy-hover': '#4E0C1B',
        'soft-border': '#E3D2BE',
        'cream': '#F6EEE4',
        'bronze': '#A67C52',
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
