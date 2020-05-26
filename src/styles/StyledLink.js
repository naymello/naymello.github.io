import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const StyledLink = styled(props => <Link {...props} />)`
  font-family: 'Poppins';
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #040404;
  text-decoration: none;

  :hover {
    transition: .3s;
    color: #111;
  }
`

export default StyledLink