import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'

import MyTitleContainer from '../styles/MyTitleContainer'
import { StyledName, Description, Introduction, H1 } from '../styles/Typography'
import Button from '../styles/Button'

const MyTitle = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      x: 0,
      ease: "power4.out",
      duration: 1
    })
  }, [])

  return (
    <MyTitleContainer ref={titleRef}>
      <Introduction>Oi, meu nome é</Introduction>
      <StyledName>Nay Mello</StyledName>
      <H1>Eu desenvolvo aplicações para a web.</H1>
      <Description>Sou um desenvolvedor de Valinhos - SP, formado técnico em Desenvolvimento de Sistemas se especializando em desenvolvimento web.</Description>
      <Button primary mainButton
        fontColor="#00242C"
        backgroundColor="#44DDFF"
        style={{ marginTop: '10vh' }}
        onClick={() => { window.open('mailto:naymellodev@gmail.com') }}
      >
        Entrar em contato
      </Button>
    </MyTitleContainer>
  )
}

export default MyTitle
