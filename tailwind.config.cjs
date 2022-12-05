/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#E5E5E5",
        pc2: "#F55A5A",
        nc1: "#2B283A",
        link: "#918E9B",
        logo: "#DADADA",
      },
    },
  },
  plugins: [],
};
