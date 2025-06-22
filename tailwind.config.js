// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather Sans", "sans-serif"], // Default font
        exo: ["Exo", "monospace"], // Monospace font
      },
    },
  },
  plugins: [],
};
