import React from 'react'
import { Linkedin } from '../icons/Icons'
import { useLanguage } from '../../context/useLanguage'
import { profile } from '../../data/profile'

const SocialSidebar = () => {
  const { language } = useLanguage()

  return (
    <aside id='social' className='social-media-container flex flex-col justify-center items-center overflow-hidden'>
      <div className='social-media fixed bottom-[-20px] left-[calc(.9%)] flex flex-col items-center gap-5 text-pText
          after:bg-pText after:h-[120px] after:inline-block after:w-[1px] after:mt-0
          sm:flex sm:flex-row sm:w-full sm:static sm:justify-center sm:gap-7 sm:h-[50px] sm:after:hidden'>
        <Linkedin link={profile.linkedin} />
      </div>
      <span className='font-lato text-pText font-thin text-center hover:text-accent transition-all duration-300 text-[8px] mb-1 tracking-wider'>
        {!language
          ? 'Diseño inspirado en el portafolio original de Arturo Battistini, adaptado para un perfil contable.'
          : 'Design inspired by Arturo Battistini\'s original portfolio, adapted for an accounting profile.'}
      </span>
    </aside>
  )
}

export default SocialSidebar
