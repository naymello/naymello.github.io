import React, { Component } from 'react'

import { H2, H3 } from '../styles/Headers'
import Card from '../styles/Card'
import Text from '../styles/Text'
import Button from '../styles/Button'
import ProjectsSection from '../styles/ProjectsSection'

import mmpLogo from '../assets/mmpLogo.png'
import mmpCover from '../assets/mmpCover.jpg'
import ccLogo from '../assets/ccLogo.png'
import ccCover from '../assets/ccCover.jpg'

const Project = (props) => {
  return (
    <Card>
      <img src={props.cover} alt={props.name}/>
      <div>
        <img src={props.logo} alt={props.name}/>
        <H3>{props.name}</H3>
      </div>
      <Text>
        {props.about}
      </Text>
      <br />
      <Text style={{fontWeight: 'bold'}}>
        {props.technologies}
      </Text>
      <Button primary onClick={() => { window.open(props.website) }}>Ir para o site</Button>   
      <Button onClick={() => { window.open(props.github) }}>GitHub</Button>
    </Card>
  )
}

export default class MyProjects extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      projects: [
        {
          name: 'My Musical Picture',
          about: 'O My Musical Picture é uma aplicação web que faz uma imagem baseada no histórico de músicas ouvidas pelo usuário no Spotify. Para pegar os dados, usei a Spotify Web API, fazendo requisições através do NodeJS. Também foi usado JavaScript assíncrono na organização e no display dos dados.',
          technologies: 'JavaScript, SASS, NodeJS, Express, Spotify Web API',
          website: 'https://my-musical-picture.netlify.app/',
          github: 'https://github.com/naymello/my-musical-picture',
          logo: mmpLogo,
          cover: mmpCover
        },
        {
          name: 'Chord Chart',
          about: 'O Chord Chart é uma aplicação web que mostra acordes do piano de forma dinâmica, facilitando o aprendizado no instrumento. Para isso, foi usado a manipulação de SVG (Scalable Vector Graphics) com a biblioteca React SVG Manipulation Tools.',
          technologies: 'ReactJS, Create React App (CRA), Styled Components',
          website: 'https://chord-chart.netlify.app/',
          github: 'https://github.com/naymello/chord-chart',
          logo: ccLogo,
          cover: ccCover
        }
      ]
    }
  }
  
  render() {
    const { projects } = this.state

    return (
      <>
        <H2>Meus projetos</H2>
        <ProjectsSection>
          {projects.map((project) => (
            <Project 
              name={project.name}
              about={project.about}
              technologies={project.technologies}
              website={project.website}
              github={project.github}
              logo={project.logo}
              cover={project.cover}
            />
          ))}
        </ProjectsSection>
      </>
    )
  }
}

