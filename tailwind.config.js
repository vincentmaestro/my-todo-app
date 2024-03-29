/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'desktop': {'max': '1535px'},

      'laptop_s': {'max': '992px'},

      'tablet': {'max': '768px'},

      'mobile': {'max': '576px'},

      'mobile_i': {'max': '430px'},

      'mobile_m': {'max': '375px'},

      'mobile_s': {'max': '320px'},
    }
  },
  plugins: [],
}

