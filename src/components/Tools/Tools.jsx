import React, { useState } from 'react'
import { useLanguage } from '../../context/useLanguage'
import { toolCategories } from '../../data/profile'

const Tools = () => {
  const { language } = useLanguage()
  const lang = language ? 'en' : 'es'
  const [activeCategory, setActiveCategory] = useState('accounting')

  const categories = [
    { id: 'accounting', label: !language ? 'Contabilidad y Gestión' : 'Accounting & Management' },
    { id: 'payroll', label: !language ? 'Laboral y Nóminas' : 'Payroll & Labour' },
    { id: 'spain', label: !language ? 'Normativa española (en formación)' : 'Spanish Regulations (in training)' },
    { id: 'languages', label: !language ? 'Idiomas' : 'Languages' }
  ]

  return (
    <section data-aos="fade-right" data-aos-delay="150" id='tools' className='default-box p-8 sm:p-0'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h3 className='universal-title'>
          {!language ? 'Herramientas y Software' : 'Tools & Software'}
        </h3>

        <div className='mt-8 p-6 rounded-lg border border-accent/20 bg-card'>
          <div className='text-center'>
            <h4 className='text-lg font-semibold mb-4 text-accent'>
              {!language ? 'Mi enfoque profesional' : 'My professional approach'}
            </h4>
            <div className='max-w-4xl mx-auto'>
              <p className='text-sm leading-relaxed text-pText'>
                {!language
                  ? 'He trabajado con distintos programas contables en Chile, Ecuador y Venezuela (Nubox, Contalive, SAP, Saint), así que sé que dominar un software concreto es cuestión de tiempo. Lo que no cambia es la lógica contable de fondo, y esa es la parte que ya domino.'
                  : 'I have worked with different accounting software in Chile, Ecuador and Venezuela (Nubox, Contalive, SAP, Saint), so I know that mastering a specific program is just a matter of time. What stays the same is the underlying accounting logic, and that part I already have down.'}
              </p>
              <p className='text-sm leading-relaxed text-pText mt-3'>
                {!language
                  ? 'Estoy formándome activamente en ContaSol y en la normativa española (PGC, IVA, IRPF, Seguridad Social) — lo marco como "en formación" porque prefiero ser honesta sobre en qué punto estoy.'
                  : 'I am actively training in ContaSol and Spanish regulations (PGC, VAT, IRPF, Social Security) — I mark it "in training" because I prefer to be upfront about where I currently stand.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className='flex justify-center mb-8 sm:mb-0'>
        <div className='flex gap-2 p-1 bg-card rounded-lg border border-accent/20 flex-wrap justify-center'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 text-sm sm:px-2 ${
                activeCategory === category.id
                  ? 'bg-accent text-darkblue font-semibold'
                  : 'text-pText hover:text-accent hover:bg-cardHover'
              }`}
            >
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className='flex flex-wrap gap-3 w-full justify-center items-center '>
        {toolCategories[activeCategory].map((tool, index) => (
          <div
            key={index}
            className='bg-card rounded-lg p-3 border border-accent/10 hover:border-accent/30 transition-all duration-300 aspect-square flex flex-col justify-between h-40 xsm:w-full xsm:h-28'
          >
            <div className='text-center'>
              <div className='w-2 h-2 rounded-full mx-auto mb-2 bg-accent' />
              <h4 className='text-xs font-semibold text-titleText mb-1'>{tool.name[lang]}</h4>
              <p className='text-xs text-pText opacity-80'>{tool.desc[lang]}</p>
            </div>

            <div className='mt-auto'>
              <div className='flex justify-between items-center mb-2'>
                <span className='text-xs text-accent font-medium'>{tool.level}</span>
              </div>
              <div className='w-full bg-darkblue rounded-full h-1'>
                <div
                  className='h-1 rounded-full transition-all duration-1000 bg-accent shadow-[0_0_6px_#e38fa066]'
                  style={{ width: tool.level }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tools
