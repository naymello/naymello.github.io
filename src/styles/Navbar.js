import styled from 'styled-components'

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  background-color: ${props => props.active ? '#F5F5F5' : '#FFF'};
  height: ${props => props.active ? '240px' : '60px'};
  transition: .2s;
  transition-timing-function: ease-in-out;

  @media (min-width: 768px) {
    background-color: #FFF;
    height: 60px;
  }

  /* Hamburger menu */
  img {
    margin-left: auto;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style-type: none;
    height: 150px;
    opacity: ${props => props.active ? '1' : '0'};
    pointer-events: ${props => props.active ? 'all' : 'none'};
    animation: ${props => props.active ? 'fadeIn 1s' : 'none'};
    position: absolute;
    top: 70px;
    left: 20px;

    @media (min-width: 768px) {
      height: 2rem;
      flex-direction: row;
      margin-left: auto;
      width: 60%;
      max-width: 50rem;
      position: static;
      pointer-events: all;
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default Navbar
