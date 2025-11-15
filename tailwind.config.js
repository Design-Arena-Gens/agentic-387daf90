/**** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8ff',
          100: '#d9eeff',
          200: '#bce2ff',
          300: '#8fd0ff',
          400: '#5bb6ff',
          500: '#2b96ff',
          600: '#1178f2',
          700: '#0a60cc',
          800: '#0b4ea3',
          900: '#0e4484'
        }
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
};
