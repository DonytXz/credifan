module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        blue: {
          light: "#8bd0fc",
          regular: "#243964",
          dark: "#03053D"
        },
        pinkCustom: "#b6629e",
        orangeCustom: "#EE7F00"
      },
      // backgroundImage: {
      //   "about": "url('/src/assets/img/bgAbout.png')",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
