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

  disableNav = () => {
    this.setState({
      active: false
    })
  }

  render() {
    return (
      <Navbar active={this.state.active}>
        <Wrapper>
          <Logo backgroundColor="#44DDFF" logoColor="#003946" />
          <ul>
            <li><StyledLink to="/#sobre" onClick={this.disableNav}>Sobre mim</StyledLink></li>
            <li><StyledLink to="/#tecnologias" onClick={this.disableNav}>Tecnologias</StyledLink></li>
            <li><StyledLink to="/#projetos" onClick={this.disableNav}>Meus projetos</StyledLink></li>
            <li><StyledLink to="/curriculo.pdf" onClick={this.disableNav}>Currículo</StyledLink></li>
          </ul>
          <img src={hamburger} onClick={this.toggleNav} />
        </Wrapper>
      </Navbar>
    )
  }
}

export default Navigation
