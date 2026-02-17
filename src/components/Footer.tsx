'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Footer() {
  const { locale } = useLanguage()
  const t = translations[locale].footer

  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img
          src="/logo.png"
          alt="MindMedix AI"
          width={450}
          height={150}
          style={{ height: '120px', width: 'auto', objectFit: 'contain' }}
        />
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-8 text-sm text-slate-500">
          <a href="#problem" className="hover:text-slate-300 transition">{t.links.challenge}</a>
          <a href="#solution" className="hover:text-slate-300 transition">{t.links.solution}</a>
          <a href="#how-it-works" className="hover:text-slate-300 transition">{t.links.platform}</a>
          <a href="#value" className="hover:text-slate-300 transition">{t.links.impact}</a>
          <a href="#contact" className="hover:text-slate-300 transition">{t.links.contact}</a>
          <Link href="/privacy" className="hover:text-slate-300 transition">{t.links.privacy}</Link>
          <Link href="/terms" className="hover:text-slate-300 transition">{t.links.terms}</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/5 text-sm text-slate-500 text-center">
        <p>{t.copyright.replace('{year}', String(new Date().getFullYear()))}</p>
      </div>
    </footer>
  )
}
