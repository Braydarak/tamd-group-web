/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 10s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'drift-1': 'drift1 15s linear infinite',
        'drift-2': 'drift2 18s linear infinite',
        'drift-3': 'drift3 20s linear infinite',
        'drift-4': 'drift4 22s linear infinite',
        'drift-5': 'drift5 25s linear infinite',
        'fade-in': 'fadeIn 1.5s ease-out',
        'slide-up': 'slideUp 1s ease-out 0.5s both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
          },
          '25%': { 
            transform: 'translateY(-20px) rotate(2deg)',
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(-1deg)',
          },
          '75%': { 
            transform: 'translateY(-15px) rotate(1deg)',
          },
        },
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        drift1: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(30px, -20px) rotate(90deg)' },
          '50%': { transform: 'translate(-15px, 40px) rotate(180deg)' },
          '75%': { transform: 'translate(-40px, -10px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        drift2: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(-25px, 35px) rotate(120deg)' },
          '66%': { transform: 'translate(40px, -30px) rotate(240deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        drift3: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '20%': { transform: 'translate(20px, 25px) rotate(72deg)' },
          '40%': { transform: 'translate(-30px, 15px) rotate(144deg)' },
          '60%': { transform: 'translate(10px, -35px) rotate(216deg)' },
          '80%': { transform: 'translate(-20px, -10px) rotate(288deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        drift4: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '30%': { transform: 'translate(-35px, -25px) rotate(108deg)' },
          '60%': { transform: 'translate(25px, 30px) rotate(216deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        drift5: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(45px, 20px) rotate(90deg)' },
          '50%': { transform: 'translate(-20px, -40px) rotate(180deg)' },
          '75%': { transform: 'translate(-30px, 25px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
