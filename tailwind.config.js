/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'netflix-bg': "url('https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/ecb907d3-e05e-4eab-b99d-83653ff44ede/DE-en-20230206-popsignuptwoweeks-perspective_alpha_website_medium.jpg')"
      }
      
    },
  },
  plugins: [],
}
