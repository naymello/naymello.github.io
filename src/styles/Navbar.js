import styled from 'styled-components'

const Navbar = styled.nav`
  background-color: #FFF;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: ${props => props.active ? 'column' : 'row'};
  height: ${props => props.active ? '33vh' : '7.5vh'};
  transition-timing-function: ease-in-out;

  ul {
    margin-left: auto;
    list-style-type: none;
    display: ${props => props.active ? 'block' : 'none'};
    position: ${props => props.active ? 'absolute' : 'static'};

    /* Will only work when absolute position is set */
    top: 8vh;
    left: 5px;

    @media (min-width: 768px) {
      display: block;
      margin-top: 0;
    }

    li {
      float: ${props => props.active ? 'none' : 'left'};
      margin: ${props => props.active ? '15px 15px' : '0 15px'};
    }
  }

  /* Hamburger menu */
  img {
    margin-left: auto;

    @media (min-width: 768px) {
      display: none;
    }
  }
`

export default Navbar
