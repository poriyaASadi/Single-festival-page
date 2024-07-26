/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html,",
    "./index.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily : {
        'dana' : 'dana',
        'aviny' : 'aviny'
      }
    },
    screens : {
      'mobile' : "500px",
      'sm': "640px",
      'md' : '768px',
      'lg': '1024px'
    }
  },
  plugins: [],
}

