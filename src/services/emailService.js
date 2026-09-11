import emailjs from 'emailjs-com'
import { profile } from '../data/profile'

/**
 * Servicio de envío de correo para el formulario de contacto, basado en
 * EmailJS (https://www.emailjs.com/).
 *
 * ⚠️ DEMO: los identificadores de abajo son placeholders y NO son válidos.
 * El formulario se ve y se valida correctamente, pero no enviará correos
 * reales hasta que se sustituyan por las credenciales de una cuenta propia
 * de EmailJS (service ID, template ID y public key).
 */
export const EmailService = {
  serviceId: 'service_demo_id',
  templateId: 'template_demo_owner',
  confirmationTemplateId: 'template_demo_client',
  publicKey: 'DEMO_PUBLIC_KEY',

  init () {
    emailjs.init(this.publicKey)
  },

  sendEmailToOwner (formData) {
    const templateParams = {
      to_email: profile.email,
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email
    }

    return emailjs.send(this.serviceId, this.templateId, templateParams)
  },

  sendConfirmationToClient (formData) {
    const templateParams = {
      to_email: formData.email,
      to_name: formData.name,
      message: formData.message
    }

    return emailjs.send(this.serviceId, this.confirmationTemplateId, templateParams)
  },

  async sendContactEmail (formData) {
    try {
      const emailToOwner = this.sendEmailToOwner(formData)
      const confirmationToClient = this.sendConfirmationToClient(formData)

      await Promise.all([emailToOwner, confirmationToClient])
      return { success: true }
    } catch (error) {
      console.error('Error sending email:', error)
      return { success: false, error }
    }
  },

  // Evita enviar varios mensajes seguidos: recuerda durante 24h que ya se envió uno
  setEmailSent () {
    const expirationTime = new Date().getTime() + (24 * 60 * 60 * 1000)
    const data = { sent: true, expiration: expirationTime }
    localStorage.setItem('contactEmailSent', JSON.stringify(data))
  },

  isEmailSentRecently () {
    const stored = localStorage.getItem('contactEmailSent')
    if (!stored) return false

    try {
      const data = JSON.parse(stored)
      const now = new Date().getTime()

      if (now > data.expiration) {
        localStorage.removeItem('contactEmailSent')
        return false
      }

      return data.sent
    } catch {
      localStorage.removeItem('contactEmailSent')
      return false
    }
  },

  clearEmailSentFlag () {
    localStorage.removeItem('contactEmailSent')
  }
}
