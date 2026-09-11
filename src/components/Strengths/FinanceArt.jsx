import React from 'react'

/**
 * Ilustraciones abstractas en duotono (navy + acento) que acompañan cada
 * fortaleza — no hay capturas de pantalla que mostrar porque esto no es un
 * catálogo de proyectos, sino de capacidades.
 */
const ICONS = {
  sii: (
    <>
      <rect x='120' y='70' width='160' height='190' rx='10' className='fill-card' stroke='currentColor' strokeWidth='3' />
      <line x1='150' y1='115' x2='250' y2='115' stroke='currentColor' strokeWidth='4' strokeLinecap='round' />
      <line x1='150' y1='140' x2='250' y2='140' stroke='currentColor' strokeWidth='4' strokeLinecap='round' opacity='0.6' />
      <line x1='150' y1='165' x2='220' y2='165' stroke='currentColor' strokeWidth='4' strokeLinecap='round' opacity='0.6' />
      <path d='M200 190 v45 m0 0 l-18 -18 m18 18 l18 -18' stroke='currentColor' strokeWidth='5' fill='none' strokeLinecap='round' strokeLinejoin='round' />
      <circle cx='200' cy='60' r='26' className='fill-none' stroke='currentColor' strokeWidth='3' opacity='0.5' />
    </>
  ),
  audit: (
    <>
      <line x1='200' y1='60' x2='200' y2='230' stroke='currentColor' strokeWidth='4' />
      <line x1='120' y1='230' x2='280' y2='230' stroke='currentColor' strokeWidth='5' strokeLinecap='round' />
      <line x1='90' y1='95' x2='310' y2='95' stroke='currentColor' strokeWidth='4' />
      <path d='M90 95 l-30 55 a32 20 0 0 0 60 0 z' className='fill-card' stroke='currentColor' strokeWidth='3' />
      <path d='M310 95 l-30 55 a32 20 0 0 0 60 0 z' className='fill-card' stroke='currentColor' strokeWidth='3' />
      <circle cx='200' cy='60' r='16' fill='currentColor' opacity='0.8' />
    </>
  ),
  erp: (
    <>
      <ellipse cx='200' cy='90' rx='70' ry='24' className='fill-card' stroke='currentColor' strokeWidth='3' />
      <path d='M130 90 v90 a70 24 0 0 0 140 0 v-90' className='fill-card' stroke='currentColor' strokeWidth='3' />
      <path d='M130 135 a70 24 0 0 0 140 0' className='fill-none' stroke='currentColor' strokeWidth='3' opacity='0.6' />
      <path d='M270 190 l25 -14 -25 -14 v9 h-25 v10 h25 z' fill='currentColor' opacity='0.85' />
    </>
  ),
  taxClose: (
    <>
      <rect x='110' y='70' width='180' height='160' rx='10' className='fill-card' stroke='currentColor' strokeWidth='3' />
      <line x1='110' y1='105' x2='290' y2='105' stroke='currentColor' strokeWidth='3' />
      <line x1='150' y1='55' x2='150' y2='85' stroke='currentColor' strokeWidth='5' strokeLinecap='round' />
      <line x1='250' y1='55' x2='250' y2='85' stroke='currentColor' strokeWidth='5' strokeLinecap='round' />
      {[0, 1, 2].map((row) => (
        <React.Fragment key={row}>
          {[0, 1, 3].map((col) => (
            <rect key={col} x={140 + col * 33} y={130 + row * 30} width='20' height='16' rx='3' fill='currentColor' opacity={col === 3 ? 0.9 : 0.35} />
          ))}
        </React.Fragment>
      ))}
    </>
  ),
  payroll: (
    <>
      <circle cx='150' cy='140' r='42' className='fill-card' stroke='currentColor' strokeWidth='3' />
      <circle cx='215' cy='140' r='42' className='fill-card' stroke='currentColor' strokeWidth='3' opacity='0.9' />
      <text x='150' y='150' textAnchor='middle' fontSize='30' fontWeight='700' fill='currentColor'>€</text>
      <text x='215' y='150' textAnchor='middle' fontSize='30' fontWeight='700' fill='currentColor' opacity='0.9'>€</text>
      <path d='M180 205 h50' stroke='currentColor' strokeWidth='4' strokeLinecap='round' opacity='0.6' />
    </>
  ),
  aml: (
    <>
      <path d='M200 55 l75 28 v55 c0 55 -33 92 -75 108 -42 -16 -75 -53 -75 -108 v-55 z' className='fill-card' stroke='currentColor' strokeWidth='3' />
      <path d='M170 150 l22 22 42 -48' fill='none' stroke='currentColor' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round' />
    </>
  )
}

const FinanceArt = ({ variant = 'sii', className = '' }) => {
  return (
    <svg viewBox='0 0 400 300' className={`w-full h-full text-accent ${className}`} preserveAspectRatio='xMidYMid meet'>
      <rect width='400' height='300' className='fill-card' />
      {/* Grilla decorativa de puntos, guiño al logo original */}
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={20 + c * 50} cy={20 + r * 48} r='1.6' className='fill-pText' opacity='0.25' />
        ))
      )}
      {ICONS[variant] || ICONS.sii}
    </svg>
  )
}

export default FinanceArt
