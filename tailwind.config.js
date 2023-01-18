/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat' : ['Montserrat', 'sans-serif']
      },
      width: {
        "1/2screen": "50vw"
      },
      colors: {
        "bg-dark": "#1e374f",
        "text-dark": "#f1f1b4",
        "back-text": "#13273a"
      },
      opacity: {
        "75": ".75"
      }
    }
  }
}