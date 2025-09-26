/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sintassi aggiornata e aggiunta delle variabili mancanti
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        'card-background': 'rgb(var(--card-background) / <alpha-value>)', // Aggiunto
        border: 'rgb(var(--border-color) / <alpha-value>)',               // Aggiunto
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
      },
      fontFamily: {
        // La tua configurazione per i font è rimasta invariata
        sequel: ['SequelMedium', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};