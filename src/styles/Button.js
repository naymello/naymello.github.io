import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  margin: 20px 0 20px 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border-color: #040404;
  background-color: ${props => props.primary ? '#040404' : '#FFF'};
  color: ${props => props.primary ? '#FFF' : '#040404'};

  :hover {
    transition: .3s;
    background-color: ${props => props.primary ? '#111' : '#EEE'};
    border-color: #111;
  }
`

export default Button
