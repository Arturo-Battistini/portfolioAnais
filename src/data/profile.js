/**
 * Datos reales de contacto y perfil de Anais, validados por ella
 * (ver CONTENIDO_WEB_ANAIS.md en la raíz del proyecto). Única fuente de
 * verdad: tanto la web como la página /cv leen de aquí, para que nunca
 * queden desincronizadas.
 *
 * Reglas de privacidad acordadas con ella (no cambiar sin confirmar):
 * - No publicar el teléfono en la web (sí puede ir dentro de los PDF, que
 *   ella misma preparó y controla).
 * - No mostrar edad, nacionalidad, estado civil ni permiso de trabajo.
 * - Nivel de inglés real: A2 — nunca presentarlo como fluido.
 */
export const profile = {
  name: 'Anais Rojas',
  fullName: 'Anais José Rojas Agelvis',
  location: { es: 'Madrid, España', en: 'Madrid, Spain' },
  email: 'arojasdbatt@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anais-rojas-8248a5399/',
  cv: {
    es: '/cv/CV_Anais_Rojas_ES.pdf',
    en: '/cv/CV_Anais_Rojas_EN.pdf'
  }
}

export const summary = {
  es: 'Contable con más de 10 años de experiencia, casi 8 de ellos en un despacho de asesoría en Chile del que soy socia desde 2021, gestionando la contabilidad, los impuestos y las nóminas de pymes de los sectores comercial, construcción y servicios. Experiencia en supervisión y formación de equipos, cierre del ejercicio, planificación fiscal y gestión laboral completa (nóminas, contratos y finiquitos). Actualmente formándome en normativa contable, fiscal y laboral española y en ContaSol, con capacidad demostrada para adaptarme a nuevos sistemas y trabajar de forma autónoma por objetivos.',
  en: 'Accountant with over 10 years of experience, nearly 8 of them at an accounting and tax advisory firm in Chile where I have been a partner since 2021, managing bookkeeping, taxes and payroll for SMEs in the trade, construction and services sectors. Experienced in team supervision and training, year-end closing, tax planning and end-to-end payroll and labour administration (payroll, employment contracts and final settlements). Currently training in Spanish accounting, tax and labour regulations and ContaSol, with a proven ability to adapt to new systems and work autonomously towards objectives.'
}

export const education = [
  {
    es: { title: 'Licenciatura en Contaduría Pública', place: 'Universidad del Zulia · Maracaibo, Venezuela', note: 'Equivalencia a Grado en España: en preparación' },
    en: { title: 'Bachelor’s Degree in Public Accounting', place: 'Universidad del Zulia · Maracaibo, Venezuela', note: 'Recognition as equivalent to a Spanish Bachelor’s degree: in preparation' },
    year: '2014'
  },
  {
    es: { title: 'Postgrado en Gerencia Empresarial', place: 'Universidad Rafael Belloso Chacín (URBE) · Maracaibo, Venezuela', note: '3 semestres cursados' },
    en: { title: 'Postgraduate Studies in Business Management', place: 'Universidad Rafael Belloso Chacín (URBE) · Maracaibo, Venezuela', note: '3 semesters completed' },
    year: '2016'
  }
]

export const training = [
  {
    es: { title: 'Gestión contable de una empresa con ContaSol', note: 'Configuración de empresa, asientos, control y cierre del ejercicio.', status: 'En curso · finaliza septiembre 2026' },
    en: { title: 'Accounting Management with ContaSol', note: 'Company setup, journal entries, control and year-end closing.', status: 'In progress · ending September 2026' }
  },
  {
    es: { title: 'Gestión de relaciones laborales', note: 'Nóminas, contratos, altas y bajas en la Seguridad Social y retenciones de IRPF.', status: 'Agosto 2026' },
    en: { title: 'Labour Relations Management', note: 'Payroll, employment contracts, Social Security registrations/terminations and income tax withholdings.', status: 'August 2026' }
  },
  {
    es: { title: 'Gestión contable general, de costes y gestión fiscal (60h)', note: 'Estados financieros, costes, presupuestos y obligaciones fiscales.', status: '2026' },
    en: { title: 'General and Cost Accounting and Tax Management (60h)', note: 'Financial statements, costs, budgets and tax obligations.', status: '2026' }
  }
]

// Categorías de herramientas y conocimientos reales (para la sección "Herramientas y Software")
export const toolCategories = {
  accounting: [
    { name: 'Excel avanzado', level: '95%', desc: { es: 'Modelos, tablas dinámicas', en: 'Models, pivot tables' } },
    { name: 'Nubox', level: '90%', desc: { es: 'Contabilidad (Chile)', en: 'Accounting (Chile)' } },
    { name: 'Contalive / Nowxia', level: '85%', desc: { es: 'Contabilidad y facturación', en: 'Accounting & invoicing' } },
    { name: 'SAP', level: '65%', desc: { es: 'Registro de producción', en: 'Production records' } }
  ],
  payroll: [
    { name: 'Nóminas y contratos', level: '95%', desc: { es: 'Ciclo laboral completo', en: 'End-to-end payroll' } },
    { name: 'Finiquitos y despidos', level: '90%', desc: { es: 'Documentación laboral', en: 'Labour documentation' } },
    { name: 'Altas y bajas', level: '90%', desc: { es: 'Ante autoridad laboral', en: 'With labour authority' } },
    { name: 'Saint', level: '80%', desc: { es: 'Gestión y cobros', en: 'Management & collections' } }
  ],
  spain: [
    { name: 'ContaSol', level: '45%', desc: { es: 'En formación (SEPE)', en: 'In training (SEPE)' } },
    { name: 'PGC', level: '35%', desc: { es: 'Plan General Contable', en: 'Spanish GAAP' } },
    { name: 'IVA / IRPF España', level: '35%', desc: { es: 'Normativa fiscal', en: 'Tax regulations' } },
    { name: 'Seguridad Social', level: '30%', desc: { es: 'Cotizaciones', en: 'Contributions' } }
  ],
  languages: [
    { name: 'Español', level: '100%', desc: { es: 'Nativo', en: 'Native' } },
    { name: 'Italiano', level: '40%', desc: { es: 'A2 certificado', en: 'A2, certified' } },
    { name: 'Inglés', level: '35%', desc: { es: 'A2', en: 'A2' } }
  ]
}

// Herramientas de uso diario, para la sección "Sobre mí"
export const dailyTools = ['Nubox', 'Contalive / Nowxia', 'SAP', 'Saint', 'Excel avanzado', 'Google Drive']
