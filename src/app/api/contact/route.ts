import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const FROM_EMAIL = process.env.EMAIL_FROM || 'MindMedix AI <onboarding@resend.dev>'
const TO_EMAIL = process.env.EMAIL_TO || 'contact@mindmedixai.health'

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: 'Email service not configured. Set RESEND_API_KEY.' },
      { status: 503 }
    )
  }
  try {
    const body = await request.json()
    const { name, email, organization, interest, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const interestLabels: Record<string, string> = {
      pilot: 'Hospital pilot program',
      partnership: 'Strategic partnership',
      investment: 'Investment',
      other: 'Other',
    }

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(organization || '—')}</p>
      <p><strong>Interest:</strong> ${interestLabels[interest] || interest}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message || '—').replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Sent from mindmedixai.health</small></p>
    `

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[MindMedix AI] ${interestLabels[interest] || 'Contact'} - ${name}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
