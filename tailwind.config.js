/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backdropBlur: {
        none: "blur(0)",
        blur: "blur(4px)",
      },
    },
  },
  plugins: [],
};
