import styled from 'styled-components'

import Card from './Card'

const Button = styled.button`
  font-weight: bold;
  margin: 20px 0 0 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border-color: #040404;
  background-color: ${props => props.primary ? '#040404' : 'white'};
  color: ${props => props.primary ? 'white' : '#040404'};

  ${Card} & {
    margin: 20px 20px 0 0;
  }
`

export default Button
