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
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm text-slate-500">
            <a href="#problem" className="hover:text-slate-300 transition">{t.links.challenge}</a>
            <a href="#solution" className="hover:text-slate-300 transition">{t.links.solution}</a>
            <a href="#how-it-works" className="hover:text-slate-300 transition">{t.links.platform}</a>
            <a href="#value" className="hover:text-slate-300 transition">{t.links.impact}</a>
            <a href="#contact" className="hover:text-slate-300 transition">{t.links.contact}</a>
            <Link href="/privacy" className="hover:text-slate-300 transition">{t.links.privacy}</Link>
            <Link href="/terms" className="hover:text-slate-300 transition">{t.links.terms}</Link>
          </div>
          <div className="flex items-center border-l border-white/10 pl-6 hidden md:block">
            <a
              href="https://www.linkedin.com/company/mindmedix-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          {/* Mobile LinkedIn Link */}
          <div className="md:hidden">
            <a
              href="https://www.linkedin.com/company/mindmedix-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#0077b5] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-white/5 mt-16 pt-8 text-center">
        <p className="text-slate-400 text-sm mb-2">
          {t.copyright.replace('{year}', new Date().getFullYear().toString())}
        </p>
        <p className="text-slate-500 text-xs max-w-2xl mx-auto">
          {t.authorityLine}
        </p>
      </div>
    </footer>
  )
}
