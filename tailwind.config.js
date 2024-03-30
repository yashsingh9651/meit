const withMT = require("@material-tailwind/react/utils/withMT");
module.exports=withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'layout':"100px auto 450px"
      },
      fontFamily:{
        "Poppins":"Poppins"
      }
    },
  },
  plugins: [],
})