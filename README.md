# MindMedix AI — Hospital Operations Intelligence Landing Page

Official landing page for **MindMedix AI**, an early‑stage European deep‑tech startup building an **AI‑powered predictive workforce and hospital operations intelligence platform**.

- **Domain:** `https://mindmedixai.health`  
- **Location:** Ancona, Italy  
- **Sector:** Healthcare AI / Hospital Operations Intelligence  
- **Audience:** Hospital administrators, public health institutions, investors, innovation partners

The goal of this repository is to provide an **institutional‑grade, production‑ready landing page** suitable for hospitals, public authorities and EU‑level stakeholders.

---

## 1. Features

- **Bilingual experience (IT / EN)**
  - Italian as default (first market)
  - Language switcher in the header with flag indicators
- **Clear narrative for hospitals**
  - Problem → Solution → How it Works → Value → Trust → About → Contact
  - Strong focus on workforce stability, burnout risk, and operational resilience
- **Enterprise design**
  - Minimal, dark blue / healthcare‑oriented palette
  - IBM Plex Sans typography
  - Responsive layout optimised for desktop, tablet, and mobile
- **Compliance‑oriented**
  - Dedicated **Privacy Policy** (`/privacy`)
  - Dedicated **Terms & Conditions** (`/terms`)
  - Cookie consent banner for essential cookies
  - Copy aligned with **GDPR**, **privacy‑first**, and **human‑in‑the‑loop AI**
- **Operational contact flow**
  - Contact form with backend endpoint (`/api/contact`)
  - Email delivery via **Resend** (configurable)

---

## 2. Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** IBM Plex Sans (via `next/font`)
- **Email backend:** [Resend](https://resend.com) (API integration)

The codebase is structured to be easy to maintain and align with modern Next.js practices.

---

## 3. Project Structure

- `src/app/`
  - `layout.tsx` – global layout, fonts, metadata, JSON‑LD schema, cookie banner, language provider
  - `page.tsx` – main landing page composition
  - `privacy/` – Privacy Policy page (IT/EN)
  - `terms/` – Terms & Conditions page (IT/EN)
  - `api/contact/route.ts` – contact form API endpoint (Resend)
- `src/components/`
  - `Header`, `Hero`, `Problem`, `Solution`, `HowItWorks`, `ValueProposition`, `Trust`, `About`, `Contact`, `Footer`
  - `SkipLink` – accessibility helper for keyboard users
  - `CookieBanner` – essential cookie consent banner
  - `JsonLd` – Organization schema for search engines
- `src/lib/`
  - `translations.ts` – all IT/EN UI copy
  - `legal.ts` – legal copy (Privacy, Terms) for both languages

---

## 4. Getting Started (Local Development)

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open `http://localhost:3000` in your browser.

The default language is **Italian**; switch to English via the header toggle.

---

## 5. Contact Form Backend (Resend)

The contact form posts to `/api/contact`, which sends an email via [Resend](https://resend.com).

### 5.1 Configure Resend

1. Sign up at `https://resend.com` and create an API key  
2. Verify the domain `mindmedixai.health` at `https://resend.com/domains`  
3. Create `.env.local` in the project root:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_TO=contact@mindmedixai.health
# Optional, requires verified domain:
# EMAIL_FROM="MindMedix AI <noreply@mindmedixai.health>"
```

- If `RESEND_API_KEY` is **not** set, the API returns a friendly error and the UI shows an error banner suggesting contacting `contact@mindmedixai.health` directly.

---

## 6. Accessibility & Compliance

This landing page aims to be a solid baseline for **WCAG 2.1 AA** alignment:

- Skip‑to‑content link for keyboard and screen‑reader users
- Visible focus outlines on interactive elements
- Semantic sections (`<main>`, `<section>`, headings) for assistive technologies
- Italian as default `lang` with English alternative

Compliance‑related pages:

- `/privacy` – Privacy Policy (GDPR‑aware, bilingual)
- `/terms` – Terms & Conditions (governed by Italian law, Ancona jurisdiction)

> **Note:** The legal texts in this repository are **templates** and should be reviewed by qualified legal counsel before production use.

---

## 7. Build & Deployment

```bash
npm run build
npm start
```

You can deploy to:

- **Vercel** (recommended for Next.js)
- Any Node.js host capable of running `next start`

### 7.1 Environment variables in production

Set at least:

- `RESEND_API_KEY`
- `EMAIL_TO` (e.g. `contact@mindmedixai.health`)
- `EMAIL_FROM` (optional but recommended once domain is verified)

The production domain should be configured as:

- `https://mindmedixai.health`

---

## 8. Roadmap (suggested)

This repository covers the core landing page and institutional framing. Suggested next steps:

- **Add real hospital / partner / accelerator logos** once available  
- **Add team / leadership profiles** with bios and photos  
- **Add case studies / pilot outcomes** (when pilots are completed)  
- **Integrate analytics** (privacy‑respecting, e.g. Plausible or Matomo) with proper consent

---

## 9. Contact

For questions about this landing page or the MindMedix AI initiative:

- **Email:** `contact@mindmedixai.health`  
- **Location:** Ancona, Italy

MindMedix AI aspires to be a **trusted, European, hospital‑grade AI partner** for workforce and operations intelligence.
