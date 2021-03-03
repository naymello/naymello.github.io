import styled from 'styled-components'

import Card from './Card'

export const StandardText = styled.p`
  font-size: 1.6rem;
  margin: 0 20px;
  line-height: 140%;
`

export const BoldText = styled.p`
  font-size: 1.6rem;
  margin: 0 20px;
  line-height: 135%;
  font-weight: bold;
`

export const StyledName = styled.h1`
  position: relative;
  font-size: 3.6rem;
  font-family: 'Poppins';
  margin: 0 20px 0;

  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 20rem;
    height: 5rem;
    background-color: #44DDFF;
    transform: rotate(-5deg);
    z-index: -1;
    margin: -5.4rem 0 15px;
  }

  @media (min-width: 768px) {
    font-size: 5rem;

    ::after {
      width: 27.5rem;
    }
  }
`

export const Description = styled.p`
  font-size: 1.6rem;
  margin: 0 20px;
  line-height: 160%;

  @media (min-width: 768px) {
    width: 768px;
  }
`

export const Introduction = styled.p`
  font-size: 1.4rem;
  font-family: 'Poppins';
  margin: 0 20px;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`

export const H1 = styled.h1`
  font-size: 3.6rem;
  font-family: 'Poppins';
  margin: 0 20px 0;
  line-height: 120%;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`

export const H2 = styled.h2`
  font-size: 2rem;
  font-family: 'Poppins';
  margin: 70px 20px 10px;

  ::after {
    content: '';
    display: block;
    width: 10rem;
    height: 1rem;
    background-color: ${props => props.color};
    margin: -12.5px 0 15px;
  }
`

export const H3 = styled.h3`
  font-size: 1.7rem;
  font-family: 'Poppins';
  margin: 40px 20px 10px;

  ${Card} & {
    margin: 20px 10px;
  }
`

export const H4 = styled.h4`
  font-size: 1.4rem;
  font-family: 'Poppins';
  margin: 0 20px;
`
