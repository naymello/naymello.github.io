import React from 'react'

import Logo from './Logo'

import { H4 } from '../styles/Headers'
import StyledFooter from '../styles/StyledFooter'
import Wrapper from '../styles/Wrapper'

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Logo backgroundColor="#4B4B4B" logoColor="#040404" />
        <H4 style={{ color: '#4B4B4B', margin: '0 20px' }}>Desenvolvido por Nay Mello</H4>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer
