// src/app/layout.js

import './globals.css'
// 1. RIMOSSA l'importazione da 'next/font/google'
import { satoshi, roboto_mono } from './fonts' // Manteniamo solo l'importazione del font locale

// 2. RIMOSSA la definizione della costante 'sequel'

export const metadata = {
  title: '/DH.arc & DHLab Seminar',
  description: 'Building Knowledge Landscapes Across the Digital Humanities',
}

export default function RootLayout({ children }) {
  return (
    // 3. AGGIUNTA la variabile del font al tag <html>
    // Usiamo un template literal `` per combinare le classi
    <html lang="en" className={`${satoshi.variable} ${roboto_mono.variable} bg-background`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </head>
      {/* 4. RIMOSSA la classe 'font-sequel' dal body */}
      <body className="antialiased text-foreground">
        {children}
      </body>
    </html>
  );
}
