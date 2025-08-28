/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
 theme: {
   extend: {
  keyframes: {
    gradientLeft: {
      "0%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
  },
  animation: {
    gradientLeft: "gradientLeft 3s linear infinite",
  },
}
  },
  plugins: [],
}
