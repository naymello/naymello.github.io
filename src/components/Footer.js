import React from 'react'

import Logo from './Logo'

import { H4 } from '../styles/Headers'
import StyledFooter from '../styles/StyledFooter'

const Footer = () => {
  return (
    <StyledFooter>
      <Logo fill="#4B4B4B"/>
      <H4 style={{color: '#4B4B4B', margin: '0 20px'}}>Desenvolvido por Nay Mello</H4>
    </StyledFooter>
  )
}

export default Footer
