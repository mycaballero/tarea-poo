/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        camion: "url('/src/assets/img/camion-foto.png')",
        coche: "url('/src/assets/img/coche-foto.png')",
        carga: "url('/src/assets/img/carga-foto.png')",
        microbus: "url('/src/assets/img/microbus-foto.png')",
      }
    },
  },
  plugins: [],
}
