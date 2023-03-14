/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        workitDarkPurple: '#24053E',
        workitEucaplyptus: '#44FFA1',
        workitDavyGrey: '#584D62',
        workitGhostWhite: '#FCF8FF',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
