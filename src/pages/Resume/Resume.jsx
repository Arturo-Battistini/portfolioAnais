import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/useLanguage'
import { ArrowLeftIcon, ArrowDownTrayIcon, PrinterIcon } from '@heroicons/react/24/solid'
import { profile, summary, education, training, toolCategories } from '../../data/profile'
import { experience } from '../../data/experience'

const Resume = () => {
  const { language } = useLanguage()
  const lang = language ? 'en' : 'es'

  const allTools = [
    ...toolCategories.accounting,
    ...toolCategories.payroll,
    ...toolCategories.spain
  ].map((t) => t.name[lang])

  return (
    <div className='w-full min-h-screen flex flex-col items-center px-4 py-10'>
      <div className='no-print w-full max-w-[820px] flex flex-wrap justify-between items-center gap-4 mb-6'>
        <Link to='/' className='flex items-center gap-2 text-pText hover:text-accent transition-colors text-sm'>
          <ArrowLeftIcon className='w-4 h-4' />
          {!language ? 'Volver al portafolio' : 'Back to portfolio'}
        </Link>

        <div className='flex flex-wrap gap-2'>
          <a href={profile.cv.es} download className='customButton flex items-center gap-2 px-4 py-2 text-sm'>
            <ArrowDownTrayIcon className='w-4 h-4' />
            {!language ? 'Descargar CV (ES)' : 'Download CV (ES)'}
          </a>
          <a href={profile.cv.en} download className='customButton flex items-center gap-2 px-4 py-2 text-sm'>
            <ArrowDownTrayIcon className='w-4 h-4' />
            {!language ? 'Descargar CV (EN)' : 'Download CV (EN)'}
          </a>
        </div>
      </div>

      <article className='w-full max-w-[820px] bg-card text-pText rounded-lg p-8 sm:p-5 print:bg-white print:text-black'>
        <header className='border-b border-accent/30 pb-5 mb-6'>
          <h1 className='text-titleText text-3xl font-bold'>{profile.fullName}</h1>
          <p className='text-accent font-semibold mt-1'>
            {!language ? 'Contable · Contabilidad, Fiscalidad y Nóminas' : 'Accountant · Accounting, Tax & Payroll'}
          </p>
          <p className='text-sm mt-3 opacity-90'>
            {profile.email} · {profile.location[lang]} · <a href={profile.linkedin} target='_blank' rel='noreferrer' className='hover:text-accent underline'>LinkedIn</a>
          </p>
        </header>

        <section className='mb-6'>
          <h2 className='text-titleText font-bold uppercase text-sm tracking-wide mb-2'>
            {!language ? 'Perfil profesional' : 'Professional profile'}
          </h2>
          <p className='text-sm leading-relaxed'>
            {summary[lang]}
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-titleText font-bold uppercase text-sm tracking-wide mb-3'>
            {!language ? 'Experiencia profesional' : 'Professional experience'}
          </h2>
          <div className='flex flex-col gap-4'>
            {experience.map((job, i) => {
              const t = job[lang]
              return (
                <div key={i}>
                  <div className='flex justify-between flex-wrap gap-1'>
                    <h3 className='text-titleText font-semibold text-sm'>{t.company} — <span className='font-normal'>{t.place}</span></h3>
                    <span className='text-accent text-xs whitespace-nowrap'>{t.period}</span>
                  </div>
                  {t.titles.length > 0
                    ? t.titles.map((title) => <p key={title} className='text-xs text-pText'>{title}</p>)
                    : <p className='text-xs text-pText'>{t.role}</p>}
                  {t.note && <p className='text-xs text-accent italic'>{t.note}</p>}
                  <ul className='mt-1 space-y-0.5'>
                    {t.bullets.map((b, j) => (
                      <li key={j} className='text-xs flex gap-1'><span className='text-accent'>▹</span><span>{b}</span></li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section className='mb-6'>
          <h2 className='text-titleText font-bold uppercase text-sm tracking-wide mb-2'>
            {!language ? 'Formación' : 'Education'}
          </h2>
          <ul className='space-y-1 mb-3'>
            {education.map((item, i) => (
              <li key={i} className='text-xs flex gap-1'>
                <span className='text-accent'>▹</span>
                <span>{item[lang].title} — {item[lang].place}. {item[lang].note}. ({item.year})</span>
              </li>
            ))}
          </ul>
          <p className='text-xs text-accent uppercase tracking-wide mb-1'>
            {!language ? 'Formación complementaria en España (SEPE)' : 'Additional training in Spain (SEPE)'}
          </p>
          <ul className='space-y-1'>
            {training.map((item, i) => (
              <li key={i} className='text-xs flex gap-1'>
                <span className='text-accent'>▹</span>
                <span>{item[lang].title} — {item[lang].status}.</span>
              </li>
            ))}
          </ul>
        </section>

        <div className='grid grid-cols-2 gap-6 sm:grid-cols-1'>
          <section>
            <h2 className='text-titleText font-bold uppercase text-sm tracking-wide mb-2'>
              {!language ? 'Herramientas' : 'Tools'}
            </h2>
            <ul className='flex flex-wrap gap-2'>
              {allTools.map((tool) => (
                <li key={tool} className='text-xs border border-accent/30 rounded px-2 py-1'>{tool}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className='text-titleText font-bold uppercase text-sm tracking-wide mb-2'>
              {!language ? 'Idiomas' : 'Languages'}
            </h2>
            <ul className='space-y-1'>
              {toolCategories.languages.map((item) => (
                <li key={item.name.es} className='text-xs'>{item.name[lang]} — {item.desc[lang]}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <button
        onClick={() => window.print()}
        className='no-print flex items-center gap-2 text-pText hover:text-accent transition-colors text-xs mt-6'
      >
        <PrinterIcon className='w-3.5 h-3.5' />
        {!language ? 'Imprimir esta página' : 'Print this page'}
      </button>
    </div>
  )
}

export default Resume
