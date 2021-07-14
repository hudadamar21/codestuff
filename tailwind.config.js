module.exports = {
  mode: "jit",
  purge: [
    "./static/css/*.css",
    "./content/**/*.md",
    "./content/**/*.html",
    "./layouts/**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F73859',
        // second: '#145374',
        second: '#00ADB5',
        'fs-gray': '#404B69',
        'fs-black': '#283149',
        'fs-white': '#DBEDF3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
