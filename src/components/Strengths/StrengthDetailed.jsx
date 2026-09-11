import React from 'react'
import { useLanguage } from '../../context/useLanguage'
import FinanceArt from './FinanceArt'

/**
 * Tarjeta detallada de fortaleza: descripción + lo que hace concretamente +
 * resultados/logros reales de su experiencia, agrupados por tema (no por
 * empresa/fecha — eso vive en el CV descargable).
 */
const StrengthDetailed = ({
  variant, rowDirection, titleDirection, tecDirection, textDirection, simbolDirection,
  title, content, featuresTitle, tags = []
}) => {
  const { language } = useLanguage()
  const lang = language ? 'en' : 'es'
  const selectedContent = content[lang]

  return (
    <div className={`case-item flex ${rowDirection} sm:flex-col sm:rounded-lg sm:overflow-hidden sm:border sm:border-accent/10`}>

      <div className='case-item_img-container w-[60%] bg-card rounded-lg sm:w-full sm:h-48 sm:rounded-none sm:shrink-0'>
        <FinanceArt variant={variant} className='rounded-lg sm:rounded-none' />
      </div>

      <div className={`case-item_txt-container w-1/2 flex flex-col gap-2 px-6 ${titleDirection} ${textDirection}
          sm:w-full sm:p-5 sm:gap-3 sm:text-left sm:bg-card`}>

        <div className='case-title_container sm:text-left'>
          <h3 className='card-title'>
            {title[lang]}
          </h3>
        </div>

        <div className='case-content bg-card sm:bg-transparent flex-1'>
          <div className='text-pText w-[100%] bg-card sm:bg-transparent h-full rounded-sm sm:p-0 sm:text-left'>
            <p className='text-pText leading-relaxed mb-3'>
              {selectedContent.mainDescription}
            </p>

            <div className='mb-3'>
              <h4 className='text-accent font-semibold text-xs uppercase tracking-wide mb-2'>
                {featuresTitle[lang]}
              </h4>
              <ul className='space-y-1'>
                {selectedContent.features.map((feature, index) => (
                  <li key={index} className={`text-pText text-xs flex items-start gap-1 ${simbolDirection} sm:flex-row`}>
                    <span className={`text-accent ${rowDirection === 'flex-row-reverse' ? '' : 'rotate-180'} sm:rotate-180`}> ▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-darkblue p-3 rounded-sm border-l-2 border-accent'>
              <h4 className='text-accent font-semibold text-xs uppercase tracking-wide mb-2'>
                {!language ? 'Resultados' : 'Results'}
              </h4>
              <ul className='space-y-1'>
                {selectedContent.highlights.map((highlight, index) => (
                  <li key={index} className={`text-pText text-xs flex items-start gap-1 ${simbolDirection} sm:flex-row`}>
                    <span className='text-accent'>•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={`case-tags text-pText text-xs flex flex-col gap-1 ${tecDirection} sm:items-start`}>
          <ul className='tags flex flex-wrap justify-between gap-3 mt-3 sm:justify-start'>
            {tags.map((tag) => (
              <li key={tag} className='about-item text-xs'>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StrengthDetailed
