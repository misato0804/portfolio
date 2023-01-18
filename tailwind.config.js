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
      },
      animation: {
        "shake-horizontal": "shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
        "animationTexted": "animatedText 10s infinite"
      },
      keyframes: {
        "shake-horizontal": {
          "0%,to": {
            transform: "translateX(0)"
          },
          "10%,30%,50%,70%": {
            transform: "translateX(-5px)"
          },
          "20%,40%,60%": {
            transform: "translateX(5px)"
          },
          "80%": {
            transform: "translateX(3px)"
          },
          "90%": {
            transform: "translateX(-3px)"
          }
        },
        "animatedText": {
          "0%" : {
            "background-size": "400% 400%",
            "background-position:": "left center"
          },
          "50%": {
            "background-size": "400% 400%",
            "background-position": "right center"
          },
          "100%" : {
            "background-size": "400% 400%",
            "background-position:": "left center"
          }
        }
      }
    }
  }
}