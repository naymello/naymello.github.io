import React from 'react'

import { H2 } from '../styles/Headers'
import Button from '../styles/Button'

const MoreInfo = () => {
  return (
    <>
      <H2 color="#EDFF20" id="contato">Deseja saber mais?</H2>
      <Button primary onClick={() => { window.open('mailto:naymellofilho@gmail.com')} }>Entrar em contato</Button>
      <Button onClick={() => { window.open('curriculo.pdf')} }> Ver currículo</Button>
    </>
  )
}

export default MoreInfo
