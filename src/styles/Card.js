import styled from 'styled-components'

const Card = styled.section`
  width: calc(100% - 40px);
  margin: 30px 20px 20px;

  img {
    width: 100%;
    border-radius: 5px;
  }

  div img {
    width: 20%;
  }

  div {
    display: flex;
    margin-top: 10px;
  }
`

export default Card
