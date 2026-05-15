import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt =
  'Eleven Dogs – kutyasétáltatás és kutyagondozás Budapest 11. kerületében, Újbudán'

export const size = { width: 1200, height: 630 }

export const contentType = 'image/png'

async function loadManrope(weight: 600 | 700) {
  try {
    const cssRes = await fetch(
      `https://fonts.googleapis.com/css2?family=Manrope:wght@${weight}&display=swap`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      },
    )
    const css = await cssRes.text()
    const woff2 = css.match(/https:\/\/fonts\.gstatic\.com\/[^)\s"']+\.woff2/)
    const fontUrl =
      woff2?.[0] ?? css.match(/src:\s*url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1]
    if (!fontUrl) return undefined
    const data = await fetch(fontUrl).then((r) => r.arrayBuffer())
    return {
      name: 'Manrope',
      data,
      weight,
      style: 'normal' as const,
    }
  } catch {
    return undefined
  }
}

export default async function Image() {
  const [font600, font700] = await Promise.all([loadManrope(600), loadManrope(700)])
  const fonts = [font600, font700].filter(Boolean) as {
    name: string
    data: ArrayBuffer
    weight: 600 | 700
    style: 'normal'
  }[]

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(155deg, #faf8f4 0%, #f2ebe0 42%, #e8e2d6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 56,
          fontFamily: fonts.length ? 'Manrope, system-ui, sans-serif' : 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 9999,
              background: '#FFBD59',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 700,
              color: '#2a2825',
            }}
          >
            11
          </div>
          <span style={{ fontSize: 38, fontWeight: 700, color: '#2a2825', letterSpacing: -0.5 }}>
            Eleven Dogs
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 58, fontWeight: 700, color: '#2a2825', lineHeight: 1.05 }}>
            Kutyasétáltatás
          </span>
          <span style={{ fontSize: 58, fontWeight: 700, color: '#4a5a42', lineHeight: 1.05 }}>
            Újbudán, a 11. kerületben
          </span>
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: '#5c574f',
              marginTop: 16,
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            Megbízható, személyes gondozás · rugalmas időpontok
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            fontWeight: 600,
            color: '#6a635a',
          }}
        >
          <span>Budapest · kutyasétáltatás</span>
          <span style={{ color: '#4a5a42' }}>elevendogs.hu</span>
        </div>
      </div>
    ),
    {
      ...size,
      ...(fonts.length > 0 ? { fonts } : {}),
    },
  )
}
