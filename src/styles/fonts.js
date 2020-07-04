import { css } from 'styled-components'

import montserratLight from '../fonts/Montserrat/Montserrat-Light.ttf'
import montserratRegular from '../fonts/Montserrat/Montserrat-Regular.ttf'
import montserratBold from '../fonts/Montserrat/Montserrat-Bold.ttf'
import poppinsBold from '../fonts/Poppins/Poppins-Bold.ttf'

const FontFaces = css`
  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${poppinsBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`

export default FontFaces
