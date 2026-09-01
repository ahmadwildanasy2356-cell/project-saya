/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8', 100: '#fef9c3', 200: '#fde68a', 
          300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 
          600: '#d97706', 700: '#b45309', 800: '#92400e', 
          900: '#78350f',
        },
        dark: {
          50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 
          300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 
          600: '#57534e', 700: '#44403c', 800: '#292524', 
          900: '#1c1917', 950: '#0c0a09',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        accent: ['Poppins', 'sans-serif'],
      }
    }
  }
}
