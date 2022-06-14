/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme:{
    colors:{
      'blackN' : '000000',
      'whiteN' : 'FFFFFF',
      'grey1' : 'F0F0F0',
      'grey2' : 'CACACA',
      'orange1' : 'FFC456',
      'orange2' : 'FFB52C'
    }
  }
}
