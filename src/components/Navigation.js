import React from 'react'

import Logo from './Logo'

import Navbar from '../styles/Navbar'

import hamburger from '../assets/hamburger.svg'

const Header = () => {
  return (
    <Navbar>
      <Logo fill="#000" />
      <img src={hamburger} style={{marginLeft: 'auto'}} />
    </Navbar>
  )
}

export default Header
