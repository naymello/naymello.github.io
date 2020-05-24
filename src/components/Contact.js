import React from 'react'
import { Link } from "gatsby"

import { H2 } from '../styles/Headers'
import Text from '../styles/Text'

import emailIcon from '../assets/email.svg'
import whatsappIcon from '../assets/whatsapp.svg'

const Contact = () => {
  const LinkStyle = {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#040404',
    fontSize: '1.6rem'
  }

  return (
    <>
      <H2>Contato</H2>
      <Text>Gostou do que viu? Entre em contato comigo!</Text>
      <div style={{margin: '20px 0'}}>
        <img src={emailIcon} alt="Email" style={{margin: '0 20px'}}/>
        <Link style={LinkStyle} > naymellofilho@gmail.com </Link>
      </div>
      <div style={{margin: '20px 0'}}>
        <img src={whatsappIcon} alt="Whatsapp" style={{margin: '0 20px'}}/>
        <Link style={LinkStyle} > (19) 99509 8282 </Link>
      </div>
    </>
  )
}

export default Contact
