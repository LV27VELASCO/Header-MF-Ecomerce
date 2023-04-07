module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        Turqueza:"#154360"
      },
      spacing:{
        "4/5": "80%",
        "5/6": "85%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
