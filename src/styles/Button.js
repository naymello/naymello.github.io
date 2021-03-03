import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  margin: 20px 0 20px 20px;
  padding: ${props => props.mainButton ? '20px 40px' : '15px 30px'};
  font-size: ${props => props.mainButton ? '1.8rem' : '1.3rem'};
  border-color: ${props => props.backgroundColor};
  border-width: 2px;
  border-style: solid;
  background-color: ${props => props.primary ? props.backgroundColor : '#FFF'};
  color: ${props => props.fontColor};
`

export default Button
