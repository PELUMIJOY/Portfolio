import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Service from './components/Service/Service'

import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Service />
    <Contact />
    <Experience />
    <Portfolio />
    <About />
    <Footer />
    </div>
  )
}

export default App