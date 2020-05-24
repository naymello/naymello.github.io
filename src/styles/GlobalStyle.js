import { createGlobalStyle } from 'styled-components'

import FontFaces from './fonts'

const GlobalStyle = createGlobalStyle`
  ${FontFaces}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%;
  }
`

export default GlobalStyle