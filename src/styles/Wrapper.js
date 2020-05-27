import styled from 'styled-components'

import Navbar from './Navbar'
import StyledFooter from './StyledFooter'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 10vh auto 0;

  ${Navbar} & {
    display: flex;
    margin: 2.6vh auto 0;
    padding: 0 20px;
  }

  ${StyledFooter} & {
    display: flex;
    margin: 0 auto;
    padding: 0 20px;
  }
`

export default Wrapper
