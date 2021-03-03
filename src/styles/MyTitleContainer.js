import styled from 'styled-components'

const MyTitleContainer = styled.section`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10vh 0 10vh;

  @media (min-width: 768px) and (min-height: 880px) {
    height: 60vh;
  }
`

export default MyTitleContainer
