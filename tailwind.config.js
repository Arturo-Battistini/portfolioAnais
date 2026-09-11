/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Fondo oscuro reorientado a un negro/carbón cálido (antes navy #0A192F)
        darkblue: '#1A1416',
        card: '#241D1F',
        cardHover: '#332A2C',
        // Acento reorientado a un tono burdeos/rosado (antes verde-menta)
        accent: '#E38FA0',
        accentDark: '#B96A7A',
        titleText: '#E9E4D8',
        pText: '#A39AA0',
        leadText: '#F1ECE3'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '700px' },
        xsm: { max: '450px' }
      }
    }
  }
}
