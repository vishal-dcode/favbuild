/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '600px',
      md: '980px',
      lg: '1100px',
      xl: '1200px'
    }
  },
  plugins: []
};

