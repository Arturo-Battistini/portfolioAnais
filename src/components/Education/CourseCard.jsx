import React from 'react'
import { AcademicCapIcon } from '@heroicons/react/24/solid'

const CourseCard = ({ title, description }) => {
  return (
    <div className='card border border-accent/10 hover:border-accent/30 p-4 rounded-lg bg-card hover:bg-cardHover transition-all duration-300'>
      <div className='header-card flex justify-between mb-3'>
        <AcademicCapIcon className='w-7 h-7 fill-accent' />
      </div>
      <div className='body-card'>
        <h3 className='font-bold text-titleText'>{title}</h3>
        <p className='text-pText'>{description}</p>
      </div>
    </div>
  )
}

export default CourseCard
