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
        // Primary - Vibrant Forest Green (main brand color)
        primary: {
          DEFAULT: '#2D6A4F', // Deep forest green
          light: '#52B788',   // Fresh leaf green
          lighter: '#95D5B2', // Soft mint
          dark: '#1B4332',    // Dark forest
        },
        // Secondary - Warm Earth Tones
        secondary: {
          DEFAULT: '#D4A574', // Warm sand/terracotta
          light: '#E8D4B8',   // Light cream
          lighter: '#F5EFE6', // Almost white cream
        },
        // Accent - Vibrant Life
        accent: {
          DEFAULT: '#74C69D', // Bright sage green
          warm: '#D4A574',    // Warm accent
        },
        // Neutral - Professional Grays
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        }
      }
    },
  },
  plugins: [],
}
