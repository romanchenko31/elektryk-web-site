// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // или путь к вашим компонентам
  ],
  theme: {
    extend: {
      keyframes: {
        wiggleScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
      },
      animation: {
        wiggleScale: "wiggleScale 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
