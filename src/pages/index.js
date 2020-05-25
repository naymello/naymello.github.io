import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import MyTitle from '../components/MyTitle'
import About from '../components/About'
import Technologies from '../components/Technologies'
import MyProjects from '../components/MyProjects'
import MoreInfo from '../components/MoreInfo'
import Footer from '../components/Footer'

import GlobalStyle from '../styles/GlobalStyle'
import Wrapper from '../styles/Wrapper'

const IndexPage = () => (
  <>
    <SEO title="Nay Mello" />
    <GlobalStyle />
    <Navigation />
    <Wrapper>
      <MyTitle />
      <About />
      <Technologies />
      <MyProjects />
      <MoreInfo />
    </Wrapper>
    <Footer />
  </>
)

export default IndexPage
