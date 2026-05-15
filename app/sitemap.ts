import type { MetadataRoute } from 'next'

import { getSiteUrl } from '@/lib/site'

const paths: Array<{
  path: string
  priority: number
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
}> = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/rolunk', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/arak', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/kapcsolat', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/aszf', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/adatvedelem', priority: 0.4, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const lastModified = new Date()

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: path === '' ? `${base}/` : `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
