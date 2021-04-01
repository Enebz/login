module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        eggshell: "#FAF3DD",
        coral: "#5E6472",
        cinnabear: "#D64933",
        mint: "#4FB286",
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
