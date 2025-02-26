import './globals.css'

export const metadata = {
  title: 'DH.arc & DHLab Seminar',
  description: 'Building Knowledge Landscapes Across the Digital Humanities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased text-foreground font-sequel">
        {children}
      </body>
    </html>
  );
}
