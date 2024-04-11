/** @type {import('tailwindcss').Config} */

const customGridTemplate = {
  "auto-max": "auto max-content",
  "max-auto": "max-content auto",
  "max-max": "max-content max-content",
  "max-max-max": "max-content max-content max-content",
  "max-max-auto": "max-content max-content auto",
  "max-max-max-auto": "max-content max-content max-content auto",
  "max-auto-max": "max-content auto max-content",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#131316",
        gray: "#56616B",
        lightGray: "#EFF1F6",
      },
      gridAutoRows: customGridTemplate,
      gridTemplateRows: customGridTemplate,
      gridAutoColumns: customGridTemplate,
      gridTemplateColumns: customGridTemplate,
    },
  },
  plugins: [],
};

