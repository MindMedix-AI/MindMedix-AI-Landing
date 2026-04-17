'use client'

import { useLanguage } from '@/context/LanguageContext'

const it = {
  title: 'Basato su dati reali, non su promesse',
  modelFactsTitle: 'Caratteristiche del modello',
  modelFacts: [
    'Dataset: 34 reparti reali di ospedali italiani (Ceschia et al., 2023)',
    'Fonte: Operations Research for Health Care, Elsevier',
    'Algoritmo: XGBoost multiclass (STABLE / AT RISK / CRISIS)',
    'Validazione: Leave-One-Ward-Out cross-validation — 10 fold, 170 campioni',
    'Accuratezza complessiva: 97.1% (LOWO CV)',
    'Crisis recall: 97% — 28 crisi su 29 rilevate in anticipo',
    'Macro F1 Score: 0.97 — bilanciato su tutti i 3 livelli di rischio',
    'Privacy: dati anonimi — nessun nome, nessun dato personale',
    'Conformità: GDPR Art.89 | EU AI Act ready | Non dispositivo medico',
  ],
  signalsTitle: 'I 5 segnali più predittivi (feature importance)',
  signals: [
    { label: 'Tasso di assenze (settimana corrente)', value: 72 },
    { label: 'Tasso di assenze (media 4 settimane)', value: 27 },
    { label: 'Overtime in crescita — trend-gated ★', value: 19 },
    { label: 'Trend assenze (vs media 4 settimane)', value: 17 },
    { label: 'Trend rifiuti turno', value: 11 },
  ],
}

const en = {
  title: 'Based on real data, not promises',
  modelFactsTitle: 'Model facts',
  modelFacts: [
    'Dataset: 34 real Italian hospital wards (Ceschia et al., 2023)',
    'Source: Operations Research for Health Care, Elsevier',
    'Algorithm: XGBoost multiclass (STABLE / AT RISK / CRISIS)',
    'Validation: Leave-One-Ward-Out CV — 10 folds, 170 samples',
    'Overall accuracy: 97.1% (LOWO CV)',
    'Crisis recall: 97% — 28 of 29 crises caught in advance',
    'Macro F1 Score: 0.97 — balanced across all 3 risk levels',
    'Privacy: anonymous data — no names, no personal data',
    'Compliance: GDPR Art.89 | EU AI Act ready | Not a medical device',
  ],
  signalsTitle: 'Top 5 predictive signals (feature importance)',
  signals: [
    { label: 'Absence rate (current week)', value: 72 },
    { label: 'Absence rate (4-week average)', value: 27 },
    { label: 'Rising overtime — trend-gated ★', value: 19 },
    { label: 'Absence trend (vs 4-week avg)', value: 17 },
    { label: 'Shift refusal trend', value: 11 },
  ],
}

export default function Transparency() {
  const { locale } = useLanguage()
  const content = locale === 'it' ? it : en

  return (
    <section className="py-24 px-6 bg-[#0a1929]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-16 text-center">
          {content.title}
        </h2>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="p-8 rounded-2xl bg-[#0d2137]/40 border border-white/5">
            <h3 className="text-xl font-semibold text-[#2d8cff] mb-8">
              {content.modelFactsTitle}
            </h3>
            <ul className="space-y-4">
              {content.modelFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2d8cff] mt-2.5" />
                  <span className="text-sm md:text-base leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">
              {content.signalsTitle}
            </h3>
            <div className="space-y-8">
              {content.signals.map((signal, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-300">{signal.label}</span>
                    <span className="text-sm font-semibold text-[#2d8cff]">{signal.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#2d8cff] to-[#2d8cff]/60 rounded-full"
                      style={{ width: `${signal.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
