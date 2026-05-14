import type { Metadata, Viewport } from 'next'
import { Manrope, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eleven Dogs | Kutyasétáltatás a 11. kerületben',
  description: 'Megbízható, személyes kutyasétáltatás Újbudán. Rugalmas időpontok, valódi odafigyelés és hosszú távú bizalom.',
  generator: 'v0.app',
  keywords: ['kutyasétáltatás', 'Budapest', '11. kerület', 'Újbuda', 'kutya', 'napközi', 'dog walking'],
  authors: [{ name: 'Eleven Dogs' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Eleven Dogs | Kutyasétáltatás a 11. kerületben',
    description: 'Megbízható, személyes kutyasétáltatás Újbudán. Rugalmas időpontok, valódi odafigyelés és hosszú távú bizalom.',
    locale: 'hu_HU',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFBD59',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="bg-background">
      <body className={`${manrope.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
