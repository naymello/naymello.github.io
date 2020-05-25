import React from 'react'

import Logo from './Logo'

import Navbar from '../styles/Navbar'
import Wrapper from '../styles/Wrapper'

import hamburger from '../assets/hamburger.svg'

const Header = () => {
  return (
    <Navbar>
      <Wrapper style={{display: 'flex', padding: '0 20px'}}>
        <Logo fill="#000" />
        <img src={hamburger} style={{marginLeft: 'auto'}} />
      </Wrapper>
    </Navbar>
  )
}

export default Header
