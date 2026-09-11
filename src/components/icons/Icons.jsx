import React from 'react'

/**
 * Logotipo: monograma "AR" (Anais Rojas) enmarcado en un anillo fino,
 * en sustitución del logotipo original (iniciales "AB" en grilla de puntos).
 */
const Logo = () => {
  return (
    <svg className='logo w-9 h-9 cursor-pointer text-accent' viewBox='0 0 100 100' role='img' aria-label='Anais Rojas'>
      <circle cx='50' cy='50' r='44' fill='none' stroke='currentColor' strokeWidth='2.5' className='circulo' />
      <text
        x='50' y='63' textAnchor='middle'
        fontFamily="Georgia, 'Times New Roman', serif" fontWeight='700' fontSize='36'
        fill='currentColor'
      >
        AR
      </text>
    </svg>
  )
}

const Linkedin = ({ link }) => {
  return (
    <a href={link} target='_blank' className='hover:text-accent transition-all duration-200 ease-in hover:scale-110 h-full' rel='noreferrer'>
      <svg data-aos='fade-right' data-aos-delay='500' className='fill-pText max-w-[18px] cursor-pointer hover:fill-accent transition-all duration-200 ease-in hover:scale-110 h-full'
        xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 30 30'>
        <path d='M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z' />
      </svg>
    </a>
  )
}

export { Logo, Linkedin }
