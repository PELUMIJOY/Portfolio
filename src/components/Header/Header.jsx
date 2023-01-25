import React from 'react'
import "./Header.css"
import CTA from './CTA'
import joy from "../../assets/joy.jpg"

const Header = () => {
  return (
   <header>
    <div className="container header_container">
       <h5>Hello I'm</h5> 
       <h1>Pelumi Joy Fasunhanmi</h1>
       <h5 className='text-light'>Fullstack Engineer</h5>
       <CTA/>
       <div className="me">
        <img src={joy} alt="Joy" />
       </div>
    </div>
   </header>
  )
}

export default Header