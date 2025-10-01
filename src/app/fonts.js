// src/app/fonts.js
import { Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const satoshi = localFont({
  src: [
    {
      // PERCORSO CORRETTO: Relativo, partendo dalla stessa cartella (app)
      path: './assets/fonts/Satoshi/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      // Corretto anche per la versione Italic
      path: './assets/fonts/Satoshi/Satoshi-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  weight: '300 900',
  display: 'swap',
  variable: '--font-satoshi',
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono', // Creiamo una variabile CSS
})