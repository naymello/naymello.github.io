import React from "react"

import SEO from "../components/SEO"
import Navigation from '../components/Navigation'
import MyTitle from '../components/MyTitle'
import About from '../components/About'
import Technologies from '../components/Technologies'
import MyProjects from '../components/MyProjects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import GlobalStyle from '../styles/GlobalStyle'

const IndexPage = () => (
  <>
    <SEO title="Nay Mello" />
    <GlobalStyle />
    <Navigation />
    <MyTitle />
    <About />
    <Technologies />
    <MyProjects />
    <Resume />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
