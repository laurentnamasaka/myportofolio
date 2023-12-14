import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
     <div className="container.header__container">
          <h5>Hello, I'm</h5>
          <h1>Laurent Namasaka</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />

          <headerSocials />

 {/*Code for the Image*/}
          <div className="me">
            <img src={ME} alt="me" />
          
     </div>

{/*Code fot the Scrolldown link*/}
    <a href="#contact" className="scroll__down">Scroll Down</a>
     </div>
    </header>
  )
}

export default header