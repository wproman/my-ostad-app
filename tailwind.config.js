/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors:{
        primary:"#D7F5DC",
        secondary:"#20B15A",
        logo:"#F55F1D",
    }
  },
  plugins: [],
 
  }
}
