import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router no resetea el scroll al cambiar de ruta (a diferencia de una
 * navegación normal de navegador). Sin esto, si el usuario hace scroll hacia
 * abajo en la home y luego navega a /cv (por ejemplo desde el menú móvil),
 * la página nueva se monta con el scroll donde haya quedado, mostrando
 * contenido a mitad de página en vez de empezar arriba.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
