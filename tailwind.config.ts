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
        'vivid-violet': '#7749EF',
        'electric-violet': '#5C27E5',
        'light-purple': '#AF72FF',
        'midnight-slate': '#1F2A37',
        'cloud-mist': '#F3F4F6',
        'pale-fog': '#E5E7EB',
        lavender: '#F7F4FF',
        'rich-black': '#111928',
        'slate-gray': '#4B5563',
      },
      screens: {
        xl2: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
