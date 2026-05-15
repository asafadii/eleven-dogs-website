import type { Metadata, Viewport } from 'next'
import { DM_Sans, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { LocalBusinessJsonLd } from '@/components/structured-data'
import { getMetadataBase, getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from '@/lib/site'

import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const defaultTitle = `${SITE_NAME} | Kutyasétáltatás a 11. kerületben`

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: defaultTitle,
    template: '%s | Eleven Dogs',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'kutyasétáltatás',
    'Budapest',
    '11. kerület',
    'Újbuda',
    'kutya',
    'napközi',
    'dog walking',
  ],
  authors: [{ name: SITE_NAME, url: siteUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
    type: 'website',
    locale: 'hu_HU',
    url: siteUrl,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: SITE_DESCRIPTION,
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
    <html lang="hu" className="bg-background overflow-x-clip">
      <body
        className={`${manrope.variable} ${dmSans.variable} font-sans antialiased min-w-0 overflow-x-clip`}
      >
        <a
          href="#main-content"
          className="pointer-events-none fixed left-4 top-0 z-[100] -translate-y-20 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-md opacity-0 transition focus:pointer-events-auto focus:translate-y-4 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Ugrás a tartalomra
        </a>
        <LocalBusinessJsonLd />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
