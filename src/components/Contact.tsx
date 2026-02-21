'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: 'pilot',
    message: '',
    website: '', // Honeypot field for bot protection
  })

  const { locale } = useLanguage()
  const t = translations[locale].contact
  const legal = translations[locale].legal
  const form = t.form

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Failed to send')
      setSubmitted(true)
    } catch {
      setError(form.error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 px-6 bg-[#0d2137]/30">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#2d8cff]/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#2d8cff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-4">{t.thankYou}</h2>
          <p className="text-slate-400">
            {t.thankYouDesc}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#0d2137]/30">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-[#2d8cff] tracking-wider uppercase mb-4">
          {t.label}
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
          {t.title}
        </h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl">
          {t.intro}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold text-white mb-4">{t.whoTitle}</h3>
            <ul className="space-y-3 text-slate-400">
              {t.who.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2d8cff]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 rounded-xl border border-white/5 bg-[#0a1929]/50">
              <p className="text-sm text-slate-500 mb-1">{t.emailLabel}</p>
              <a href="mailto:contact@mindmedixai.health" className="text-[#2d8cff] hover:text-[#5cadff] transition">
                contact@mindmedixai.health
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">{form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0a1929] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2d8cff]/50 transition"
                placeholder={form.namePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">{form.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0a1929] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2d8cff]/50 transition"
                placeholder={form.emailPlaceholder}
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">{form.organization}</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0a1929] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2d8cff]/50 transition"
                placeholder={form.organizationPlaceholder}
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-slate-300 mb-2">{form.interest}</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0a1929] border border-white/10 text-white focus:outline-none focus:border-[#2d8cff]/50 transition"
              >
                <option value="pilot">{form.interestOptions.pilot}</option>
                <option value="partnership">{form.interestOptions.partnership}</option>
                <option value="investment">{form.interestOptions.investment}</option>
                <option value="other">{form.interestOptions.other}</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">{form.message}</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0a1929] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2d8cff]/50 transition resize-none"
                placeholder={form.messagePlaceholder}
              />
            </div>

            {/* Honeypot field - hidden from users, visible to bots */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400 bg-red-500/10 rounded-lg px-4 py-3">
                {error}
              </p>
            )}
            <p className="text-xs text-slate-500">
              {legal.privacyNote}{' '}
              <Link href="/privacy" className="text-[#2d8cff] hover:underline">
                {legal.privacyPolicy}
              </Link>
              {' '}{legal.andThe}{' '}
              <Link href="/terms" className="text-[#2d8cff] hover:underline">
                {legal.terms}
              </Link>
              .
            </p>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 text-base font-medium bg-[#2d8cff] text-white rounded-lg hover:bg-[#2472d9] transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? form.submitting : form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
