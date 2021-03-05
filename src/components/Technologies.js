import React from 'react'

import { H2 } from '../styles/Typography'
import List from '../styles/List'

const Technologies = (props) => {
  return (
    <div ref={props.reference} style={{ opacity: 0, transform: 'translate(0, 60px)' }}>
      <H2 color="#B79EFF" id="tecnologias">
        Tecnologias que venho usando
      </H2>
      <List>
        <li>ReactJS</li>
        <li>JavaScript (ES6)</li>
        <li>Gatsby</li>
        <li>Webpack</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>Styled Components</li>
        <li>SCSS</li>
      </List>
    </div>
  )
}

export default Technologies
