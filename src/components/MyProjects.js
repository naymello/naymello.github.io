import React, { Component } from 'react'

import { H2, H3 } from '../styles/Headers'
import Card from '../styles/Card'
import Text from '../styles/Text'
import Button from '../styles/Button'

import mmpLogo from '../assets/mmpLogo.png'
import mmpCover from '../assets/mmpCover.png'
import ccLogo from '../assets/ccLogo.png'
import ccCover from '../assets/ccCover.png'

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
      <Text>
        {props.technologies}
      </Text>
      <Button primary>Ir para o site</Button>   
      <Button>GitHub</Button>
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
          logo: mmpLogo,
          cover: mmpCover
        },
        {
          name: 'Chord Chart',
          about: 'O Chord Chart é uma aplicação web que mostra acordes do piano de forma dinâmica, facilitando o aprendizado no instrumento. Para isso, foi usado a manipulação de SVG (Scalable Vector Graphics) com a biblioteca React SVG Manipulation Tools.',
          technologies: 'ReactJS, Create React App (CRA), Styled Components',
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
        {projects.map((project) => (
          <Project 
            name={project.name}
            about={project.about}
            technologies={project.technologies}
            logo={project.logo}
            cover={project.cover}
          />
        ))}
      </>
    )
  }
}

