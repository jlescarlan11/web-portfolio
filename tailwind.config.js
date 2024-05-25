/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "text-dark": "#edf5fd",
        "bg-dark": "#010609",
        "primary-dark": "#147fd2",
        "secondary-dark": "#0f0d8c",
        "accent-dark": "#3b11a7",

        "text-light": "#020a12",
        "bg-light": "#f6fbfe",
        "primary-light": "#2d99eb",
        "secondary-light": "#7573f2",
        "accent-light": "#8358ee",
      },
    },
  },
  plugins: [],
};
