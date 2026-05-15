/** Canonical site URL for metadata, sitemap, and structured data. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) {
    return fromEnv.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`
  }
  return 'http://localhost:3000'
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`)
}

export const SITE_NAME = 'Eleven Dogs'

export const SITE_DESCRIPTION =
  'Megbízható, személyes kutyasétáltatás Újbudán. Rugalmas időpontok, valódi odafigyelés és hosszú távú bizalom.'
