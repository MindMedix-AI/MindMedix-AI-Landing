import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { saveContact } from '@/lib/db'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const FROM_EMAIL = process.env.EMAIL_FROM || 'MindMedix AI <onboarding@resend.dev>'
const TO_EMAIL = process.env.EMAIL_TO || 'contact@mindmedixai.health'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, organization, interest, message, website } = body

    // 🛡️ Honeypot check: If the hidden 'website' field is filled, it's a bot.
    // We return 200 (Success) so the bot thinks it succeeded, but we do nothing.
    if (website) {
      console.warn('Bot submission detected via honeypot.')
      return NextResponse.json({ success: true, id: 'bot_blocked' })
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // ✅ Always save to database first — lead is never lost
    const contactId = saveContact({ name, email, organization, interest, message })
    console.log(`Contact saved to database with ID: ${contactId}`)

    // Send email if Resend is configured
    if (resend) {
      const interestLabels: Record<string, string> = {
        pilot: 'Hospital pilot program',
        partnership: 'Strategic partnership',
        investment: 'Investment / Funding',
        other: 'General inquiry',
      }

      const html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>ID:</strong> #${contactId}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Organization:</strong> ${escapeHtml(organization || '—')}</p>
        <p><strong>Interest:</strong> ${interestLabels[interest] || interest}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || '—').replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from mindmedixai.health · Stored in database as #${contactId}</small></p>
      `

      const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `[MindMedix AI] ${interestLabels[interest] || 'Contact'} - ${name}`,
        html,
      })

      if (error) {
        // Log email error but don't fail — data is already saved
        console.error('Resend email error (data already saved):', error)
      }
    } else {
      console.warn('RESEND_API_KEY not set — email not sent, but contact was saved to database.')
    }

    return NextResponse.json({ success: true, id: contactId })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Failed to process submission' },
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

