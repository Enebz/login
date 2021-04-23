module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        eggshell: {
          light: "#FCF9ED",
          normal: "#FAF3DD",
          darker: "#F3E6BA",
          dark: "#ecd892",
          darkest: "#E4C864"
        },

        coral: {
          light: "#788091",
          normal: "#5E6472",
          dark: "#494E5A"
        },
        cinnabear: {
          light: "#DD6755",
          normal: "#DA5844",
          dark: "#D64933"
        },
        mint: "#4FB286",
      },
    },

  },
  variants: {
    extend: {
      backgroundColor: ['disabled', 'active'],
      textColor: ['active'],
      cursor: ['disabled'],
    }
  },
  plugins: [],
}
