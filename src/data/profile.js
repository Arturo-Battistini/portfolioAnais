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
    { name: { es: 'Excel avanzado', en: 'Advanced Excel' }, level: '95%', desc: { es: 'Modelos, tablas dinámicas', en: 'Models, pivot tables' } },
    { name: { es: 'Nubox', en: 'Nubox' }, level: '90%', desc: { es: 'Contabilidad (Chile)', en: 'Accounting (Chile)' } },
    { name: { es: 'Contalive / Nowxia', en: 'Contalive / Nowxia' }, level: '85%', desc: { es: 'Contabilidad y facturación', en: 'Accounting & invoicing' } },
    { name: { es: 'SAP', en: 'SAP' }, level: '65%', desc: { es: 'Registro de producción', en: 'Production records' } }
  ],
  payroll: [
    { name: { es: 'Nóminas y contratos', en: 'Payroll & contracts' }, level: '95%', desc: { es: 'Ciclo laboral completo', en: 'End-to-end payroll' } },
    { name: { es: 'Finiquitos y despidos', en: 'Terminations & severance' }, level: '90%', desc: { es: 'Documentación laboral', en: 'Labour documentation' } },
    { name: { es: 'Altas y bajas', en: 'Hires & terminations' }, level: '90%', desc: { es: 'Ante autoridad laboral', en: 'With labour authority' } },
    { name: { es: 'Saint', en: 'Saint' }, level: '80%', desc: { es: 'Gestión y cobros', en: 'Management & collections' } }
  ],
  spain: [
    { name: { es: 'ContaSol', en: 'ContaSol' }, level: '45%', desc: { es: 'En formación (SEPE)', en: 'In training (SEPE)' } },
    { name: { es: 'PGC', en: 'PGC' }, level: '35%', desc: { es: 'Plan General Contable', en: 'Spanish GAAP' } },
    { name: { es: 'IVA / IRPF España', en: 'VAT / IRPF Spain' }, level: '35%', desc: { es: 'Normativa fiscal', en: 'Tax regulations' } },
    { name: { es: 'Seguridad Social', en: 'Social Security' }, level: '30%', desc: { es: 'Cotizaciones', en: 'Contributions' } }
  ],
  languages: [
    { name: { es: 'Español', en: 'Spanish' }, level: '100%', desc: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Italiano', en: 'Italian' }, level: '40%', desc: { es: 'A2 certificado', en: 'A2, certified' } },
    { name: { es: 'Inglés', en: 'English' }, level: '35%', desc: { es: 'A2', en: 'A2' } }
  ]
}

// Herramientas de uso diario, para la sección "Sobre mí"
export const dailyTools = [
  { es: 'Nubox', en: 'Nubox' },
  { es: 'Contalive / Nowxia', en: 'Contalive / Nowxia' },
  { es: 'SAP', en: 'SAP' },
  { es: 'Saint', en: 'Saint' },
  { es: 'Excel avanzado', en: 'Advanced Excel' },
  { es: 'Google Drive', en: 'Google Drive' }
]
