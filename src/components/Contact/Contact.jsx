import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../context/useLanguage'
import { EmailService } from '../../services/emailService'

const FIELD_TEXT_COLOR = '#A39AA0' // debe coincidir con el color "pText" de tailwind.config.js

// Estilos CSS para que el autocompletado del navegador no rompa el tema oscuro
const autocompleteStyles = `
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  input:-webkit-autofill:visited,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:active,
  textarea:-webkit-autofill:visited {
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    -webkit-text-fill-color: ${FIELD_TEXT_COLOR} !important;
    background-color: transparent !important;
    background: transparent !important;
    color: ${FIELD_TEXT_COLOR} !important;
    transition: background-color 5000s ease-in-out 0s !important;
    width: 100% !important;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100% !important;
    min-width: 100% !important;
  }
`

const Contact = () => {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [isEmailSentRecently, setIsEmailSentRecently] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    EmailService.init()
    setIsEmailSentRecently(EmailService.isEmailSentRecently())

    const styleElement = document.createElement('style')
    styleElement.textContent = autocompleteStyles
    document.head.appendChild(styleElement)

    return () => {
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement)
      }
    }
  }, [])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = !language ? 'El nombre es requerido' : 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = !language ? 'El email es requerido' : 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = !language ? 'El email no es válido' : 'Email is not valid'
    }

    if (!formData.message.trim()) {
      newErrors.message = !language ? 'El mensaje es requerido' : 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleInputBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))

    const fieldErrors = {}
    if (!formData[name]?.trim()) {
      fieldErrors[name] = !language ? 'Este campo es requerido' : 'This field is required'
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(formData[name])) {
      fieldErrors[name] = !language ? 'El email no es válido' : 'Email is not valid'
    } else {
      fieldErrors[name] = ''
    }

    setErrors((prev) => ({ ...prev, ...fieldErrors }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return
    if (isSubmitting || isEmailSentRecently) return

    setIsSubmitting(true)

    try {
      const result = await EmailService.sendContactEmail(formData)

      if (result.success) {
        setShowSuccessMessage(true)
        EmailService.setEmailSent()
        setIsEmailSentRecently(true)
        setFormData({ name: '', email: '', message: '' })

        setTimeout(() => setShowSuccessMessage(false), 5000)
      } else {
        alert(!language
          ? 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
          : 'There was an error sending the message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert(!language
        ? 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
        : 'There was an error sending the message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClasses = (name) => `w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors bg-transparent focus:border-accent ${
    touched[name] && errors[name] ? 'border-red-500' : 'border-[#e38fa054]'
  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`

  return (
    <section
      id="contact"
      className="mb-5 text-pText Contact default-box p-10 gap-5 h-[90vh]"
      data-aos="zoom-in"
      data-aos-delay="150"
    >
      <div className="mini-title">
        <h5>{!language ? '¿Qué sigue?' : 'What is next?'}</h5>
      </div>

      <div className="contact-title text-center">
        <h2 className="text-titleText text-[clamp(15px,8vw,50px)] leading-[5rem] sm:leading-[2.5rem] opacity-80">
          {!language ? 'Contáctame' : 'Get In Touch'}
        </h2>
      </div>

      {showSuccessMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
          {!language
            ? '¡Mensaje enviado exitosamente! Te responderé pronto.'
            : 'Message sent successfully! I will reply soon.'}
        </div>
      )}

      {isEmailSentRecently && !showSuccessMessage && (
        <div className="bg-transparent m-0 text-2xl text-pText border-[#e38fa054] border rounded mb-4 text-center px-4 py-3 shadow-[0_5px_25px_#e38fa01a]">
          {!language
            ? 'He recibido tu mensaje. Te responderé en menos de 24 horas.'
            : 'I have received your message. I will reply in less than 24 hours.'}
        </div>
      )}

      {!isEmailSentRecently && (
        <form
          onSubmit={handleSubmit}
          className="w-full border-2 border-[#e38fa054] p-14 rounded-xl mx-auto space-y-4 shadow-[0_20px_40px_#e38fa01a] md:p-8"
        >
          <div className="flex justify-center align-center gap-5 sm:flex-col">
            <div className="w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                placeholder={!language ? 'Nombre' : 'Name'}
                disabled={isSubmitting}
                style={{ color: FIELD_TEXT_COLOR }}
                className={fieldClasses('name')}
              />
              {touched.name && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                placeholder="Email"
                disabled={isSubmitting}
                style={{ color: FIELD_TEXT_COLOR }}
                className={fieldClasses('email')}
              />
              {touched.email && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div className="w-full">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              rows="4"
              placeholder={!language ? 'Cuéntame sobre la vacante o en qué puedo ayudarte' : 'Tell me about the role or how I can help'}
              disabled={isSubmitting}
              style={{ color: FIELD_TEXT_COLOR }}
              className={`${fieldClasses('message')} resize-vertical min-h-[50px] max-h-[200px]`}
            />
            {touched.message && errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
            className={`contact-button customButton px-8 py-4 w-full mt-4 ${
              isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()
                ? 'opacity-50 cursor-not-allowed'
                : 'transform hover:scale-[0.99]'
            }`}
          >
            {isSubmitting
              ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  {!language ? 'Enviando...' : 'Sending...'}
                </div>
                )
              : (!language ? 'Enviar mensaje' : 'Send message')}
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact
