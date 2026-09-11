import { useContext } from 'react'
import { AppContext } from './AppContext'

/**
 * Pequeño hook de conveniencia para no repetir useContext(AppContext) en
 * cada componente que solo necesita el idioma actual.
 */
export const useLanguage = () => useContext(AppContext)
