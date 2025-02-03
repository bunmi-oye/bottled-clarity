import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F3C7E',
      },
      padding: {
        xs: '12px',
        sm: '16px',
        md: '20px',
        lg: '24px',
      },
    },
  },
  plugins: [],
} satisfies Config;
