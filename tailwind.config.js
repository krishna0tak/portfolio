/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvasBase: '#F7F6F3',
        canvasSubtle: '#EFECE6',
        borderHairline: '#E2DFD7',
        charcoalBody: '#202020',
        stoneGray: '#77736F',
        charcoalMuted: '#57534E',
        plumAccent: '#4A152E',
        plumDeep: '#3B1224',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        full: '0px',
      },
    },
  },
  plugins: [],
}
