/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      // Ajout de couleur personnalisée
      colors: {
        DB4A2B: '#DB4A2B',
        F82502: '#F82502',
        CB2B21: '#CB2B21',
        'second-custom-gray': '#9B99AF',
        'custom-gray': '#EAEAEA',
        'dashboard-link': '#7A7A7A'
      },
    },
  },
  plugins: [],
};
