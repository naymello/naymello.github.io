import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  margin: 20px 0 20px 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border-color: #040404;
  background-color: ${props => props.primary ? '#040404' : 'white'};
  color: ${props => props.primary ? 'white' : '#040404'};

  :hover {
    transition: .3s;
    background-color: ${props => props.primary ? '#111' : '#EEE'}
  }
`

export default Button
