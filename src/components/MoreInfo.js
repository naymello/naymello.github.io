import React from 'react'

import { H2 } from '../styles/Typography'
import Button from '../styles/Button'

const MoreInfo = () => {
  return (
    <>
      <H2 color="#EDFF20" id="contato">Deseja saber mais?</H2>
      <Button primary fontColor="#FFF" backgroundColor="#000" onClick={() => { window.open('mailto:naymellodev@gmail.com') }}>Entrar em contato</Button>
      <Button fontColor="#000" backgroundColor="#000" onClick={() => { window.open('/curriculo.pdf') }}>Ver currículo</Button>
    </>
  )
}

export default MoreInfo
