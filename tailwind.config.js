/** @type {import('tailwindcss').Config} */
export default {
  content: ["./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue"],
  theme: {
    extend: {
      
    
      fontFamily: {

        poppins:["poppins", "sans-serif"]

      },
      
 
      animation: {
        'loop-scroll': 'loop-scroll  38s linear infinite',
      },
 
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },

    },
  
    },
  },
  plugins: [],
}

