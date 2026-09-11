/**
 * "Fortalezas" — no es un timeline de empleos (eso ya está en el CV
 * descargable, ver /cv). Aquí se cuenta, en clave personal y por
 * capacidades, qué sabe resolver Anais — a partir de logros 100% reales de
 * su experiencia (ver CONTENIDO_WEB_ANAIS.md), reorganizados por tema en
 * lugar de por empresa/fecha.
 */
export const detailedStrengths = [
  {
    variant: 'taxClose',
    title: { es: 'Contabilidad y cierre de ejercicio integral', en: 'Full-cycle bookkeeping & year-end closing' },
    featuresTitle: { es: 'Lo que hago', en: 'What I do' },
    content: {
      es: {
        mainDescription: 'Llevo la contabilidad de una cartera de empresas de principio a fin: registros, conciliaciones bancarias y cierre del ejercicio, con la planificación fiscal necesaria para que el cierre no traiga sorpresas.',
        features: [
          'Contabilidad completa y conciliaciones bancarias mensuales',
          'Liquidación de IVA y revisión cruzada de facturas emitidas y recibidas',
          'Estimación del impuesto anual de la empresa y de sus socios',
          'Revisión de estados financieros intermedios antes del cierre'
        ],
        highlights: [
          'Cartera de hasta 70 pymes gestionada de forma directa (actualmente 40)',
          'Más de 10 años cerrando ejercicios de comercio, construcción y servicios',
          'Planificación fiscal previa que evita sorpresas de última hora'
        ]
      },
      en: {
        mainDescription: 'I manage a portfolio of companies’ books end to end: entries, bank reconciliations and year-end closing, with the tax planning needed so closing never brings surprises.',
        features: [
          'Full-cycle bookkeeping and monthly bank reconciliations',
          'VAT filing and cross-checking of issued and received invoices',
          'Estimating annual company and shareholder taxes',
          'Reviewing interim financial statements before closing'
        ],
        highlights: [
          'Portfolio of up to 70 SMEs managed directly (currently 40)',
          'Over 10 years closing the books for trade, construction and services companies',
          'Pre-closing tax planning that avoids last-minute surprises'
        ]
      }
    },
    tags: {
      es: ['Cierre del ejercicio', 'Conciliación bancaria', 'Liquidación de IVA', 'Planificación fiscal'],
      en: ['Year-end closing', 'Bank reconciliation', 'VAT filing', 'Tax planning']
    }
  },
  {
    variant: 'payroll',
    title: { es: 'Gestión laboral y de nóminas', en: 'Payroll & labour administration' },
    featuresTitle: { es: 'Lo que hago', en: 'What I do' },
    content: {
      es: {
        mainDescription: 'Gestiono nóminas y contratos de principio a fin: altas, modificaciones, finiquitos y toda la documentación laboral que necesita un equipo para estar en regla.',
        features: [
          'Nóminas, contratos, anexos y finiquitos',
          'Registro de altas, bajas y modificaciones contractuales ante la autoridad laboral',
          'Cartas de despido y cierre de relaciones laborales',
          'Coordinación de plantillas repartidas en varios centros de trabajo'
        ],
        highlights: [
          'Plantillas de hasta 40 trabajadores repartidos en dos obras',
          'Gestión laboral integral sin depender de gestorías externas',
          'Adaptando ya este conocimiento a la normativa española de Seguridad Social e IRPF'
        ]
      },
      en: {
        mainDescription: 'I manage payroll and employment contracts end to end: hires, amendments, final settlements and all the paperwork a team needs to stay compliant.',
        features: [
          'Payroll, employment contracts, amendments and final settlements',
          'Registering hires, terminations and contract changes with the labour authority',
          'Dismissal letters and closing out employment relationships',
          'Coordinating workforces spread across several worksites'
        ],
        highlights: [
          'Workforces of up to 40 employees across two construction sites',
          'End-to-end labour administration without relying on outside agencies',
          'Already applying this to Spanish Social Security and income tax regulations'
        ]
      }
    },
    tags: {
      es: ['Nóminas', 'Contratos', 'Finiquitos', 'Seguridad Social (en formación)'],
      en: ['Payroll', 'Contracts', 'Final settlements', 'Social Security (in training)']
    }
  }
]

export const simpleStrengths = [
  {
    variant: 'audit',
    title: { es: 'Liderazgo y formación de equipos', en: 'Team leadership & training' },
    description: {
      es: 'Superviso y formo equipos, reparto carteras y tareas, y soy el primer punto de contacto para resolver dudas del día a día. Contribuí a que el despacho donde trabajo pasara de 20 a 189 clientes activos, lo que me llevó a entrar como socia en 2021.',
      en: 'I supervise and train teams, allocate portfolios and tasks, and I’m the first point of contact for day-to-day questions. I helped grow the firm I work at from 20 to 189 active clients, which led to me becoming a partner in 2021.'
    },
    tags: {
      es: ['Liderazgo de equipos', 'Formación', 'Captación de clientes'],
      en: ['Team leadership', 'Training', 'Client acquisition']
    }
  },
  {
    variant: 'sii',
    title: { es: 'Asesoramiento y relación con clientes', en: 'Client advisory & relationships' },
    description: {
      es: 'Acompaño a cada cliente nuevo desde el primer día: le explico sus obligaciones fiscales y de facturación, y traduzco la información contable en informes claros que realmente ayudan a tomar decisiones.',
      en: 'I support every new client from day one: explaining their tax and invoicing obligations, and turning accounting information into clear reports that actually help with decision-making.'
    },
    tags: {
      es: ['Asesoramiento fiscal', 'Atención al cliente', 'Informes de gestión'],
      en: ['Tax advisory', 'Client service', 'Management reports']
    }
  },
  {
    variant: 'erp',
    title: { es: 'Adaptación a nuevos sistemas y países', en: 'Adapting to new systems & countries' },
    description: {
      es: 'He trabajado con distintas normativas y sistemas contables en Chile, Ecuador y Venezuela, y ahora estoy formándome en la normativa española y en ContaSol. Aprender un sistema nuevo rápido y sin perder rigor es algo que ya he hecho varias veces.',
      en: 'I’ve worked with different regulations and accounting systems in Chile, Ecuador and Venezuela, and I’m now training in Spanish regulations and ContaSol. Learning a new system fast without losing rigor is something I’ve already done more than once.'
    },
    tags: {
      es: ['SAP', 'Nubox', 'ContaSol (en formación)', 'Multipaís'],
      en: ['SAP', 'Nubox', 'ContaSol (in training)', 'Multi-country']
    }
  },
  {
    variant: 'aml',
    title: { es: 'Mejora de procesos', en: 'Process improvement' },
    description: {
      es: 'Cuando algo no funciona, lo rediseño: implementé el trabajo colaborativo en la nube para centralizar la información de clientes y rehíce los informes que reciben, y en una fábrica rediseñé los partes de consumo en planta para que los datos fueran fiables.',
      en: 'When something isn’t working, I redesign it: I introduced cloud-based collaboration to centralise client information and reworked the reports clients receive, and at a factory I redesigned the plant consumption forms to make the data reliable.'
    },
    tags: {
      es: ['Google Drive', 'Mejora continua', 'Control de inventario'],
      en: ['Google Drive', 'Continuous improvement', 'Inventory control']
    }
  }
]
