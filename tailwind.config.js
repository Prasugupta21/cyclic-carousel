// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
      
    
//         keyframes: {
//           'border-slide-right': {
//             '0%': { transform: 'translateX(-100%)' },
//             '100%': { transform: 'translateX(0)' }
//           },
//           'border-slide-down': {
//             '0%': { transform: 'translateY(-100%)' },
//             '100%': { transform: 'translateY(0)' }
//           },
//           'border-slide-left': {
//             '0%': { transform: 'translateX(100%)' },
//             '100%': { transform: 'translateX(0)' }
//           },
//           'border-slide-up': {
//             '0%': { transform: 'translateY(100%)' },
//             '100%': { transform: 'translateY(0)' }
//           }
//         },
        
//         animation: {
//           'border-slide-right': 'border-slide-right infinite ease-in-out forwards 2s',
//           'border-slide-down': 'border-slide-down infinite ease-in-out forwards 2s',
//           'border-slide-left': 'border-slide-left infinite ease-in-out forwards 2s',
//           'border-slide-up': 'border-slide-up infinite ease-in-out forwards 2s'
//         },
      
//       },
//   plugins: [],
// }
// }
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
        }
      },
      animation: {
        'border-slide-right': 'border-slide-right 4s linear infinite',
        'border-slide-down': 'border-slide-down 3s linear infinite',
        'border-slide-left': 'border-slide-left 4s linear infinite',
        'border-slide-up': 'border-slide-up 5s linear infinite'
      },
    },
  },
  plugins: [],
}