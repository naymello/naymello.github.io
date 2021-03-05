import React, { useRef } from 'react'

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

import { useIntersection } from 'react-use'
import gsap from 'gsap'

const IndexPage = () => {
  const aboutIntersectionRef = useRef(null)
  const technologiesIntersectionRef = useRef(null)
  const projectsIntersectionRef = useRef(null)
  const infoIntersectionRef = useRef(null)

  const aboutIntersection = useIntersection(aboutIntersectionRef, { threshold: 0.2 })
  const technologiesIntersection = useIntersection(technologiesIntersectionRef, { threshold: 0.2 })
  const projectsIntersection = useIntersection(projectsIntersectionRef, { threshold: 0.01 })
  const infoIntersection = useIntersection(infoIntersectionRef, { threshold: 0.5 })

  const fadeIn = element => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      duration: 1
    })
  }

  if (aboutIntersection && aboutIntersection.isIntersecting) fadeIn(aboutIntersectionRef.current)
  if (technologiesIntersection && technologiesIntersection.isIntersecting) fadeIn(technologiesIntersectionRef.current)
  if (projectsIntersection && projectsIntersection.isIntersecting) fadeIn(projectsIntersectionRef.current)
  if (infoIntersection && infoIntersection.isIntersecting) fadeIn(infoIntersectionRef.current)

  return (
    <>
      <SEO title="Nay Mello" />
      <GlobalStyle />
      <Navigation />
      <Wrapper>
        <MyTitle />
        <About reference={aboutIntersectionRef} />
        <Technologies reference={technologiesIntersectionRef} />
        <MyProjects reference={projectsIntersectionRef} />
        <MoreInfo reference={infoIntersectionRef} />
      </Wrapper>
      <Footer />
    </>
  )
}
export default IndexPage
