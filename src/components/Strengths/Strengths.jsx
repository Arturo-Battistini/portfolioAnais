import React from 'react'
import { useLanguage } from '../../context/useLanguage'
import StrengthDetailed from './StrengthDetailed'
import StrengthCard from './StrengthCard'
import { detailedStrengths, simpleStrengths } from '../../data/strengths'

const featuresTitle = { es: 'Lo que hago', en: 'What I do' }

// Alterna el lado imagen/texto en escritorio, como el resto del sitio.
const directionByIndex = (i) => i % 2 === 0
  ? { rowDirection: '', titleDirection: 'text-right', tecDirection: 'items-end', textDirection: 'text-right', simbolDirection: 'flex-row-reverse' }
  : { rowDirection: 'flex-row-reverse', titleDirection: 'text-left', tecDirection: 'items-start', textDirection: 'text-left', simbolDirection: '' }

const Strengths = () => {
  const { language } = useLanguage()

  return (
    <section data-aos="fade-right" data-aos-delay="150" id='strengths' className='cases default-box'>
      <div className='universal-title-description__container w-full mb-2'>
        <h3 className='universal-title'>
          {!language ? 'Fortalezas' : 'Strengths'}
        </h3>
      </div>

      <p className='text-pText text-sm italic max-w-2xl mb-8 sm:text-center sm:mb-4'>
        {!language
          ? 'Más que una lista de empleos (para eso está mi currículum), esto es lo que sé resolver y cómo puedo ayudar.'
          : 'More than a list of jobs (that’s what my résumé is for), this is what I know how to solve and how I can help.'}
      </p>

      <section className='cases-container flex flex-col gap-[100px]'>
        {detailedStrengths.map((item, i) => {
          const dir = directionByIndex(i)
          return (
            <StrengthDetailed
              key={item.title.es}
              variant={item.variant}
              title={item.title}
              featuresTitle={featuresTitle}
              content={item.content}
              tags={item.tags}
              {...dir}
            />
          )
        })}
        {simpleStrengths.map((item, i) => {
          const dir = directionByIndex(i + detailedStrengths.length)
          return (
            <StrengthCard
              key={item.title.es}
              variant={item.variant}
              title={item.title}
              description={item.description}
              tags={item.tags}
              rowDirection={dir.rowDirection}
              titleDirection={dir.titleDirection}
              tecDirection={dir.tecDirection}
            />
          )
        })}
      </section>
    </section>
  )
}

export default Strengths
