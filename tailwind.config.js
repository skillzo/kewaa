/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "p-purple": "#9747FF",
        "pt-dark": "#B8B9B9",
        "pt-light": "#ffffff",
        "ptb-dark": "#1E1E1E",
        "ptb-light": "#979797",
      },
    },
  },
  plugins: [],
};
