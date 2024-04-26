/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        primaryColor: "#8873ef",
        headingColor: "#081e21",
        smallTextColor: "#193256",
        buttonBgColor: "#0067FF",
        yellowColor: "#FEB^0D",
        purpleColor: "#9771FF",
        irisBlueColor: "#5A4FCF",
        headingColor: "#181A1E",
        textColor: "#4E545F",

      },
      boxShadow: {
        panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px",
      }
    },
  },
  plugins: [],
}

