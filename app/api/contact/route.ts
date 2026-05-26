import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactPayload = {
  name: string
  email: string
  dogName?: string
  message: string
  gdprConsent: boolean
  company?: string
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function sanitizeLine(value: string) {
  return value.replace(/\r/g, '').trim()
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>

    // Honeypot: hidden field should stay empty.
    if (typeof body.company === 'string' && body.company.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    const name = sanitizeLine(body.name ?? '')
    const email = sanitizeLine(body.email ?? '')
    const dogName = sanitizeLine(body.dogName ?? '')
    const message = (body.message ?? '').toString().trim()
    const gdprConsent = Boolean(body.gdprConsent)

    const errors: Record<string, string> = {}
    if (!name) errors.name = 'Kérjük, add meg a neved.'
    if (!email) errors.email = 'Kérjük, add meg az email címed.'
    else if (!isValidEmail(email)) errors.email = 'Kérjük, érvényes email címet adj meg.'
    if (!message) errors.message = 'Kérjük, írd le az üzeneted.'
    if (!gdprConsent) errors.gdprConsent = 'Az adatkezelési feltételek elfogadása kötelező.'

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      return NextResponse.json(
        { ok: false, error: 'A levelezés nincs beállítva (RESEND_API_KEY hiányzik).' },
        { status: 500 },
      )
    }

    const to = process.env.CONTACT_TO_EMAIL?.trim() || 'hello@elevendogs.hu'
    const resend = new Resend(resendKey)

    const subject = `Eleven Dogs kapcsolatfelvétel${dogName ? ` – ${dogName}` : ''}${name ? ` (${name})` : ''}`
    const text = [
      'Új kapcsolatfelvétel érkezett az elevendogs.hu /kapcsolat űrlapról.',
      '',
      `Név: ${name}`,
      `Email: ${email}`,
      `Kutyád neve: ${dogName || '-'}`,
      '',
      'Üzenet:',
      message,
      '',
      `GDPR/ÁSZF elfogadva: ${gdprConsent ? 'igen' : 'nem'}`,
    ].join('\n')

    const { error } = await resend.emails.send({
      from: 'Eleven Dogs <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject,
      text,
    })

    if (error) {
      return NextResponse.json({ ok: false, error: 'Nem sikerült elküldeni az üzenetet.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ ok: false, error: 'Hibás kérés.' }, { status: 400 })
  }
}
