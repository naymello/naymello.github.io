import styled from 'styled-components'

import Card from './Card'

const Text = styled.p`
  font-size: 1.6rem;
  margin: 0 20px;
  line-height: 135%;

  ${Card} & {
    margin: 20px 0;
  }
`

export default Text
