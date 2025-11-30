/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      colors: {
        // Custom Palette from User
        primary: {
          DEFAULT: '#4CAF50', // Main Green
          hover: '#43A047',
          light: '#A8E6A1',   // Light Green
        },
        beige: {
          DEFAULT: '#D9C89C', // Beige/Tan
          light: '#E8D4B8',
        },
        gray: {
          600: '#6B6B6B', // Custom Grey
          700: '#555555',
          800: '#333333',
        },
        // Override default greens to match the theme
        green: {
          50: '#F3F9F4',
          100: '#E3F2E5',
          200: '#C8E6C9',
          300: '#A8E6A1', // User's Light Green
          400: '#81C784',
          500: '#4CAF50', // User's Main Green
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        }
      }
    },
  },
  plugins: [],
}
