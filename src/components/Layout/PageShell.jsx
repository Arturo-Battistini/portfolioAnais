import React from 'react'

const PageShell = ({ children }) => {
  return (
    <div className='page-shell flex flex-col items-center max-w-[1200px] mx-auto my-0'>
      {children}
    </div>
  )
}

export default PageShell
