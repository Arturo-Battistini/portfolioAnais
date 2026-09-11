import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/useLanguage'
import '../../index.css'
import { Logo } from '../icons/Icons'
import { Bars3BottomRightIcon, XMarkIcon, GlobeAmericasIcon, DocumentTextIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const { language, setLanguage, isMobileMenuOpen, setIsMobileMenuOpen } = useLanguage()

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className="text-white flex justify-between w-full fixed h-[70px] bg-[#1a1416f7] backdrop-blur-sm z-10"
    >
      <section className="logo-container flex items-center pl-4 md:pl-2">
        <a data-aos="fade-down" href="/">
          <Logo />
        </a>
      </section>

      <section className={`info-container flex items-center sm:z-[-1] ${isMobileMenuOpen ? '' : 'sm:hidden '}`}>
        <div className="links-container flex justify-between items-center h-full w-full gap-3">
          <ul
            className={`list-links-container flex items-center gap-3 tracking-wider font-lato font-thin w-full
              ${isMobileMenuOpen
              ? 'sm:flex-col sm:absolute sm:top-[0] sm:right-0 sm:items-center sm:w-[70vw] sm:bg-[#1a1416f7] sm:h-screen sm:justify-start sm:pt-28 gap-6 sm:shadow-[-5px_2px_7px_-4px_rgba(0,0,0,0.7)]'
              : ''}`}
          >
            <div
              className="language-container flex gap-2 w-full justify-center items-center mt-1 p-[5px] rounded-[2px]"
              data-aos="fade-down"
            >
              <GlobeAmericasIcon className="world-icon w-4 h-4 fill-accent" />
              <span
                onClick={() => setLanguage(false)}
                className="cursor-pointer hover:text-accent transition-all duration-300 font-bold text-sm sm:text-lg text-pText"
              >
                SPA
              </span>
              <span
                onClick={() => setLanguage(true)}
                className="cursor-pointer hover:text-accent transition-all duration-300 font-bold text-sm sm:text-lg text-pText"
              >
                ENG
              </span>
            </div>

            <li data-aos="fade-down" data-aos-delay="100">
              <a
                className="list-items sm:text-lg sm:font-bold sm:before:hidden whitespace-nowrap"
                onClick={() => handleScroll('about')}
              >
                {!language ? 'Sobre mí' : 'About me'}
              </a>
            </li>
            <li data-aos="fade-down" data-aos-delay="300">
              <a
                className="list-items sm:text-lg sm:font-bold sm:before:hidden whitespace-nowrap"
                onClick={() => handleScroll('strengths')}
              >
                {!language ? 'Fortalezas' : 'Strengths'}
              </a>
            </li>
            <li data-aos="fade-down" data-aos-delay="300">
              <a
                className="list-items sm:text-lg sm:font-bold sm:before:hidden whitespace-nowrap"
                onClick={() => handleScroll('tools')}
              >
                {!language ? 'Herramientas' : 'Tools'}
              </a>
            </li>
            <li data-aos="fade-down" data-aos-delay="500">
              <a
                className="list-items sm:text-lg sm:font-bold sm:before:hidden whitespace-nowrap"
                onClick={() => handleScroll('education')}
              >
                {!language ? 'Formación' : 'Education'}
              </a>
            </li>
            <li data-aos="fade-down" data-aos-delay="700">
              <a
                className="list-items sm:text-lg sm:font-bold sm:before:hidden whitespace-nowrap"
                onClick={() => handleScroll('contact')}
              >
                {!language ? 'Contacto' : 'Contact'}
              </a>
            </li>
            <Link
              data-aos="fade-down"
              data-aos-delay="1200"
              className="header-button customButton py-1 px-5 flex items-center gap-1 sm:w-[80%] sm:m-0 mr-4"
              to="/cv"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <DocumentTextIcon className="w-4 h-4" />
              {!language ? 'Currículum' : 'Resume'}
            </Link>
          </ul>
        </div>
      </section>

      <section className="[display:none] Ham justify-center items-center mr-4 sm:flex">
        {isMobileMenuOpen
          ? (
          <XMarkIcon
            className="xmark w-10 h-10 text-accent stroke-accent"
            onClick={handleMobileMenu}
          />
            )
          : (
          <Bars3BottomRightIcon
            className="bars w-10 h-10 text-accent stroke-accent"
            onClick={handleMobileMenu}
          />
            )}
      </section>
    </header>
  )
}

export default Header
