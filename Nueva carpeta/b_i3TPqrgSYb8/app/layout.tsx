import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'CabelloTRIP | Descubre el Alma de Japón',
  description: 'Viajes premium a Japón con guías expertos, itinerarios personalizados y experiencias auténticas. Tu aventura japonesa comienza aquí.',
  keywords: ['viajes japón', 'tour japón', 'vacaciones japón', 'agencia viajes japón', 'kyoto', 'tokyo', 'hokkaido'],
}

export const viewport = {
  themeColor: '#BC002D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
