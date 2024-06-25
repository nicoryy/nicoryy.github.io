/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'display':['JetBrains Mono', 'sans-serif']
      },
      height: {
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
      colors:{
        'bgpurple':'#0B0518',
        'purple':'#5426B7',
        'subpurple':'#946fe1'
      }
    },
  },
  plugins: [],
};
