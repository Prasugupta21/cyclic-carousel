
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
      'border-slide-right': {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(200%)' }
        },
        'border-slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'border-slide-left': {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(-200%)' }
        },
        'border-slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        'shine': {
          '0%': { transform: 'translate(-100%,-100%)',
           },

          '100%': { transform: 'translate(100%,100%)',},
          
        }
      },
      animation: {
        'border-slide-right': 'border-slide-right 3s linear infinite',
        'border-slide-down': 'border-slide-down 3s linear infinite',
        'border-slide-left': 'border-slide-left 3s linear infinite',
        'border-slide-up': 'border-slide-up 3s linear infinite',
        'shine': 'shine 2s ease-in infinite'
      },
    },
  },
  plugins: [],
}