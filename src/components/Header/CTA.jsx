import React from 'react'
import CV from '../../assets/CV.pdf'
const CTA = () => {
  return (
    <div>
        <a href={CV} download className='btn'>Downlaod CV</a>
        <a href="#Contact" className='btn btn-primary' >Let's Talk</a>
    </div>
  )
}

export default CTA