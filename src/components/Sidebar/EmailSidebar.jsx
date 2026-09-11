import React from 'react'
import { profile } from '../../data/profile'

const handleScrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const EmailSidebar = () => {
  return (
    <aside
      id="mail"
      className="flex flex-col gap-4 email-container fixed bottom-[-20px] right-[calc(.5%)] sm:bottom-0 sm:right-0 sm:relative -tracking-tighter text-pText text-xs
      sm:flex-row"
    >
      <span
        data-aos="fade-left"
        data-aos-delay="1200"
        onClick={handleScrollToContact}
        title={profile.email}
        className="email [writing-mode:vertical-lr] cursor-pointer transition-all duration-300 hover:text-accent hover:tracking-widest
        after:bg-pText after:h-[120px] after:inline-block after:w-[1px] after:mt-5
          sm:after:hidden sm:w-full sm:text-center sm:[writing-mode:horizontal-tb]"
      >
        {profile.email}
      </span>
    </aside>
  )
}

export default EmailSidebar
