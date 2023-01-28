import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"
const Contact = () => {
  const form= useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jv6r2fe', 'template_yfqweus', form.current, 'DKyShtCTeG2LJGTF1')
      

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMail className='contact-option-icon'/>
          <h4>Email</h4>
          <h5>faslusky@gmail.com</h5>
          <a href="mailto:faslusky@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact-option-icon'/>
          <h4>Messenger</h4>
          <h5>Joyce Fasunhanmi</h5>
          <a href="https://m.me/joyce.fasunhanmi" target="_blank">Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact-option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+2349036028379 </h5>
          <a href="https://api.whatsapp.com/send?phone+2349036028379" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required/>
          <input type="email" name="email" placeholder='Input your Email'  require/>
          <textarea name="message"rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn  btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact