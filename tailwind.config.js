module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Sans"', "sans-serif"],
        inter: ['"Inter"', "san-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        nunito: ['"Nunito"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      borderWidth: {
        hexTop: "60px",
      },
      width: {
        hexWidth: "120px",
      },
    },
  },

  plugins: [],
};
