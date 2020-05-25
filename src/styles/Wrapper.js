import styled from 'styled-components'

import Navbar from './Navbar'
import StyledFooter from './StyledFooter'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  ${Navbar} &,
  ${StyledFooter} & {
    display: flex;
    padding: 0 20px;
  }
`

export default Wrapper
