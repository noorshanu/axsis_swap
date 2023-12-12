/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      redHat: "var(--red-hat)",
      moment: "var(--moment)",
    },
    colors: {
      main: "#17191E",
      grey: "#2E2E2E",
      green: "#11FF37",
      "light-green": "#ACFFB9",
      white: "white",
      black: "black",
      transparent: "transparent",
      border: "#B3B4BD33",
      "light-grayish": "rgba(0,0,0,.04)",
    },

    extend: {
      transitionProperty: {
        height: "height",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        "green-gradient":
          "linear-gradient(161.83deg, #ACFFB9 12.35%, #22FF45 95.75%)",

        "green-gradient-2":
          "linear-gradient(158.2deg, #ACFFB9 14.29%, #11FF37 97.14%)",

        "tier-active":
          "linear-gradient(126.73deg, rgba(172, 255, 185, 0.3) 28.63%, rgba(62, 255, 93, 0.3) 97.49%)",
      },
    },
  },
  plugins: [],
};
