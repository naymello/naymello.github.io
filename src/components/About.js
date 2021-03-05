import React from 'react'
import { StandardText, H2 } from '../styles/Typography';

const About = (props) => {
  return (
    <div ref={props.reference} style={{ opacity: 0, transform: 'translate(0, 20px)' }}>
      <H2 color="#80FFB3" id="sobre">Sobre mim</H2>
      <StandardText>
        Desde os 6 anos, quando descobri que o computador na verdade não era o monitor
        e sim a caixa grande embaixo, venho me interessando cada vez mais nessa máquina
        resolutora de problemas. Decidi, mais tarde, aprender um pouco sobre programação
        e gostei tanto que quis cursar técnico em informática para entrar nessa área de
        eterno aprendizado.
      </StandardText>
    </div>
  )
}

export default About
