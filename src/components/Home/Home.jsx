import React from 'react'
import { useLanguage } from '../../context/useLanguage'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Strengths from '../Strengths/Strengths'
import Tools from '../Tools/Tools'
import Education from '../Education/Education'
import Contact from '../Contact/Contact'
import EmailSidebar from '../Sidebar/EmailSidebar'
import SocialSidebar from '../Sidebar/SocialSidebar'

const Home = () => {
  const { isMobileMenuOpen } = useLanguage()

  return (
    <>
      <Header />
      <main className={`mt-[72px] w-[90%] flex flex-col gap-4 sm:w-11/12 ${isMobileMenuOpen ? 'sm:blur-sm' : ''}`}>
        <Hero />
        <About />
        <Strengths />
        <Tools />
        <Education />
        <Contact />
        <EmailSidebar />
        <SocialSidebar />
      </main>
    </>
  )
}

export default Home
