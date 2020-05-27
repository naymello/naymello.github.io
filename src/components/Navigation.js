import React, { Component } from 'react'

import Logo from './Logo'

import Navbar from '../styles/Navbar'
import Wrapper from '../styles/Wrapper'
import StyledLink from '../styles/StyledLink'

import hamburger from '../assets/hamburger.svg'

class Navigation extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      active: false
    }
  }

  toggleNav = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }

  render() {
    return (
      <Navbar active={this.state.active}>
        <Wrapper>
          <Logo fill="#000" />
          <ul>
            <li><StyledLink to="/#sobre">Sobre mim</StyledLink></li>
            <li><StyledLink to="/#tecnologias">Tecnologias</StyledLink></li>
            <li><StyledLink to="/#projetos">Meus projetos</StyledLink></li>
            <li><StyledLink to="/#contato">Contato</StyledLink></li>
          </ul>
          <img src={hamburger} onClick={this.toggleNav}/>
        </Wrapper>
      </Navbar>
    )
  }
}

export default Navigation
