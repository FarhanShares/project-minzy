module.exports = {
  purge: {
    content: [
      "./public/**/*.html",
      "./src/**/*.vue",
      "./src/config/vue-tailwind.config.js"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
