# Anais Rojas — Portafolio (Contable)

Portafolio bilingüe (ES/EN) para Anais Rojas, contable con más de 10 años de
experiencia en Chile, Ecuador y Venezuela, actualmente en Madrid formándose
en normativa española. Construido con **React + Vite + Tailwind CSS**.

Es un rediseño de un portafolio de desarrollo web preexistente: conserva su
identidad visual (fondo oscuro, animaciones AOS, tipografía Lato/Poppins,
acento de color) pero con contenido y estructura propios de un perfil
contable, y una paleta reorientada a negro carbón cálido + acento
burdeos/rosado.

## Contenido

Todo el contenido de texto (resumen, experiencia, formación, herramientas,
idiomas) proviene del CV validado por Anais — ver `CONTENIDO_WEB_ANAIS.md`
en la raíz del proyecto — y vive en una única fuente de datos para no
desincronizarse nunca entre la web y el CV descargable:

- `src/data/profile.js` — contacto, resumen, formación, herramientas, idiomas
- `src/data/experience.js` — historial laboral (usado en `/cv`)
- `src/data/strengths.js` — fortalezas/capacidades (usado en la home, con un
  enfoque temático y personal en vez de cronológico — para eso está el CV)

**Reglas de privacidad acordadas con ella (no romper sin confirmar):**
- El teléfono NO se muestra en la web (sí puede ir dentro de los PDF de CV,
  que ella misma preparó).
- No se muestra edad, nacionalidad, estado civil ni permiso de trabajo.
- Nivel de inglés real: A2 — nunca presentado como fluido.
- Terminología laboral: siempre "término local (equivalente en España)"; la
  normativa española se marca como "en formación", nunca como dominada.

**Formulario de contacto:** ya configurado con una cuenta real de EmailJS
(Gmail conectado a `arojasdbatt@gmail.com`); ver `src/services/emailService.js`.

## CV descargable

La ruta `/cv` (botón "Currículum" del header) permite descargar los PDF
reales en español o inglés (`public/cv/CV_Anais_Rojas_ES.pdf` y `_EN.pdf`),
además de mostrar un resumen del currículum en la propia página.

## Estructura

```
src/
  data/              Contenido real (perfil, experiencia, fortalezas)
  context/           Estado global (idioma, menú móvil)
  components/
    Header/          Barra de navegación
    Hero/            Sección de presentación (hero)
    About/           Sobre mí
    Strengths/       Fortalezas — capacidades reales, contadas en primera persona
    Tools/           Herramientas y software
    Education/       Formación académica y complementaria (SEPE)
    Contact/         Formulario de contacto (EmailJS)
    Sidebar/         Barras laterales de correo y LinkedIn
    icons/           Logotipo e iconos de redes
  pages/
    Resume/          Currículum web + descarga de PDF real (ES/EN), ruta /cv
```

## Scripts

```bash
npm install
npm run dev       # entorno de desarrollo
npm run build     # build de producción (carpeta dist/)
npm run preview   # previsualizar el build
npm run lint      # eslint
```

## Créditos

Diseño inspirado en el portafolio original de Arturo Battistini, adaptado
para un perfil contable.
