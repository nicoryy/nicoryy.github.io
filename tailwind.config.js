/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'display':['JetBrains Mono', 'sans-serif']
      },
      height: {
        "1/2vh": "50vh",
        "1/3vh": "33.3333vh",
        "2/3vh": "66.6666vh",
        "1/4vh": "25vh",
        "2/4vh": "50vh",
        "3/4vh": "75vh",
        "1/5vh": "20vh",
        "2/5vh": "40vh",
        "3/5vh": "60vh",
        "4/5vh": "80vh",
        "1/6vh": "16.6666vh",
        "2/6vh": "33.3333vh",
        "3/6vh": "50vh",
        "4/6vh": "66.6666vh",
        "5/6vh": "83.3333vh",
        "1/12vh": "8.3333vh",
        "2/12vh": "16.6666vh",
        "3/12vh": "25vh",
        "4/12vh": "33.3333vh",
        "5/12vh": "41.6666vh",
        "6/12vh": "50vh",
        "7/12vh": "58.3333vh",
        "8/12vh": "66.6666vh",
        "9/12vh": "75vh",
        "10/12vh": "83.3333vh",
        "11/12vh": "91.6666vh",
        fullvh: "100vh",
      },
      colors: {
        purple1: "#9f00c4",
      },
      dropShadow: {
        "2xl": "25px 7px 10px rgba(72,31,81, 1)",
        "3xl": "20px 7px 5px #5426B7",
      },
      screens: {
        xs: "426px",
        "2xs": "320px",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit,minmax(min(20.25rem,100%),1fr))",
      },
      keyframes: {
        wave:{
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(40)" },
          "20%": { transform: "rotate(-80deg)" },
          "30%": { transform: "rotate(40deg)" },
          "40%": { transform: "rotate(-40deg)" },
          "50%": { transform: "rotate(100.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        }
      },
      animation:{
        'waving': 'wave 100s linear infinite'
      },
      colors:{
        'bgpurple':'#0B0518',
        'purple':'#5426B7',
        'subpurple':'#946fe1'
      }
    },
  },
  plugins: [],
};
