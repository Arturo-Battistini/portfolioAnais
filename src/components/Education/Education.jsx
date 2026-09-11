import React from 'react'
import CourseCard from './CourseCard'
import { useLanguage } from '../../context/useLanguage'
import { education, training } from '../../data/profile'

const Education = () => {
  const { language } = useLanguage()
  const lang = language ? 'en' : 'es'

  return (
    <section id='education' data-aos="fade-right" data-aos-delay="150" className='default-box text-white flex flex-col items-center gap-10'>
      <div className='universal-title_description--container w-full'>
        <h3 className='universal-title'>
          {!language ? 'Formación' : 'Education'}
        </h3>
      </div>

      <div className='w-full'>
        <p className='mini-title mb-3'>{!language ? 'Formación académica' : 'Academic background'}</p>
        <div className='card-container grid grid-cols-2 gap-4 sm:grid-cols-1'>
          {education.map((item, index) => (
            <CourseCard
              key={index}
              title={`${item[lang].title} — ${item.year}`}
              description={`${item[lang].place}. ${item[lang].note}.`}
            />
          ))}
        </div>
      </div>

      <div className='w-full'>
        <p className='mini-title mb-3'>{!language ? 'Formación complementaria en España (SEPE)' : 'Additional training in Spain (SEPE)'}</p>
        <div className='card-container grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2'>
          {training.map((item, index) => (
            <CourseCard
              key={index}
              title={item[lang].title}
              description={`${item[lang].note} ${item[lang].status}.`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
