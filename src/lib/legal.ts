import type { Locale } from './translations'

export const privacyContent: Record<Locale, { title: string; lastUpdated: string; sections: { title: string; content: string }[] }> = {
  it: {
    title: 'Informativa sulla Privacy',
    lastUpdated: 'Ultimo aggiornamento: febbraio 2025',
    sections: [
      {
        title: '1. Titolare del trattamento',
        content: 'MindMedix AI (di seguito "noi", "nostro" o "MindMedix") è un\'iniziativa di intelligenza artificiale sanitaria con sede ad Ancona, Italia. Siamo responsabili del trattamento dei dati personali raccolti attraverso questo sito web e i nostri servizi.',
      },
      {
        title: '2. Dati che raccogliamo',
        content: 'Raccogliamo i dati che ci fornisci volontariamente quando: utilizzi il modulo di contatto (nome, email, organizzazione, tipo di interesse, messaggio); ti iscrivi a comunicazioni o aggiornamenti; o interagisci con noi in altro modo. Possiamo inoltre raccogliere automaticamente dati tecnici quali indirizzo IP, tipo di browser e dispositivo, e dati di utilizzo del sito (ad es. pagine visitate) attraverso cookie e tecnologie simili.',
      },
      {
        title: '3. Base giuridica e finalità',
        content: 'Trattiamo i tuoi dati in base al consenso (quando richiesto), all\'esecuzione di misure precontrattuali o contrattuali, e al nostro legittimo interesse per migliorare i nostri servizi e comunicare con te. Utilizziamo i dati per: rispondere alle tue richieste; gestire programmi pilota e partnership; inviare comunicazioni rilevanti; e migliorare il nostro sito web e servizi.',
      },
      {
        title: '4. Conservazione',
        content: 'Conserviamo i dati personali solo per il tempo necessario a soddisfare le finalità indicate o per adempiere agli obblighi legali. I dati del modulo di contatto sono generalmente conservati per un periodo massimo di 24 mesi a meno che non sia richiesta una conservazione più lunga per rapporto contrattuale o obblighi legali.',
      },
      {
        title: '5. Condivisione e trasferimenti',
        content: 'Non vendiamo né cediamo i tuoi dati personali a terzi per scopi di marketing. Possiamo condividere dati con fornitori di servizi (hosting, email, analytics) che agiscono come responsabili del trattamento ai sensi del GDPR, esclusivamente per le finalità indicate. I dati sono trattati nell\'Unione Europea; eventuali trasferimenti extra-UE saranno effettuati con garanzie adeguate.',
      },
      {
        title: '6. I tuoi diritti (GDPR)',
        content: 'In conformità con il Regolamento UE 2016/679 (GDPR), hai diritto a: accesso ai tuoi dati; rettifica; cancellazione ("diritto all\'oblio"); limitazione del trattamento; portabilità dei dati; opposizione al trattamento; e reclamo all\'autorità di vigilanza (Garante per la protezione dei dati personali in Italia). Per esercitare questi diritti, contattaci a privacy@mindmedixai.health.',
      },
      {
        title: '7. Cookie',
        content: 'Utilizziamo cookie essenziali per il funzionamento del sito e cookie analytics per comprendere come viene utilizzato. Puoi gestire le preferenze sui cookie tramite le impostazioni del tuo browser.',
      },
      {
        title: '8. Contatti',
        content: 'Per domande su questa informativa o sul trattamento dei dati: contact@mindmedixai.health. MindMedix AI, Ancona, Italia.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: February 2025',
    sections: [
      {
        title: '1. Data Controller',
        content: 'MindMedix AI ("we", "our", or "MindMedix") is a healthcare AI initiative based in Ancona, Italy. We are responsible for the processing of personal data collected through this website and our services.',
      },
      {
        title: '2. Data We Collect',
        content: 'We collect data you provide voluntarily when: using the contact form (name, email, organization, interest type, message); subscribing to communications or updates; or otherwise interacting with us. We may also automatically collect technical data such as IP address, browser and device type, and site usage data (e.g., pages visited) through cookies and similar technologies.',
      },
      {
        title: '3. Legal Basis and Purposes',
        content: 'We process your data on the basis of consent (where required), performance of pre-contractual or contractual measures, and our legitimate interest in improving our services and communicating with you. We use the data to: respond to your inquiries; manage pilot programs and partnerships; send relevant communications; and improve our website and services.',
      },
      {
        title: '4. Retention',
        content: 'We retain personal data only for as long as necessary to fulfil the purposes stated or to comply with legal obligations. Contact form data is generally retained for a maximum of 24 months unless longer retention is required for contractual relationship or legal obligations.',
      },
      {
        title: '5. Sharing and Transfers',
        content: 'We do not sell or transfer your personal data to third parties for marketing purposes. We may share data with service providers (hosting, email, analytics) acting as processors under the GDPR, solely for the purposes indicated. Data is processed within the European Union; any transfers outside the EU will be made with appropriate safeguards.',
      },
      {
        title: '6. Your Rights (GDPR)',
        content: 'In accordance with EU Regulation 2016/679 (GDPR), you have the right to: access your data; rectification; erasure ("right to be forgotten"); restriction of processing; data portability; object to processing; and lodge a complaint with a supervisory authority. To exercise these rights, contact us at privacy@mindmedixai.health.',
      },
      {
        title: '7. Cookies',
        content: 'We use essential cookies for site functionality and analytics cookies to understand how the site is used. You can manage cookie preferences through your browser settings.',
      },
      {
        title: '8. Contact',
        content: 'For questions about this policy or data processing: contact@mindmedixai.health. MindMedix AI, Ancona, Italy.',
      },
    ],
  },
}

export const termsContent: Record<Locale, { title: string; lastUpdated: string; sections: { title: string; content: string }[] }> = {
  it: {
    title: 'Termini e Condizioni',
    lastUpdated: 'Ultimo aggiornamento: febbraio 2025',
    sections: [
      {
        title: '1. Accettazione',
        content: 'L\'accesso e l\'utilizzo del sito web mindmedixai.health (il "Sito") e dei relativi servizi sono regolati dai presenti Termini e Condizioni ("Termini"). Utilizzando il Sito, accetti questi Termini. Se non accetti, non utilizzare il Sito.',
      },
      {
        title: '2. Servizi',
        content: 'MindMedix AI fornisce piattaforme di intelligenza predittiva per la forza lavoro e le operazioni ospedaliere. Il Sito presenta informazioni su tali servizi e consente di richiedere pilot, partnership e informazioni. I servizi effettivi sono regolati da accordi separati.',
      },
      {
        title: '3. Utilizzo consentito',
        content: 'Ti impegni a utilizzare il Sito in modo legale, rispettoso e in conformità con questi Termini. Non puoi: utilizzare il Sito per scopi illeciti; compromettere la sicurezza o l\'integrità del Sito; raccogliere dati di altri utenti senza autorizzazione; o utilizzare bot, scraper o mezzi automatizzati non autorizzati.',
      },
      {
        title: '4. Proprietà intellettuale',
        content: 'Tutti i contenuti del Sito (testi, grafici, loghi, design) sono di proprietà di MindMedix AI o concessi in licenza e sono protetti da leggi sulla proprietà intellettuale. Non puoi copiare, modificare o distribuire tali contenuti senza autorizzazione scritta.',
      },
      {
        title: '5. Limitazione di responsabilità',
        content: 'Il Sito e le informazioni ivi contenute sono forniti "così come sono". MindMedix AI non garantisce l\'assenza di errori o interruzioni. In misura massima consentita dalla legge, MindMedix AI non sarà responsabile per danni indiretti, consequenziali o punitivi derivanti dall\'utilizzo del Sito. I nostri servizi non costituiscono dispositivi medici e non sostituiscono il giudizio clinico.',
      },
      {
        title: '6. Link a siti terzi',
        content: 'Il Sito può contenere link a siti di terzi. Non siamo responsabili del contenuto o delle pratiche di tali siti. L\'accesso a siti terzi è a tuo rischio.',
      },
      {
        title: '7. Modifiche',
        content: 'Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. Le modifiche saranno efficaci dalla pubblicazione sul Sito. L\'utilizzo continuato del Sito dopo le modifiche costituisce accettazione dei nuovi Termini.',
      },
      {
        title: '8. Legge applicabile e foro',
        content: 'Questi Termini sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente il foro di Ancona.',
      },
      {
        title: '9. Contatti',
        content: 'Per domande sui presenti Termini: contact@mindmedixai.health. MindMedix AI, Ancona, Italia.',
      },
    ],
  },
  en: {
    title: 'Terms and Conditions',
    lastUpdated: 'Last updated: February 2025',
    sections: [
      {
        title: '1. Acceptance',
        content: 'Access to and use of the website mindmedixai.health (the "Site") and related services are governed by these Terms and Conditions ("Terms"). By using the Site, you accept these Terms. If you do not accept, do not use the Site.',
      },
      {
        title: '2. Services',
        content: 'MindMedix AI provides predictive intelligence platforms for workforce and hospital operations. The Site presents information about such services and allows you to request pilots, partnerships, and information. Actual services are governed by separate agreements.',
      },
      {
        title: '3. Permitted Use',
        content: 'You agree to use the Site in a lawful, respectful manner and in compliance with these Terms. You may not: use the Site for unlawful purposes; compromise the security or integrity of the Site; collect data of other users without authorization; or use bots, scrapers, or unauthorized automated means.',
      },
      {
        title: '4. Intellectual Property',
        content: 'All content on the Site (text, graphics, logos, design) is owned by MindMedix AI or licensed and is protected by intellectual property laws. You may not copy, modify, or distribute such content without written authorization.',
      },
      {
        title: '5. Limitation of Liability',
        content: 'The Site and information contained therein are provided "as is". MindMedix AI does not guarantee the absence of errors or interruptions. To the maximum extent permitted by law, MindMedix AI shall not be liable for indirect, consequential, or punitive damages arising from use of the Site. Our services do not constitute medical devices and do not replace clinical judgment.',
      },
      {
        title: '6. Links to Third-Party Sites',
        content: 'The Site may contain links to third-party sites. We are not responsible for the content or practices of such sites. Access to third-party sites is at your own risk.',
      },
      {
        title: '7. Modifications',
        content: 'We reserve the right to modify these Terms at any time. Modifications will be effective upon publication on the Site. Continued use of the Site after modifications constitutes acceptance of the new Terms.',
      },
      {
        title: '8. Governing Law and Jurisdiction',
        content: 'These Terms are governed by Italian law. For any dispute, the courts of Ancona shall have exclusive jurisdiction.',
      },
      {
        title: '9. Contact',
        content: 'For questions about these Terms: contact@mindmedixai.health. MindMedix AI, Ancona, Italy.',
      },
    ],
  },
}
