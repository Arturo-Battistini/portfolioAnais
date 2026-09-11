import React, { createContext, useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const AppContext = createContext()

/**
 * Estado global mínimo del sitio: idioma (ES/EN) y estado del menú móvil.
 * El portafolio es puramente informativo, por lo que no se mantiene
 * estado de formularios/listas en localStorage a nivel global.
 */
export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(false) // false = Español, true = English

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
    Aos.refresh()
  }, [])

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      isMobileMenuOpen,
      setIsMobileMenuOpen
    }}>
      {children}
    </AppContext.Provider>
  )
}
