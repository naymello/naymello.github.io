import styled from 'styled-components'

const Card = styled.section`
  width: calc(100% - 40px);
  max-width: 768px;
  margin: 30px 20px 20px;
  box-shadow: 5px 10px 25px 0px rgba(0,0,0,0.25);
  border-radius: 10px;

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  div img {
    margin: 20px;
    width: 20%;
    border-radius: 7.5px;
  }

  div {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
  }
`

export default Card
