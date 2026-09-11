import React from 'react'
import { useLanguage } from '../../context/useLanguage'
import { dailyTools } from '../../data/profile'

const About = () => {
  const { language } = useLanguage()

  return (

    <section data-aos="fade-right" data-aos-delay="150" id='about' className='text-pText aboutme-container default-box '>

      <div className='universal-title_description--container w-full  '>
        <h3 className='universal-title'> {!language ? 'Sobre mí' : 'About me'} </h3>
      </div>

      <div className='aboutme flex flex-nowrap sm:flex-col gap-5 '>

        <div className='aboutme-content w-[60%] flex flex-col gap-5 sm:w-full'>
          <article className='aboutme-description '>
          <p>
            {!language
              ? (
              <>
                Soy contable con más de 10 años de experiencia, casi 8 de ellos en un despacho de asesoría en Chile del que soy socia desde 2021. Allí gestiono la contabilidad, los impuestos y las nóminas de una cartera de pymes de los sectores comercial, construcción y servicios, y superviso y formo a un equipo de trabajo. Desde que me mudé a Madrid estoy formándome en la normativa contable, fiscal y laboral española y en ContaSol, aplicando la misma disciplina que me ha permitido adaptarme a distintos países, equipos y sistemas a lo largo de mi carrera.
              </>
                )
              : (
              <>
                I am an accountant with over 10 years of experience, nearly 8 of them at an advisory firm in Chile where I have been a partner since 2021. There I manage the bookkeeping, taxes and payroll of a portfolio of SMEs in the trade, construction and services sectors, and I supervise and train a team. Since moving to Madrid I have been training in Spanish accounting, tax and labour regulations and in ContaSol, applying the same discipline that has let me adapt to different countries, teams and systems throughout my career.
              </>
                )}
          </p>

          </article>
          <p className='text-accent font-semibold mb-2'>{!language
            ? 'Herramientas que uso a diario:'
            : 'Tools I use daily:'}</p>
          <article className='aboutme-list-container flex w-full '>
            <ul className='aboutme-list w-full flex flex-wrap gap-3'>
              {dailyTools.map((tool) => (
                <li key={tool} className='about-item'>{tool}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className='profile-picture w-[40%] h-[60%] sm:w-full'>

          <picture className='avatar-frame h-full flex justify-center relative

          before:content-[""] before:absolute before:top-[15px] before:ml-7 before:w-[100%] before:h-[100%]   before:rounded-md
          before:border-[1px] before:border-accent  before:mix-blend-hard-light
          before:z-30 before:hover:top-[12px] before:hover:ml-6 before:transition-all before:duration-300 sm:before:w-[80%]

          after:content-[""] after:absolute after:top-[0] after:w-[100%] after:h-[100%] after:rounded-md
          after:bg-accent after:mix-blend-multiply after:opacity-50 after:z-20
          after:transition-opacity after:duration-300 hover:after:opacity-0 sm:after:w-[80%]'>

            <img
              className='avatar-img relative z-10 transition-all duration-300 w-[100%] h-[100%] rounded-md object-cover object-top sm:w-[80%]'
              src='/profile.jpeg'
              alt='Anais Rojas'
            />
          </picture>
        </div>
      </div>

    </section>
  )
}

export default About
