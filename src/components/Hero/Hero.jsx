import React from 'react'
import { useLanguage } from '../../context/useLanguage'

const handleScroll = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Hero = () => {
  const { language } = useLanguage()

  return (
    <section
      data-aos="fade-right"
      data-aos-delay="300"
      id="home" className="presentation-container h-[100svh] flex flex-col justify-center p-3"
    >
      <div className="title-container">
        <h1 className="text-leadText titulo font-bold">
          Anais Rojas
        </h1>
      </div>

      <div className="sub-title_container">
        <h2 className="sub-title text-titleText titulo leading-[5rem] sm:leading-[2.5rem] opacity-80">
          {!language ? 'Contable' : 'Accountant'}
        </h2>
        <h4 className="sub-title text-titleText titulo leading-[5rem] sm:leading-[2.5rem] opacity-80 text-[clamp(30px,4vw,80px)] sm:text-[clamp(24px,5vw,80px)] bg-pan-left">
          {!language ? 'Contabilidad · Fiscalidad · Nóminas' : 'Accounting · Tax · Payroll'}
        </h4>
      </div>

      <div className="title-description-container mt-5">
        <p className="title-description text-pText text-md mb-5 bg-pan-left sm:text-[clamp(14px,3vw,1rem)]">
          {!language
            ? 'Más de 10 años de experiencia en contabilidad, fiscalidad y gestión laboral en Chile, Ecuador y Venezuela. Actualmente formándome en normativa española y en ContaSol, en búsqueda de nuevas oportunidades en Madrid.'
            : 'Over 10 years of experience in accounting, tax and payroll across Chile, Ecuador and Venezuela. Currently training in Spanish regulations and ContaSol, looking for new opportunities in Madrid.'}</p>

        <button className="customButton py-4 px-10">
          <a onClick={() => handleScroll('contact')} rel="noreferrer">
            {!language ? 'Contactame' : 'Contact me'}
          </a>
        </button>
      </div>
    </section>
  )
}

export default Hero
