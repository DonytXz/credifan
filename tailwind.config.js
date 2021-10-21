module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        blue: {
          light: "#8bd0fc",
          regular: "#243964",
        },
        pinkCustom: "#b6629e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
