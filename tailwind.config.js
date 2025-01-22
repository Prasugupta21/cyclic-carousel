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
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' }
          },
          'border-slide-down': {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0)' }
          },
          'border-slide-left': {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' }
          },
          'border-slide-up': {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0)' }
          }
        },
        animation: {
          'border-slide-right': 'border-slide-right 2s ease-in-out forwards 0.1s',
          'border-slide-down': 'border-slide-down 2s ease-in-out forwards 0.25s',
          'border-slide-left': 'border-slide-left 2s ease-in-out forwards 0.60s',
          'border-slide-up': 'border-slide-up 2s ease-in-out forwards 0.70s'
        },
      
      },
  plugins: [],
}
}
