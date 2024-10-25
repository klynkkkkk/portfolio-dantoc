/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E3A52D",
        "text-black": "#1F2937",
        "text-gray": "#6B7280",
      },
      backgroundImage: {
        "custom-bg": "url('./assets/image/bg.jpeg')",
        hero: "url('./assets/image/hero.jpg')",
        "hero-medium": "url('./assets/image/hero-medium.jpg')",
      },
    },
  },
  plugins: [],
};
