/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // Pour tous les fichiers HTML à la racine
    "./src/**/*.{js,ts}"  // Pour tous les fichiers JS ou TS dans le dossier `src`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

