import React from 'react'
import "./Header.css"
import CTA from './CTA'
import joy from "../../assets/joy.png"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
   <header>
    <div className="container header_container">
       <h5>Hello I'm</h5> 
       <h1>Pelumi Joy Fasunhanmi</h1>
       <h5 className='text-light'>Fullstack Engineer</h5>
       <CTA/>
       <HeaderSocial/>
       <div className="me">
        <img src={joy} alt="Joy" />
       </div>
      

       <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header