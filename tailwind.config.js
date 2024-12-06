/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm850: { max: "850px" },
        sm650: { max: "650px" },
        sm450: { max: "450px" },
        sm400: { max: "400px" },
      },
    },
  },
  plugins: [],
};
