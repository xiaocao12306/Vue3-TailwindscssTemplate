module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan:'#2ac8dd'
      }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
