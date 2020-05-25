import React from 'react'

import Logo from './Logo'

import Navbar from '../styles/Navbar'
import Wrapper from '../styles/Wrapper'

import hamburger from '../assets/hamburger.svg'

const Navigation = () => {
  return (
    <Navbar>
      <Wrapper>
        <Logo fill="#000" />
        <img src={hamburger} style={{marginLeft: 'auto'}} />
      </Wrapper>
    </Navbar>
  )
}

export default Navigation
