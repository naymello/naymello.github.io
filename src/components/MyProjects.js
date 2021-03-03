import React, { Component } from 'react'

import Card from '../styles/Card'
import { StandardText, BoldText, H2, H3 } from '../styles/Typography'
import Button from '../styles/Button'
import ProjectsSection from '../styles/ProjectsSection'

import mmpLogo from '../assets/mmpLogo.png'
import mmpCover from '../assets/mmpCover.jpg'
import ccLogo from '../assets/ccLogo.png'
import ccCover from '../assets/ccCover.jpg'

const Project = (props) => {
  return (
    <Card>
      <img
        src={props.cover}
        alt={props.name}
        onClick={() => { window.open(props.website) }}
        style={{ cursor: 'pointer' }}
      />
      <div>
        <img src={props.logo} alt={props.name} />
        <H3>{props.name}</H3>
      </div>
      <StandardText>
        {props.about}
      </StandardText>
      <br />
      <BoldText>
        {props.technologies}
      </BoldText>
      <Button primary fontColor={props.secondaryColor} backgroundColor={props.primaryColor} onClick={() => { window.open(props.website) }}>Ir para o site</Button>
      <Button backgroundColor={props.primaryColor} fontColor={props.primaryColor} onClick={() => { window.open(props.github) }}>GitHub</Button>
    </Card>
  )
}

export default class MyProjects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          id: 0,
          name: 'My Musical Picture',
          about: 'O My Musical Picture é uma aplicação web que faz uma imagem baseada no histórico de músicas ouvidas pelo usuário no Spotify. Foi usado a API do Spotify para pegar os dados, além das bibliotecas FileSaver e DomToImage para gerar a imagem.',
          technologies: 'ReactJS, Gatsby, NodeJS, Express, Spotify Web API, Styled Components',
          website: 'https://my-musical-picture.netlify.app/',
          github: 'https://github.com/naymello/my-musical-picture',
          logo: mmpLogo,
          cover: mmpCover,
          primaryColor: '#2929B1',
          secondaryColor: '#F9FF3E'
        },
        {
          id: 1,
          name: 'Chord Chart',
          about: 'O Chord Chart é uma aplicação web que mostra acordes do piano de forma dinâmica, facilitando o aprendizado no instrumento. Para isso, foi usado a manipulação de SVG (Scalable Vector Graphics) com a biblioteca React SVG Manipulation Tools.',
          technologies: 'ReactJS, Create React App (CRA), Styled Components',
          website: 'https://chord-chart.netlify.app/',
          github: 'https://github.com/naymello/chord-chart',
          logo: ccLogo,
          cover: ccCover,
          primaryColor: '#001724',
          secondaryColor: '#8BC9E5'
        }
      ]
    }
  }

  render() {
    const { projects } = this.state

    return (
      <>
        <H2 color="#FF9FFB" id="projetos">Meus projetos</H2>
        <ProjectsSection>
          {projects.map((project) => (
            <Project
              key={project.id}
              name={project.name}
              about={project.about}
              technologies={project.technologies}
              website={project.website}
              github={project.github}
              logo={project.logo}
              cover={project.cover}
              primaryColor={project.primaryColor}
              secondaryColor={project.secondaryColor}
            />
          ))}
        </ProjectsSection>
      </>
    )
  }
}
