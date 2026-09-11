import React from 'react'
import { useLanguage } from '../../context/useLanguage'
import FinanceArt from './FinanceArt'

/**
 * Tarjeta simple de fortaleza: una capacidad concreta contada en primera
 * persona, con una ilustración temática y algunas etiquetas relacionadas.
 */
const StrengthCard = ({ variant, rowDirection, titleDirection, tecDirection, title, description, tags = [] }) => {
  const { language } = useLanguage()

  return (
    <div className={`case-item flex ${rowDirection} sm:flex-col sm:rounded-lg sm:overflow-hidden sm:border sm:border-accent/10`}>

      <div className='case-item_img-container w-[60%] bg-card rounded-lg sm:w-full sm:h-48 sm:rounded-none sm:shrink-0'>
        <FinanceArt variant={variant} className='rounded-lg sm:rounded-none' />
      </div>

      <div className={`case-item_txt-container w-1/2 flex flex-col gap-2 justify-center ${titleDirection}
          sm:w-full sm:p-5 sm:gap-3 sm:text-left sm:bg-card`}>
        <div className='case-title_container sm:text-left'>
          <h3 className='card-title'>
            {title[language ? 'en' : 'es']}
          </h3>
        </div>
        <div className='case-content bg-card sm:bg-transparent'>
          <p className='text-pText w-[100%] bg-card sm:bg-transparent h-full rounded-sm p-4 sm:p-0 sm:text-left'>
            {description[language ? 'en' : 'es']}
          </p>
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

export default StrengthCard
