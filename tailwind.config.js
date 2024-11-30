/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-background": "var(--background-color)",
        "primary-text": "var(--text-color)",
        "primary-active": "var(--active-color)",
        "primary-button-color": "var(--primary-button-color)",
      },
      fontFamily: {
        Akshar: ["Akshar", "sans-serif"],
        Alata: ["Alata", "sans-serif"],
        Acme: ["Acme", "sans-serif"],
        Baloo: ["Baloo 2", "sans-serif"],
      },
      boxShadow: {
        theme: "var(--box-shadow)",
      },
    },
  },
  plugins: [],
};
